import express from 'express';
import { initializeDatabase } from './mongodb/index.js';
import dotenv from "dotenv";
import userRoute from './routes/userRoutes.js'; // Use import instead of require

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/user", userRoute);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
};

startServer();
