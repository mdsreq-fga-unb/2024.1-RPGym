import { create, getAllUsers, updateUser } from "../services/userService.js";


const createControler = async (req, res) => {
    const { name, age, height, weight, email, password } = req.body;
  
    if (!name || !age || !height || !weight || !email || !password) {
      return res.status(400).send({ message: 'Todos os campos não foram preenchidos.' });
    }
  
    try {
      const user = await create(req.body);
  
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
            email,
            password,
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

  export { createControler, getAllUsersController, updateUserController };