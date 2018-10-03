import _ from 'lodash';

import { TODO_ADD } from '../actions/todo/add';
import { TODO_REMOVE } from '../actions/todo/remove';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODO_ADD: 
            const newState = [ ...state ];
            newState.push(action.payload);
            return newState;

        case TODO_REMOVE:
            return _.filter(state, todo => todo.id !== action.payload);

        default:
            return state;
    }
}

export default todoReducer;