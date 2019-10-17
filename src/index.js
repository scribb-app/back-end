const express = require('express')
const app = express();

const { PORT } = require('./config');
const { db } = require('./models');
const router = require('./routers');

app.use('/api/v1', router);

db.once('open', function() {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
});