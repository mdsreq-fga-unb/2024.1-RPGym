import { login } from "../services/authService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginControler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email e senha são obrigatórios." });
  }

  try {
    const user = await login(email);

    if (!user) {
      return res.status(401).send({ message: "Usuário não encontrado." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Senha incorreta.");
      return res.status(401).send({ message: "Senha incorreta." });
    }

    // Gerar um token JWT (JSON Web Token)
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).send({
      message: "Login bem-sucedido",
    });
  } catch (error) {
    console.error("Erro no servidor ao fazer login:", error.message); // Log detalhado do erro
    res.status(500).send({ message: "Erro no servidor ao fazer login." });
  }
};

export { loginControler };
