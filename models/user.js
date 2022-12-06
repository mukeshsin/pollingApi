// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import Role from "./role.js";

const { DataTypes } = Sequelize;
// table define
const User = db.define("users", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  emailId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: Role,
      key: "id",
    },
  },
});

export default User;
