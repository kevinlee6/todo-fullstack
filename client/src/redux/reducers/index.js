import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './visibilityReducer';

export default combineReducers({ todos, filter });
