const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
  {
    subjectname: {
      type: String,
      default: "",
    },
    studentsOffering: {
      type: Array,
      default: [],
    },
    teacherIn: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
