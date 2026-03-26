// controllers/volunteer.controller.js
import Volunteer from "../models/volunteer.cjs";

export const getVolunteerDashboard = async (req, res) => {
  try {
    // JWT verification is handled by `protect` middleware.
    const volunteerId = req.user?.id;
    if (!volunteerId) return res.status(401).json({ error: "Unauthorized" });

    // Fetch volunteer data.
    const volunteer = await Volunteer.findByPk(volunteerId);
    if (!volunteer) return res.status(404).json({ error: "Volunteer not found" });

    res.status(200).json({
      volunteer,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
