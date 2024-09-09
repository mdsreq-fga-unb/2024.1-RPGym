import express from "express";
import { loginControler } from "../controllers/authController.js";

const router = express.Router();

router.post("/", loginControler);

export default router;
