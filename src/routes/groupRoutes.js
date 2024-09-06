import express from "express";
import groupController from "../controllers/groupController.js";

const router = express.Router();

router.post("/", groupController.createGroup);
router.get("/", groupController.getAllGroups);
router.get("/:id", groupController.getGroupById);
router.put("/:id", groupController.updateGroup);
router.delete("/:id", groupController.deleteGroup);
router.delete("/:groupId/users/:userId", groupController.removeUser);

export default router;
