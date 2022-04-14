const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    studentname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    classname: {
      type: String,
      default: "",
    },
    parentname: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    subjectOffering: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
