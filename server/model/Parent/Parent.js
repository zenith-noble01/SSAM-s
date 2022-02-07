const mongoose = require("mongoose");

const Parent = new mongoose.Schema({
  Id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    default: "",
  },
  passwords: {
    type: String,
    default: "",
  },
  childname: {
    type: String,
    default: "",
  },
  picture: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Parent", Parent);
