import connect from "../../../lib/mongodb"
import User from "../../../model/User"

const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

connect()

export default async function handler(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ success: false, message:'No user found' })
    }
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ success: false, message: 'Incorrect username' })

        const passwordValid = await argon2.verify(user.password, password)
        if(!passwordValid) return res.status(400).json({ success: false, message: "Incorrect password"})

        const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET)
        // res.json({success: true, message: "Signed in successfully.", accessToken})
        res.redirect(307, '/')
        console.log({user, accessToken})
        return {user, accessToken}
    }
    catch (error) {
        console.log(error)
    }
}