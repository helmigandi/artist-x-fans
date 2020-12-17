const multer = require('multer')

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: '../public/uploads',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
}).single('myImage');

module.exports = upload