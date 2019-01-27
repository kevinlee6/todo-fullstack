import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SYNC_TODOS
} from "../actionTypes";

// allIds and byIds for normalization of data
const initialState = {
  allIds: [],
  byIds: {}
};

export default (state = initialState, action) => {
  const payload = action.payload;
  const allIds = state.allIds;
  const byIds = state.byIds;
  switch (action.type) {
    case SYNC_TODOS: {
      const { todos } = payload;
      return {
        ...state,
        allIds: todos.map(todo => todo.id),
        byIds: todos.reduce((acc, todo) => {
          const { id, content, completed, created_at, updated_at } = todo;
          acc[id] = {
            content,
            completed,
            // may implement datetimes in future
            created_at,
            updated_at
          };
          return acc;
        }, {})
      };
    }
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        allIds: [id, ...allIds],
        byIds: {
          [id]: {
            content,
            completed: false
          },
          ...byIds
        }
      };
    }
    case DELETE_TODO: {
      const { id } = payload;
      const newByIds = { ...byIds };
      delete newByIds[id];
      return {
        ...state,
        allIds: allIds.filter(el => el !== id),
        byIds: newByIds
      };
    }
    case EDIT_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        byIds: {
          ...byIds,
          [id]: {
            ...byIds[id],
            content
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = payload;
      const todo = byIds[id];
      return {
        ...state,
        byIds: {
          ...byIds,
          [id]: {
            ...todo,
            completed: !todo.completed
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};
