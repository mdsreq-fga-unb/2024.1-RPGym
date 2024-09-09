import express from "express";
import {
  createControler,
  getAllUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/userControler.js";
import express from 'express';
import { createControler, getAllUsersController, updateUserController, deleteUserController, loginControler } from '../controllers/userControler.js'; 

const router = express.Router();

router.post("/", createControler);
router.get("/", getAllUsersController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
export default router;


//Login
router.post('/login', loginControler);
export default router; 