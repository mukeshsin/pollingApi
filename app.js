import express from 'express';
import path from'path';
import cookieParser from'cookie-parser';
import logger from'morgan';

import db from "./config/db.config.js";

import Router from "./routes/routes.js";
await db.sync({ alter: true });

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));


try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(Router);

// listen on port
app.listen(3000, () => console.log("Server running at http://localhost:3000"));