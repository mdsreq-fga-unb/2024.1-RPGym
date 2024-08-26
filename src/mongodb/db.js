import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;
const password = encodeURIComponent(DB_PASSWORD);
const DB_URI = `mongodb+srv://${DB_USER}:${password}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=rpgym`;

const client = new MongoClient(DB_URI, {
  serverApi: ServerApiVersion.v1,
});

const testConnection = async () => {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");
    const db = client.db(DB_NAME);
    const result = await db.command({ ping: 1 });
    console.log("Ping de conexão:", result);
    await client.close();
    console.log("Conexão fechada");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export default testConnection;
