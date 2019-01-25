const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const USERS = 'users';
// line below breaks when doing get query twice in a row
// const users = db('users');

const getAll = async () => {
  const allUsers = await db('users').select();
  return allUsers;
};

const get = async id => {
  const user = await db(USERS)
    .where({ id })
    .first();
  return user;
};

const create = async payload => {
  const { email, password } = payload;
  if (!(email && password)) return { err: 'Missing email or password.' };
  const hash = await bcrypt.hash(password, saltRounds);
  return db(USERS).insert({ email, password: hash });
};

const update = async payload => {
  const { id, password } = payload;
  if (id && password) {
    const user = await db(USERS)
      .where({ id })
      .update({ password });
    return user;
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
const destroy = async id => {
  const toDelete = await db(USERS)
    .where({ id })
    .del();
  return !!toDelete;
};

module.exports = { getAll, get, create, update, destroy };
