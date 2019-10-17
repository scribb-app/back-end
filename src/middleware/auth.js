const { verify } = require('../helpers/auth/jwt');

const authValidator = (req, res, next) => {
    const bearer = req.get('Authorization');
    const tokens = bearer.split(' ');
    if (tokens.length != 2) {
        return res.send('invalid');
    }
    const payload = verify(tokens[1]);
    if (payload.err) {
        return res.send('not a valid JWT');
    }
    res.locals.user = payload.decoded;
    next();
}

module.exports = {
    authValidator
}