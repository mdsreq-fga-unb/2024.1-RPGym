import activityService from "../services/activityService.js";

const registerActivity = async (req, res) => {
  try {
    const { userId } = req.params;
    const activity = await activityService.registerActivity(userId, req.body);
    return res.status(201).json(activity);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getActivitiesByUserAndDate = async (req, res) => {
  try {
    const { userId } = req.params;
    const { date } = req.query; // Passar a data como query string
    const activities = await activityService.getActivitiesByUserAndDate(
      userId,
      new Date(date)
    );
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const calculateIMC = async (req, res) => {
  try {
    const { userId } = req.params;
    const imc = await activityService.calculateIMC(userId);
    return res.status(200).json({ imc });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export default {
  registerActivity,
  getActivitiesByUserAndDate,
  calculateIMC,
};
