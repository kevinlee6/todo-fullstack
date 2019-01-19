import { combineReducers } from 'redux';
import todos from './todosReducer';
import filter from './visibilityReducer';
import modal from './modalReducer';

export default combineReducers({ todos, filter, modal });
