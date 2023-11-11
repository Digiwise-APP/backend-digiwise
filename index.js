import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import developRouter from "./src/routes/developRoutes.js";
import { connectDB } from "./src/utils/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import apiDocs from "./apidocs.json" assert { type: "json" };

dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// documentation API with swagger
const specs = swaggerJsdoc(apiDocs);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//develop
app.use("/", developRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
});
