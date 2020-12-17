const router = require('express').Router()
const artist = require('./artis')
const fans = require('./fans')
const Controller = require('../controllers/Controller')

router.get('/', Controller.indexPage)



router.use('/artist', artist)
router.use('/fans', fans)


module.exports = router