require("dotenv").config;
const User = require("../models/user");
const { Strategy, ExtractJwt } = require("passport-jwt");

module.exports = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  },
  async (payload, cb) => {
    try {
      const { id } = payload;
      const user = await User.get({ id: parseInt(id) });
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }
);
