const db = require('../models/index');
const _ = require('underscore');
const async = require('async');
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
            Task.deleteMany({ mentorID: id}, function (error, response) {
                if (error) {
                    return reject(err);
                }
                return resolve(true);
            })
        }
    });
})

exports.getMentors = () => new Promise((resolve, reject) => {
    let response = [];
    Mentor.find({}, function(err, mentors) {
        async.eachSeries(mentors, function(mentor, cb) {
            Task.find({mentorID: mentor._id}, function(error, tasks) {
                let temp = JSON.parse(JSON.stringify(mentor));
                temp['tasks'] = _.pluck(tasks, 'title');
                response.push(temp);
                cb();
            });
        }, function() {
            return resolve(response);
        });
    });
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