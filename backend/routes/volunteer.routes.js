// routes/volunteerRoutes.js

import { Router } from 'express';
import { allowRoles, protect } from "../middlewares/auth.middlewares.js";
import { getVolunteerDashboard } from '../controllers/volunteer.controller.js';

const router = Router();

// GET /api/volunteer/dashboard
router.get('/dashboard', protect, allowRoles("volunteer"), getVolunteerDashboard);

export default router;
