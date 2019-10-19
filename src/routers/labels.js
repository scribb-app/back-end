const express = require('express');

const Labels = require('../models/labels');

const router = express.Router();

router.get('/', async (req, res) => {
    const creator_id = res.locals.user.id;
    try {
        const r = await Labels.find({ creator_id });
        res.send(r);
    } catch (e) {
        return res.status(500).send(e);
    }
});

router.post('/', (req, res) => {
    const creator = res.locals.user.id;
    console.log(res.locals);
    const name = req.body.name;
    const label = new Labels();
    label.creator_id = creator;
    label.name = name;
    try {
        label.save();
    } catch(e) {
        return res.send(e);
    }
    res.status(201).json(label.toJSON());
});

module.exports = router;