const router = require('express').Router()
const ArtistController = require('../controllers/ArtistController')
const PostController = require('../controllers/PostController')

router.get('/register', ArtistController.registerForm)
router.post('/register', ArtistController.register)

router.get('/login', ArtistController.loginPage)

router.get('/:id/post', PostController.newPostForm)
router.post('/:id/post', PostController.newPost)

module.exports = router