import React from 'react';
import renderer from 'react-test-renderer';
import AircraftInfo from './index';

test('renders Aircraft Information', () => {
  const tree = renderer.create(<AircraftInfo />).toJSON();
  
  expect(tree).toMatchSnapshot();
});
