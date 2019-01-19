import VISIBILITY_FILTERS from '../constants';

const getTodosState = store => store.todos;

const getTodoIds = store => {
  const todos = getTodosState(store);
  return todos ? todos.allIds : [];
};

const getTodoById = (store, id) => {
  const todos = getTodosState(store);
  return todos ? { ...todos.byIds[id], id } : {};
};

const getTodos = store => getTodoIds(store).map(id => getTodoById(store, id));

const { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } = VISIBILITY_FILTERS;

export default (store, filter) => {
  const todos = getTodos(store);
  switch (filter) {
    case FILTER_COMPLETED: {
      return todos.filter(todo => todo.completed);
    }
    case FILTER_INCOMPLETE: {
      return todos.filter(todo => !todo.completed);
    }
    case FILTER_ALL:
    default: {
      return todos;
    }
  }
};
