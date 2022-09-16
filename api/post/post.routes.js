import express from 'express'
import { getPosts , getPost , createPost , deletePost , updatePost , likePost } from './post.controller.js'
const router = express.Router()
 

router.get('/feed' , getPosts)
router.get('/feed/:id' , getPost)
router.post('/add' , createPost)
router.delete('/:id' , deletePost)
router.patch('/:id' , updatePost)
router.patch('/:id/likepost' , likePost)


export default router
