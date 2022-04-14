const Feedback = require("../models/feedbacks");

module.exports.creatFeeback = async (req, res) => {
  try {
    const { subject, message, studentId } = req.body;
    const newFeedback = new Feedback({
      subject,
      message,
      studentId,
    });
    await newFeedback.save();
    res.status(200).json({
      message: "Feedback created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating feedback",
    });
  }
};

module.exports.getFeedbackByStudentId = async (req, res) => {
  try {
    const { studentId } = req.params.studentId;
    const feedbacks = await Feedback.find({ studentId });
    res.status(200).json({
      message: "Feedbacks fetched successfully",
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while fetching feedbacks",
    });
  }
};

module.exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json({
      message: "Feedbacks fetched successfully",
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while fetching feedbacks",
    });
  }
};
