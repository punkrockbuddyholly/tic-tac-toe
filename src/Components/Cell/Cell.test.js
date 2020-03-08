import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';
import { playerIcons } from '../../Game';

it('renders without crashing', () => {
  shallow(<Cell />);
});

it('renders with the value passed in', () => {
  const wrapper = shallow(<Cell value={0} />);
  expect(wrapper.text()).toBe(playerIcons[0]);
});
