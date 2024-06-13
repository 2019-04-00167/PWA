const { sequelize } = require("../config/database.js");
const Store = require("../models/store.model");
const { DataTypes } = require("sequelize");

/* The product has a reference to
 */
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // other attributes
  },
  {
    tableName: "products",
  }
);

module.exports = Product;
