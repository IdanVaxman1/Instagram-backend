import express from 'express'
import { getPosts, getPost, createPost, deletePost, updatePost, likePost, commentPost , getPostsByIds } from './post.controller.js'

import auth from '../middlewere/auth.js'

const router = express.Router()


router.get('/feed', getPosts)
router.get('/savedpost/:id', getPostsByIds)
router.get('/feed/:id', getPost)
router.post('/add', auth, createPost)
router.delete('/:id', auth, deletePost)
router.patch('/:id', auth, updatePost)
router.patch('/:id/likepost', auth, likePost)
router.post('/:id/commentpost', auth, commentPost)


export default router
