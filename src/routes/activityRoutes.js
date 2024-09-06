import express from "express";
import activityController from "../controllers/activityController.js";

const router = express.Router();

router.post("/:userId", activityController.registerActivity);
router.get("/:userId", activityController.getActivitiesByUserAndDate);
router.get("/:userId/imc", activityController.calculateIMC);

export default router;
