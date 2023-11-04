import React, { memo } from "react";
import './Node.css';

const Node = memo(({isStart, isEnd, row, col, isVisited, isPath, isWall, weight}) => {

    let classes = '';

    if (isStart) {
        classes = 'node-start';
    } else if (isEnd) {
        classes = 'node-end';
    } else if (isWall) {
        classes = 'isWall';
    } else if (isPath) {
        classes = 'node-shortest-path';
    } else if (isVisited) {
        classes = 'node-visited';
    } 

    let color = "";
    const d = 2;
    const visitedColor =  `rgb(${245/(weight/d)}, ${176/(weight/d)}, ${65/(weight/d)}`;
    const regularColor =  `rgb(${215/(weight/d)}, ${189/(weight/d)}, ${226/(weight/d)})`;
    const pathColor = `rgb(${203/(weight/d)}, ${67/(weight/d)}, ${53/(weight/d)})`;

    switch (classes) {
        case 'node-visited':
            color = visitedColor;
            break
        case 'node-shortest-path':
            color = pathColor;
            break
        default: 
            color = regularColor;
            break;
    }

    let style = (classes === 'node-visited' || classes === 'node-shortest-path' || classes === '') ? {backgroundColor: color} : {};

    return (

        <div style={style} className={`node ${classes}`} data-row={row} data-col={col}>
            <div className="symbol"></div>

        </div>
    );


})

export default Node;