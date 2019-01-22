import { SHOW_MODAL, HIDE_MODAL } from '../actionTypes';

const initialState = {
  visible: false,
};

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SHOW_MODAL: {
      const { command, todo } = payload;
      return {
        ...state,
        visible: true,
        command,
        todo,
      };
    }
    case HIDE_MODAL: {
      return {
        visible: false,
      };
    }
    default: {
      return state;
    }
  }
};
