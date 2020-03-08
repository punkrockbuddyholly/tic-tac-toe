import React from 'react';
import { playerIcons } from '../playerIcons';

function Cell(props) {
    const icon = playerIcons[props.value];
    return (
        <div className="cell" onClick={props.onClick}>
            { icon }
        </div>
    );
}

export default Cell;
