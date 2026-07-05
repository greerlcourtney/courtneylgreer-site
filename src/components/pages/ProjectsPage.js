import React, { useEffect } from 'react';
import ExternalOrPlaceholderLink from '../shared/ExternalOrPlaceholderLink';
import CardMedia from '../shared/CardMedia';
import CardMore from '../shared/CardMore';
import projects from '../data/projects';
import community from '../data/community';
import filmCredits from '../data/filmCredits';

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

      <section className="film-projects-section" aria-labelledby="film-projects-heading">
        <h2 id="film-projects-heading" className="text-reveal">Film</h2>
        <div className="film-projects-grid">
          {filmCredits.map((credit) => (
            <div key={credit.title} className="film-credit-card fade-in">
              <div className="film-credit-card__year-row">
                <span className="film-credit-card__year">{credit.year}</span>
                {credit.status && (
                  <span className="film-credit-card__status">{credit.status}</span>
                )}
              </div>
              <h3 className="film-credit-card__title">{credit.title}</h3>
              <div className="film-credit-card__roles">
                {credit.roles.split(', ').map((role) => (
                  <span key={role} className="film-credit-card__role-tag">{role}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="/film" className="film-projects-link">View full film page →</a>
      </section>
    </>
  );
}

export default ProjectsPage;
