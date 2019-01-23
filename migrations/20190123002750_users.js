const name = 'users';

const table = t => {
  t.increments();
  t.string('email').notNullable();
  t.unique('email');
  t.string('password').notNullable();
  t.timestamps();
};

exports.up = async db => {
  await db.schema.createTable(name, table);
};

exports.down = async db => {
  await db.schema.dropTableIfExists(name);
};
