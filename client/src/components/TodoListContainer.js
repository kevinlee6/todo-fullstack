import React from 'react';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from './VisibilityFilters';
import TodoList from './TodoList';

const TodoListContainer = () => (
  <div>
    <AddTodoForm />
    <VisibilityFilters />
    <TodoList />
  </div>
);

export default TodoListContainer;
