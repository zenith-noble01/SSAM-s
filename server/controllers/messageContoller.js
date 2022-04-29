const Message = require("../models/Message");

module.exports.createMessage = function (req, res) {
  const { sender, receiver, message } = req.body;
  const newMessage = new Message({
    sender,
    receiver,
    message,
  });
  newMessage.save((err, message) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(message);
  });
};

module.exports.getMessage = function (req, res) {
  const { sender, receiver } = req.body;
  Message.find({
    $or: [
      { sender: sender, receiver: receiver },
      { sender: receiver, receiver: sender },
    ],
  })
    .populate("sender", "_id name")
    .populate("receiver", "_id name")
    .exec((err, message) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(message);
    });
};

module.exports.getMessageById = function (req, res) {
  Message.findById(req.params.id, (err, message) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(message);
  });
};

module.exports.updateMessage = function (req, res) {
  Message.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, message) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(message);
    }
  );
};
