const jwt = require('jsonwebtoken');

const { SECRET } = require('../../config');

const sign = (data) => {
    return jwt.sign({
        data
      }, SECRET, { expiresIn: '1h' });
}

const verify = (payload) => {
    const r = {};
    try {
        r.decoded = jwt.verify(payload, SECRET);
        r.err = null;
    } catch(err) {
        r.decoded = {};
        r.err = err;
    }
    return r;
}

module.exports = {
    sign,
    verify
}