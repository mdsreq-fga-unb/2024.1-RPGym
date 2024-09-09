import express from "express";
import {
  createControler,
  getAllUsersController,
  updateUserController,
  deleteUserController,
  getUserById,
} from "../controllers/userControler.js";

const router = express.Router();

router.post("/", createControler);
router.get("/", getAllUsersController);
router.get("/:id", getUserById);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
