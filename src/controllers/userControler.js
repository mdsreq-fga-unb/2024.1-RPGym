import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {
  create,
  getAllUsers,
  updateUser,
  deleteUser,
  getUser,
  getUserByEmail,
} from "../services/userService.js";

const { ObjectId } = mongoose.Types;
const createControler = async (req, res) => {
  const { name, age, height, weight, email, password } = req.body;
  console.log(name, age, height, weight, email, password);
  if (!name || !age || !email || !password) {
    return res
      .status(400)
      .send({ message: "Todos os campos devem ser preenchidos" });
  }

  try {
    // Hash da senha antes de criar o usuário
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário com a senha hashada
    const user = await create({
      name,
      age,
      height,
      weight,
      email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(400).send({ message: "Erro ao criar usuario." });
    }

    res.status(201).send({
      message: "Usuario criado com sucesso",
      user: {
        name,
        age,
        height,
        weight,
        email,
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

const getUserById = async (req, res) => {
  try {
    // console.log(req);
    console.log(req.params);
    const userId = new ObjectId(req.params);
    const user = await getUser(userId);
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    console.error("Erro no servidor ao obter usuário:", error.message);
    res.status(500).send({ message: "Erro no servidor ao obter o usuário." });
  }
};

const getUserByEmailController = async (req, res) => {
  try {
    const email = req.params.id; // Corrigido para 'email'
    // console.log("Buscando usuário com email:", email);

    const user = await getUserByEmail({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Se necessário, você pode personalizar o formato da resposta
    res.json({
      id: user._id,
    });
  } catch (error) {
    console.error("Erro no servidor ao buscar usuário:", error.message); // Melhor detalhamento do erro
    res.status(500).json({ error: "Server error" });
  }
};

const updateUserController = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const user = await updateUser(id, updateData);

    if (!user) {
      return res.status(404).send({ message: "Usuário não encontrado." });
    }

    res.status(200).send({
      message: "Usuário atualizado com sucesso",
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
      return res.status(404).send({ message: "Usuário não encontrado." });
    }

    res.status(200).send({ message: "Usuário excluído com sucesso." });
  } catch (error) {
    console.error("Erro no servidor ao excluir usuário:", error.message);
    res.status(500).send({ message: "Erro no servidor ao excluir usuário." });
  }
};

export {
  createControler,
  getAllUsersController,
  updateUserController,
  deleteUserController,
  getUserById,
  getUserByEmailController,
};
