import { SIGN_IN, SIGN_OUT } from "../actionTypes";

const initialState = { isSignedIn: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { token } = action.payload;
      return {
        isSignedIn: true,
        token
      };
    }
    case SIGN_OUT: {
      return {
        isSignedIn: false
      };
    }
    default: {
      return state;
    }
  }
};
