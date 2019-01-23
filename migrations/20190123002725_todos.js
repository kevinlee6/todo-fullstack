const name = 'todos';
const fk = 'user_id'; // foreign key
const ft = 'users.id'; // foreign table

// fk can be null; may implement guest mode

const table = t => {
  t.increments();
  t.integer(fk).unsigned();
  t.foreign(fk).references(ft);
  t.index(fk);
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
