import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actionTypes';

// allIds and byIds for normalization of data
const initialState = {
  allIds: [],
  byIds: {},
};

export default (state = initialState, action) => {
  const payload = action.payload;
  const allIds = state.allIds;
  const byIds = state.byIds;
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        allIds: [...allIds, id],
        byIds: {
          ...byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = payload;
      const newByIds = { ...byIds };
      delete newByIds[id];
      return {
        ...state,
        allIds: allIds.filter(el => el !== id),
        byIds: newByIds,
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
            content,
          },
        },
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
            completed: !todo.completed,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
