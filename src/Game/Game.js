import React, { useState } from 'react';
import Board from '../Components/Board';

export const initialGrid = '_'.repeat(9).split('').map( () => null);
export const players = ['×', '○'];
export const intitialState = {
  grid: [...initialGrid],
  currentPlayer: players[0],
  gameOver: false,
  winner: null,
};

function Game() {
    const [grid, setGrid] = useState(intitialState.grid);
    const [currentPlayer, setCurrentPlayer] = useState(intitialState.currentPlayer);
  
    const handleBoardClick = (cell) => {
      if(grid[cell] === null) {
        // Map over the grid and update the clicked cell's value
        const newGrid = grid.map( (x, i) => (i === cell ? currentPlayer : x));
        setGrid(newGrid);
        setCurrentPlayer(currentPlayer === players[0] ? players[1] : players[0]);
      }
    };

    const reset = () => {
      setGrid(intitialState.grid);
      setCurrentPlayer(intitialState.currentPlayer);
    };

    return (
        <div className="game">
            <Board grid={grid} onClick={handleBoardClick} />
            <button className='btn btn--reset' onClick={reset}>Reset</button>
        </div>
    );
}


export default Game;
