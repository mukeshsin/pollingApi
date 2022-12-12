import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();
const db = new Sequelize(
  process.env.databaseName,
  process.env.dbUserName,
  process.env.dbPassword,
  {
    host: "localhost",
    dialect: "mysql",
    password: process.env.dbPassword,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default db;
