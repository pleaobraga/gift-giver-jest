import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {

    const app = shallow(<App />);
    
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    })

    it('initializes the state with an empty lists of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('when clicking the ´add-gift´ button', () => {
        
        beforeEach(() => {
            app.find('.btn-add').simulate('click');            
        })

        afterEach(() => {
            app.setState({gifts: [] })
        })
        
        it('adds a new gifts to state when clicking the ´add gifts´ button', () => {
            expect(app.state().gifts).toEqual([{id: 1}]);
        })
    
        it('adds a new gift to the rendered ist when clicking the ´add gifts´ button', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

        it('create a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true)
        })
    })
})