import Atividades from "../mongodb/models/Atividades.js";
import User from "../mongodb/models/Usuario.js";

const registerActivity = async (activityData) => {
  const activity = new Activity({
    user: userId,
    ...activityData,
  });
  return await activity.save();
};

const getActivitiesByUserAndDate = async (userId, date) => {
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  return await Atividades.find({
    user: userId,
    date: { $gte: startOfDay, $lte: endOfDay },
  });
};

const calculateIMC = async (userId) => {
  // Buscar o usuário pelo ID
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const heightInMeters = parseFloat(user.height) / 100; // Converter altura de cm para metros
  const weight = parseFloat(user.weight);

  if (!heightInMeters || !weight) {
    throw new Error("Dados insuficientes para calcular IMC");
  }

  const imc = weight / (heightInMeters * heightInMeters);
  return imc.toFixed(2); // Retorna o IMC com duas casas decimais
};
export default {
  registerActivity,
  getActivitiesByUserAndDate,
  calculateIMC,
};
