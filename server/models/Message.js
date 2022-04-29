const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId, 
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: ["User", "Student", "Teacher", "Parent"],
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
