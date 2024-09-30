const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yashsp86:ZQ07TuEAWqtR2gUz@cluster0.co3fm.mongodb.net/Blog')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log("server running failed..." , err);
    
  })

module.exports = mongoose;