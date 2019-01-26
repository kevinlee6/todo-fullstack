const User = require("./models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.get({ id });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.get({ email });
        if (!user) {
          return done({ message: "No email found in server." }, false);
        }
        const samePassword = await bcrypt.compare(password, user.password);
        return samePassword ? done(null, user) : done(null, false);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;
