import express from "express";
import { createQuestionController, getQuestionController, getQuestionByIdController } from "../controllers/question.js";
const router = express.Router();

router.post("/quiz/question", createQuestionController);
router.get("/quiz/question", getQuestionController);
router.get("/quiz/question/:id", getQuestionByIdController);

export default router;
