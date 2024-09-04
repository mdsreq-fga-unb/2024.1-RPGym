import express from 'express';
import { createControler } from '../controllers/userControler.js'; 

const router = express.Router(); 

// Rota para criar um novo usuário
router.post('/', createControler);

// Outras rotas CRUD podem ser adicionadas aqui...
// Exemplo:
// router.get('/', userController.findAll); // Rota para buscar todos os usuários
// router.get('/:id', userController.findById); // Rota para buscar um usuário por ID
// router.put('/:id', userController.updateById); // Rota para atualizar um usuário por ID
// router.delete('/:id', userController.deleteById); // Rota para deletar um usuário por ID

export default router; 