const { sequelize } = require("../config/database.js");
const Store = require("../models/store.model");
const { DataTypes } = require("sequelize");
const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.BIGINT,
  },
  store_id: {
    type: DataTypes.UUIDV4,
    references: {
      model: Store,
      key: Store.id,
    },
  },
  expiry_date: DataTypes.DATEONLY,
});

module.exports = Product;
