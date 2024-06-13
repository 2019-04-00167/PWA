const loginRouter = require("express").Router();
const { body, validationResult } = require("express-validator");

const passport = require("passport");
// require("../config/passport");
const { getLogin } = require("../controllers/login.controller");

loginRouter.get("/", getLogin);
loginRouter.post(
  "/",
  // body("email").notEmpty().isEmail().isLowercase().escape(),
  // body("password").notEmpty(),
  passport.authenticate("local", {
    successRedirect: "/batches",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = loginRouter;
