// const router = require('./api/post/post.routes.js')
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './api/post/post.routes.js'
// import {story} from './api/post/instush.js'

const app = express()
const PORT = process.env.PORT || 3030
const CONNECTION_URL = 'mongodb+srv://idanvaxman:654753951@cluster0.aroqnhq.mongodb.net/?retryWrites=true&w=majority'

app.use(cors())

app.use('/', postRoutes)

// app.get('/feed', (req, res) => {
//     res.json(story)
// })


// app.get('/work', (req, res) => {
    //     res.json('www111')
    // })
    
    
    
    mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, console.log('Server work!')))
    .catch((err) => console.log(err))
    
    







