import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure } from 'enzyme';
import renderer from 'react-test-renderer';
import FlightAction from './index.js';
configure({adapter: new Adapter()});

describe('Test FlightAction Component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const tree = renderer.create(<FlightAction
      flightNo="1"
      index={0}
      selected={false}
      handleSelect={mockCallBack}
      isMobile= {false}
  />).toJSON();
  
    expect(tree).toMatchSnapshot();
  });

  it('Test click event for Mobile', () => {
    const mockCallBack = jest.fn();
    const tree = renderer.create(<FlightAction
      flightNo="1"
      index={0}
      selected={false}
      handleSelect={mockCallBack}
      isMobile= {true}
  />).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});