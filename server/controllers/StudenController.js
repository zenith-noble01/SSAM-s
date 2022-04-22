const User = require("../models/Student/Student");
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
    const { studentname, email, password, status, parentname, classname } =
      req.body;
    const usernameCheck = await User.findOne({ studentname });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      studentname,
      email,
      classname,
      parentname,
      status,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getStudent = async (req, res, next) => {
  try {
    const student = await User.findOne({ studentname: req.params.studentname });
    if (!student) return res.json({ msg: "Student not found", status: false });
    return res.json({ status: true, student });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getStudentByClass = async (req, res, next) => {
  const classname = req.params.classname;
  try {
    const students = await User.find({ classname });
    if (!students) return res.json({ msg: "Student not found", status: false });
    return res.json({ status: true, students });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getStudentByParent = async (req, res, next) => {
  try {
    const parentname = req.params;
    const students = await User.find({ parentname });
    if (!students) return res.json({ msg: "Student not found", status: false });
    return res.json({ status: true, students });
  } catch (ex) {
    next(ex);
  }
};

module.exports.geAllStudents = async (req, res, next) => {
  try {
    const students = await User.find();
    if (!students) return res.json({ msg: "Student not found", status: false });
    return res.json({ status: true, students });
  } catch (ex) {
    next(ex);
  }
};

//remember your dream
//im the greatest
