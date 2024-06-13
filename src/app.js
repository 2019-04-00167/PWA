const path = require("path");

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

const homeRouter = require("./routes/home.router");
const loginRouter = require("./routes/login.router");
const productRouter = require("./routes/product.router");
const signUpRouter = require("./routes/signup.route");
const { logout } = require("./controllers/login.controller");
const StoreRouter = require("./routes/store.router");
const batchRouter = require("./routes/batch.router");
const reminderRouter = require("./routes/reminder.router");
const { generateFlashMessage } = require("./middlewares/utils");

const app = express();

// Setting template folder and template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(session(require("./config/session")));
app.use(flash());
app.use(generateFlashMessage);
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public"))); // Static files like images, css,

app.use("/", homeRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/stores", isLoggedIn, StoreRouter);
app.use("/products", isLoggedIn, productRouter);
app.use("/batches", isLoggedIn, batchRouter);
app.use("/reminders", reminderRouter);

app.get("/logout", logout); // Handles /logout route

function isLoggedIn(req, res, next) {
  console.log("loggedIn: " + req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
}

module.exports = app;
