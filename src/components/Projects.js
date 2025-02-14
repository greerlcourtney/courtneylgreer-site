import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Who Got Invested In?',
      description: 'A data visualization tool for tracking startup investments.',
      github: 'https://www.infiniti-minds.com/',
    },
    {
      name: 'Voxxy AI',
      description: 'An AI-powered voice assistant platform.',
      github: 'https://www.voxxyai.com/',
    },
    {
      name: 'MCAP Quiz Guide',
      description: 'A comprehensive quiz application for certification preparation.',
      github: 'https://mcat-tracker-pro.vercel.app/',
    },
    {
      name: 'Kudos',
      description: 'Winner of the Female Foundery Hackathon | A two sided marketplace helping parents find tutors and tutors find experience.',
      github: 'https://kudos-tutor-student.vercel.app/',
    }
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p>Explore some of the projects I've worked on. Click on any project to view more.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View  →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
