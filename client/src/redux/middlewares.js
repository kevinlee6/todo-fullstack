// file not used; bugs because everything is intercepted by this

import { applyMiddleware } from "redux";
import thunkMiddlware from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

// from redux docs
// modified types to type to reduce more boilerplate
function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const { type, callAPI, shouldCallAPI = () => false, payload = {} } = action;
    if (!shouldCallAPI()) {
      return { payload: { type, payload } };
    }
    if (!type) {
      // Normal action: pass it on
      return next(action);
    }

    if (typeof type !== "string") {
      throw new Error("Expected a string.");
    }

    if (typeof callAPI !== "function") {
      throw new Error("Expected callAPI to be a function.");
    }

    const typeUpper = type.toUpperCase();
    const REQUEST = typeUpper + "_REQUEST";
    const SUCCESS = typeUpper + "_SUCCESS";
    const FAILURE = typeUpper + "_FAILURE";

    dispatch(
      Object.assign({}, payload, {
        type: REQUEST
      })
    );

    return callAPI().then(
      response =>
        dispatch(
          Object.assign({}, payload, {
            response,
            type: SUCCESS
          })
        ),
      error =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: FAILURE
          })
        )
    );
  };
}

const middlewares = [
  thunkMiddlware,
  routerMiddleware(history),
  callAPIMiddleware
];
export const middlewareEnhancer = applyMiddleware(...middlewares);
