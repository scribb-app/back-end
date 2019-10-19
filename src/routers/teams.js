const express = require('express');

const Teams = require('../models/teams');

const router = express.Router();

router.get('/', async (req, res) => {
    const creator_id = res.locals.user.id;
    try {
        const q = { creator_id };
        if (req.query.name) {
            q.name = req.query.name;
        }
        const r = await Teams.find(q);
        res.send(r);
    } catch (e) {
        return res.status(500).send(e);
    }
});

router.post('/', (req, res) => {
    const creator = res.locals.user.id;
    const name = req.body.name;
    const members = req.body.members;
    const team = new Teams();
    team.creator_id = creator;
    team.name = name;
    team.members = members;
    try {
        team.save();
    } catch(e) {
        return res.send(e);
    }
    res.status(201).send(team);
});

module.exports = router;