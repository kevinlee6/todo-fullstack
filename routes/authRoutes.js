require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Auth = require("../controllers/authController.js");
const passport = require("../passport");

router.post("/signin", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({ message: "Unable to sign in.", user });
    }
    req.login(user, { session: false }, err => {
      if (err) res.send(err);
    });
    const token = jwt.sign(user, process.env.SECRET);
    return res.json({ user, token });
  })(req, res);
});

module.exports = router;
