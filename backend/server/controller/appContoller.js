const PostModel = require('../model/Post')
const CommentModel = require('../model/Comment')
const AutherModel = require('../model/Author')
const {hashPassword, comparePassword} = require('./passwordHash')
const jwt = require('jsonwebtoken')
const secret = require('../config')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'public/image')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
    
})

const upload = multer({storage:storage})

// Post Routes 
// ___/createblog/___

const createPost = async (req, res)=>{
     const {title,content, author, category, type, popular } = await req.body
    console.log(req.file)
     const newTitle = title.split(' ').join('-')
     image = req.file.filename
     //console.log(image)
     await PostModel.create({
        title: newTitle,
        content,
        image,
        category,
        popular,
        type
     }).then((post) =>{
        AutherModel.findOne({username:author}).then((data) =>{
            post.author = data._id
            return post.save()
        }).then(()=>{
            res.status(201).send({ms: "Post Created"})
        })
     }).catch(err =>{
        res.status(501).send(err)
     })
   }

// Post Routes 
// ___/createcomment/___
const createcomment = (req, res)=>{
    const {title, content, postId} = req.body
    const newComment = new CommentModel({
        title: title,
        content:content,
    })

    newComment.save()
    .then((data) => {
        PostModel.findOne({_id:postId})
        .then(post => {
            post.comment.push(data._id)
            return post.save()
        }).then(()=>{
            res.status(201).send('comment created')
        })
    }).catch(err =>{
        res.status(501).send(err)
    }) 
}

// Post Routes 
// ___/createauthor/___
const createAuthor = (req, res)=>{
    const {firstname, lastname, username, password, email } = req.body
    const passHash = hashPassword(password)
    console.log(passHash)
    AutherModel.findOne({username})
    .then(author => {
        if(author){
            res.status(409).send({ms: 'Author already exist'})
        }else{
            const newAuthor = AutherModel.create({
                firstname,
                lastname, 
                username,
                password: passHash, 
                email
            })
            res.status(201).send({ms: 'Auther Created'})
        } 
    })
    .catch(err => {
        res.status(501).json({ms: "Author can't be created"})
    })
}

// Post Routes 
// ___/authorlogin/___
const authorLogin = async (req, res)=>{
    const {email, password} = req.body
    const author = await AutherModel.findOne({email})
    if(author){
            const passMatch = comparePassword(password, author.password)
            if(passMatch){
                const token = jwt.sign({
                    username:author.username,
                    id: author._id
                }, secret.JWT_secret, {expiresIn:"24h"})
            res.status(200).json({ms:'Login successful', token})
            } else{ 
                res.status(401).send({ms: "Password or Email is incorrect"})
            }
    } else{
        res.status(501).send({ms: "Login error"}) 
    }
}

// Get Routes 
// ___//___


// Get Routes 
// ___/news/___

const news = async (req, res) => {
    const news = await PostModel.find({category:"news"})
    res.json(news)
}

// Get Routes 
// ___/news/:storytypes/___

const newsSpecific = async (req, res) => {
    const {storytypes} = req.params
    const news = await PostModel.find({"category.storytypes":storytypes})
    res.json(news)
}

// Get Routes 
// ___/sports/___

const sports = async (req, res) => {
    const sports = await PostModel.find({category:"sports"})
    res.json(sports)
}

// Get Routes 
// ___/sports/:storytypes/___

const sportsSpecific = async (req, res) => {
    const {storytypes} = req.params
    const sport = await PostModel.find({"category.storytypes":storytypes})
    res.json(sport)
}

// Get Routes 
// ___/entertainment/___
const entertainment =  async (req, res) => {
    const entertainment = await PostModel.find({category:"entertainment"})
    res.json(entertainment)
}

// Get Routes 
// ___/entertainment/:storytypes/___

const entertainmentSpecific = async (req, res) => {
    const {storytypes} = req.params
    const entertainment = await PostModel.find({"category.storytypes":storytypes})
    res.json(entertainment)
}

// Get Routes 
// ___/business/___
const business = async (req, res) => {
    const business = await PostModel.find({category:"business"})
    res.json(business)
}


// Get Routes 
// ___/business:storytypes/___
const businessSpecific = async (req, res) => {
    const {storytypes} = req.params
    const business = await PostModel.find({"category.storytypes":storytypes})
    res.json(business)
}

// Get Routes 
// ___/singledata/:category/:title/___
const singledata = async (req, res) => {
    const {category, title} = req.params
    await PostModel.find({category:category})
        .then((response)=>{
           const data = response.filter(data => data.title === title)
           return res.json({title: data[0].title, image:data[0].image,
             content:data[0].content, id: data[0]._id, comment:data[0].comment})
        })
        .catch(err => res.status(501).json(err.message))
}

// Get Routes 
// ___/recentpost/___
const recentPost = async (req, res)=>{
    try {
        const recentPost = await PostModel.find({}).populate('author').sort({publishdate: -1}).limit(10)
        res.json(recentPost)
    } catch (error) {
        res.status(403).send("request not found")
    }
}

const popular = async(req, res)=>{
    try {
        const popularData = await PostModel.find({popular: true}).sort().limit(20)
        res.json(popularData)
    } catch (error) {
        res.status(403).send("request not found")
    }
}

// Get Routes 
// ___/category/:storytype/:stories/___
const storyType = async (req, res)=>{
    try {
        const{storytype, stories} = req.params

        await PostModel.find({category:storytype}).then((data)=>{
            const storiesData = data.filter(story=>{
                return story.category[0].mainstory === stories
            })
            console.log(storyType)
            return res.json(storiesData)
        })
    } catch (error) {
        res.status(403).send("request not found")
    }
}

module.exports = {
    createPost, 
    createcomment,
    createAuthor, 
    news, 
    newsSpecific,
    sports,
    sportsSpecific,
    entertainment,
    entertainmentSpecific, 
    business,
    businessSpecific, 
    recentPost,
    authorLogin,
    singledata,
    storyType,
    popular,
    upload
}