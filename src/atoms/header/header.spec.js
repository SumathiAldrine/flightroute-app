import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

test('renders header component', () => {
  const mockClickFn = jest.fn();
  const label = 'Show Destnations';
  const headingLabel = 'Fly Experience';
  const subHeading = 'Top 10 interesting destinations from Dubai';
  const tree = renderer.create(<Header 
    label={label}
    headingLabel={headingLabel}
    subHeading={subHeading}
    handleClick={mockClickFn} />).toJSON();
  
  expect(tree).toMatchSnapshot();
});