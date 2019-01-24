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
  if (id && password) {
    const user = get(id);
    return user.update({ password });
  } else {
    // If no id or password, then cannot continue update.
    const fields = ['id', 'password'];
    fields.forEach(field => {
      if (!payload[field]) {
        console.log(`${field} must be present in order to update.`);
      }
    });
    return;
  }
};
const destroy = id => get(id).del();

module.exports = { all, get, create, update, destroy };
