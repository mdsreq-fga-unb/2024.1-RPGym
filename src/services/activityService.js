import Activity from "../mongodb/models/Atividades.js";
import User from "../mongodb/models/Usuario.js";
import moment from "moment";

const registerActivity = async (userId, activityData) => {
  const activity = new Activity({
    user: userId,
    ...activityData,
  });
  return await activity.save();
};

const getActivityDaysByUser = async (userId) => {
  const activities = await Activity.find({ user: userId });

  const days = new Set(
    activities.map((activity) => moment(activity.date).format("DD/MM/YYYY"))
  );
  return {
    days: Array.from(days),
    count: days.size,
  };
};

const calculateIMC = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const heightInMeters = parseFloat(user.height) / 100;
  const weight = parseFloat(user.weight);

  if (!heightInMeters || !weight) {
    throw new Error("Dados insuficientes para calcular IMC");
  }

  const imc = weight / (heightInMeters * heightInMeters);
  return imc.toFixed(2); // Retorna o IMC com duas casas decimais
};
export default {
  registerActivity,
  getActivityDaysByUser,
  calculateIMC,
};
