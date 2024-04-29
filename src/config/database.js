const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  // storage: "sqlite::memory:",
});

// const Product = require("../models/product.model");
// const Store = require("../models/store.model");
// const Preference = require("../models/preference.model");
// const Reminder = require("../models/reminder.model");
// const User = require("../models/user.model");

// Add model Associations
// Store.hasMany(Product)

module.exports = { sequelize };

// const knex = require("./knex");
// const sqlite = require("sqlite");
// // This file is used for creating database and tables

// db = new sqlite.Database("database.db");
// db.serialize(() => {
//   db.run(
//     "CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY, first_name VARCHAR(30) NOT NULL, surname VARCHAR(30), email VARCHAR(50), password VARCHAR(50))"
//   );
// });
// db.close();
