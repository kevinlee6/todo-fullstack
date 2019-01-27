const Todo = require("../models/todo");

// Authorized route

module.exports = {
  // all for that specific user
  getAll: async (req, res) => {
    try {
      const user_id = req.user && req.user.id;
      const todos = await Todo.getAll(parseInt(user_id));
      return res.status(200).json({ todos });
    } catch (e) {
      return res.status(500).json({ message: "Unable to get all todos." });
    }
  },

  // //get
  // get: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const todo = await Todo.get(parseInt(id));
  //     return res.status(200).json({ todo });
  //   } catch (e) {
  //     return res
  //       .status(500)
  //       .json({ message: "Could not find todo that with id." });
  //   }
  // },

  // create
  create: async (req, res) => {
    try {
      const { user_id, content } = req.body.payload;
      const todo = await Todo.create({ user_id: parseInt(user_id), content });
      return res.status(200).json({ todo });
    } catch (e) {
      return res.status(500).json({ message: "Todo creation failed." });
    }
  },

  // update
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { content, completed } = req.body;
      if (content) {
        const todo = await Todo.update({ id: parseInt(id), content });
        return res.status(200).json({ message: "Todo content updated." });
      }
      if ([true, false].includes(completed)) {
        const todo = await Todo.update({
          id: parseInt(id),
          completed
        });
        return res.status(200).json({ message: "Toggled todo." });
      }
      throw Error();
    } catch (e) {
      return res.status(500).json({ message: "Could not update todo." });
    }
  },

  // delete
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const destroy = await Todo.destroy(parseInt(id));
      return res.status(200).json(destroy);
    } catch (e) {
      return res.status(500).json({ message: "Todo could not be deleted." });
    }
  }
};
