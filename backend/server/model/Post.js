const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type:String
    },
    image:{
        type: String
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors' 
    },
    comment:[{type:mongoose.Schema.Types.ObjectId, ref:'comments'}],
    category:String,
    type:String,
    popular:{
        type: Boolean,
        default: false
    },
    publishdate:{
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('blogposts', postSchema)
module.exports = Post



