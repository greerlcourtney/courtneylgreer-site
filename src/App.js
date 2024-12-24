import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

return (
  <Router>
      <div className="app">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="sidebar-links">
            <Link to="/" onClick={toggleSidebar}> Resume</Link>
            <Link to="/Projects" onClick={toggleSidebar}> Projects</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
