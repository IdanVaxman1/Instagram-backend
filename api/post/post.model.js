import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    txt : String,
    by: {
        fullname: String,
        imgUrl: String,
    },
    selectedImg: String,
    likeCound : {
        type : String,
        default : 0
    },
    createdAt: {
        type : Date,
        default: new Date()
    }
})

const postMessage = mongoose.model('PostMessage' , postSchema)
export default postMessage
