const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    classname: {
      type: String,
      default: "",
    },
    studentsIn: {
      type: Array,
      default: [],
    },
    teachingSubjects: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
const Class = mongoose.model("Class", classSchema);
module.exports = Class;
