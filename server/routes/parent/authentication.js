const router = require("express").Router();
const Parent = require("../../model/Parent/parent");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new parent
    const newParent = new Parent({
      parentName: req.body.username,
      parentEmail: req.body.email,
      password: hashedPassword,
    });

    //save parent and respond
    const parent = await newParent.save();
    res.status(200).json(parent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //verifying the parent email
    const parent = await Parent.findOne({ email: req.body.email });
    !user &&
      res.status(404).json({
        message: "Parent account not Found",
        status: "404",
      });
    //verifying the parent password
    const validPassword = await bcrypt.compare(
      req.body.password,
      parent.password
    );
    !validPassword &&
      res.status(400).json({
        message: "wrong password please check again",
      });
    res.status(200).json(parent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
