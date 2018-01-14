const express = require('express');
const People = require('../models/People');

var router = express.Router();

var timestamp = () => {
  return new Date().toISOString()
};

router.get('/', function (req, res) {
    People.find({}, function(err, people){
        if(err) return res.status(500).send('There was a problem finding people.');
        res.status(200).send(people);
    });
});

router.post('/', function(req, res) {
    var people = new People({
        name: req.body.name,
        height: req.body.height,
        mass: req.body.mass,
        hair_color: req.body.hair_color,
        skin_color: req.body.skin_color,
        eye_color: req.body.eye_color,
        birth_year: req.body.birth_year,
        gender: req.body.gender,
        homeworld: req.body.homeworld,
        films: req.body.films,
        species: req.body.species,
        vehicles: req.body.vehicles,
        starships: req.body.starships,
        url: req.body.url,
        created: timestamp(),
        edited: timestamp()
    });

    people.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = router;
