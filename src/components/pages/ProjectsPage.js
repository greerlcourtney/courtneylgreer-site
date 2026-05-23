import React, { useEffect } from 'react';
import ExternalOrPlaceholderLink from '../shared/ExternalOrPlaceholderLink';
import CardMedia from '../shared/CardMedia';
import CardMore from '../shared/CardMore';
import projects from '../data/projects';
import community from '../data/community';

function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Courtney L. Greer';
  }, []);

  return (
    <>
      <section className="projects-section">
        <h2 className="text-reveal">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card content-card fade-in">
              <CardMedia imageSrc={project.imageSrc} imageAlt={project.imageAlt} />
              <div className="content-card__body">
                <span className="category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <CardMore more={project.more} />
                <ExternalOrPlaceholderLink href={project.url} className="project-card-link">
                  {project.ctaLabel || 'View Project →'}
                </ExternalOrPlaceholderLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <h2 className="text-reveal">Community &amp; Teaching</h2>
        <p className="community-intro">
          Before I was building products, I was building programs. Community work isn&apos;t a side project
          for me. It&apos;s the reason I build.
        </p>
        <div className="community-grid">
          {community.map((item, index) => (
            <div key={index} className="community-card content-card fade-in">
              <CardMedia imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
              <div className="content-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <CardMore more={item.more} />
                {item.linkUrl && item.linkLabel ? (
                  <ExternalOrPlaceholderLink href={item.linkUrl} className="speaking-link community-card-link">
                    {item.linkLabel}
                  </ExternalOrPlaceholderLink>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
