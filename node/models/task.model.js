const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String },
    mentorID: Schema.Types.ObjectId,
    createdAt: { type: Date },
    updatedAy: { type: Date }
});

module.exports = mongoose.model('task', schema, 'task');