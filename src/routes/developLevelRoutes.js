import express from "express";
const router = express.Router();
import {
  developCreateLevelController,
  getUserMedalByLevel,
} from "../controllers/developLevelController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.post("/", developCreateLevelController);
router.get("/:level", verifyToken, getUserMedalByLevel);

export default router;
