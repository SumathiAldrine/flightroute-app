import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import AirlineDestinations from './index';

configure({adapter: new Adapter()});


describe('Test Flight Destinations', () => {

    it('Test Select event', () => {
       const wrapper = shallow(
            <AirlineDestinations />
        );
        wrapper.find('Header').prop('onShowClick')();
        expect(wrapper.find('RouteInformation').exists()).toBeTruthy();
        wrapper.find('RouteInformation').at(5).prop('handleSelect')();
        expect(wrapper.find('RouteInformation').at(0).props().selected).toBe(5);
    });

});