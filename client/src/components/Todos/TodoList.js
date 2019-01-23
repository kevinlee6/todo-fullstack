import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';
import getByVisibility from '../../redux/selectors';
import Todo from './Todo';
import { message, List, Empty as AntdEmpty } from 'antd';
import styled from 'styled-components';

const Item = styled(List.Item)`
  padding: 12px !important;
  ${({ completed }) => completed === 'true' && { backgroundColor: 'lightgrey' }}

  :hover {
    cursor: pointer;
    background-color: rgba(250, 250, 250, 0.9);
  }
`;

const Empty = styled(AntdEmpty)`
  @media (min-width: 577px) {
    width: 70%;
  }
`;

const info = () => message.info('Todo toggled');

const TodoList = ({ todos, toggleTodo }) =>
  todos && todos.length ? (
    <List
      size="large"
      dataSource={todos}
      renderItem={todo => (
        <Item
          onClick={() => {
            info();
            toggleTodo(todo.id);
          }}
          completed={todo.completed.toString()}
        >
          <Todo todo={todo} />
        </Item>
      )}
    />
  ) : (
    <Empty description="There are no todos in this section." />
  );

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getByVisibility(state, filter);
  return { todos };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);
