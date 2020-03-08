import React from 'react';
import { playerIcons } from '../../Game';
import './cell.css';

function Cell(props) {
    const icon = playerIcons[props.value];
    return (
        <div className="cell" onClick={props.onClick}>
            { icon }
        </div>
    );
}

export default Cell;
