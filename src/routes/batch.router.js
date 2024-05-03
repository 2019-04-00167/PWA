const {
  createBatch,
  updateBatch,
  deleteBatch,
  getBatchCreatePage,
  getBatches,
  getBatch,
  getBatchCreatePage2,
} = require("../controllers/batch.controller");

const batchRouter = require("express").Router();

batchRouter.get("/", getBatches);
batchRouter.get("/create", getBatchCreatePage); // This route is not used for now
batchRouter.get("/create/v2", getBatchCreatePage2);
// batchRouter.get("/:batch_number", getBatch);
batchRouter.post("/", createBatch);
batchRouter.put("/:batch_number", updateBatch);
batchRouter.delete("/:batch_number", deleteBatch);

module.exports = batchRouter;
