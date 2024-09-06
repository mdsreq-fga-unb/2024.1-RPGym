import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import { initializeDatabase } from "./mongodb/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Função para inicializar o servidor
const startServer = async () => {
  try {
    await initializeDatabase();

    app.use("/users", userRoute);
    app.use("/groups", groupRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error.message);
    process.exit(1);
  }
};

startServer();
