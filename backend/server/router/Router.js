const {Router} = require('express')
const route  = Router();
const AutherModel = require('../model/Author')
const CommentModel = require('../model/Comment')
const PostModel = require('../model/Post')
const CategoryModel = require('../model/Category')
const {
    createPost, 
    createcomment,
    createAuthor,
    news, 
    newsSpecific,
    sports,
    sportsSpecific,
    entertainment,
    entertainmentSpecific,
    businessSpecific,
    business,
    recentPost
} = require('../controller/appContoller')

//post 
route.post('/createblog/', createPost)

route.post('/createcomment/', createcomment)

route.post('/creatauthor/', createAuthor )

/**********************************************
route.post('/createcategory/:postId', (req, res)=>{
    const {name}= req.body
    const {postId} = req.params

    CategoryModel.create({name}).then(category =>{
        PostModel.findOne({_id:postId}).then(post =>{
            post.category.push(category)
            return post.save()
        }).then(()=> res.send(201).send("Category added"))
    }).catch(err => {
        res.status(501).send("category cannot added", err)
    })
})
************************************************/

// get
route.get('/news/', news )

route.get('/news/:specific', newsSpecific)



route.get('/sports/', sports)

route.get('/sports/:specific', sportsSpecific)

route.get('/entertainment/', entertainment)

route.get('/entertainment/:specific',  entertainmentSpecific)

route.get('/business/', business)

route.get('/business/:specific', businessSpecific)

route.get('/recentpost/', recentPost )


module.exports = route