const db = require('../models/index');
const _ = require('underscore');
const Mentor = db.Mentor;
const Task = db.Task;

exports.createMentor = (data) => new Promise((resolve, reject) => {
    const mentor = new Mentor(data);
    mentor.save(data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
})

exports.updateMentor = (id, data) => new Promise((resolve, reject) => {
    data.updatedAt = new Date();
    Mentor.findByIdAndUpdate(id, data, { new: true }, function (err, response) {
        if (response && response.id) {
            return resolve(response);
        } else {
            return reject(err);
        }   
    });
})

exports.deleteMentor = (id) => new Promise((resolve, reject) => {
    Mentor.deleteOne({ _id: id}, function (err, response) {
        if (err) {
            return reject(err);
        } else {
            return resolve(true);
        }
    });
})

exports.getMentors = () => new Promise((resolve, reject) => {
    // Need to work on this
})

exports.addMentorTask = (data) => new Promise((resolve, reject) => {
    const task = new Task(data);
    task.save(data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
})