const express = require('express')
const app = express();

const { PORT } = require('./config');
const router = require('./routers');

app.use('/api/v1', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))