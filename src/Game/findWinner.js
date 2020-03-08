export const findWinner = (grid) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let winner = undefined;
  for(let combo of winningCombos) {
    let player = grid[combo[0]];
    for(let cell of combo) {
      if(player === grid[cell] && grid[cell] !== null) {
        winner = player;
      } else {
        winner = undefined;
        break;
      }
    };
    if(winner !== undefined) {
      break;
    }
  };
  return winner;
}
