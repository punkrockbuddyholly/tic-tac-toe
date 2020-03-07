import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

it('renders without crashing', () => {
  shallow(<Board />);
});

it('renders a cell for each item provided via props.grid', () => {
  // Grid an array of 9 cells
  const grid = '_'.repeat(9).split('').map( () => ({ value: 'x' }));
  const wrapper = shallow(<Board grid={grid} />);
  expect(wrapper.children().length).toBe(9);
});
