import express from "express";
import {
  createControler,
  getAllUsersController,
  updateUserController,
  deleteUserController,
  getUserById,
  getUserByEmailController,
} from "../controllers/userControler.js";

const router = express.Router();

router.post("/", createControler);
router.get("/", getAllUsersController);
router.get("/:id", getUserById);
router.get("/email/:id", getUserByEmailController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
