import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="nav-links">
            <Link to="/">Main</Link>
            <Link to="/AboutMe">Resume</Link>
            <Link to="/Projects">Projects</Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
