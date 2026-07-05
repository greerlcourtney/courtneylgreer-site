import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import ExperiencePage from './components/pages/ExperiencePage';
import ProjectsPage from './components/pages/ProjectsPage';
import ConsultingPage from './components/pages/ConsultingPage';
import FilmPage from './components/pages/FilmPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="consulting" element={<ConsultingPage />} />
            <Route path="film" element={<FilmPage />} />
          </Route>
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
