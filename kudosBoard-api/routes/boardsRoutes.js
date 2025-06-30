const express = require("express");
const router = express.Router();
const controller = require("../controllers/boardController");

// -> /boards
router.get("/", controller.getAll);
// boards/:boardid
router.get("/:boardId", controller.getById);
// -> /boards
router.post("/", controller.create);
// boards/:boardid
router.delete("/:boardId", controller.remove);
// router.put("/:id", controller.update);


module.exports = router;