const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.parent) {
    res.status(200).json({
      success: true,
      message: "successfull",
      parent: req.parent,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

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
