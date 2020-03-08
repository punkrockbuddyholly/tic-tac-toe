import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

it('renders without crashing', () => {
  shallow(<Board />);
});

it('renders a cell for each item provided via props.grid', () => {
  const grid = '_'.repeat(9).split('').map( () => ('x'));
  const wrapper = shallow(<Board grid={grid} />);
  expect(wrapper.children().length).toBe(9);
});
