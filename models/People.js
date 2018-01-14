var mongoose = require('mongoose');
require('mongoose-type-url');

var Schema = mongoose.Schema;

var peopleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
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
        type: mongoose.SchemaTypes.Url,
        required: [true, 'Homeworld field is required']
    },
    films: [
        {
            type: mongoose.SchemaTypes.Url,
            required: [true, 'Films field is required']
        }
    ],
    species: [
        {
            type: mongoose.SchemaTypes.Url,
            required: [true, 'Species field is required']
        }
    ],
    vehicles: [
        {
            type: mongoose.SchemaTypes.Url,
            required: [true, 'Vehicles field is required']
        }
    ],
    starships: [
        {
            type: mongoose.SchemaTypes.Url,
            required: [true, 'Starships field is required']
        }
    ],
    url: {
        type: mongoose.SchemaTypes.Url,
        required: [true, 'Url field is required']
    },
    created: {
        type: Date,
        required: [true, 'Created field is required'],
        default: Date.now
    },
    edited: {
        type: Date,
        required: [true, 'Edited field is required'],
        default: Date.now
    }
}, {collection: 'people'});

module.exports = mongoose.model('People', peopleSchema);