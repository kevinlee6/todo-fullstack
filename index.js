require('dotenv').config();
const express = require('express');
const cors = require('cors');
const users = require('./controllers/usersController.js');
const todos = require('./controllers/todosController.js');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', users);
app.use('/api/todos', todos);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
