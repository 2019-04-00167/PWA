const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const Settings = sequelize.define(
  "Preference",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUIDV4,
    },
    remind_before: {
      type: DataTypes.INTEGER,
      defaultValue: 7,
    },
  },
  {
    tableName: "settings",
  }
);

module.exports = Settings;
