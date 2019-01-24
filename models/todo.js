const db = require('../db');

const todos = db('todos');

const all = user_id => todos.where({ user_id: parseInt(user_id) });
const get = id => todos.where({ id: parseInt(id) });
const create = payload => {
  const { content, user_id } = payload;
  return todos.insert({ content, user_id: parseInt(user_id) });
};
const update = payload => {
  const { id, content, completed } = payload;
  const todo = get(id);
  if (content) {
    return todo.update({ content });
  }
  if (completed) {
    return todo.update({ completed });
  }
};
const destroy = id => get(id).del();

module.exports = { all, get, create, update, destroy };
