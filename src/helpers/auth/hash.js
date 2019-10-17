const md5 = require('md5');

const hashPassword = (plain) => {
    return md5(plain);
}

module.exports = {
    hashPassword
}