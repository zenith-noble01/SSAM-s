const Attendance = require("../models/Attendances");

module.exports.Attendance = async (req, res, next) => {
  const newAttendance = req.body;
  try {
    await Attendance.create(newAttendance);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
