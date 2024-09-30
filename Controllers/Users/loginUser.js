const authModule = require('../../Modules/Authontication')



const userLoginFormController = (req , res) =>{
    res.render('login')
}

const userLogoutController =async (req , res) =>{
  req.logout((err)=>{
    if(err){
      done(err)
    }else{
      res.redirect('/login')
    }
  })
}

module.exports = {userLoginFormController  , userLogoutController}