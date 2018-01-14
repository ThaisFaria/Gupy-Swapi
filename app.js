const express = require('express');
const db = require('./db');
const PeopleController = require('./controllers/PeopleController');

var app = express();

app.use('/people', PeopleController);

app.use('/', (req, res) => {
     res.send('Tudo certinho');
});


module.exports = app;