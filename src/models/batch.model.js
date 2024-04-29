const { DataTypes } = require("sequelize");

const Product = require("./product.model");
const sequelize = require("../config/database");

const Batch = sequelize.define(
  "Batch",
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    batch_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "batches",
  }
);
