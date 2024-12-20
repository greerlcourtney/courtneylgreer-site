import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">About Me</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/gallery" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
