import express from 'express'
import { getPosts , createPost } from './post.controller.js'
const router = express.Router()


router.get('/feed' , getPosts)
router.post('/add' , createPost)


// module.exports = router
export default router
