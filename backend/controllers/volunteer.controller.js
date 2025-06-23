// controllers/volunteerController.js

import Volunteer from '../models/Volunteer.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export const getVolunteerDashboard = async (req, res) => {
  try {
    // 1. Extract token from headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
      return res.status(401).json({ message: 'Unauthorized: No token provided' });

    const token = authHeader.split(' ')[1];

    // 2. Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const volunteerId = decoded.id;

    // 3. Fetch volunteer data
    const volunteer = await Volunteer.findByPk(volunteerId);
    if (!volunteer) return res.status(404).json({ message: 'Volunteer not found' });

    res.status(200).json({
      message: 'Volunteer dashboard loaded',
      volunteer,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
