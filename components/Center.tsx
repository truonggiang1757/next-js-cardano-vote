// import { KoiosProvider } from "@meshsdk/core";
// import { CardanoWallet, useWallet } from "@meshsdk/react";
// import { createTransaction } from "backend";
// import { useState } from "react";

// export default function Home() {
//   const [txHash, setTxHash] = useState<string | undefined>(undefined);
//   const [success, setSuccess] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const { wallet, connected } = useWallet();

//   async function mintNFT() {
//     setLoading(true);
//     const changeAddress = await wallet.getChangeAddress();
//     console.log("changeAddress", changeAddress);
//     const utxos = await wallet.getUtxos();
//     console.log("utxos", utxos);

//     try{
//       const { unsignedTx } =  await createTransaction(changeAddress, utxos);
//       console.log("unsignedTx", unsignedTx);

//       const signedTx = await wallet.signTx(unsignedTx, true);
//       console.log("singedTx", signedTx);

//       const txHash = await wallet.submitTx(signedTx);
//       console.log("txHash", txHash);
//       setTxHash(txHash);
//       setLoading(false);
      
//       const koiosProvider = new KoiosProvider('prepod');

//       koiosProvider.onTxConfirmed(txHash, () => {
//         console.log('Transaction confirmed');
//         setSuccess(true);
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
//       <div style = {{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
//         <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//           {txHash && (
//             <>
//               <p>
//                 <b>Tx Hash:</b>
//                 <br />
//                 {txHash}
//               </p>
//               {success ? (
//                 <p>Transaction confirmed</p>
//               ) : (
//                 <p>Waiting confirmation...</p>
//               )}
//             </>
//           )}
//           { 
//             !connected && <CardanoWallet />
//           }

//           {
//             connected && <button style={{ fontSize: "36px", margin: "16px", padding: "0px", backgroundColor: loading ? "orange" : "grey" }} disabled={loading} onClick = {() => mintNFT()}>Mint my token</button>
//           }
//         </div> 
//       </div>
//     </>
//   );
// }

const Center = () => {
    return (
        <div>Center</div>
    )
}

export default Center