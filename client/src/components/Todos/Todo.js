import React from 'react';
import Options from './Options';
import styled from 'styled-components';

const Span = styled.span`
  word-wrap: break-word;
  width: 85%;
  padding: 10px 0;
  ${({ completed }) =>
    completed ? { textDecoration: 'line-through' } : { fontWeight: '500' }}
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Todo = ({ todo }) => (
  <Div>
    <Span completed={todo.completed}>{todo.content}</Span>
    <Options todo={todo} />
  </Div>
);

export default Todo;
