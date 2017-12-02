import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />);

describe('<App/>', () => {
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    })

    it('initializes the state with an empty lists of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    it('adds a new gifts to state when clicking the ´add gifts´ button', () => {
        app.find('.btn-add').simulate('click');
        expect(app.state().gifts).toEqual([{id: 1}]);
    })

    it('adds a new gift to the rendered ist when clicking the ´add gifts´ button', () => {
        app.find('.btn-add').simulate('click');
        expect(app.find('.gift-list').children().length).toEqual(2);
    })
})