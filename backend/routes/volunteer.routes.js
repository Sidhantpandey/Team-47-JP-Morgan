// routes/volunteerRoutes.js

import { Router } from 'express';
import { getVolunteerDashboard } from '../controllers/volunteer.controller.js';

const router = Router();

// GET /api/volunteer/dashboard
router.get('/dashboard', getVolunteerDashboard);

export default router;
