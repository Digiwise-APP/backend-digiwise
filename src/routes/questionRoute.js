import express from "express";
import { createQuestionController } from "../controllers/question.js";
const router = express.Router();

router.post("/", createQuestionController);

export default router;
