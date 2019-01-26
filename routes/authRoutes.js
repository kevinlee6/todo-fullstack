require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("../passport");

router.post("/signin", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Unable to sign in.", user });
    }
    req.login(user, { session: false }, err => {
      if (err) res.send(err);
    });
    const token = jwt.sign(user, process.env.SECRET);
    // req.universalCookies = token;
    const { id, email } = user;
    return res.json({ user: { id }, token });
  })(req, res);
});

module.exports = router;
