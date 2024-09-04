import User from "../mongodb/models/Usuario.js"

// Função para criar um novo usuário
const create = async (body) => {
    try {
      // Cria um novo documento de usuário no MongoDB usando o modelo User
      const newUser = await User.create(body);
      return newUser; // Retorna o usuário criado
    } catch (error) {
      console.error("Erro ao criar usuário no banco de dados:", error.message);
    throw error; // Lança erro em caso de falha
    }
  };
  
  // Outras operações de serviço (CRUD) podem ser adicionadas aqui...
  
  export { create }; // Exporta a função create