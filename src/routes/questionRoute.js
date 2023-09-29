import express from "express";
import { createQuestionController, getQuestionController } from "../controllers/question.js";
const router = express.Router();

router.post("/", createQuestionController);
router.get("/", getQuestionController);

export default router;
