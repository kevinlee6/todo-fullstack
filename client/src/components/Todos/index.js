import React from 'react';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from './VisibilityFilters';
import TodoList from './TodoList';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1000px;
`;

// Future scalability option to have multiple todo lists
export default () => (
  <Div>
    <AddTodoForm />
    <VisibilityFilters />
    <TodoList />
  </Div>
);
