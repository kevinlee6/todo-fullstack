import React from 'react';
import { connect } from 'react-redux';
import getByVisibility from '../redux/selectors';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { visibility } = state;
  return {
    todos: getByVisibility(visibility),
  };
};

export default connect(mapStateToProps)(TodoList);
