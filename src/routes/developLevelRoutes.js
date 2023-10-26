import express from "express";
const router = express.Router();
import { developCreateLevelController } from "../controllers/developLevelController.js";

router.post("/", developCreateLevelController);

export default router;
