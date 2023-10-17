const PostModel = require('../model/Post')
const CommentModel = require('../model/Comment')
const AutherModel = require('../model/Author')
const {hashPassword, comparePassword} = require('./passwordHash')
const jwt = require('jsonwebtoken')
const secret = require('../config')

// Post Routes 
// ___/createblog/___
const createPost = async (req, res)=>{
    const {title, content, image, category, author, topstory} = await req.body
    
    await PostModel.create({
       title,
       content,
       image,
       category,
       topstory
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
    const news = await PostModel.find({"category.name":"news"})
    res.json(news)
}

// Get Routes 
// ___/news/:specific/___

const newsSpecific = async (req, res) => {
    const {specific} = req.params
    const news = await PostModel.find({"category.specific":specific})
    res.json(news)
}

// Get Routes 
// ___/sports/___

const sports = async (req, res) => {
    const sports = await PostModel.find({"category.name":"sports"})
    res.json(sports)
}

// Get Routes 
// ___/sports/:specific/___

const sportsSpecific = async (req, res) => {
    const {specific} = req.params
    const sport = await PostModel.find({"category.specific":specific})
    res.json(sport)
}

// Get Routes 
// ___/entertainment/___
const entertainment =  async (req, res) => {
    const entertainment = await PostModel.find({"category.name":"entertainment"})
    res.json(entertainment)
}

// Get Routes 
// ___/entertainment/:specific/___

const entertainmentSpecific = async (req, res) => {
    const {specific} = req.params
    const entertainment = await PostModel.find({"category.specific":specific})
    res.json(entertainment)
}

// Get Routes 
// ___/business/___
const business = async (req, res) => {
    const business = await PostModel.find({"category.name":"business"})
    res.json(business)
}

// Get Routes 
// ___/business:specific/___
const businessSpecific = async (req, res) => {
    const {specific} = req.params
    const business = await PostModel.find({"category.specific":specific})
    res.json(business)
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
    authorLogin
}