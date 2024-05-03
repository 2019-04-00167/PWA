const {
  getProducts,
  getCreateProductPage,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const productRouter = require("express").Router();

productRouter.get("/create", getCreateProductPage);

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.put("/:product_name", updateProduct);
productRouter.delete("/:product_name", deleteProduct);

module.exports = productRouter;

// GET / -> get products
// GET /id -> get a single product
// POST /id -> update a product
// DELETE /id -> delete a product
// POST / -> create a product
// POST /create -> get create a product page
