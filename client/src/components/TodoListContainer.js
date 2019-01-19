import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const TodoListContainer = () => (
  <div>
    <AddTodoForm />
    <TodoList />
  </div>
);

export default TodoListContainer;
