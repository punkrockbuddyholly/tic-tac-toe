import React from 'react';
import './cell.css';

function Cell(props) {
    const value = props.value;
    return (
        <div className="cell">
            { value }
        </div>
    );
}


export default Cell;
