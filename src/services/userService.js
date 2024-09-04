import User from "../mongodb/models/Usuario.js"

// Função para criar um novo usuário
const create = async (body) => {
    try {
      // Cria um novo documento de usuário no MongoDB usando o modelo User
      const newUser = await User.create(body);
      return newUser; // Retorna o usuário criado
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`); // Lança erro em caso de falha
    }
  };
  
  // Outras operações de serviço (CRUD) podem ser adicionadas aqui...
  
  export { create }; // Exporta a função create