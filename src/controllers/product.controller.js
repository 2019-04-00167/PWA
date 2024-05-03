const uuid = require("uuid").v4;

const Product = require("../models/product.model");
const Store = require("../models/store.model");
const { sequelize } = require("../config/database");

const getProducts = async (req, res) => {
  const products = await Product.findAll({
    attributes: ["name"],
  });
  if (!products || products.length == 0) {
    // return res.status(404).send("No product found");
    return res.render("products", {
      title: "Products",
      message: "No product found",
    });
  }
  // formatedProducts = products.forEach(async (product) => {
  //   const result = await product.toJSON();
  //   console.log(result);
  //   return result;
  // });
  // console.log(formatedProducts);
  return res.render("products", {
    title: "Products",
    products: products,
  });
};

const createProduct = async (req, res) => {
  const product = {
    id: uuid(),
    name: req.body["product_name"],
  };
  const result = await Product.create(product);
  // return res.status(201).send(result);
  return res.status(201).redirect("/products");
};

const getCreateProductPage = async (req, res) => {
  const stores = await Store.findAll();
  console.log(stores);
  return res.render("create_product", { title: "Create" });
};

const updateProduct = async (req, res) => {
  // TODO: Update a product
  // This feature will be implemented in the future
  return res.send("Not yet implemented");
};

const deleteProduct = async (req, res) => {
  const productName = req.params["product_name"];
  await Product.destroy({ where: { name: productName } });
  return res.status(200).send("Product deleted successfully");
};

// async function deleteProductIdNull(id = null) {
//   await Product.destroy({ where: { id: id } });
// }

module.exports = {
  getProducts,
  createProduct: createProduct,
  getCreateProductPage,
  updateProduct,
  deleteProduct,
};
