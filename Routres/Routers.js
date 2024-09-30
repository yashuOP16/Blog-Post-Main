const express = require('express');
const router = express.Router();
const controller = require('../Controllers/myControllers')
const loginController = require('../Controllers/Users/loginUser')
const registerController = require('../Controllers/Users/registrationUser')
const BlogController = require('../Controllers/blogController')
const upload = require('../Confring/imageUplode')
const passport = require('../Confring/passport_confi')
const isAuth = require('../meddlewere/midlewereAuth')


//Routing area

//Home router
router.get('/',isAuth,controller.defaultController);

//bloging add
router.get('/addForm',isAuth, BlogController.addBlogFormController)
router.post('/addblog',isAuth, upload.single('image'), BlogController.createBlogController)
router.get('/allblog',isAuth, BlogController.getBlogController)
router.get('/myBlogs' ,isAuth,BlogController.myBlogerController)
router.get('/edit/:id',isAuth,BlogController.editBlogController)
router.post('/updateBlogs/:id',isAuth, upload.single('updateimg'),BlogController.updateBlogController)
router.get ('/delete/:id',isAuth, BlogController.deleteBlogController)

//singup page 
router.get('/signup',registerController.userRegFormController)
router.post('/signuppost',registerController.userRegFormPostController)

//login page
router.get('/login',loginController.userLoginFormController)
router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }))
router.get('/logout' ,loginController.userLogoutController)


module.exports = router;
