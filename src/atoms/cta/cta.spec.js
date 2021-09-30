import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CallToAction from './index.js';
configure({adapter: new Adapter()});

describe('Test CallToAction Component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(
        <CallToAction
            index={0}
            selected={false}
            handleSelect={mockCallBack}
        />
    );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Test Button unSelect', () => {
    const mockCallBack = jest.fn();
    const button = shallow(
        <CallToAction
            index={0}
            selected={true}
            handleSelect={mockCallBack}
        />
    );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});