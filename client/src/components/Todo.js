import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo }) => (
  <li>
    <span onClick={() => toggleTodo(todo.id)}>{todo.content}</span>
  </li>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
