import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';
import Options from './Options';
import styled from 'styled-components';

const Span = styled.span`
  cursor: pointer;
  word-wrap: break-word;
  width: 85%;
  padding: 10px 0;
  ${({ completed }) =>
    completed ? { textDecoration: 'line-through' } : { fontWeight: '500' }}

  hover {
    opacity: 0.8;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Todo = ({ toggleTodo, todo }) => (
  <Div>
    <Span completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
      {todo.content}
    </Span>
    <Options todo={todo} />
  </Div>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
