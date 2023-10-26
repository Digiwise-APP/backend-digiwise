import express from "express";
const router = express.Router();

import questionRoute from "./developQuestionRoutes.js";
import userRoute from "./developUserRoutes.js";
import levelRoute from "./developLevelRoutes.js";

// ----------------- User ----------------------------
router.use("/users", userRoute);

// ----------------- Question ------------------------
router.use("/questions", questionRoute);

// ----------------- Level ---------------------------
router.use("/", levelRoute);

export default router;
