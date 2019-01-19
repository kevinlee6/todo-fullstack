import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import Options from './Options';
import './Todo.css';
import { List } from 'antd';

const cName = completed => (completed ? 'todo-completed' : 'todo-incomplete');

const Todo = ({ toggleTodo, todo }) => (
  <List.Item>
    <span
      className={`todo ${cName(todo.completed)}`}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.content}
    </span>
    <Options todo={todo} />
  </List.Item>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
