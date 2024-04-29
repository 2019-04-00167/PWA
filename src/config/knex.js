const sqlite = require("sqlite");
const dotenv = require("dotenv").config();
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "expiry_date.db",
  },
});

module.exports = knex;
