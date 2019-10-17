const express   = require('express');
const bodyParser = require('body-parser')

const authRouter = require('./auth');
const notesRouter = require('./notes');
const teamsRouter = require('./teams');
const listsRouter = require('./lists');
const labelsRouter = require('./labels');

const { authValidator } = require('../middleware/auth');

const router    = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

router.use('/auth', authRouter);
    
// validate JWT To access the rest of the routes
router.use('/', authValidator);
router.use('/notes', notesRouter);
router.use('/teams', teamsRouter);
router.use('/lists', listsRouter);
router.use('/labels', labelsRouter);

module.exports = router;