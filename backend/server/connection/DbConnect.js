const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Blog")
mongoose.connection.once('open', ()=>{
    console.log("Database Connected")
}).on('error', (error)=>{
    console.log('not connected', error)
})