require("dotenv").config({
  path: "./config/config.env",
});
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/db");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use("/api/authParent", require("./routes/auth"));
app.use("/api/authTeacher", require("./routes/Teacher/auth"));
app.use("/api/authAdmin", require("./routes/admin/auth"));
app.use("/api/authStudent", require("./routes/Student/auth"));
app.use("/api/attendance", require("./routes/Teacher/Checkattendance"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
