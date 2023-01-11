import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from"body-parser";
import cors from"cors";
import logger from "morgan";
import db from "./config/db.config.js";


//await db.sync({alter: true });
import "./models/index.js";
import Router from "./routes/routes.js";
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({ origin: "http://localhost:8080" }));
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(Router);

// listen on port
const port = process.env.port || 3000;
app.listen(port);
console.log("Server running at http://localhost:3000");
