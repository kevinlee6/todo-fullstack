import { combinerReducers } from 'redux';
import todos from './todosReducer';

export default combinerReducers({ todos });
