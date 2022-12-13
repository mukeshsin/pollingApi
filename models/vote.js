// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import User from "./user.js";
const { DataTypes } = Sequelize;
// table define
const Vote = db.define("votes", {
  optionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

export default Vote;
