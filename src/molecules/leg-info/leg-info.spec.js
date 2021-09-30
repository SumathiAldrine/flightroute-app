import React from 'react';
import renderer from 'react-test-renderer';
import LegInfo from './index';

test('Render Leg Information', () => {
  const tree = renderer.create(<LegInfo />).toJSON();
  
  expect(tree).toMatchSnapshot();
});