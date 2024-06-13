const session = require("express-session");
require("dotenv").config();

const config = {
  secret: process.env.SECRET_KEY || "e8ca457f-6ebd-4382-8aab-b422557225d4", // Set a secret key for session encryption
  resave: false, // Don't save session if unmodified
  saveUninitialized: false, // Always create a session
  // httpOnly: true,
  cookie: {
    maxAge: 60000 * 60,
  },
};

module.exports = config;
