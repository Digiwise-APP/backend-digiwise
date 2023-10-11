import express from "express";
import ControllerLevel from "../controllers"
import { createLevelController, getAllLevelsController, getLevelByIdController, getLevelWithParamController } from "../controllers/level.js";

const router = express.Router();

router.get("/level", ControllerLevel.levelController.getLevelWithParamController);

router.post("/", ControllerLevel.levelController.createLevelController);
router.get("/", ControllerLevel.levelController.getAllLevelsController);    
router.get("/:id", ControllerLevel.levelController.getLevelByIdController);

export default router;
