const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.TEXT(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = User;
