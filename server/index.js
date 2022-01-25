require("dotenv").config();
const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport/parent");
const passport = require("passport");
const authRoute = require("./routes/parent/auth");
const ConnectDB = require("./cofig/db");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

ConnectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8000;

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
