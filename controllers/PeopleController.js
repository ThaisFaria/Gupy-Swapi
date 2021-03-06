const express = require('express');
const _ = require('lodash');
const ObjectID = require('valid-objectid');
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

router.get('/field/:text', function (req, res) {
    var text = req.params.text;
    People.find({
        $or: [ { name: {$regex: '.*' + text + '.*', $options: 'i'} },
               { height: {$regex: '.*' + text + '.*', $options: 'i'} },
               { mass: {$regex: '.*' + text + '.*', $options: 'i'} },
               { hair_color: {$regex: '.*' + text + '.*', $options: 'i'} },
               { skin_color: {$regex: '.*' + text + '.*', $options: 'i'} },
               { eye_color: {$regex: '.*' + text + '.*', $options: 'i'} },
               { birth_year: {$regex: '.*' + text + '.*', $options: 'i'} },
               { gender: {$regex: '.*' + text + '.*', $options: 'i'} },
               { homeworld: {$regex: '.*' + text + '.*', $options: 'i'} },
               { films: {$regex: '.*' + text + '.*', $options: 'i'} },
               { species: {$regex: '.*' + text + '.*', $options: 'i'} },
               { vehicles: {$regex: '.*' + text + '.*', $options: 'i'} },
               { starships: {$regex: '.*' + text + '.*', $options: 'i'} },
               { url: {$regex: '.*' + text + '.*', $options: 'i'} }
             ]
    }, function(err, people){
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
        res.send({doc});
    }, (err) => {
        res.status(400).send(err);
    });
});

router.put('/:id', function(req, res){
    var id = req.params.id;
    var body = _.pick(req.body, [
        'name',       'height',     'mass',
        'hair_color', 'skin_color', 'eye_color',
        'birth_year', 'gender',     'homeworld',
        'films',      'species',    'vehicles',
        'starships',  'url'
    ]);
    body.edited = timestamp();

    if(!ObjectID.isValid(id)){
        return res.status(404).send('The object id is not valid');
    }

    People.findByIdAndUpdate(id, {$set:body}, {new: true})
    .then((doc) => {
        if(!doc){
            return res.status(404).send('Failure to update person. ' +
            'Please check if id exists in database');
        }
        res.send({doc});
    }).catch((err) => {
        res.status(400).send(err);
    });
});

router.delete('/:id', function(req, res){
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('The object id is not valid');
    }
    People.findByIdAndRemove(id)
    .then((doc) => {
        if(!doc) {
            return res.status(404).send('Failure to delete person. ' +
            'Please check if id exists in database');
        }
        res.send('Document deleted. \n ' + doc);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

module.exports = router;
