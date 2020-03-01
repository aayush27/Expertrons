import { createMentor, getMentors, updateMentor, deleteMentor, addMentorTask } from '../services/mentor.service';

exports.createMentor = (req, res) => {
    const params = {
        name: req.body.name
    }
    createMentor(params)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
};

exports.getMentors = (req, res) => {
    getMentors()
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}

exports.updateMentor = (req, res) => {
    const params = {
        name: req.body.name
    }
    updateMentor(req.body.id, params)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}

exports.deleteMentor = (req, res) => {
    const id = req.query.id;
    deleteMentor(id)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}

exports.addMentorTask = (req, res) => {
    const params = {
        mentorID: req.body.mentorID,
        title: req.body.task
    };
    addMentorTask(params)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}