import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import developRouter from "./src/routes/developRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import apiDocs from "./apidocs.json" assert { type: "json" };

const db = process.env.DATABASE_URL;

mongoose.connect(db);
const database = mongoose.connection;

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

//database local
database.on("error", (error) => {
  console.log(error, 202020202020);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//develop
app.use("/", developRouter);

// documentation API with swagger
const specs = swaggerJsdoc(apiDocs);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log("server listening on part", +port);
});
