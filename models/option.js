// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import User from "./user.js";
const { DataTypes } = Sequelize;
// table define
const Option = db.define("options", {
  optionTitle: {
    type: DataTypes.STRING,
    allownull: false,
    validate: {
      min: 2,
      max: 3,
    },
    pollId: {
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
  },
});

export default Option;
