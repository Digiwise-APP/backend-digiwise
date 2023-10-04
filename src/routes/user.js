import express from "express";
import { createUserController } from "../controllers/user.js";

const router = express.Router();

router.post("/user", createUserController);

export default router;
