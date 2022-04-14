const {
  login,
  register,
  getStudentByClass,
  getStudent,
  getStudentByParent,
} = require("../../controllers/StudenController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/:studentname", getStudent);
router.get("/parentname/:id", getStudentByParent);
router.get("/studentclass/:classname", getStudentByClass);

module.exports = router;
