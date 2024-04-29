const {
  getProducts,
  postProduct,
  getCreateProduct,
} = require("../controllers/product.controller");

const productRouter = require("express").Router();

productRouter.get("/", getProducts);

productRouter.get("/create", getCreateProduct);

productRouter.post("/", postProduct);

module.exports = productRouter;

// GET / -> get products
// GET /id -> get a single product
// POST /id -> update a product
// DELETE /id -> delete a product
// POST / -> create a product
// POST /create -> get create a product page
