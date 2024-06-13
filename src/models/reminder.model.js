const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database.js");
const Product = require("./product.model.js");
const Store = require("./store.model.js");

const Reminder = sequelize.define(
  "Reminder",
  {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    product_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: Product,
        key: Product.id,
      },
    },
    store_id: {
      type: DataTypes.UUIDV4,
      references: {
        model: Store,
        key: Store.id,
      },
    },
  },
  {
    tableName: "reminders",
  }
);

module.exports = Reminder;
