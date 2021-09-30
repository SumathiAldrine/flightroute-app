import React from 'react';
import renderer from 'react-test-renderer';
import ImageButton from './index';

test('renders ImageButton component', () => {
  const mockClickFn = jest.fn();
  const tree = renderer.create(<ImageButton label={'Destinatiomn'} handleClick={mockClickFn} />).toJSON();
  
  expect(tree).toMatchSnapshot();
});