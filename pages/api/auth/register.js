import connect from "../../../lib/mongodb"
import User from "../../../model/User"

const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

connect()

export default async function handler(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({success: false, message: 'Missing email or password'})
    }
    else {
        try {
            const checkUser = await User.findOne({ email })
            if(checkUser) return res.status(400).json({success: false, message: 'Email taken'})
    
            const hashedPassword = await argon2.hash(password)
            const newUser = new User({email, password: hashedPassword})
    
            await newUser.save()
            const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
            // return res.json({success: true, message: "User created successfully.", accessToken})
            res.redirect(307, '/')
            return accessToken
        }
        catch (error) {
            console.log(error)
        }
    }
}