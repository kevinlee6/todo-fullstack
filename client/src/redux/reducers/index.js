import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todos from "./todosReducer";
import filter from "./visibilityReducer";
import modal from "./modalReducer";

export default history =>
  combineReducers({ router: connectRouter(history), todos, filter, modal });
