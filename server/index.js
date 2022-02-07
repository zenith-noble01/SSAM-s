require("dotenv").config({
  path: "./config/config.env",
});
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport/parent");
const passport = require("passport");
const authRoute = require("./routes/parent/auth");
const authentication = require("./routes/parent/authentication");
const ConnectDB = require("./config/db");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/ErrorsHandler");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["zenith"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

ConnectDB();
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(notFound);
app.use(errorHandler);
app.use(morgan);
const PORT = process.env.PORT || 8000;

app.use("/auth", authRoute);
app.use("/api/auth", authentication);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
