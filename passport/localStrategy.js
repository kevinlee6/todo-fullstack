const User = require("../models/user");
const bcrypt = require("bcrypt");
const { Strategy } = require("passport-local");

module.exports = new Strategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, done) => {
    try {
      const user = await User.get({ email });
      if (!user) {
        return done({ message: "No email found in server." }, false);
      }
      const samePassword = await bcrypt.compare(password, user.password);
      return samePassword
        ? done(null, user)
        : done({ message: "Passwords not same." }, false);
    } catch (err) {
      return done(err);
    }
  }
);
