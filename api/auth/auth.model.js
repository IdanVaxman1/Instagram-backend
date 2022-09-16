import mongoose from 'mongoose'



const userSchema = mongoose.Schema({

    email: { type: String, require: true },
    fullName: { type: String, require: true },
    password: { type: String, require: true },
    id: { type: String },
    userImg: { type: String, default: 'https://img.icons8.com/office/344/circled-user-male-skin-type-6.png' },
    userBio: { type: String, default: '' }

})


export default mongoose.model('User', userSchema)