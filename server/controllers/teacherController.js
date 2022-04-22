const User = require("../models/Teacher/Teacher");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "Incorrect Email", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Password", status: false });
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getTeacher = async (req, res, next) => {
  try {
    const teacher = await User.findOne({ username: req.params.username });
    if (!teacher) return res.json({ msg: "Teacher not found", status: false });
    return res.json({ status: true, teacher });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getTeacherByClass = async (req, res, next) => {
  const classname = req.params.classname;
  try {
    const teachers = await User.find({ classname });
    if (!teachers) return res.json({ msg: "Teacher not found", status: false });
    return res.json({ status: true, teachers });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await User.find();
    if (!teachers) return res.json({ msg: "Teacher not found", status: false });
    return res.json({ status: true, teachers });
  } catch (ex) {
    next(ex);
  }
};
