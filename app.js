const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const PeopleController = require('./controllers/PeopleController');

var app = express();
app.use(bodyParser.json());

app.use('/people', PeopleController);

app.use('/', (req, res) => {
     res.send('Tudo certinho');
});

module.exports = app;