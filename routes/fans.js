const router = require('express').Router()
const FanController = require('../controllers/FansController')

router.get('/register', FanController.registerForm)



module.exports = router