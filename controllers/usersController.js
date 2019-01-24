const db = require('../db');

const users = db('users');

const all = () => users.select();
const get = id => users.where({ id });
const create = (email, password) => users.insert({ email, password });
const update = (id, password) => get(id).update({ password });
const destroy = id => get(id).del();

module.exports = { all, get, create, update, destroy };
