const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAy: { type: Date, default: Date.now }
});

module.exports = mongoose.model('mentor', schema, 'mentor');