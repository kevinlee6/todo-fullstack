const db = require("../db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const USERS = "users";
// line below breaks when doing get query twice in a row
// const users = db('users');

// try-catch bc knex return value is a promise.
// need to bubble up the errors if knex fails, such as db validation
const getAll = async () => {
  try {
    return await db("users").select();
  } catch (err) {
    console.log("Error: " + err.detail);
    return err.detail;
  }
};

const get = async id => {
  try {
    return await db(USERS)
      .where({ id })
      .first();
  } catch (err) {
    console.log("Error: " + err.detail);
    return err.detail;
  }
};

const create = async payload => {
  try {
    const { email, password } = payload;
    const hash = await bcrypt.hash(password, saltRounds);
    return await db(USERS).insert({ email, password: hash });
  } catch (err) {
    console.log("Error: " + err.detail);
    return err.detail;
  }
};

const update = async payload => {
  try {
    const { id, password } = payload;
    const hash = await bcrypt.hash(password, saltRounds);
    return await db(USERS)
      .where({ id })
      .update({ password: hash, updated_at: "now" });
  } catch (err) {
    console.log("Error: " + err.detail);
    return err.detail;
  }
};

const destroy = async id => {
  try {
    const toDelete = await db(USERS)
      .where({ id })
      .del();
    // return value of knex delete is 0/1
    return !!toDelete;
  } catch (err) {
    console.log("Error: " + err.detail);
    return err.detail;
  }
};

module.exports = { getAll, get, create, update, destroy };
