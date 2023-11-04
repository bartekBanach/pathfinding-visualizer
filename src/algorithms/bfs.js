import getNeighbours from "./helpers/getNeighbours";

function bfs(startNode, endNode, grid) {

    const queue = [];
    const visited = [];
    const path = [];
    queue.push(startNode);

    while(queue.length > 0) {

        let current = queue.shift();

        if (current === endNode) {
            let tmp = current;
            while (tmp) {
                path.push(tmp);
                tmp = tmp.parent;
            }
            console.log("bfs path length")
            console.log(path.length);

            return {path, visited};
        }

        let neighbours = getNeighbours(current, grid);

        for(let i=0; i<neighbours.length; i++) {
            let neighbour = neighbours[i];

            if(!visited.includes(neighbour) && !queue.includes(neighbour)) {
                neighbour.parent = current;
                queue.push(neighbour);
            }
        }        
        visited.push(current);

    }

    return {path, visited};
}


/*const dirs = [
    {x: -1, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: 0, y: -1},
]

function addVector(position, vector) {

}

function getNeighbours(node, grid) {

    const neighbours = [];

    for (let i=0; i<dirs.length; i++) {
        let dir = dirs[i];
        let posX = node.x + dir.x;
        let posY = node.y + dir.y;

        if (posX >= 0 && posX < grid.length && posY >= 0 && posY < grid[0].length) {
            neighbours.push(grid[posX][posY]);            
        }
    }

    return neighbours.filter(neighbour => !neighbour.isWall);
}*/

export default bfs;