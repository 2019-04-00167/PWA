const session = require("express-session");
require("dotenv").config();

const config = {
  secret: process.env.SECRET_KEY || "e8ca457f-6ebd-4382-8aab-b422557225d4", // Set a secret key for session encryption
  resave: false, // Don't save session if unmodified
  saveUninitialized: true, // Always create a session
};

module.exports = config;
