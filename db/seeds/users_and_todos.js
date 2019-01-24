const password = 'password';

const usersData = [
  { email: 'email@email.com', password },
  { email: 'test@test.com', password },
];

const todosData = [
  { content: 'First todo', user_id: 1 },
  { content: 'Second todo', user_id: 2 },
  { content: 'Third todo', user_id: 1, completed: true },
];

exports.seed = async knex => {
  const todos = knex('todos');
  const users = knex('users');

  // need it to be sync; todos belongs to users
  // clear any prev data if exists;
  try {
    await todos.del();
    await users.del();
    await users.insert(usersData);
    await todos.insert(todosData);
  } catch (e) {
    console.log(e);
  }
};
