const express = require('express');
const People = require('../models/People');

var router = express.Router();

router.get('/', function (req, res) {
    People.find({}, function(err, people){
        if(err) return res.status(500).send('There was a problem finding people.');
        res.status(200).send(people);
    });
});

module.exports = router;
