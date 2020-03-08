import { findWinner } from './findWinner';
import { initialGrid } from './Game';

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

