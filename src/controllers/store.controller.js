const uuid = require("uuid").v4;
const Store = require("../models/store.model");
const { Model } = require("sequelize");

async function createStore(req, res) {
  const store = {
    id: uuid(),
    name: req.body["store_name"],
    location: req.body["location"],
  };
  result = await Store.create(store);
  return res.status(201).redirect("/stores");
}

async function getStores(req, res) {
  const stores = await Store.findAll();
  if (!stores || stores.length == 0) {
    // return res.status(404).send("No Stores found");
    return res
      .status(404)
      .render("stores", { title: "Stores", message: "No Stores found" });
  }
  // return res.status(200).send(stores);
  stores.forEach((store) => {
    console.log(`${store.id} ${store.name} ${store.location}`);
    console.log();
  });
  return res.status(200).render("stores", { title: "Stores", stores: stores });
}

async function getSingleStore(req, res) {
  try {
    const id = req.params["id"];
    const store = await Store.findByPk(id);
    if (!store) {
      return res.status(404).send("No such store");
    }
    // return res.status(200).send(store);
    return res.status(200).render("store", { title: "Store", store: store });
  } catch (error) {
    console.log("error" + error);
    return res.status(400).send("Server error check console");
  }
}

async function updateStore(req, res) {
  const id = req.params["id"];
  if (req.body["store_name"] && req.body["location"]) {
    const store = await Store.update(
      {
        name: req.body["store_name"],
        location: req.body["location"],
      },
      { where: { id: id } }
    );
    return res.status(200).send("Updated : " + store);
  }
  return res.status(404).send("Store name and location required");
}

async function deleteStore(req, res) {
  const id = req.params["id"];
  const deletedstore = await Store.destroy({ where: { id: id } });
  return res.status(200).send("Store was deleted successfully");
}
function createStorePage(req, res) {
  return res.render("create_store", { title: "Create Store" });
}
module.exports = {
  getSingleStore,
  getStores,
  updateStore,
  createStore,
  deleteStore,
  createStorePage,
};
