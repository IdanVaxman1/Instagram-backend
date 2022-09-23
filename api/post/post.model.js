import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    txt: String,
    creator: String,
    name: String,
    selectedImg: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [{
            userImg: String,
            fullName: String,
            txt: String,
            createdAt: {
                type: Date,
                default: new Date()
            }
        }],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postMessage = mongoose.model('PostMessage', postSchema)
export default postMessage
