require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const users = require("./controllers/usersController.js");
const todos = require("./controllers/todosController.js");
const passport = require("./passport");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);
app.use("/api/todos", todos);

app.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: true
  })
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
