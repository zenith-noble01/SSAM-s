const {
  creatFeeback,
  getFeedbacks,
  getFeedbackByStudentId,
} = require("../controllers/FeebackController");

const router = require("express").Router();

router.post("/", creatFeeback);
router.get("/", getFeedbacks);
router.get("/:studentId", getFeedbackByStudentId);

module.exports = router;
