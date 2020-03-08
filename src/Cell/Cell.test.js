import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('Cell', () => {  
  it('renders without crashing', () => {
    shallow(<Cell />);
  });

  it('renders with the value passed in', () => {
    const wrapper = shallow(<Cell value={0} />);
    expect(wrapper.find('.playerIcon').length).toBe(1);
  });
});
