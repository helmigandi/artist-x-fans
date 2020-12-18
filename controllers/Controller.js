class Controller {
    static indexPage(req, res) {
        // res.send('ini halaman awal')
        res.render('homepage')
    }
}

module.exports = Controller