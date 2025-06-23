import express from 'express';
import { addChild, updateMilestonesAfterQuiz ,getChild} from '../controllers/addChild.js';

const router = express.Router();

router.post('/add', addChild);
router.post('/quiz', updateMilestonesAfterQuiz);
router.get('/:childId', getChild);

export default router;
