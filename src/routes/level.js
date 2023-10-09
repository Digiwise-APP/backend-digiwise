import express from "express";
import { createLevelController, getAllLevelsController, getLevelByIdController, getLevelWithParamController } from "../controllers/level.js";

const router = express.Router();

router.get("/level", getLevelWithParamController);

router.post("/", createLevelController);
router.get("/", getAllLevelsController);
router.get("/:id", getLevelByIdController);

export default router;
