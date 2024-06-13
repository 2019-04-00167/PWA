const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Store = sequelize.define(
  "Store",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    location: DataTypes.STRING(100),
  },
  {
    tableName: "stores",
  }
);

module.exports = Store;
