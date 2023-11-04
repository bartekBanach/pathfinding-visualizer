import addVectors from "./addVectors";

const dirs = [
    {x: -1, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: 0, y: -1},
]

function getNeighbours(node, grid) {

    const neighbours = [];

    for (let i=0; i<dirs.length; i++) {
        let dir = dirs[i];

        let position = addVectors({x: node.x, y: node.y}, dir);

        if (position.x >= 0 && position.x < grid.length && position.y >= 0 && position.y < grid[0].length) {
            neighbours.push(grid[position.x][position.y]);            
        }
    }

    return neighbours.filter(neighbour => !neighbour.isWall);
}

export default getNeighbours;