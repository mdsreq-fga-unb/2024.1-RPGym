import { login } from "../services/authService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../services/userService.js";

const validateLogin = async (email, password) => {
  const user = await login(email);
  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Senha incorreta.");
  }

  return user;
};

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const user = await validateLogin(email, password);
    const token = generateToken(user);
    console.log(email);
    const responseId = await getUserByEmail({ email });
    const userId = responseId._id;

    res.status(200).json({
      message: "Login bem-sucedido",
      token,
      userId,
    });
  } catch (error) {
    console.error("Erro no servidor ao fazer login:", error.message);
    res.status(401).json({ message: error.message });
  }
};

export { loginController };
