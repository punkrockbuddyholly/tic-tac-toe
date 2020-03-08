import React from 'react';
import Cell from '../Cell'
import './board.css';

function Board(props) {
    const grid = props.grid || [];
    const cells = grid.map( (cell, i) => 
      <Cell key={`cell${i}`} value={cell} onClick={() => props.onClick(i)}/>);
    return (
        <div className="board">
            { cells }
        </div>
    );
}


export default Board;
