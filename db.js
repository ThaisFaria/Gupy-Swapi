const config = require('./config');
var mongoose = require('mongoose');

mongoose.connect(config.MONGO_DB, {
    useMongoClient: true,
    promiseLibrary: global.Promise
});