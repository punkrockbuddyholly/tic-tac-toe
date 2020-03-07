import React from 'react';
import './board.css';

function Board(props) {
    const grid = props.grid || [];
    const cells = grid.map( (cell, i) => <div key={`cell${i}`}></div>);
    return (
        <div className="board">
            { cells }
        </div>
    );
}


export default Board;
