import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";


import User from './auth.model.js'

import PostMessage from '../post/post.model.js';

export const signin = async (req, res) => {

    const { email, password } = req.body

    try {

        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '24hr' })

        // console.log(token);

        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        console.log(error);
    }

}

export const signup = async (req, res) => {

    const { email, fullName, password } = req.body

    try {

        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(404).json({ message: "User already exist." })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email: email, fullName: fullName, password: hashedPassword })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '24hr' })

        console.log(result, token);

        res.status(200).json(result, token)

    } catch (error) {

        console.log(error);

    }


}

export const getUser = async (req, res) => {

    const { id: _id } = req.params

    try {

        const user = await User.findById(_id)
        res.status(200).json(user)

    } catch (error) {
        console.log(error);
    }


}

export const updateUser = async (req, res) => {

    const { id: _id } = req.params
    const user = req.body
    const token = req.headers.authorization.split(" ")[1]


    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id }, { new: true })
    console.log(updatedUser);

    res.status(200).json({ result: updatedUser, token })

}

export const getUserPosts  = async (req, res) => {

    const { id: _id } = req.params

    try {
        const posts = await PostMessage.find({creator : _id})
        console.log(posts);
        res.status(200).json(posts)

    } catch (error) {
        console.log(error);
    }


}