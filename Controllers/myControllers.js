const username = require('../Modules/Authontication')
const blog_Models = require('../Modules/BlogModels')

const defaultController = async (req, res) => {
        const blogs = await blog_Models.find({});
        const bloggers = await username.find({});
    
        res.render('index', { allBlogs: blogs, bloggers: bloggers });

};



module.exports = { defaultController  };
