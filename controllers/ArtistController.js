const { Artist } = require('../models')
const { decrypt } = require('../helpers/passHash')

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
        // console.log(obj);
        Artist.create(obj)
        .then(_=> {
            res.redirect('/artist/register')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static loginPage(req, res) {
        res.render('loginArtist')
    }

    static login(req, res) {
        const { username, password } = req.body

        Artist.findOne({where: {username}})
        .then(data => {
            if (data && decrypt(password, data.password)) {
                console.log('berhasil login');
                req.session.username = username
                console.log(req.session);
            }
        })
        .catch(err => res.send(err))
    }
}

module.exports = ArtistController