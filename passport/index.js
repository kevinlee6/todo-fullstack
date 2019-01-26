const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const JwtStrategy = require("./jwtStrategy");

passport.serializeUser((user, done) => {
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

passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;
