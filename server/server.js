require("dotenv").config({
  path: "./config/config.env",
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/db");
const { errorHandler } = require("./middlewares/ErrorHandler");
const morgan = require("morgan");

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
connectDb();
// app.use(notFound);
app.use(errorHandler);
app.use(morgan("dev"));

app.use("/api/parent/auth", require("./routes/auth"));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
