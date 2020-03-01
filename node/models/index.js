const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = {
    Mentor: require('./mentor.model'),
    Task: require('./task.model')
};