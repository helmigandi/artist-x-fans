const upload = require('../helpers/upload')
const { Artist, Post, Image } = require('../models')

class PostController {
    static homePageArtist(req, res) {
        Post.findAll({
            include: [Artist, Image]
        })
        .then(data => {
            // res.send(data)
            res.render('artist', {data})
        })
        .catch(err => res.send(err))
    }



        // ======buat upload gambar=======

        // upload(req, res, (err) => {
        //     if (err) {
        //         res.render('upload', {
        //             msg: err
        //           });
        //     } else {
        //         if(req.file == undefined){
        //             res.render('upload', {
        //               msg: 'Error: No File Selected!'
        //             });
        //         } else {
        //             res.render('upload', {
        //               msg: 'File Uploaded!',
        //               file: `/uploads/${req.file.filename}`
        //             });
        //         }
        //     }
        // })

    // static newPost(req, res) {
    //     let textField = {
    //         message: req.body.message
    //     }
    //     let newImage = {
    //         link: `/uploads/${req.file.filename}`
    //     }

    //     Post.create(textField)
    //     .then(_=> {
    //         return Image.create()
    //     })
    //     .catch(err => res.send(err))
    // }

    // static newPostForm(req, res) {
    //     res.render('upload')
    // }

    static deletePost(req, res) {
        Post.destroy({
            where: {id: +req.params.id}
        })
        .then(_=> {
            res.redirect('/artist/home')
        })
        .catch(err => res.send(err))
    }
}

module.exports = PostController