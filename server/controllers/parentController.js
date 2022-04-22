const User = require("../models/parent/Parent");
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

module.exports.getAllParents = async (req, res, next) => {
  try {
    const parents = await User.find();
    if (!parents) return res.json({ msg: "Parents not found", status: false });
    return res.json({ status: true, parents });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getParent = async (req, res, next) => {
  try {
    const parent = await User.findOne({ username: req.params.username });
    if (!parent) return res.json({ msg: "Parent not found", status: false });
    return res.json({ status: true, parent });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getparentByChildname = async (req, res, next) => {
  const childname = req.params.childname;
  try {
    const parents = await User.find({ childname });
    if (!parents) return res.json({ msg: "Parents not found", status: false });
    return res.json({ status: true, parents });
  } catch (ex) {
    next(ex);
  }
};
