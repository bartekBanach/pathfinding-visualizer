import getRandomInt from "../utilities/getRandomInt";

function recursiveBacktracking(grid, startNode) {
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = [];


    for (let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            grid[i][j].isWall = true;
            /*if (i === 0 || j === 0 || i === rows-1 || j === cols-1) {
                visited.push(grid[i][j]);
            }*/
        }
    }

    function dfs(grid, current) {
        visited.push(current);
        current.isWall = false;


        if (getNeighbours2(current, grid).filter(n => !visited.includes(n)).length === 0) {
            return;
        } else {

            let moves = [0, 1, 2, 3];

            while(moves.length > 0) {
                let pos1 = {x: current.x, y: current.y};
                let pos2 = {x: current.x, y: current.y};

                let move = moves[getRandomInt(0, moves.length)];

                moves = moves.filter(m => m !== move);

                let dir1 = dirs[move];
                let dir2 = dirs2[move];

                pos1.x += dir1.x;
                pos1.y += dir1.y;
                pos2.x += dir2.x;
                pos2.y += dir2.y;  
                
                if (pos2.x >= 0 && pos2.x < grid.length && pos2.y >= 0 && pos2.y < grid[0].length) {
                    if (!visited.includes(grid[pos2.x][pos2.y])) {
                        visited.push(grid[pos1.x][pos1.y]);
                        grid[pos1.x][pos1.y].isWall = false;
                        dfs(grid, grid[pos2.x][pos2.y]);
                    }

                }
            }
            
        }

        
    }
    

    dfs(grid, startNode);

    return grid;
}


const dirs = [
    {x: -1, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: 0, y: -1},
]

const dirs2 = [
    {x: -2, y: 0},
    {x: 2, y: 0},
    {x: 0, y: 2},
    {x: 0, y: -2},    
]

function getNeighbours2(node, grid) {

    const neighbours = [];

    for (let i=0; i<dirs2.length; i++) {
        let dir = dirs2[i];
        let posX = node.x + dir.x;
        let posY = node.y + dir.y;

        if (posX >= 0 && posX < grid.length && posY >= 0 && posY < grid[0].length) {
            neighbours.push(grid[posX][posY]);            
        }
    }

    return neighbours;
  }

export default recursiveBacktracking;