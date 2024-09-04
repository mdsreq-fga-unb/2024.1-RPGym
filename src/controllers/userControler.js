import { create, getAllUsers, updateUser, deleteUser, login } from "../services/userService.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const createControler = async (req, res) => {
  const { name, age, height, weight, email, password } = req.body;

  if (!name || !age || !height || !weight || !email || !password) {
    return res.status(400).send({ message: 'Todos os campos não foram preenchidos.' });
  }

  try {
    // Hash da senha antes de criar o usuário
    const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de rounds de salt

    // Cria o usuário com a senha hashada
    const user = await create({ name, age, height, weight, email, password: hashedPassword });

    if (!user) {
      return res.status(400).send({ message: 'Erro ao criar usuario.' });
    }

    res.status(201).send({
      message: 'Usuario criado com sucesso',
      user: {
        name,
        age,
        height,
        weight,
        email
      },
    });
  } catch (error) {
    console.error("Erro no servidor ao criar usuário:", error.message); // Log detalhado do erro
    res.status(500).send({ message: "Erro no servidor ao criar usuário." });
  }
};
  
const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsers();
  
      res.status(200).send(users);
    } catch (error) {
      console.error("Erro no servidor ao obter usuários:", error.message);
      res.status(500).send({ message: "Erro no servidor ao obter usuários." });
    }
  };

const updateUserController = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const user = await updateUser(id, updateData);
  
      if (!user) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
      }
  
      res.status(200).send({
        message: 'Usuário atualizado com sucesso',
        user,
      });
    } catch (error) {
      console.error("Erro no servidor ao atualizar usuário:", error.message);
      res.status(500).send({ message: "Erro no servidor ao atualizar usuário." });
    }
  };  

const deleteUserController = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await deleteUser(id);
  
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
      }
  
      res.status(200).send({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
      console.error("Erro no servidor ao excluir usuário:", error.message);
      res.status(500).send({ message: "Erro no servidor ao excluir usuário." });
    }
  };

//Login

const loginControler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    // Certifique-se de que a função login está lidando com email e password
    const user = await login(email, password);

    if (!user) {
      return res.status(401).send({ message: 'Usuário não encontrado ou senha incorreta.' });
    }

    // A função de login deve verificar a senha internamente, então essa checagem é redundante se a função login já faz isso
    const isPasswordValid = await bcrypt.compare(password, user.password); // Verifique se o campo correto está sendo usado

    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Senha incorreta.' });
    }

    // Gerar um token JWT (JSON Web Token)
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).send({
      message: 'Login bem-sucedido',
      token, // Retornar o token para o cliente
    });
  } catch (error) {
    console.error("Erro no servidor ao fazer login:", error.message); // Log detalhado do erro
    res.status(500).send({ message: "Erro no servidor ao fazer login." });
  }
};

export { createControler, getAllUsersController, updateUserController, deleteUserController, loginControler };