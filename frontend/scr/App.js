import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Canchas from './components/Canchas';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/canchas">Canchas</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canchas" element={<Canchas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
