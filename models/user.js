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
  const hash = await bcrypt.hash(password, saltRounds);
  return db(USERS).insert({ email, password: hash });
};

const update = async payload => {
  const { id, password } = payload;
  const hash = await bcrypt.hash(password, saltRounds);
  const user = await db(USERS)
    .where({ id })
    .update({ password: hash });
  return user;
};
const destroy = async id => {
  const toDelete = await db(USERS)
    .where({ id })
    .del();
  return !!toDelete;
};

module.exports = { getAll, get, create, update, destroy };
