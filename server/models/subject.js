const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
  {
    subjectname: {
      type: String,
      default: "",
    },
    students: {
      type: Array,
      default: [],
    },
    classes: {
      type: Array,
      default: [],
    },
    teachers: {
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
