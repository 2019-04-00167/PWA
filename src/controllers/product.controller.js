const uuid = require("uuid").v4;

const Product = require("../models/product.model");
const Store = require("../models/store.model");
const { sequelize } = require("../config/database");

const getProducts = async (req, res) => {
  await sequelize.sync();
  allProducts = await Product.findAll();
  return res.render("product", {
    products: allProducts.forEach(async (product) => {
      return await product.toJSON();
    }),
    title: "Products",
  });
};

const postProduct = async (req, res) => {
  const product = {
    id: uuid(),
    name: req.body["productName"],
    quantity: req.body["quantity"],
    store_id: req.body["store_id"],
    expiry_date: req.body["expiry_date"],
  };
  console.log(req.body["store_id"]);
  //   console.log(req.body["productName"]);
  //   console.log(req.body["quantity"]);
  //   console.log(req.body["expiry_date"]);
  console.log(product);
  const createdProduct = await Product.create(product);
  return "singleProduct";
};

const getCreateProduct = async (req, res) => {
  const stores = await Store.findAll();
  console.log(stores);
  return res.render("create_product", { title: "Create" });
};

const deleteProduct = async (req, res) => {
  await deleteProductIdNull();
  // await Product.destroy()
};

async function deleteProductIdNull(id = null) {
  await Product.destroy({ where: { id: id } });
}

module.exports = { getProducts, postProduct, getCreateProduct };
