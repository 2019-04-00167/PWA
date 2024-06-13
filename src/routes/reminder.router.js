const reminderRouter = require("express").Router();
const { getReminders } = require("../controllers/reminder.controller");

reminderRouter.get("/", getReminders);

module.exports = reminderRouter;
