import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const middlewares = [routerMiddleware(history), thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

export default preloadedState =>
  createStore(rootReducer, preloadedState, composedEnhancers);
