const dotenv = require('dotenv');
dotenv.config();

const vars = {
    PORT,
    SECRET
} = process.env;

module.exports = vars;