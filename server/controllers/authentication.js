const User = require("../models/parent/Parent");
const bcrypt = require("bcryptjs");

module.exports.registerRoute = async (req, res, next) => {
  try {
    //generate new hashed password
    const validEmail = await User.findOne({ email: req.body.email });
    if (validEmail)
      return res.status(400).json({
        msg: "email already exists",
        status: 400,
      });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    next(err);
  }
};

module.exports.LoginRoute = async (req, res, next) => {
  try {
    //verifying the user email
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    //verifying the user password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("invalid password");

    res.status(200).json({
      user: user,
      msg: "login successful",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
