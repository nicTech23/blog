const express = require('express')
const app = express()
const morgan = require('morgan')
const route = require('./router/Router')
require('./connection/DbConnect')
const Author = require('./model/Author')
const Comment = require('./model/Comment')
const Category = require('./model/Category')
const Post = require('./model/Post')
const cors = require('cors'); // Import the cors package


// Use the cors middleware to enable CORS for all routes



app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))
app.use(cors({origin: 'http://localhost:3000',}));
app.disable("x-powered-by")
app.use('/api/v1', route)
app.use(express.static('public'))

const port = 8080

app.listen(port, ()=>{
    console.log("I am listen to port  8000")
}) 