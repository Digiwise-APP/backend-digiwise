import express from "express";
const router = express.Router();
import { developCreateUserController, developLoginUserController } from "../controllers/developUserController.js";

router.post("/register", developCreateUserController);
router.post("/login", developLoginUserController);

export default router;
