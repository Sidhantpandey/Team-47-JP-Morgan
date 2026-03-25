// controllers/volunteer.controller.js
import Volunteer from "../models/volunteer.cjs";

export const getVolunteerDashboard = async (req, res) => {
  try {
    // JWT verification is handled by `protect` middleware.
    const volunteerId = req.user?.id;
    if (!volunteerId) return res.status(401).json({ message: "Unauthorized" });

    // Fetch volunteer data.
    const volunteer = await Volunteer.findByPk(volunteerId);
    if (!volunteer) return res.status(404).json({ message: 'Volunteer not found' });

    res.status(200).json({
      message: 'Volunteer dashboard loaded',
      volunteer,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
