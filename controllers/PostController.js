const upload = require('../helpers/upload')


class PostController {
    static newPost(req, res) {
        upload(req, res, (err) => {
            if (err) {
                res.render('upload', {
                    msg: err
                  });
            } else {
                if(req.file == undefined){
                    res.render('upload', {
                      msg: 'Error: No File Selected!'
                    });
                } else {
                    res.render('upload', {
                      msg: 'File Uploaded!',
                      file: `/uploads/${req.file.filename}`
                    });
                }
            }
        })
    }

    static newPostForm(req, res) {
        res.render('upload')
    }
}

module.exports = PostController