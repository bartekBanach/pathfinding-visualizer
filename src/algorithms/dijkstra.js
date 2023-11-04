import getNeighbours from "./helpers/getNeighbours";


function dijkstra(startNode, endNode, grid) {
    let openSet = [];
    let visited = [];
    let path = [];


    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (!grid[i][j].isWall) {
                openSet.push(grid[i][j]);    
            }
        }
    }

    startNode.g = 0;


    while(openSet.length > 0) {

        let current = openSet.reduce((prev, curr) => prev.g < curr.g ? prev : curr);

        if (current.g === Infinity) {
            break;
        }

        if (current === endNode) {
            let temp = current;
            path.push(temp);
            while(temp.parent) {
                path.push(temp.parent);
                temp = temp.parent;
            }
            console.log("dijkstra path length!");
            console.log(path.length);
            return {path, visited};
        }

        openSet = openSet.filter(node => node !== current);
        visited.push(current);

        let neighbours = getNeighbours(current, grid);

        for (let i=0; i<neighbours.length; i++) {

            let neighbour = neighbours[i];


            if (!visited.includes(neighbour) && !neighbour.isWall) {


                let tempG = current.g + neighbour.weight;

                if(tempG < neighbour.g) {
                    neighbour.g = tempG;
                    neighbour.parent = current;
                }
            }
        }

    }
    console.log("No path found!");
    return {path, visited, error: 'No path found!'};

}



export default dijkstra;

