import React from 'react';
import AddTodoForm from './AddTodoForm';
import VisibilityFilters from './VisibilityFilters';
import TodoList from './TodoList';
import './TodoListContainer.css';

// Future scalability option to have multiple todo lists
const TodoListContainer = () => (
  <div className="TodoListContainer">
    <AddTodoForm />
    <VisibilityFilters />
    <TodoList />
  </div>
);

export default TodoListContainer;
