import Ballot from "../../model/Ballot"
const verifyToken = require ('../middleware/auth')

export default async function handler(req, res) {
    const {title, description, url, status} = req.body

    if(!title)
    return res.status(400).json({success: false, message: "Title is needed"})

    try {
        const newPost = new Ballot({title, description, url:(url.startsWith('https://')) ? url : `https://${url}`, status: status || 1, user:'63e99b68a8dd48f8ebc18599'})
        await newPost.save()

        res.json({success: true, message: 'Done.'})
    }
    catch(error) {

    }
}