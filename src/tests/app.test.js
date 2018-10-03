import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App component', () => {

    it('Renders without crashing', () => {
        shallow(<App />);
    });

});