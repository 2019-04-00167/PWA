const { Model, Op } = require("sequelize");
const Batch = require("../models/batch.model");

async function getReminders(req, res) {
  // TODO: Get new reminders
  // Compare dates less than 5days ago or two months ago.
  today = new Date();
  const reminders = await Batch.findAll({
    where: {
      expiry_date: {
        [Op.lte]: today.setDate(today.getDate() + 5),
      },
    },
  });
  const result = await sequelize.query(
    "SELECT b.*, p.name, s.name as 'store_name', location FROM batches b JOIN products p ON b.product_id=p.id JOIN stores s ON b.store_id=s.id where b.expiry_date < '2024-05-05';",
    { type: QueryTypes.SELECT }
  );
  console.log(reminders);
  return res
    .status(200)
    .render("reminders", { title: "Reminders", reminders: reminders });
}

async function removeReminders(req, res) {
  // TODO: Remove old reminders
}

module.exports = { getReminders, removeReminders };
