import React from 'react';
import './cell.css';

function Cell(props) {
    const value = props.value;
    return (
        <div className="cell" onClick={props.onClick}>
            { value }
        </div>
    );
}

export default Cell;
