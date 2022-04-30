const Attendance = require("../models/Attendances");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

module.exports.Attendance = async (req, res) => {
  const { userId, date, status, message, email } = req.body;
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
    const msg = {
      to: email,
      from: "contact@ssams.com", // Use the email address or domain you verified above
      subject: newAttendance.message,
      text: "Attendance",
      html: `<strong>Hello ${req.body.parentName} your child ${req.body.studentname} was present to day </strong>  `,
    };
    await newAttendance.save();

    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error.message);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
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
