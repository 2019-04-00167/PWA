const path = require("path");

const express = require("express");
const passport = require("passport");
const session = require("express-session");

const homeRouter = require("./routes/home.router");
const loginRouter = require("./routes/login.router");
const productRouter = require("./routes/product.router");
const signUpRouter = require("./routes/signup.route");
const { logout } = require("./controllers/login.controller");
const StoreRouter = require("./routes/store.router");
const batchRouter = require("./routes/batch.router");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(session(require("./config/session")));
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public"))); // Static files like images, css,

// Setting template folder and template engine

app.use("/", homeRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/stores", StoreRouter);
app.use("/products", productRouter);
app.use("/batches", batchRouter);

app.post("/logout", logout); // Handles /logout route

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   return res.redirect("/login");
// }

module.exports = app;
