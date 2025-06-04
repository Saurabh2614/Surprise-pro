
import './App.css';
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {React, ReactDOM} from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/home5" element={<Home5 />} />

           

      </Routes>
    </div>
  );
}

export default App;
