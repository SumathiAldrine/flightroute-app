import React from 'react';
import renderer from 'react-test-renderer';
import RouteInformation from './index';

describe('Test Route Information', () => {
  it('renders Route Information for desktop', () => {
  const mockHandleSelect = jest.fn();
  const props = {
    selected: true,
    handleSelect: mockHandleSelect, 
    index: 1, 
    item: {
      id :1, 
      flightNo :'EK500', 
      departureDate:'12Dec2021', 
      departureTime:'08:30', 
      arrivalDate:'12Dec2021', 
      arrivalTime:'11:30', 
      duration:'3hrs 14mins', 
      origin: 'DXB', 
      destination: 'BOM', 
      aircraft: 'B777'
    }
  };
  const tree = renderer.create(<RouteInformation isMobile ={false} {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
  });

  it('renders Route Information for mobile', () => {
    const mockHandleSelect = jest.fn();
    const props = {
      selected: false,
      handleSelect: mockHandleSelect, 
      index: 1, 
      item: {
        id :1, 
        flightNo :'EK500', 
        departureDate:'12Dec2021', 
        departureTime:'08:30', 
        arrivalDate:'12Dec2021', 
        arrivalTime:'11:30', 
        duration:'3hrs 14mins', 
        origin: 'DXB', 
        destination: 'BOM', 
        aircraft: 'B777'
      }
    };
    const tree = renderer.create(<RouteInformation isMobile ={true} {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
    });

});