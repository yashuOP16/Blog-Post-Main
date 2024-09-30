const express = require('express');
const app = express();
const env = require('dotenv');
env.config()
const PORT = process.env.PORT
const path = require('path');
const myPath = path.join(__dirname , "/Views"); 
const bodyParser = require('body-parser');
const passportConfri = require('./Confring/passport_confi')
const Router = require('./Routres/Routers');
const dataBase = require('./Confring/dataBase');
const cookie_parser = require('cookie-parser');
const multer = require('./Confring/imageUplode');
const express_session = require('express-session'); 


app.set('view engine','ejs')
app.set('views',myPath)

/*passport js module (middleWere)*/
app.use(express_session({ secret: 'myfile', resave: true, saveUninitialized: true }));
app.use(passportConfri.initialize());
app.use(passportConfri.session());
/*passport js module */
app.use(express.static(myPath))
app.use('/uplodeFile' , express.static(path.join(__dirname , 'uplodeFile')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookie_parser())
app.use('/',Router)

app.listen(PORT , (err)=>{
    if(!err){
        console.log(`Server is running on port http://localhost:${PORT}`)
    }
})