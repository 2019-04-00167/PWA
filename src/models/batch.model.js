const { DataTypes, Model } = require("sequelize");

const Product = require("./product.model");
const { sequelize } = require("../config/database");
const Store = require("./store.model");

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
      unique: true,
    },
    // product_id to reference which product does the batch belong
    // product_id: {
    //   type: DataTypes.UUIDV4,
    //   references: {
    //     model: Product,
    //     key: Product.id,
    //   },
    // },
    quantity: {
      type: DataTypes.BIGINT,
      // You can find the total quantity of the product by adding batches.
    },
    // store_id: {
    //   type: DataTypes.UUIDV4,
    //   references: {
    //     model: Store,
    //     key: Store.id,
    //   },
    // },
    expiry_date: DataTypes.DATEONLY,
  },
  {
    tableName: "batches",
  }
);

/* FIXME: */
// Model.belongsToMany(Store, { foreignKey: "store_id" });
// Model.belongsToMany(Store, { foreignKey: "product_id" });
/* FIXME: */

module.exports = Batch;
