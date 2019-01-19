import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import './Todo.css';

const cName = completed => (completed ? 'todo-completed' : 'todo-incomplete');

const Todo = ({ toggleTodo, todo }) => (
  <li>
    <span
      className={`todo ${cName(todo.completed)}`}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.content}
    </span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
