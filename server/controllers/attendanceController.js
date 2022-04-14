const Attendance = require("../models/Attendances");

module.exports.Attendance = async (req, res) => {
  const { userId, date, status, message } = req.body;
  try {
    const attendance = await Attendance.find({
      userId: userId,
      date: date,
    });
    if (attendance.length > 0) {
      return res.status(400).json({
        message: "You have already marked your attendance",
      });
    }
    const newAttendance = new Attendance({
      userId: userId,
      date: date,
      status: status,
      message: message,
    });
    await newAttendance.save();
    return res.status(200).json({
      newAttendance: newAttendance,
      message: "Attendance marked successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      userId: req.user.id,
    });
    return res.status(200).json({
      attendance: attendance,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
