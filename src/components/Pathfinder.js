import React, {useState, useEffect} from "react";
import Node from './Node.js';
import aStar from '../algorithms/aStar.js';
import dijkstra from '../algorithms/dijkstra.js';
import bfs from '../algorithms/bfs.js';
import dfs from '../algorithms/dfs.js';
import getRandomInt from "../utilities/getRandomInt.js";
import Modal from './Modal.js';


import './Pathfinder.css';
import recursiveBacktracking from "../algorithms/recursiveBacktracking.js";

const rows = 31;
const cols = 31;

const Pathfinder = ({firstLoad, setFirstLoad}) => {


    const [Grid, setGrid] = useState([]);
    const [current, setCurrent] = useState(0);
    const [Algorithms, setAlgorithms] = useState([bfs, dfs, dijkstra, aStar]);
    const [algRunning, setAlgRunning] = useState(false);
    const [isMousePressed, setIsMousePressed] = useState(false);
    const [option, setOption] = useState("wall");
    const [startNode, setStartNode] = useState({x: 1, y: 1});
    const [endNode, setEndNode] = useState({x: getRandomInt(0, rows-1), y: getRandomInt(0, cols-1)});
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        initializeGrid();
        if (firstLoad) {
            setShowModal(true);
            setFirstLoad(false);
        }
    }, [])


    const initializeGrid = (option = 'clean') => {
        let grid = new Array(rows);

        for (let i=0; i<rows; i++) {
            grid[i] = new Array(cols);
        }

        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                grid[i][j] = createNode(i,j);
                if (option === 'weights') {
                    grid[i][j].weight = getRandomInt(2,6);
                }
            }
        }
        const start = grid[startNode.x][startNode.y];

        if (option === 'maze') {
            grid = recursiveBacktracking(grid, start);
        }

        setGrid(grid);

    }    

    const changeGrid = (option) => {
        let newGrid = Grid.slice();
        for(let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                newGrid[i][j].isVisited = false;
                newGrid[i][j].isPath = false;
            }
        }

        if (option === 'weights') {
            for (let i=0; i<rows; i++) {
                for (let j=0; j<cols; j++) {
                    newGrid[i][j].weight = getRandomInt(2,6);
                }
            }    
        } else if (option === 'maze') {
            newGrid = recursiveBacktracking(newGrid, startNode);
        } else if (option === 'clean') {
            for (let i=0; i<rows; i++) {
                for(let j=0; j<cols; j++) {
                    newGrid[i][j].isWall = false;
                    newGrid[i][j].weight = 1;
    
                }
            }
        }

        setGrid(newGrid);
    }

    const createNode = (x, y) => {
        return {
            x: x,
            y: y,
            g: Infinity,
            f: Infinity,
            h: Infinity,
            weight: 1,
            parent: undefined, 
            isWall: false,
            isVisited: false,
            isPath: false,
            isStart: x === startNode.x && y === startNode.y,
            isEnd: x === endNode.x && y === endNode.y,
        }
    }

    const refreshGrid = () => {

        const newGrid = Grid.slice();
        for (let i=0; i<rows; i++) {
            for(let j=0; j<cols; j++) {
                newGrid[i][j].isVisited = false;
                newGrid[i][j].isPath = false;

            }
        }
 
        setGrid(newGrid);

    };



    const visualizePath = (visited, path) => {

        
        for (let i=0; i<=visited.length; i++) {
            if (i === visited.length) {
                setTimeout(() => {
                    visualizeShortest(path);
                }, 20*i);
            } else {
                setTimeout(() => {

                    let current = visited[i];

                    const newGrid = Grid.slice();
                    newGrid[current.x][current.y].isVisited = true;
                    
                    setGrid(newGrid);

                }, 20*i);

            }

        }
    };

    const visualizeShortest = (shortestPath) => {

        for (let i=0; i<=shortestPath.length; i++) {
            if (i === shortestPath.length) {
                setTimeout(() => {
                    setAlgRunning(false);
                }, 20*i);
            } else {    
            setTimeout(() => {

                const current = shortestPath[i];
                const newGrid = Grid.slice();

                newGrid[current.x][current.y].isPath = true;

                setGrid(newGrid);

            }, 20*i);
        }
        }

    };    

    const visualizeAlg = () => {
        setAlgRunning(true);
        refreshGrid();

        const newGrid = copyGrid();
        const start = newGrid[startNode.x][startNode.y];
        const end = newGrid[endNode.x][endNode.y];


        let path = Algorithms[current](start, end, newGrid);

        visualizePath(path.visited, path.path);

    }

    const copyGrid = () => {
        let newGrid = structuredClone(Grid);

        return newGrid;
    }

    
    const setWall = (row, col, clean) => {
        setGrid(
            Grid.map((array) => array.map((obj) => {
                if (obj.x === row && obj.y === col && !obj.isStart && !obj.isEnd ) {
                        return clean ? {...obj, isWall: false} : {...obj, isWall: true};
                }
                return obj;
            }))
        );  
    }

    const setStart = (row, col) => {
        setGrid(
            Grid.map((array) => array.map((obj) => {
                if (obj.x === row && obj.y === col) {
                    return {...obj, isStart: true} ;
                }           
                if (obj.x === startNode.x && obj.y === startNode.y) {
                    return {...obj, isStart: false};
                }          
                return obj;
            }))
        );     
        setStartNode({x: row, y: col});         
    } 

    const setEnd = (row, col) => {
        setGrid(
            Grid.map((array) => array.map((obj) => {
                if (obj.x === row && obj.y === col) {
                    return {...obj, isEnd: true} ;
                }           
                if (obj.x === endNode.x && obj.y === endNode.y) {
                    return {...obj, isEnd: false};
                }          
                return obj;
            }))
        );    
        setEndNode({x: row, y: col});
    }

    const setWeight = (row, col, value) => {
        setGrid(
            Grid.map((array) => array.map((obj) => {
                if (obj.x === row && obj.y === col && !obj.isStart && !obj.isEnd ) {
                        return {...obj, weight: value};
                }
                return obj;
            }))
        );  
    }



    const handleMouseDown = (e) => {
        const row = Number(e.target.getAttribute('data-row'));
        const col = Number(e.target.getAttribute('data-col'));

        let clean = false;

        if (option === "wall" && Grid[row][col].isWall) {
            setOption("wallClean");
            clean = true;
        } else if (option === "weightLow" && Grid[row][col].weight === 2) {
            setOption("weightCleanLow");
            clean = true;
        } else if (option === "weightMid" && Grid[row][col].weight === 4) {
            setOption("weightCleanMid");
            clean = true;
        } else if (option === "weightHigh" && Grid[row][col].weight === 6) {
            setOption("weightCleanHigh");
            clean =true;
        }


        if (!algRunning) {
            switch(option) {
                case "wall":
                    clean ? setWall(row, col, true) : setWall(row, col, false);
                    break;
                case "start":
                    setStart(row, col)
                    break;
                case "end":
                    setEnd(row, col);
                    break;
                case "weightLow":
                    clean ? setWeight(row, col, 1) : setWeight(row, col, 2);
                    break;
                case "weightMid":
                    clean ? setWeight(row, col, 1) : setWeight(row, col, 4);
                    break;
                case "weightHigh":
                    clean ? setWeight(row, col, 1) : setWeight(row, col, 6);
                    break; 
                default: 
                    break;               

            }
            setIsMousePressed(true)
        }
    }

    const handleMouseOver = (e) => {
        const row = Number(e.target.getAttribute('data-row'));
        const col = Number(e.target.getAttribute('data-col'));

        if (isMousePressed) {
            switch(option) {
                case "wall":
                    setWall(row, col, false);
                    break;
                case "wallClean":
                    setWall(row, col, true);
                    break;
                case "weightCleanLow":
                case "weightCleanMid":
                case "weightCleanHigh":
                    setWeight(row, col, 1);
                    break;
                case "weightLow":
                    setWeight(row, col, 2);
                    break;
                case "weightMid":
                    setWeight(row, col, 4);
                    break;
                case "weightHigh":
                    setWeight(row, col, 6);
                    break;   
                default: 
                    break;             
            }
        }
    }

    const handleMouseUp = (e) => {

        if (option === "wallClean") {
            setOption("wall");
        } else if (option === "weightCleanLow") {
            setOption("weightLow");
        } else if (option === "weightCleanMid") {
            setOption("weightMid");
        } else if (option === "weightCleanHigh") {
            setOption("weightHigh");
        }
        setIsMousePressed(false);
    }

    const onAlgorithmChange = (e) => {
        const selected = Number(e.target.value);

        setCurrent(selected);

    };

    const onOptionChange = (e) => {
        setOption(e.target.value);
    }

    return (
            <div className="pathfinder">

                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <div className="menu">

                    <label className="menu-select-label" htmlFor="alg-select">Algorytm:</label>

                    <select className="menu-select" name="alg-select" onChange={onAlgorithmChange}>
                            <option value="0">BFS</option>
                            <option value="1">DFS</option>
                            <option value="2">Algorytm Dijkstry</option>
                            <option value="3">Algorytm A*</option>
                    </select>

                    <button className={algRunning ? "btn inactive menu-btn" : "btn menu-btn run"} onClick={visualizeAlg}>Uruchom</button>
                    <button className={algRunning ? "btn inactive menu-btn" : "btn menu-btn"} onClick={() => changeGrid("clean")}>Wyczyść</button>
                    <button className={algRunning ? "btn inactive menu-btn" : "btn menu-btn"} onClick={() => changeGrid("maze")}>Losowy labirynt</button>
                    <button className={algRunning ? "btn inactive menu-btn" : "btn menu-btn"} onClick={() => changeGrid("weights")}>Losowe wagi</button>
                    <button className={algRunning ? "btn inactive menu-btn" : "btn menu-btn"} onClick={() => setShowModal(true)}>Instrukcja</button>

                </div>

                <div className="options-container">
                        <div className="options">
                        <button onClick={onOptionChange} className={option === "wall" || option === "wallClean" ? "btn option active" : "btn option"} value="wall">Ściana</button>
                        <button onClick={onOptionChange} className={option === "start" ? "btn option active" : "btn option"} value="start">Start</button>
                        <button onClick={onOptionChange} className={option === "end" ? "btn option active" : "btn option"} value="end">Koniec</button>
                        <button onClick={onOptionChange} className={option === "weightLow" || option === "weightCleanLow" ? "btn option active" : "btn option"} value="weightLow">Waga niska</button>
                        <button onClick={onOptionChange} className={option === "weightMid" || option === "weightCleanMid" ? "btn option active" : "btn option"} value="weightMid">Waga średnia</button>
                        <button onClick={onOptionChange} className={option === "weightHigh" || option === "weightCleanHigh"? "btn option active" : "btn option"} value="weightHigh">Waga wysoka</button>
                        
                        </div>
                </div>
        
                <div className="grid" onMouseDown={handleMouseDown} 
                    onMouseOver={handleMouseOver} 
                    onMouseUp={handleMouseUp}
                    onDragStart={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); 
                        return false;
                    }}
                    >
                    {Grid.map((row, rowIndex) => {
                        return (
                            <div key={rowIndex} className="rowWrapper">
                                {row.map((col, colIndex) => {
                                    const {isStart, isEnd, isWall, isVisited, isPath, weight} = col;
                                    return (
                                        <Node key={colIndex} isVisited={isVisited} isPath={isPath} isStart={isStart} isEnd={isEnd} isWall={isWall} row={rowIndex} col={colIndex} weight={weight}/>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>


            </div>
    )
}

export default Pathfinder;