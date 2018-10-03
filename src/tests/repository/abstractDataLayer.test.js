import configureStore from 'redux-mock-store';
import abstractDataLayer from '../../repository/abstractDataLayer';

describe('abstractDataLayer', () => {

    let mockStore;
    beforeEach(() => {
        const initialState = { todos: [] };
        const store = configureStore();
        mockStore = store(initialState);
    });

    describe('General', () => {
        it('Can be instantiated', () => {
            new abstractDataLayer(mockStore);
        }); 
    });
       
    describe('Todo domain', () => {
        it('Adds a todo item in the store upon calling add', () => {
            //arrange
            const dl = new abstractDataLayer(mockStore);
            const newTodo = { 
                id: 'test id',
                title: 'test title',
                description: 'test description'
            };            
            //act
            dl.todo.add(newTodo);

            //assert
            const actions = mockStore.getActions(); //mockStore does not write to store
            expect(actions.length).toBe(1);

            const addedAction = actions[0];
            expect(addedAction.type).toBe('domain/todo/TODO_ADD');

            const addedTodo = addedAction.payload;
            expect(addedTodo.id).toBe('test id')
            expect(addedTodo.title).toBe('test title');
            expect(addedTodo.description).toBe('test description');
        });

        it('Removes an existing todo item from the store upon calling remove', () => {
            //arrange
            const dl = new abstractDataLayer(mockStore);
            const newTodo1 = { 
                id: 'test id 1',
                title: 'test title 1',
                description: 'test description 1'
            };
            const newTodo2 = { 
                id: 'test id 2',
                title: 'test title 2',
                description: 'test description 2'
            };
            const newTodo3 = { 
                id: 'test id 3',
                title: 'test title 3',
                description: 'test description 3'
            };

            dl.todo.add(newTodo1);
            dl.todo.add(newTodo2);
            dl.todo.add(newTodo3);

            //act
            dl.todo.remove('test id 2');
            
            //assert
            const actions = mockStore.getActions();
            expect(actions.length).toBe(4);
            
            const removeAction = actions[3];
            expect(removeAction.type).toBe('domain/todo/TODO_REMOVE');
            expect(removeAction.payload).toBe('test id 2');
        });
    });
});
