const name = 'todos';

const table = t => {
  t.increments();
  t.string('content').notNullable();
  t.boolean('completed')
    .notNullable()
    .defaultTo(false);
  t.timestamps();
};

exports.up = async db => {
  await db.schema.createTable(name, table);
};

exports.down = async db => {
  await db.schema.dropTableIfExists(name);
};
