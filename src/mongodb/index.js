import connectToDatabase from "./db.js";

let db;

const initializeDatabase = async () => {
  try {
    db = await connectToDatabase();
    console.log("Banco de dados inicializado com sucesso");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
    throw error;
  }
};

// Exporta a função de inicialização e o banco de dados
export { initializeDatabase, db };
