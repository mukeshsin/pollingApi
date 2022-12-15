// sequelize connection
import { Sequelize } from "sequelize";
// db config
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;
// table define
const Company = db.define("companies", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Company;
