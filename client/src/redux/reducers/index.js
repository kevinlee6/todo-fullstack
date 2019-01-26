import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todos from "./todosReducer";
import filter from "./visibilityReducer";
import modal from "./modalReducer";
import auth from "./authReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    todos,
    filter,
    modal
  });
