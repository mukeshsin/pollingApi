// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import Option from "./option.js";
const { DataTypes } = Sequelize;
// table define
const Option = db.define("options", {
  optionTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voteCount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  pollId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: Poll,
      key: "id",
    },
  },
});

export default Option;
