// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import User from "./user.js";
const { DataTypes } = Sequelize;
// table define
const Poll = db.define("polls", {
  title: {
    type: DataTypes.STRING,
    allownull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

export default Poll;
