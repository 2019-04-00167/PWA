const User = require("../models/user.model");
const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");

const getSignUp = async (req, res) => {
  return res.render("signup", { title: "SignUp" });
};

const signUp = async (req, res) => {
  const user = {
    id: uuid(),
    first_name: req.body["first_name"],
    last_name: req.body["last_name"],
    email: req.body["email"],
    password: await bcrypt.hash(req.body["password"], 10),
  };
  result = await User.create(user);
  console.log(result.toJSON());
  res.status(201).redirect("/login");
};

module.exports = { getSignUp, signUp };
