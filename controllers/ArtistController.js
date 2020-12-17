const { Artist } = require('../models')

class ArtistController {
    static registerForm(req, res) {
        // res.send('ini halaman regis artis')
        res.render("registerArtist")
    }

    static register(req, res) {
        let obj = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            gender: req.body.gender,
            birth_date: req.body.birth_date
        }

        Artist.create(obj)
        .then(data => {
            res.render('', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static loginPage(req, res) {
        
    }
}

module.exports = ArtistController