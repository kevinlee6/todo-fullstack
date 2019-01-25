const User = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy(function(email, password, done) {
    User.get({ email }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

module.exports = passport;
