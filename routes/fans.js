const router = require('express').Router()
const FanController = require('../controllers/FansController')

router.get('/register', FanController.registerForm)

router.post("/register", FanController.register)

module.exports = router