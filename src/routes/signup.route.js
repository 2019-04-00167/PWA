const { getSignUp, signUp } = require("../controllers/signup.controller");
const { body } = require("express-validator");

const signUpRouter = require("express").Router();

signUpRouter.get("/", getSignUp);

signUpRouter.post(
  "/",
  body("first_name").trim().notEmpty().isAlphanumeric().escape(),
  body("last_name").trim().notEmpty().isAlphanumeric().escape(),
  body("email").trim().notEmpty().isEmail().escape(),
  body("password").notEmpty().escape(),
  body("confirm_password").notEmpty().escape(),
  signUp
);

module.exports = signUpRouter;
