const router = require('express').Router()
const ArtistController = require('../controllers/ArtistController')
const PostController = require('../controllers/PostController')

router.get('/register', ArtistController.registerForm)
router.post('/register', ArtistController.register)

router.get('/login', ArtistController.loginPage)

router.get('/home', PostController.homePageArtist)
// router.post('/home', PostController.newPost)

router.get('/post/delete/:id', )

module.exports = router