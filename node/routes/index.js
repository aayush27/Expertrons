import express from 'express';
import { createMentor, getMentors, updateMentor, deleteMentor, addMentorTask } from '../controllers/mentor.controller';

const router = express.Router();

router.post('/createMentor', createMentor);
router.get('/getMentors', getMentors);
router.put('/updateMentor', updateMentor);
router.delete('/deleteMentor', deleteMentor);
router.post('/addMentorTask', addMentorTask);

module.exports = router;
