const { Attendance } = require("../../controllers/attendanceController");
const router = require("express").Router();

router.post("/attendance", Attendance);

module.exports = router;
