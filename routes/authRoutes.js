require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("../passport");
const User = require("../models/user.js");
const Todo = require("../models/todo.js");

router.post("/signin", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "Unable to sign in.", user });
    }
    req.login(user, { session: false }, err => {
      if (err) res.send(err);
    });
    const token = jwt.sign({ user_id: user.id }, process.env.SECRET);
    const { id } = user;
    return res.json({ user: { id }, token });
  })(req, res);
});

router.post("/verify-token", (req, res) => {
  passport.authenticate("jwt", { session: false }, async (err, user) => {
    if (err || !user) {
      return res.json({ error: "Not valid jwt." });
    }
    return res.json({ user });
    // Give json formatted for redux store if valid jwt
    // const token = req.headers.token;
    // const todos = await Todo.getAll(parseInt(user.id));
    // const allIds = todos.map(todo => todo.id);
    // const byIds = todos.reduce((acc, todo) => {
    //   const { content, completed, updated_at } = todo;
    //   acc[todo.id] = {
    //     content,
    //     completed,
    //     updated_at
    //   };
    //   return acc;
    // }, {});
    // const data = {
    //   auth: {
    //     isLoggedIn: true,
    //     token
    //   },
    //   todos: {
    //     allIds,
    //     byIds
    //   }
    // };
    return res.json(data);
  })(req, res);
});

module.exports = router;
