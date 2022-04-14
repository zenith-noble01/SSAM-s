const { Attendance } = require("../../controllers/attendanceController");
const router = require("express").Router();

router.post("/takeattendance", Attendance);

module.exports = router;
