import express from "express";
import { createQuestionController, getQuestionController, getQuestionByIdController } from "../controllers/question.js";
const router = express.Router();

router.post("/question", createQuestionController);
router.get("/question", getQuestionController);
router.get("/question/:id", getQuestionByIdController);

export default router;
