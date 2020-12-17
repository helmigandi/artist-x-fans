const { Fan } = require('../models')

class FanController {
    static registerForm(req, res) {
        res.render("registerFan")
    }

    static register(req, res) {
        let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
            gender: req.body.gender,
            email: req.body.email,
            birth_date: req.body.birth_date
        }
        // console.log(obj);
        Fan.create(obj)
            .then(data => {
                res.redirect('/fans/register')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = FanController