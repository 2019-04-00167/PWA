const loginRouter = require("express").Router();

const passport = require("passport");
// require("../config/passport");
const { getLogin } = require("../controllers/login.controller");

loginRouter.get("/", getLogin);
loginRouter.post(
  "/",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
    // failureFlash: true,
  })
);

module.exports = loginRouter;
