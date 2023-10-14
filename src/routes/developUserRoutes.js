import express from "express";
const router = express.Router();
import {
  developCreateUserController,
  developLoginUserController,
  developGetAllUserController,
  developGetUserByIdController,
  developGetQuestionUserByLevelController,
  developGetQuestionUserByIdQuestionController,
} from "../controllers/developUserController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.post("/register", developCreateUserController);
router.post("/login", developLoginUserController);

// ----------------------- to GET question By User ------------------------------------
router.get("/:id/question", verifyToken, developGetQuestionUserByLevelController);
router.get("/:userId/question/:questionId", verifyToken, developGetQuestionUserByIdQuestionController);

// --------------------------------- ANSWER USER -----------------------------------
// router.post("/:id/answer", verifyToken, ) upload jawaban
// router.get("/:id/answer", verifyToken, ) get jawaban user

router.get("/", developGetAllUserController);
router.get("/:id", developGetUserByIdController);

export default router;
