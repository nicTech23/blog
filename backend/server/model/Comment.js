const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type:String
    }
})

const Comment = mongoose.model('comments', commentSchema)
module.exports = Comment



