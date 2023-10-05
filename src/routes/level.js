import express from "express";
import { createLevelController, getAllLevelsController, getLevelByIdController, getLevelWithParamController } from "../controllers/level.js";

const router = express.Router();

router.get("/level", getLevelWithParamController);

router.post("/level", createLevelController);
router.get("/level", getAllLevelsController);
router.get("/level/:id", getLevelByIdController);

export default router;
