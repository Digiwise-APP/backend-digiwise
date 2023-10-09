import express from "express";
import { createQuestionController, getQuestionController, getQuestionByIdController } from "../controllers/question.js";
const router = express.Router();

router.post("/", createQuestionController);
router.get("/", getQuestionController);
router.get("/:id", getQuestionByIdController);

export default router;
