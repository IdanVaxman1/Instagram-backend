
import PostMessage from "./post.model.js";

export async function getPosts(req, res) {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        console.log(error);
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
        console.log(newPost);

    } catch (error) {
        console.log(error);
    }
}

