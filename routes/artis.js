const router = require('express').Router()
const ArtistController = require('../controllers/ArtistController')

router.get('/register', ArtistController.register)

module.exports = router