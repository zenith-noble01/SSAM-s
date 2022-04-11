const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    classname: {
      type: String,
      default: "",
    },
    subjects: {
      type: Array,
      default: [],
    },
    teachers: {
      type: Array,
      default: [],
    },
    students: {
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
