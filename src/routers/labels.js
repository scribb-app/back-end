const express = require('express');

const Labels = require('../models/labels');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(500).send('notes setup incomplete');
});

router.post('/', (req, res) => {
    const creator = res.locals.user.id;
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