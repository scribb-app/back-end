const express = require('express');
const mongoose = require('mongoose');

const Notes = require('../models/notes');

const router = express.Router();

router.get('/', async (req, res) => {
    const creator_id = res.locals.user.id;
    try {
        const q = { creator_id };
        if (req.query.id) {
            q._id = new mongoose.Types.ObjectId(req.query.id);
        }
        const r = await Notes.find(q);
        res.send(r);
    } catch (e) {
        return res.status(500).send(e);
    }
});

router.post('/', (req, res) => {
    const creator = res.locals.user.id;
    const name = req.body.name;
    const body = req.body.body;
    const label = req.body.label;
    const team = req.body.label;
    const notes = new Notes();
    notes.creator_id = creator;
    notes.name = name;
    notes.body = body;
    notes.label = label;
    notes.team = team;
    notes.label = label;
    try {
        notes.save();
    } catch(e) {
        return res.send(e);
    }
    res.status(201).send(notes);
});

module.exports = router;