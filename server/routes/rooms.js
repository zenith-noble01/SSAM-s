const {
  createRoom,
  getRooms,
  getRoom,
  addMessage,
  addMember,
} = require("../controllers/roomsController");

const router = require("express").Router();

router.post("/", createRoom);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.put("/:id", addMessage);
router.put("/:id", addMember);

module.exports = router;
