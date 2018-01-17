var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        minlength: 1,
        trim: true
    },
    height: {
        type: String,
        required: [true, 'Height field is required']
    },
    mass: {
        type: String,
        required: [true, 'Mass field is required']
    },
    hair_color: {
        type: String,
        required: [true, 'Hair Color field is required']
    },
    skin_color: {
        type: String,
        required: [true, 'Skin Color field is required']
    },
    eye_color: {
        type: String,
        required: [true, 'Eye Color field is required']
    },
    birth_year: {
        type: String,
        required: [true, 'Birth Yeah field is required']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'n/a'],
        required: [true, 'Gender field is required']
    },
    homeworld: {
        type: String,
        required: [true, 'Homeworld field is required']
    },
    films: [
        {
            type: String,
            required: [true, 'Films field is required']
        }
    ],
    species: [
        {
            type: String,
            required: [true, 'Species field is required']
        }
    ],
    vehicles: [
        {
            type: String
        }
    ],
    starships: [
        {
            type: String
        }
    ],
    url: {
        type: String,
        required: [true, 'Url field is required']
    },
    created: {
        type: String,
        required: [true, 'Created field is required']
    },
    edited: {
        type: String,
        required: [true, 'Edited field is required']
    }
}, {collection: 'people'});

module.exports = mongoose.model('People', peopleSchema);