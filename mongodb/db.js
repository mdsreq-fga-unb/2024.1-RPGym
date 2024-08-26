import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Carregar variáveis de ambiente
dotenv.config();

// Configurações do banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;
const password = encodeURIComponent(DB_PASSWORD);
const DB_URI = `mongodb+srv://${DB_USER}:${password}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=rpgym`;

// Criar o cliente MongoDB
const client = new MongoClient(DB_URI, {
  serverApi: ServerApiVersion.v1,
});

// Função para conectar ao banco de dados e verificar a conexão
const testConnection = async () => {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");
    
    // Teste simples para verificar a conexão
    const db = client.db(DB_NAME);
    const result = await db.command({ ping: 1 });
    console.log("Ping de conexão:", result);
    
    // Fechar a conexão após o teste
    await client.close();
    console.log("Conexão fechada");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

// Executar a função de teste
export default testConnection;
