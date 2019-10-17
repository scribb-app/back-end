const express = require('express');

const Users = require('../models/users');
const { hashPassword } = require('../helpers/auth/hash');
const { sign } = require('../helpers/auth/jwt');

const router = express.Router();

router.post('/sign-up', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = new Users();
    user.email = email;
    user.password = hashPassword(password);
    try {
        await user.save();
    } catch (e) {
        return res.status(500).send(e);
    }
    res.status(201).send('Done');
});

router.post('/sign-in', async (req, res) => {
    const email = req.body.email;
    const password = hashPassword(req.body.password);
    try {
        const r = await Users.find({ email, password });
        if (r.length != 1) {
            return res.status(404).send({ msg: 'invalid email or password' });
        }
        const jwt = sign({ email });
        return res.status(200).send({ jwt });
    } catch(e) {
        return res.status(500).send(e);
    }
    res.send('');
});

module.exports = router;