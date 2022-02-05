const mongoose = require("mongoose");

const Parent = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    default: "",
  },
  parentEmail: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  image: {
    type: String,
  },
  childname: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Parent", Parent);
