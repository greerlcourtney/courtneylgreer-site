import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Who Got Invested In?',
      description: 'A data visualization tool for tracking startup investments.',
      github: 'https://github.com/yourusername/who-got-invested-in',
    },
    {
      name: 'Voxxy AI',
      description: 'An AI-powered voice assistant platform.',
      github: 'https://github.com/yourusername/voxxy-ai',
    },
    {
      name: 'MCAP Quiz Guide',
      description: 'A comprehensive quiz application for certification preparation.',
      github: 'https://github.com/yourusername/mcap-quiz-guide',
    },
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p>Explore some of the projects I've worked on. Click on any project to view its source code on GitHub.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
