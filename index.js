import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routeQuestion from "./src/routes/questionRoute.js";

import developRouter from "./src/routes/developRoutes.js";

import { connectDB } from "./src/utils/db.js";

dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

//develop
app.use("/question", developRouter);

app.use("/quiz", routeQuestion);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
});
