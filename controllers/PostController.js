const upload = require('../helpers/upload')


class PostController {
    static newPost(req, res) {
        upload(req, res, (err) => {
            if (err) {
                res.render('index', {
                    msg: err
                  });
            } else {
                if(req.file == undefined){
                    res.render('index', {
                      msg: 'Error: No File Selected!'
                    });
                } else {
                    res.render('index', {
                      msg: 'File Uploaded!',
                      file: `uploads/${req.file.filename}`
                    });
                }
            }
        })
    }
}

module.exports = PostController