// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;
// table define
const Poll = db.define("polls", {
  title: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});

export default Poll;
