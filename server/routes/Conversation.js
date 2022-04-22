const {
  createConversation,
  getConversationByUserId,
} = require("../controllers/consversationController");

const router = require("express").Router();

router.post("/", createConversation);
router.get("/:userId", getConversationByUserId);

module.exports = router;
