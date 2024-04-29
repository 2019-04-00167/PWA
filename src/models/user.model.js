const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const User = sequelize.define("User", {
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
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = User;
