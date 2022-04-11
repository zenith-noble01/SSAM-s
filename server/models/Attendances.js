const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    parentname: {
      type: String,
      default: "",
    },
    subjectname: {
      type: String,
      default: "",
    },
    childname: {
      type: String,
      default: "",
    },
    teachername: {
      type: String,
      default: "",
    },
    present: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
