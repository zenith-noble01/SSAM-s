const {
  createMessge,
  getMessageById,
} = require("../controllers/messageContoller");

const router = require("express").Router();

router.post("/", createMessge);
router.get("/:id", getMessageById);

module.exports = router;
