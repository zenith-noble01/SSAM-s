const router = require("express").Router();
const { registerParent } = require("../../Controllers/PAuth.js");

router.post("/register", registerParent);

module.exports = router;
