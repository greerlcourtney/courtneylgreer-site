import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
return (
  <Router>
      <div className="app">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="sidebar-links">
            <Link to="/" onClick={toggleSidebar}> Main</Link>
            <Link to="/AboutMe" onClick={toggleSidebar}> Resume</Link>
            <Link to="/Projects" onClick={toggleSidebar}> Projects</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
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
