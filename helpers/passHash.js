const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(5)

function encryptPass(password) {
    return bcrypt.hashSync(password, salt)
}

console.log(encryptPass('padang'));

module.exports = encryptPass