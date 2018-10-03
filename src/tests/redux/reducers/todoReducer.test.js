import _ from 'lodash';
import uuidv1 from 'uuid/v1';

import todoReducer from '../../../redux/reducers/todoReducer';
import { add } from '../../../redux/actions/todo/add';
import { remove } from '../../../redux/actions/todo/remove';

describe('todoReducer', () => {

    //ARRANGE GLOBAL
    const emptyAction = { 
        type: 'TEST-EMPTY'
    };

    describe('State', () => {
        it('Has a correct default state', () => {
            //ARRANGE
            const expectedState = [];

            //ACT
            const reducer = todoReducer(undefined, emptyAction);

            //ASSERT
            expect(reducer).toEqual(expectedState);
        })
    });

    describe('TODO_ADD path', () => {
        it('Adds a new object to the store when receiving action', () => {
            //ARRANGE
            const todo = { title: 'testTitle', description: 'testDescription' };
            
            //ACT
            const addAction = add(todo);
            const reducer = todoReducer(undefined, addAction);

            //ASSERT
            expect(Array.isArray(reducer)).toBeTruthy();
            expect(reducer.length).toBe(1);

            const assertTodo = reducer[0];
            expect(assertTodo.title).toBe('testTitle');
            expect(assertTodo.description).toBe('testDescription');
        });

        it('Adds a new object to the store when the store is not empty', () => {
            //ARRANGE
            const todo1 = { title: 'testTitle', description: 'testDescription' };
            const todo2 = { title: 'testTitle2', description: 'testDescription2' };
            const addAction1 = add(todo1);
            const addAction2 = add(todo2);

            //ACT
            const firstState = todoReducer(undefined, addAction1);
            const reducer = todoReducer(firstState, addAction2);

            //ASSERT
            expect(reducer.length).toBe(2);

            const assertTodo = reducer[1];
            expect(assertTodo.title).toBe('testTitle2');
            expect(assertTodo.description).toBe('testDescription2');
        });
    });

    describe('TODO_REMOVE path', () => {
        it('Removes the correct item from the store when receiving TODO_REMOVE action', () => {
            //ARRANGE
            const testid = uuidv1();
            const state = [
                { 
                    id: uuidv1(), 
                    title: 'testtitle1',
                    description: 'testdescription1'
                },
                { 
                    id: testid, 
                    title: 'testtitle2',
                    description: 'testdescription2'
                },
                { 
                    id: uuidv1(), 
                    title: 'testtitle3',
                    description: 'testdescription3'
                }
            ]

            const initialState = todoReducer(state, emptyAction);
            
            //ACT
            const removeAction = remove(testid);
            const reducer = todoReducer(initialState, removeAction);

            //ASSERT
            expect(reducer.length).toBe(2);
            expect(_.filter(reducer, todo => todo.id === testid)).toEqual([]);
        });
    }); 
});