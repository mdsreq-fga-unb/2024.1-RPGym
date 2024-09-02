import express from 'express';
import { create } from '../controllers/userControler.js'; // Use import para funções nomeadas

const route = express.Router();

route.post("/", create);

export default route;
