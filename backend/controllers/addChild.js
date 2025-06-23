import path from "path";
import fs from "fs";
import Child from "../models/child.cjs";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to get milestones for a given month
function getMilestonesForMonth(month) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));

  const levels = data.spacece_ptp_milestones.curriculum_levels;
  for (const level of levels) {
    for (const m of level.months) {
      if (m.month === month) {
        return {
          month,
          physical: m.physical_development?.[0] || null,
          cognitive: m.cognitive_development?.[0] || null,
          socio_emotional: m.socio_emotional_development?.[0] || null,
          language: m.language_development?.[0] || null,
          adaptive: m.adaptive_self_help_skills?.[0] || null,
          sensory: m.sensory_emotional_regulation?.[0] || null,
        };
      }
    }
  }
  return null;
}

// Add child
export const addChild = async (req, res) => {
  try {
    const { fullName, age, gender, level } = req.body;
    // Assume parentId is available from req.user (set by authentication middleware)
    const parentId = req.user?.id;
    if (!parentId) {
      return res.status(400).json({ error: "Parent not authenticated" });
    }
    const prevMonth = age > 1 ? age - 1 : age;
    const milestoneObj = getMilestonesForMonth(prevMonth);

    const child = await Child.create({
      fullName,
      age,
        
      parentId,
      level: level || 0,
      milestones: milestoneObj ? [milestoneObj] : [],
    });

    res.status(201).json({ child });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update milestones after quiz
export const updateMilestonesAfterQuiz = async (req, res) => {
  try {
    const { childId, score } = req.body;
    const child = await Child.findByPk(childId);
    if (!child) return res.status(404).json({ error: "Child not found" });

    // Get current month from last milestone entry
    const milestonesArr = Array.isArray(child.milestones)
      ? child.milestones
      : [];
    const currentMonth =
      milestonesArr.length > 0
        ? milestonesArr[milestonesArr.length - 1].month
        : child.age;

    if (score >= 70) {
      const nextMonth = currentMonth + 1;
      const nextMilestone = getMilestonesForMonth(nextMonth);
      if (nextMilestone) {
        milestonesArr.push(nextMilestone);
        child.milestones = milestonesArr;
        child.age = nextMonth; // Optionally update age
        await child.save();
      }
    }
    // else, do nothing

    res.json({ child });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getChild = async (req, res) => {
  try {
    const { childId } = req.params;
    console.log(childId); 
    const child = await Child.findByPk(childId);
    if (!child) return res.status(404).json({ error: "Child not found" });

    res.json({ child });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};