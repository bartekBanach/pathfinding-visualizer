import {Link} from "react-router-dom";


const Sidebar = () => {

    return (
        <>
        <div className="sidebar">
            <h2 className="sidebar-header">Zawartość:</h2>
            <div className="sidebar-navlinks">
                <Link className="sidebar-navlink" to="/algorithms/introduction">Podstawowe pojęcia</Link>
                <Link className="sidebar-navlink" to="/algorithms/bfs">BFS</Link>
                <Link className="sidebar-navlink" to="/algorithms/dfs">DFS</Link>
                <Link className="sidebar-navlink" to="/algorithms/dijkstra">Algorytm Dijkstry</Link>
                <Link className="sidebar-navlink" to="/algorithms/astar">Algorytm A*</Link>
            </div>

        </div>
        </>

    )


};

export default Sidebar;