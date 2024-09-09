import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

const password = encodeURIComponent(DB_PASSWORD);
const DB_URI = `mongodb+srv://${DB_USER}:${password}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// Função para conectar ao banco de dados
const connectToDatabase = async () => {
  try {
    // Configuração do Mongoose
    mongoose.connection.on("error", (err) => {
      console.error("Erro de conexão com o MongoDB:", err);
    });

    mongoose.connection.once("open", () => {
      console.log("Conectado ao MongoDB com sucesso");
    });

    // Conectar ao MongoDB
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 30000, // Tempo de timeout para conexão
    });
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export default connectToDatabase;
