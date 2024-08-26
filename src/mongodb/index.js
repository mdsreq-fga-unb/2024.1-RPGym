import connectToDatabase from './db.js';
import { usuarioSchema } from './models/Usuario.js'; 

let db;

const initializeDatabase = async () => {
  try {
    db = await connectToDatabase();
    
    // Importar os esquemas e criar coleções, se necessário
    // Aqui estamos apenas registrando os esquemas para uso futuro

    console.log("Banco de dados inicializado com sucesso");
  } catch (error) {
    console.error("Erro ao inicializar o banco de dados:", error);
    throw error;
  }
};

// Exportar a função de inicialização e o banco de dados
export { initializeDatabase, db };
