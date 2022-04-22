const {
  createMessge,
  getMessagesByConversationId,
} = require("../controllers/messageContoller");

const router = require("express").Router();

router.post("/", createMessge);
router.get("/:conversationId", getMessagesByConversationId);

module.exports = router;
