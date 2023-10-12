import express from "express";
import {developCreateQuestionController} from "../controllers/developQuestionController.js";

const router = express.Router();

router.post("/", developCreateQuestionController);

export default router;
