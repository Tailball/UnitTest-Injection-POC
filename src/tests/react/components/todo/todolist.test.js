import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TodoList from '../../../../react/components/todo/TodoList';

describe('TodoList component', () => {
    //global arrange
    const storeState = {
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

    let store;

    beforeEach(() => {
        store = configureStore()(storeState)
    });

    it('Displays all todo items on the dashboard', () => {
        //arrange
        //nothing to arrange

        //act
        const component = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

        //assert
        const items = component.find('.todoItem');
        expect(items.length).toBe(2);

        const title1 = items.first().find('h3');
        expect(title1.text()).toBe('testTitle1');

        const description2 = items.last().find('p');
        expect(description2.text()).toBe('testDescription2');

        //cleanup
        component.unmount();
    });

    it('Removes a todo from the list if the remove button on the todo was pressed', () => {
        //arrange
        const component = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
            
        const list = component.find('TodoList').instance();
        let mockFn = jest.fn();
        list.onRemoveClick = mockFn;

        list.forceUpdate();
        component.update();
        
        //act
        const items = component.find('.todoItem');
        const button = items.first().find('button');
        button.simulate('click');

        //assert
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith('testId1');

        //cleanup
        component.unmount();
    });
});