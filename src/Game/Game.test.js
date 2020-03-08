import React from 'react';
import { shallow, mount } from 'enzyme';
import Game, { players, findWinner, initialGrid } from './Game';

describe('Game', () => {

  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('populates a cell when clicked', () => {
    const component = mount(<Game />);
    // Confirm it starts as null
    expect(component.find('Cell').first().prop('value')).toBeNull();
    component.find('Cell').first().simulate('click');
    // Confirm it has updated following click
    expect(component.find('Cell').first().prop('value')).toBe(players[0]);
  });

  it('populates cells with alternate players when clicked', () => {
    const component = mount(<Game />);
    component.find('Cell').forEach( (node) => {
      node.simulate('click');
    });
    component.find('Cell').forEach( (node, i) => {
      const expectedPlayer = players[i % 2];
      expect(node.prop('value')).toBe(expectedPlayer);
    });
  });

  it('doesn\'t repopulate an already populated cell', () => {
    const component = mount(<Game />);
    component.find('Cell').at(0).simulate('click');
    component.find('Cell').at(0).simulate('click');
    expect(component.find('Cell').at(0).prop('value')).toBe(players[0]);
  });

  it('resets the grid when Reset is clicked', () => {
    const component = mount(<Game />);
    component.find('Cell').forEach( (node) => {
      node.simulate('click');
    });
    component.find('Cell').forEach( (node, i) => {
      const expectedPlayer = players[i % 2];
      expect(node.prop('value')).toBe(expectedPlayer);
    });
    component.find('button').simulate('click');
    component.find('Cell').forEach( (node) => {
      expect(node.prop('value')).toBe(null);
    });
  });

});

describe('findWinner', () => {

  it('returns undefined if no winner', () => {
    expect(findWinner(initialGrid)).toBe(undefined);
    expect(findWinner([
      0, null, null,
      1, 1, null,
      0, null, null
    ])).toBe(undefined);
  });

  it('returns a player if a player wins', () => {
    expect(findWinner([
      0, 0, 0,
      1, 0, 1,
      1, 0, 1
    ])).toBe(0);
    expect(findWinner([
      0, 1, 0,
      1, 0, 1,
      1, 0, 0
    ])).toBe(0);
    expect(findWinner([
      1, 1, 0,
      1, 0, 1,
      1, 0, 0
    ])).toBe(1);
  });
});
