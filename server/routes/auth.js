const router = require("express").Router();
const { registerRoute, LoginRoute } = require("../controllers/authentication");

router.post("/register", registerRoute);
router.post("/login", LoginRoute);

module.exports = router;
