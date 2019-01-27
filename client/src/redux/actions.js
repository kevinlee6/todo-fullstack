import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SHOW_MODAL,
  HIDE_MODAL,
  SIGN_IN,
  SIGN_OUT,
  SYNC_TODOS
} from "./actionTypes";

let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// payload is whole todo object, from db creation

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const editTodo = (id, content) => ({
  type: EDIT_TODO,
  payload: {
    id,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

// null as default, in case toggleModal will be expanded
// for other modal usage, such as login
export const showModal = (command, todo = null) => ({
  type: SHOW_MODAL,
  payload: {
    command,
    todo
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL
});

export const signIn = token => ({
  type: SIGN_IN,
  payload: { token }
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const syncTodos = todos => ({
  type: SYNC_TODOS,
  payload: { todos }
});
