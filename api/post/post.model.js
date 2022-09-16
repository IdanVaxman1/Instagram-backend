import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    txt : String,
    by: {
        fullname: String,
        imgUrl: String,
    },
    selectedImg: String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt: {
        type : Date,
        default: new Date()
    }
})

const postMessage = mongoose.model('PostMessage' , postSchema)
export default postMessage
