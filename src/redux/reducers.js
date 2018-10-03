import { combineReducers } from 'redux'

import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';

const combineStoreReducers = combineReducers({
    todos: todoReducer,
    users: userReducer
});

export default combineStoreReducers;