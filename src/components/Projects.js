function Projects() {
    const projects = [
      { name: 'Project 1', url: 'https://example.com/project1' },
      { name: 'Project 2', url: 'https://example.com/project2' },
      { name: 'Project 3', url: 'https://example.com/project3' },
    ];
  
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Projects;