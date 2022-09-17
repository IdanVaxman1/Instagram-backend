import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from './auth.model.js'

export const signin = async (req, res) => {

    const { email, password } = req.body

    try {

        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1hr' })

        // console.log(token);
        
        res.status(200).json({ result: existingUser , token })

    } catch (error) {
        console.log( error);
    }

}

export const signup = async (req, res) => {

    const { email, fullName, password } = req.body

    try {

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(404).json({ message: "User already exist." })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email: email, fullName: fullName, password: hashedPassword })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1hr' })

        console.log(result, token);

        res.status(200).json(result, token)

    } catch (error) {

        console.log(error);

    }


}