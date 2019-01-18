import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {},
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = payload;
      const byIds = { ...state.byIds };
      delete byIds[id];
      return {
        ...state,
        allIds: state.allIds.filter(el => el !== id),
        byIds,
      };
    }
    case EDIT_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = payload;
      const todo = state.byIds[id];
      return {
        ...state,
        byIds: {
          ...state.byIds,
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
