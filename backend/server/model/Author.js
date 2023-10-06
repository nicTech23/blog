const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: [true, 'username exit'],
    },
    email: {
        type:String,
        required: true,
    },
    createdAt: {
        type:Date,
        default: Date.now
    },
})

const Author = mongoose.model('authors', AuthorSchema)

module.exports = Author