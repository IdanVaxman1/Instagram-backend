import express from 'express'

import { signin, signup, updateUser, getUser, getUserPosts , following } from './auth.controller.js'

import auth from '../middlewere/auth.js'


const router = express.Router()


router.post('/signin', signin)
router.post('/signup', signup)
router.patch('/setting/:id', auth, updateUser)
router.patch('/following/:id', auth, following)
router.get('/user/:id', auth, getUser)
router.get('/userPost/:id', auth, getUserPosts)


export default router
