const { getHome } = require("../controllers/home.controller");

const homeRouter = require("express").Router();

homeRouter.get("/", getHome);

module.exports = homeRouter;
