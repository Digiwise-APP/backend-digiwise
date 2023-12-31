import express from "express";
const router = express.Router();
import {
  developCreateUserController,
  developLoginUserController,
  developGetAllUserController,
  developGetUserByIdController,
  developGetQuestionUserByLevelController,
  developGetQuestionUserByIdQuestionController,
  developUserAnswerController,
  developGetMedalUserLevelController,
} from "../controllers/developUserController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.post("/register", developCreateUserController);
router.post("/login", developLoginUserController);

// ----------------------- to GET question By User ------------------------------------
router.get("/questions", verifyToken, developGetQuestionUserByLevelController);
router.get("/question/:questionId", verifyToken, developGetQuestionUserByIdQuestionController);

// --------------------------------- ANSWER USER -----------------------------------
router.post("/answers", verifyToken, developUserAnswerController);

// --------------------------------- to GET medal ----------------------------------
router.get("/medal", verifyToken, developGetMedalUserLevelController);

router.get("/", verifyToken, developGetAllUserController);
router.get("/:id", developGetUserByIdController);

export default router;
