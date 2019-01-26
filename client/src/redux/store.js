import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

export default preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
