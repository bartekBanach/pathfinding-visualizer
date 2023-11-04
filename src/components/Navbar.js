import {Link} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    return (
        <>
        <div className="navbar">
            <div className="logo">
                <Link className="logo-link" to="/">Pathfinding Visualizer</Link>
            </div>
            <div className="navlinks">
                <div className="navlink-btn">
                    <Link to="/algorithms/introduction" className="navlink">Algorytmy</Link>
                </div>
                <div className="navlink-btn">
                    <Link to="/about" className="navlink">O aplikacji</Link>
                </div>

            </div>
        </div>
        </>

    )


};

export default Navbar;