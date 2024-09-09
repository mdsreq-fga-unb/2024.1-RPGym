import User from "../mongodb/models/Usuario.js";

const create = async (body) => {
  try {
    const newUser = await User.create(body);
    return newUser; // Retorna o usuário criado
  } catch (error) {
    console.error("Erro ao criar usuário no banco de dados:", error.message);
    throw error;
  }
};
const getAllUsers = () => User.find().exec();
const getUser = (userId) => User.findById(userId).exec();
const getUserByEmail = (email) => User.findOne(email).exec();
const updateUser = (id, updateData) =>
  User.findByIdAndUpdate(id, updateData, { new: true }).exec();

const deleteUser = (id) => User.deleteOne({ _id: id }).exec();

export { create, getAllUsers, getUser, updateUser, deleteUser, getUserByEmail };
