const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
    res.status(500).send('teams setup incomplete');
})

module.exports = router;