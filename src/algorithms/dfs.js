import getNeighbours from "./helpers/getNeighbours";

function dfs(startNode, endNode, grid) {

    const stack = [];
    const visited = [];
    const path = [];


    stack.push(startNode);

    while(stack.length > 0) {
        const current = stack.pop();

        if (current === endNode) {
            let tmp = current;
            while (tmp) {
                path.push(tmp);
                tmp = tmp.parent;
            }
            /*console.log("DFS Path lenght:");
            console.log(path.length);*/
            return {path, visited};
        }

        if(!visited.includes(current)) {

            visited.push(current);


            let neighbours = getNeighbours(current, grid);
            for (let i=0; i<neighbours.length; i++) {
                let neighbour = neighbours[i];
                if (!neighbour.isWall) {
                    if (!stack.includes(neighbour) && !visited.includes(neighbour)) {
                        neighbour.parent = current;
                    }
                    stack.push(neighbour);
                }
            }            

        }

    }
    return {path, visited, error: 'No path found!'};

}




/*function getNeighbours(node, grid) {

    const neighbours = [];
    let i = node.x;
    let j = node.y;

    if (i>0) neighbours.push(grid[i-1][j]);
    if (i< grid.length-1) neighbours.push(grid[i+1][j]);
    if (j>0) neighbours.push(grid[i][j-1]);
    if (j<grid[0].length-1) neighbours.push(grid[i][j+1]);

    return neighbours.filter(neighbour => !neighbour.isWall);

  }*/

export default dfs;