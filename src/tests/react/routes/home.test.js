import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import Home from '../../../react/routes/Home';
import diContainer from '../../../diContainer';
import abstractDataLayerMock from '../../mocks/abstractDataLayerMock';

const createMount = (mockedStore) => {
    return mount(
        <Provider store={mockedStore}>
            <Home />
        </Provider>
    );
}

describe('Home router component', () => {
    //global arrange
    const initialState = {
        todos: [
            {
                id: 'testId1',
                title: 'testTitle1',
                description: 'testDescription1'
            },
            {
                id: 'testId2',
                title: 'testTitle2',
                description: 'testDescription2'
            }
        ]
    };
    let mockedStore;

    beforeEach(() => {
        mockedStore = configureStore()(initialState)
    });

    describe('The react part', () => {
        it('Renders deep without crashing...', () => {
            //arrange
            //nothing to arrange

            //act
            const component = createMount(mockedStore);

            //assert
            //nothing to assert

            //cleanup
            component.unmount();
        });

        it('Displays the todo-list with the correct number of items', () => {
            //arrange
            //nothing to arrange

            //act
            const component = createMount(mockedStore);

            //assert
            const todoList = component.find('TodoList');
            expect(todoList).toBeDefined();

            const todos = todoList.find('TodoItem');
            expect(todos.length).toBe(2);

            //cleanup
            component.unmount();
        });

        it('Has the correct default state upon mounting', () => { 
            //arrange
            //nothing to arrange

            //act
            const component = createMount(mockedStore);

            const home = component.find('Home');
            const homeState = home.instance().state;
            
            //assert
            expect(homeState).toHaveProperty('newTitle');
            expect(homeState).toHaveProperty('newDescription');
            expect(homeState.newTitle).toEqual('');
            expect(homeState.newDescription).toEqual('');

            //cleanup
            component.unmount();
        });

        it('Updates the state when entering a title', () => {
            //arrange
            const component = createMount(mockedStore);

            //act
            const inputTitle = component.find('.todo-addnew input').first();
            inputTitle.simulate('change', { target: { value: 'test input' } });

            //assert
            const home = component.find('Home').instance();
            const homeState = home.state;
            expect(homeState.newTitle).toBe('test input');

            //cleanup
            component.unmount();
        });

        it('Updates the state when entering a description', () => {
            //arrange
            const component = createMount(mockedStore);

            //act
            const inputDescription = component.find('.todo-addnew input').last();
            inputDescription.simulate('change', { target: { value: 'test description' } });
        
            //assert
            const home = component.find('Home').instance();
            const homeState = home.state;
            expect(homeState.newDescription).toBe('test description');

            //cleanup
            component.unmount();
        });

        it('Calls the Add function when clicking the button', () => {
            //arrange
            const component = createMount(mockedStore);
            const home = component.find('Home').instance();
            
            const mock = jest.fn();
            
            home.onAddTodo = mock;
            home.forceUpdate();

            //act
            const button = component.find('.todo-addnew button');
            button.simulate('click');

            //assert
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledTimes(1);

            //cleanup
            component.unmount();
        });
    });

    describe('The add todo functionality', () => {

        //Dependency injection - bootstrapping
        diContainer.bootstrap(null, new abstractDataLayerMock());

        it('Calls the datalayer add function', () => {
            //arrange
            const component = createMount(mockedStore);

            //act
            const button = component.find('.todo-addnew button');
            button.simulate('click');

            //assert
            const funcInfo = diContainer.dataLayer.todo.info;
            expect(funcInfo.todosAdd.wasCalled).toBeTruthy();

            //cleanup
            component.unmount();
        });

        it('Supplies the datalayer with the correct arguments from the state', () => {
            //arrange
            const component = createMount(mockedStore);
            const home = component.find('Home');
            home.instance().state = {
                newTitle: 'test title',
                newDescription: 'test description'
            };

            //act
            const button = home.find('.todo-addnew button');
            button.simulate('click');

            //assert
            const funcInfo = diContainer.dataLayer.todo.info;
            const args = funcInfo.todosAdd.arguments;
            expect(args.title).toBe('test title');
            expect(args.description).toBe('test description');

            //cleanup
            component.unmount();
        });

        it('Resets the state to a default state', () => {
            //arrange
            const component = createMount(mockedStore);
            const home = component.find('Home');
            home.instance().state = {
                newTitle: 'test title',
                newDescription: 'test description'
            };

            //act
            const button = home.find('.todo-addnew button');
            button.simulate('click');

            //assert
            const finState = home.instance().state;
            expect(finState).toHaveProperty('newTitle');
            expect(finState).toHaveProperty('newDescription');
            expect(finState.newTitle).toBe('');
            expect(finState.newDescription).toBe('');

            //cleanup
            component.unmount();
        });
    });
});