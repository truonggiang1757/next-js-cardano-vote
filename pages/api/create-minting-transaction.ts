import { AppWallet, KoiosProvider, ForgeScript, AssetMetadata, Mint, largestFirst, Transaction } from "@meshsdk/core";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const recipientAddress = req.body.recipientAddress;
    const utxos = req.body.utxos;

    const koiosProvider = new KoiosProvider('prepod');

    const appWallet = new AppWallet({
        networkId: 0,
        fetcher: koiosProvider,
        submitter: koiosProvider,
        key: {
            type: "mnemonic",
            words: [
                "metal",
                "creek",
                "hospital",
                "afford",
                "achieve",
                "solar",
                "oyster",
                "shoot",
                "spirit",
                "castle",
                "payment",
                "coyote",
                "uncle",
                "imitate",
                "enjoy",
                "range",
                "arrow",
                "rotate",
                "table",
                "select",
                "online",
                "whisper",
                "dutch",
                "fire"
              ]
        },
    });

    const appWalletAddress = appWallet.getPaymentAddress();
    const forgingScript = ForgeScript.withOneSignature(appWalletAddress);

    const assetName = 'CVoting';

    const assetMetadata: AssetMetadata = {
    name: 'CVoting',
    image: 'https://meshjs.dev/logo-mesh/mesh.png',
    mediaType: 'image/png',
    description: 'This Token is minted as test.',
    project: 'Project test'
    };

    const asset: Mint = {
        assetName: assetName,
        assetQuantity: '1',
        metadata: assetMetadata,
        label: '721',
        recipient: recipientAddress,
    };

    const costLovelace = '1000000';
    const selectedUtxos = largestFirst(costLovelace, utxos, true);
    const bankWalletAddress = 'addr_test1qzglfnkgvqel7wnaqg7cjsn3tglay5vrh4hj9gjx47jtzs07a0jurla707xf0e540zcvm8vc2fedj5zajvcvdmdyja2qjm06tq';

    const tx = new Transaction({ initiator: appWallet });
    tx.setTxInputs(selectedUtxos);
    tx.mintAsset(forgingScript, asset);
    tx.sendLovelace(bankWalletAddress, costLovelace);
    tx.setChangeAddress(recipientAddress);
    const _unsignedTx = await tx.build();
    const unsignedTx = await appWallet.signTx(_unsignedTx, true);

    res.status(200).json({ unsignedTx: unsignedTx });
}