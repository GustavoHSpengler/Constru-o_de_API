const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const router = require('./routes/route');

app.set('port', process.env.PORT || 3333); 

module.exports = app;

app.use('/api', router);