const router = require("express").Router();
const { authUser, registerUser } = require("../controllers/authentication.js");
router.route("/").post(registerUser);
router.post("/login", authUser);
module.exports = router;
