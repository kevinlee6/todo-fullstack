import { TOGGLE_MODAL } from '../actionTypes';

const initialState = {
  visible: false,
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case TOGGLE_MODAL: {
      const { command, todo } = payload;
      return {
        ...state,
        visible: !state.visible,
        command,
        todo,
      };
    }
    default: {
      return state;
    }
  }
};
