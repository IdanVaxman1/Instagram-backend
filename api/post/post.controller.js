
import mongoose from "mongoose";
import PostMessage from "./post.model.js";
import User from '../auth/auth.model.js'

export async function getPosts(req, res) {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        console.log(error);
    }
}

export async function getPostsByIds(req, res) {

    const { id } = req.params

    const user = await User.findById(id)

    try {

        const savedPosts = await PostMessage.find().where('_id').in(user.SavedPosts).exec();

        console.log(savedPosts);
        if(savedPosts) res.status(200).json(savedPosts)

    } catch (error) {
        console.log(error);
    }

}


export async function getPost(req, res) {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    try {
        const post = await PostMessage.findById(id)
        res.status(200).json(post)
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    await PostMessage.findByIdAndRemove(id)
    res.json('Post deleted successfully')

}

export const updatePost = async (req, res) => {

    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)

}


export const likePost = async (req, res) => {

    const { id } = req.params

    if (!req.userId) return res.json({ message: 'Unauthenticated' })

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const post = await PostMessage.findById(id)

    const index = post.likes.findIndex((id) => id === String(req.userId))

    if (index === -1) post.likes.push(req.userId)
    else post.likes.filter((id) => id !== String(req.userId))

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

    res.json(updatedPost)
}

export const commentPost = async (req, res) => {

    const { id } = req.params
    const { commentData } = req.body

    console.log(id);

    const post = await PostMessage.findById(id)

    post.comments.push(commentData)

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

    console.log(updatedPost);
    res.json(updatedPost)


}