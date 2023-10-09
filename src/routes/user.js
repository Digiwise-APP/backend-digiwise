import express from "express";
import { createUserController, getUserByEmailController } from "../controllers/user.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/:id", getUserByEmailController);

export default router;
