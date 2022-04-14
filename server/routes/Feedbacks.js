const { creatFeeback } = require("../controllers/FeebackController");

const router = require("express").Router();

router.post("/", creatFeeback);
router.get("/", getFeedbacks);
router.get("/:studentId", creatFeeback);

module.exports = router;
