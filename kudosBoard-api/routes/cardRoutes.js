const express = require("express");
const router = express.Router();
const controller = require("../controllers/cardController");

// -> /cards
router.get("/", controller.getAll);
// cards/:cardId
// router.get("/:cardId", controller.getById);
// -> /cards
router.post("/", controller.create);
// cards/:cardId
router.delete("/:cardId", controller.remove);

module.exports = router;