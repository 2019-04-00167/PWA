const StoreRouter = require("express").Router();
const {
  getSingleStore,
  getStores,
  updateStore,
  createStore,
  deleteStore,
  createStorePage,
} = require("../controllers/store.controller");

StoreRouter.get("/", getStores);
StoreRouter.get("/create", createStorePage);
StoreRouter.get("/:id", getSingleStore);
StoreRouter.post("/", createStore);
StoreRouter.put("/:id", updateStore);
StoreRouter.delete("/:id", deleteStore);

module.exports = StoreRouter;
