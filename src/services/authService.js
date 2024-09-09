import User from "../mongodb/models/Usuario.js" 

const login = async (email) => {
    try {
      // Busca o usuário pelo email
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error.message);
      throw error;
    }
  };
  
  export { login }; 