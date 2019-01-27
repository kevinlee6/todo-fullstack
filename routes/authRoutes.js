require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("../passport");
const User = require("../models/user.js");
const Todo = require("../models/todo.js");

router.post("/signin", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Unable to sign in.", user });
    }
    req.login(user, { session: false }, err => {
      if (err) res.send(err);
    });
    const token = jwt.sign({ user_id: user.id }, process.env.SECRET);
    const { id } = user;
    res.json({ user: { id }, token });
    return token;
  })(req, res, next);
});

module.exports = router;
