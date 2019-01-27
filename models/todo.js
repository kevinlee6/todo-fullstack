const db = require("../db");

const TODOS = "todos";

const getAll = async user_id => {
  try {
    return await db(TODOS).where({ user_id });
  } catch (err) {
    console.log(err);
  }
};

const get = async id => {
  try {
    return await db(TODOS)
      .where({ id })
      .first();
  } catch (err) {
    console.log(err);
  }
};

const create = async payload => {
  try {
    const { user_id, content } = payload;
    return await db(TODOS)
      .insert({ user_id, content })
      .returning("*")
      .get(0);
  } catch (err) {
    console.log(err);
  }
};

const update = async payload => {
  try {
    const { id, content, completed } = payload;
    const todo = content
      ? await db(TODOS)
          .where({ id })
          .update({ content, updated_at: "now" })
      : [true, false].includes(completed)
      ? await db(TODOS)
          .where({ id })
          .update({ completed })
      : null;
    return todo;
  } catch (err) {
    console.log(err);
  }
};

const destroy = async id => {
  const toDelete = await db(TODOS)
    .where({ id })
    .del();
  return !!toDelete;
};

module.exports = { getAll, get, create, update, destroy };
