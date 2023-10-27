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
    recentPost,
    authorLogin,
    singledata
} = require('../controller/appContoller')

//post 
route.post('/createblog/', createPost)

route.post('/createcomment/', createcomment)

route.post('/createauthor/', createAuthor )

route.post('/authorlogin/',  authorLogin)

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

route.get('/news/:storytypes', newsSpecific)


route.get('/postdata/', )

route.get('/sports/', sports)

route.get('/sports/:storytypes', sportsSpecific)

route.get('/entertainment/', entertainment)

route.get('/entertainment/:storytypes',  entertainmentSpecific)

route.get('/business/', business)

route.get('/business/:storytypes', businessSpecific)


route.get('/recentpost/', recentPost )

route.get('/singledata/:category/:title/', singledata )


module.exports = route