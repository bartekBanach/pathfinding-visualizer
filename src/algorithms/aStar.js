import getNeighbours from "./helpers/getNeighbours";

function aStar(startNode, endNode, grid) {
    let openSet = [];
    let path = [];
    let visited = [];

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (!grid[i][j].isWall) {
                openSet.push(grid[i][j]);    
            }
        }
    }

    startNode.g = 0;
    startNode.f = 0;
    startNode.h = 0;


    while(openSet.length > 0) {

        let current = openSet.reduce((prev, curr) => prev.f < curr.f ? prev : curr);

        if (current.g === Infinity) {
            break;
        }
        
        visited.push(current);
        openSet = openSet.filter(node => node !== current);

        if (current === endNode) {
            let temp = current;
            path.push(temp);
            while(temp.parent) {
                path.push(temp.parent);
                temp = temp.parent;
            }

            return {path, visited};
        }

        let neighbours = getNeighbours(current, grid);

        for (let i=0; i<neighbours.length; i++) {

            let neighbour = neighbours[i];

            if (!visited.includes(neighbour) && !neighbour.isWall) {
                let newCost = current.g + neighbour.weight;

                if (newCost < neighbour.g) {
                    neighbour.g = newCost;
                    neighbour.h = heuristic(neighbour, endNode);
                    neighbour.f = neighbour.g + neighbour.h;
                    neighbour.parent = current; 
                }
             
            }

        }

    }

    return {path, visited, error: 'No path found!'};

}



function heuristic(a, b) {


    let d1 = Math.abs(a.x - b.x);
    let d2 = Math.abs(a.y - b.y);
  
    return d1 + d2;
    /*let d1 = (a.x - b.x);
    let d2 = (a.y - b.y);

    return Math.sqrt(d1*d1 + d2*d2)*/

}


export default aStar;