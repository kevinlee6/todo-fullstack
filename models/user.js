const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const users = db('users');

const all = () => users.select();
const get = id => users.where({ id: parseInt(id) });
const create = async payload => {
  const { email, password } = payload;
  if (!(email && password)) return { err: 'Missing email or password.' };
  const hash = await bcrypt.hash(password, saltRounds);
  return users.insert({ email, password: hash });
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
