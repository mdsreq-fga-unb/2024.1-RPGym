import User from "../mongodb/models/Usuario.js"
import bcrypt from 'bcrypt'

const create = async (body) => {
  try {
    // Desestruturar o corpo da requisição para obter a senha
    const { password, ...rest } = body;

    // Gerar o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de salt rounds

    // Criar o usuário com a senha hashada
    const newUser = await User.create({
      ...rest,
      password: hashedPassword // Armazenar a senha criptografada
    });

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

//service login
const getUserByEmail = (email) => User.findOne({ email });

const login = async (email, password) => {
  try {
    // Encontrar o usuário pelo email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Comparar a senha fornecida com a hash armazenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Senha incorreta');
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { create, getAllUsers, updateUser, deleteUser, getUserByEmail, login }; // Exporta a função create