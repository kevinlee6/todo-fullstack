import React from 'react';
import { connect } from 'react-redux';
import getByVisibility from '../redux/selectors';
import Todo from './Todo';
import { List } from 'antd';

const TodoList = ({ todos }) => (
  <List>
    {todos.map(todo => (
      <List.Item key={todo.id}>
        <Todo todo={todo} />
      </List.Item>
    ))}
  </List>
);

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getByVisibility(state, filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
