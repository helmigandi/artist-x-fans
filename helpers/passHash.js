const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(5)

function encryptPass(password) {
    return bcrypt.hashSync(password, salt)
}

function decrypt(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    encryptPass,
    decrypt
}