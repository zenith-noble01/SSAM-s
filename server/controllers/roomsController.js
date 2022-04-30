const Room = require("../models/Rooms");

module.exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({
      status: "success",
      data: room,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: room,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      status: "success",
      data: rooms,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports.addMessage = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    room.messages.push(req.body);
    await room.save();
    res.status(200).json({
      status: "success",
      data: room,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports.addMember = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    room.members.push(req.body);
    await room.save();
    res.status(200).json({
      status: "success",
      data: room,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
