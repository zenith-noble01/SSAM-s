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

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
