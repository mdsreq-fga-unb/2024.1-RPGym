import User from "../mongodb/models/Usuario.js"

const create = async (body) => {
    try {
      
      const newUser = await User.create(body);
      return newUser; // Retorna o usuário criado
    } catch (error) {
      console.error("Erro ao criar usuário no banco de dados:", error.message);
    throw error; // Lança erro em caso de falha
    }
  };
  
  // Outras operações de serviço (CRUD) podem ser adicionadas aqui...
  
const getAllUsers = () => User.find().exec(); 

const updateUser = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true }).exec();

const deleteUser = (id) => User.deleteOne({ _id: id }).exec();

export { create, getAllUsers, updateUser, deleteUser }; // Exporta a função create