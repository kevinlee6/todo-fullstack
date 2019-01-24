// need to create users table first then todos table
// because todos belongs to users

const todos = 'todos';
const users = 'users';
const fk = 'user_id'; // foreign key
const ft = 'users.id'; // foreign table

const usersTable = t => {
  t.increments();
  t.string('email').notNullable();
  t.unique('email');
  t.string('password').notNullable();
  t.timestamps(false, true);
};

const todosTable = t => {
  t.increments();
  t.integer(fk).unsigned();
  t.foreign(fk).references(ft);
  t.index(fk);
  t.string('content').notNullable();
  t.boolean('completed')
    .notNullable()
    .defaultTo(false);
  t.timestamps(false, true);
};

exports.up = async db => {
  await db.schema.createTable(users, usersTable).createTable(todos, todosTable);
};

exports.down = async db => {
  await db.schema.dropTableIfExists(todos).dropTableIfExists(users);
};
