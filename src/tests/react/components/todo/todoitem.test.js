import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '../../../../react/components/todo/TodoItem';

describe('TodoItem component', () => {
    //global arrange
    const testTodo = {
        id: 'testId',
        title: 'testTitle',
        description: 'testDescription'
    };

    it('Displays passed-through todo item correctly', () => {
        //arrange
        //nothing to arrange

        //act
        const component = shallow(<TodoItem todo={testTodo} />);

        //assert
        const title = component.find('.todoItem h3');
        expect(title.html()).toBe('<h3>testTitle</h3>');
        
        const description = component.find('.todoItem p');
        expect(description.html()).toBe('<p>testDescription</p>');

        //cleanup
        component.unmount();
    });

    it('Calls the remove function upon clicking on the Remove button', () => {
        //arrange
        let isClicked = false;

        const component = shallow(<TodoItem todo={testTodo} onRemove={() => { isClicked = true; }} />);
        const button = component.find('button');

        //act
        button.simulate('click');

        //assert
        expect(isClicked).toBeTruthy();

        //cleanup
        component.unmount();
    });

    it('Passes the correct id upon calling the Remove function', () => {
        //arrange
        let correctId = '';
        const component = shallow(<TodoItem todo={testTodo} onRemove={(id) => { correctId = id }} />);
        const button = component.find('button');

        //act
        button.simulate('click');

        //assert
        expect(correctId).toBe('testId');

        //cleanup
        component.unmount();
    });
});