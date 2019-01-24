const db = require('../db');

const users = db('users');

const all = () => users.select();
const get = id => users.where({ id: parseInt(id) });
const create = payload => {
  const { email, password } = payload;
  return users.insert({ email, password });
};
const update = payload => {
  const { id, password } = payload;
  const user = get(id);
  return user.update({ password });
};
const destroy = id => get(id).del();

module.exports = { all, get, create, update, destroy };
