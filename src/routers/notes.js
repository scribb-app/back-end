const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
    res.status(500).send('notes setup incomplete');
})

module.exports = router;