const db = require('../db');

const todos = db('todos');

const all = () => todos.select();
const get = id => todos.where({ id });
const create = (content, user_id) => todos.insert({ content, user_id });
const update = (id, payload) => {
  const todo = get(id);
  const { content, completed } = payload;
  if (content) {
    todo.update({ content });
  }
  if (completed) {
    todo.update({ completed });
  }
};
const destroy = id => get(id).del();

module.exports = { all, get, create, update, destroy };
