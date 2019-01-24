require('dotenv').config();
const express = require('express');
const cors = require('cors');
const users = require('./controllers/usersController.js');
const todos = require('./controllers/todosController.js');
const PORT = process.env.PORT || 3001;
const app = express();

const errorHandling = (err, req, res, next) => {
  console.error(err);
  res.status(500).json(`Error: ${err}`);
};

app.use(errorHandling);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/users', users);
app.use('/api/todos', todos);

app.listen(PORT);
