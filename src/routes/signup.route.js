const { getSignUp, signUp } = require("../controllers/signup.controller");

const signUpRouter = require("express").Router();

signUpRouter.get("/", getSignUp);

signUpRouter.post("/", signUp);

module.exports = signUpRouter;
