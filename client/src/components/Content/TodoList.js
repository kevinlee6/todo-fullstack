import React from 'react';
import { connect } from 'react-redux';
import getByVisibility from '../../redux/selectors';
import Todo from './Todo';
import { List } from 'antd';
import styled from 'styled-components';

const P = styled.p`
  margin: 15px 0;
`;

const Item = styled(List.Item)`
  padding: 12px !important;
  :hover {
    background-color: rgba(250, 250, 250, 0.9);
  }
`;

const TodoList = ({ todos }) =>
  todos && todos.length ? (
    <List
      size="large"
      dataSource={todos}
      renderItem={todo => (
        <Item>
          <Todo todo={todo} />
        </Item>
      )}
    />
  ) : (
    <P>There are currently no todos in this section.</P>
  );

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getByVisibility(state, filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
