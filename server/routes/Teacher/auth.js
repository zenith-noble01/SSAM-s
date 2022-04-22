const {
  login,
  register,
  getAllTeachers,
} = require("../../controllers/teacherController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/", getAllTeachers);

module.exports = router;
