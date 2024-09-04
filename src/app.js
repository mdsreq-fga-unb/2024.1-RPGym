import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js'; // Importa as rotas de usuário
import { initializeDatabase } from './mongodb/index.js'; // Importa a função para conectar ao MongoDB

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Função para inicializar o servidor
const startServer = async () => {
  try {
    await initializeDatabase(); 

    app.use('/users', userRoute);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error.message);
    process.exit(1);
  }
};

startServer();
