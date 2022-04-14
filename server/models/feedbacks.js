const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
