// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/db.config.js";
import Role from "./role.js";
import Company from "./company.js";

const { DataTypes } = Sequelize;
// table define
const User = db.define("users", {
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: Company,
      key: "id",
    },
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
