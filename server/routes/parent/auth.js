const {
  login,
  register,
  getAllParents,
} = require("../../controllers/parentController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/", getAllParents);

module.exports = router;
