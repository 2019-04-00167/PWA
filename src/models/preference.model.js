const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");
const Preference = sequelize.define("Preference", {
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
});

module.exports = Preference;
