const router = require('express').Router()
const FanController = require('../controllers/FansController')

router.get('/register', FanController.registerForm)
// router.get('/home')

router.get('/login', FanController.loginPage)

router.post("/register", FanController.register)

module.exports = router