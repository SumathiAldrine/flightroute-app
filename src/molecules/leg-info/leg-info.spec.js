import React from 'react';
import renderer from 'react-test-renderer';
import LegInfo from './index';

describe('Test Leg Information', () => {
  it('Render Leg Information for Mobile', () => {
    const tree = renderer.create(<LegInfo 
      legName="DXB"
      time={"08:30"}
      date={"29 Sep 21"}
      isMobile= {true}/>).toJSON();
  
    expect(tree).toMatchSnapshot();
  });

  it('Render Leg Information', () => {
    const tree = renderer.create(<LegInfo 
      legName="DXB"
      time={"08:30"}
      date={"29 Sep 21"}
      isMobile= {false}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});