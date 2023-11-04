import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Introduction from './pages/Introduction';
import About from './pages/About';
import Dijkstra from './pages/Dijkstra';
import Bfs from './pages/Bfs';
import Dfs from './pages/Dfs';
import Astar from './pages/Astar';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import './App.css';
import Pathfinder from './components/Pathfinder';
import { useState } from 'react';

function App() {

  const [firstLoad, setFirstLoad] = useState(true);
  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_URI}>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Pathfinder firstLoad={firstLoad} setFirstLoad={setFirstLoad} />}/>
            <Route path="/algorithms/introduction" element={<Introduction />}/>
            <Route  path="/algorithms/dijkstra" element={<Dijkstra />}/>
            <Route path="/algorithms/bfs" element={<Bfs />}/>
            <Route path="/algorithms/dfs" element={<Dfs />}/>
            <Route path="/algorithms/astar" element={<Astar />}/>
            <Route path="/about" element={<About />}/>
          </Routes> 

        </div>
        <Footer />        
      </BrowserRouter>
    </div>
  );
}

export default App;
