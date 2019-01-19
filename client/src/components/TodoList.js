import React from 'react';
import { connect } from 'react-redux';
import getByVisibility from '../redux/selectors';
import Todo from './Todo';
import { List } from 'antd';

const TodoList = ({ todos }) =>
  todos && todos.length ? (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  ) : (
    <div>There are currently no todos in this section.</div>
  );

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getByVisibility(state, filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
