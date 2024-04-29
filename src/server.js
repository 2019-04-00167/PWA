// Built-in imports
const http = require("http");

// Third-party packages import
require("dotenv").config();

// Local imports
const app = require("./app"); // Importing express application objects
const { sequelize } = require("./config/database");
// Models imports
const Product = require("./models/product.model");
const Store = require("./models/store.model");
const Preference = require("./models/preference.model");
const Reminder = require("./models/reminder.model");
const User = require("./models/user.model");

// Creating server
Server = http.createServer(app);

// Getting port from environment variable set using dotenv package in ".env" file
const PORT = process.env.PORT || 3000;

// Server listening on port 3000
Server.listen(PORT, async (err) => {
  if (err) {
    console.log("[Server] stopped running...");
  }
  console.log(`[Server] is listening on port ${PORT}...`);
  await sequelize.sync();
  console.log("Model is synced with the database");
});