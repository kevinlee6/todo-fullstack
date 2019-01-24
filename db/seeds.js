const db = require('./index');
const users = db('users');
const todos = db('todos');

const usersData = [
  { email: 'email@email.com', password },
  { email: 'test@test.com', password },
];

const todosData = [
  { content: 'First todo', user_id: 1 },
  { content: 'Second todo', user_id: 2 },
  { content: 'Third todo', user_id: 1, completed: true },
];

(async () => {
  const seedUsers = await usersData.map(user => users.insert(user));
  const seedTodos = await todosData.map(todo => todos.insert(todo));
})();
