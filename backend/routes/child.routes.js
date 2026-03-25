import express from 'express';
import { addChild, updateMilestonesAfterQuiz ,getChild} from '../controllers/addChild.js';
import { allowRoles, protect } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post('/add', protect, allowRoles("parent"), addChild);
router.post('/quiz', protect, allowRoles("parent"), updateMilestonesAfterQuiz);
router.get('/:childId', protect, allowRoles("parent"), getChild);

export default router;
