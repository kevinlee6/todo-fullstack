require("dotenv").config;
const User = require("../models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");

// 2 week expiration jwt
const maxAge = 60 * 60 * 24 * 14;

module.exports = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
    maxAge
  },
  async (payload, cb) => {
    try {
      const { user_id } = payload;
      const user = await User.get({ id: parseInt(user_id) });
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }
);
