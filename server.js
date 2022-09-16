import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './api/post/post.routes.js'
import authRoutes from './api/auth/auth.routes.js'

const app = express()
const PORT = process.env.PORT || 3030
const CONNECTION_URL = 'mongodb+srv://idanvaxman:654753951@cluster0.aroqnhq.mongodb.net/?retryWrites=true&w=majority'

app.use(cors())

// The requests' body will be converted to JSON.
app.use(express.json());
// URLS Escape special characters and spaces.
app.use(express.urlencoded({ extended: true }));

app.use('/', postRoutes)
app.use('/', authRoutes)




mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, console.log('Server work!')))
    .catch((err) => console.log(err))









