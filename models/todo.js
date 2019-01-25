const db = require('../db');

const TODOS = 'todos';

const getAll = async user_id => {
  const allTodos = await db(TODOS).where({ user_id });
  return allTodos;
};

const get = async id => {
  const todo = await db(TODOS)
    .where({ id })
    .first();
  return todo;
};

const create = async payload => {
  const { user_id, content } = payload;
  return db(TODOS).insert({ user_id, content });
};

const update = async payload => {
  const { id, content, completed } = payload;
  const todo = content
    ? await db(TODOS)
        .where({ id })
        .update({ content, updated_at: 'now' })
    : [true, false].includes(completed)
    ? await db(TODOS)
        .where({ id })
        .update({ completed })
    : null;

  return todo;
};

const destroy = async id => {
  const toDelete = await db(TODOS)
    .where({ id })
    .del();
  return !!toDelete;
};

module.exports = { getAll, get, create, update, destroy };
