import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoute.js";
// import groupRoutes from "./routes/groupRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import { initializeDatabase } from "./mongodb/index.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

// Função para inicializar o servidor
const startServer = async () => {
  try {
    await initializeDatabase();

    app.use("/users", userRoute);
    app.use("/login", authRoute);
    app.use("/activities", activityRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error.message);
    process.exit(1);
  }
};

startServer();
