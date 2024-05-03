const Batch = require("../models/batch.model");
const { Model, Sequelize, QueryTypes } = require("sequelize");
const Store = require("../models/store.model");
const Product = require("../models/product.model");
const { sequelize } = require("../config/database");
const uuid = require("uuid").v4;

async function getBatches(req, res) {
  // const batches = await Batch.findAll({
  //   attibutes: ["batch_no", "quantity", "expiry_date"],
  // });
  /* Test code */
  const result = await sequelize.query(
    "SELECT b.*, p.name, s.name as 'store_name', location FROM batches b JOIN Products p ON b.product_id=p.id JOIN stores s ON b.store_id=s.id;",
    { type: QueryTypes.SELECT }
  );
  console.log("result" + result);
  console.log(result);
  console.log(result.length);
  const batches = await Batch.findAll({
    include: [
      { model: Store, attibutes: [["name", "store_name"], "location"] },
      { model: Product, attibutes: [["name", "product_name"]] },
    ],
  });
  // console.log(batches);
  // console.log("product return ", batches.Product);
  // console.log("store return ", batches.Store);
  /* End of Test code */
  if (!batches || batches.length === 0) {
    // return res.status(404).send("No batches found");
    return res.render("batches", {
      title: "Batches",
      message: "No batches found",
    });
  }
  // console.log(batches);
  return res.render("batches", { title: "Batches", batches: result });
}

async function getBatch(req, res) {}

async function createBatch(req, res) {
  const batch = {
    id: uuid(),
    batch_no: req.body["batch_number"],
    product_id: req.body["product_id"],
    ProductId: req.body["product_id"],
    quantity: req.body["quantity"],
    store_id: req.body["store_id"],
    StoreId: req.body["store_id"],
    expiry_date: req.body["expiry_date"],
  };
  // const batch = {
  //   id: uuid(),
  //   batch_no: req.body["batch_number"],
  //   Product: await Product.findByPk(req.body["product_id"], {
  //     attibutes: ["id", "name"],
  //   }),
  //   quantity: req.body["quantity"],
  //   store_id: req.body["store_id"],
  //   Store: await Store.findByPk(req.body["store_id"], {
  //     attributes: ["id", "name", "location"],
  //   }),
  //   expiry_date: req.body["expiry_date"],
  // };
  console.log(batch);
  const result = await Batch.create(batch, {
    include: [Product.Batches, Store.Batches],
  });
  // Model.create(batch, {
  //   include: [Batch.belongsTo(Product), Batch.belongsTo(Store)],
  // });
  console.log(batch);
  console.log(result);
  if (!result) {
    return res.status(404).send("Batch creation failed");
  }
  // return res.status(200).send(result.toJSON());
  return res.status(200).redirect("/batches");
}

function getBatchCreatePage(req, res) {
  // This function is currently not used but it is an alternative to getBatchCreatePage2()
  return res.render("create_batch", { title: "Create Batch" });
}

async function getBatchCreatePage2(req, res) {
  const stores = await Store.findAll({ attributes: ["id", "name"] });
  const products = await Product.findAll({ attributes: ["id", "name"] });
  return res.render("create_batch_v2", {
    title: "Create Batch v2",
    stores: stores,
    products: products,
  });
}

async function updateBatch(req, res) {}

async function deleteBatch(req, res) {
  await Batch.destroy({ where: { batch_no: req.params["batch_number"] } });
  console.log("Batch deleted successfully");
  return res.status(200).send("Batch deleted successfully");
}

module.exports = {
  createBatch,
  getBatch,
  getBatches,
  updateBatch,
  deleteBatch,
  getBatchCreatePage,
  getBatchCreatePage2,
};
