const User = require("../models/user.model");
const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const { validationResult, matchedData } = require("express-validator");

const getSignUp = async (req, res) => {
  return res.render("signup", { title: "SignUp" });
};

const signUp = async (req, res) => {
  // Validation and sanitization of inputs
  const validated = validationResult(req);
  console.log("validated ");
  console.log(validated);

  const data = matchedData(req);
  console.log("data ");
  console.log(data);

  if (validated.errors && validated.errors.length != 0) {
    req.flash("failed_msg", "Failed to Signup");
    return res.redirect("/signup");
    // validated.errors.forEach((error) => {
    //   if ((error.path == "first_name") | (error.path == "last_name")) {
    //     return res.status(404).send(`${error.path} is required`);
    //   }
    //   res.status(404).send(`${error.path} is a required field`)
    // });
  }

  const { password, confirm_password } = req.body;
  if (password && confirm_password && password !== confirm_password) {
    req.flash("failed_msg", "Confirm Password does not match Password field");
    return res.redirect("/signup");
  }
  const user = {
    id: uuid(),
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: await bcrypt.hash(data.password, 10),
  };
  try {
    result = await User.create(user);
    req.flash("success_msg", "Account created successfully");
    res.status(201).redirect("/login");
  } catch (SequelizeUniqueConstraintError) {
    console.log("Email used");
    req.flash("failed_msg", "Email has already been used<br/>Proceed to login");
    return res.redirect("/signup");
  }
};

module.exports = { getSignUp, signUp };
