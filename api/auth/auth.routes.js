import express from 'express'

import { signin, signup , updateUser } from './auth.controller.js'

import auth from '../middlewere/auth.js'


const router = express.Router()


router.post('/signin', signin)
router.post('/signup', signup)
router.patch('/setting/:id', auth, updateUser)


export default router
