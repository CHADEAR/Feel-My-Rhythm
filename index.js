const express = require('express')
const app = express()
const ejs = require('ejs')
const expressSession = require('express-session')
const flash = require('connect-flash')

//Controllers
const registerController = require('./controlles/registerController')
const loginController = require('./controlles/loginController')
const homeController = require('./controlles/homeController')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))

app.set('view engine', 'ejs')

app.get('/', registerController)
app.get('/register', registerController)
app.get('/login', loginController)
app.get('/home', homeController)
app.get('/about', (_req,res) => {
    res.render('aboutUs');
  });

app.post('/about', (_req,res) => {
    res.redirect('/');
});
  
// app.get('/about', aboutController)
app.listen(4000, () =>{
    console.log("App listening on port 4000")
})