import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  TOGGLE_MODAL,
} from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodo = (id, content) => ({
  type: EDIT_TODO,
  payload: {
    id,
    content,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});

export const toggleModal = (command = null, todo = null) => ({
  type: TOGGLE_MODAL,
  payload: {
    command,
    todo,
  },
});
