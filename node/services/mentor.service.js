import { createMentor, getMentors, updateMentor, deleteMentor, addMentorTask } from '../repositories/mentor.repository';

exports.createMentor = (data) =>  new Promise((resolve, reject) => {
    createMentor(data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.getMentors = () => new Promise((resolve, reject) => {
    getMentors()
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.updateMentor = (id, data) => new Promise((resolve, reject) => {
    updateMentor(id, data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.deleteMentor = (id) => new Promise((resolve, reject) => {
    deleteMentor(id)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});

exports.addMentorTask = (data) => new Promise((resolve, reject) => {
    addMentorTask(data)
        .then((response) => {
            return resolve(response);
        })
        .catch((error) => {
            return reject(error);
        });
});