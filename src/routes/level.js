import express from "express";
import { createLevelController, getAllLevelsController, getDetailLevelController } from "../controllers/level.js";

const router = express.Router();

router.post("/level", createLevelController);
router.get("/level", getAllLevelsController);
router.get("/level/:id", getDetailLevelController);

export default router;
