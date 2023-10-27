const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: String,
    storytypes:[String],
    mainstory:String
})

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
    category:{
        type: [categorySchema]
    },
    topstory:{
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



