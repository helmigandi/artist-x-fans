const express = require('express')
const multer = require('multer')
const session = require('express-session')
const path = require('path')
const router = require('./routes/index')

const app = express()
const port = 3000



app.set('view engine', 'ejs')

app.use(session({
    secret: 'hektiprmt07',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => {
    console.log('listening on port ', port);
})