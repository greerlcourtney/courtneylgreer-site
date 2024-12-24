import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>hi, my name is Courtney Greer</h1>
        <h2>I'm passionate about building people-centered products.</h2>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I’m a relentlessly curious problem solver with a passion for turning complex challenges into innovative
          technical solutions. Over my seven years at Microsoft, I’ve focused on building people-centered products that
          help technical organizations innovate alongside strategic customers. Certified as a Scrum Master and Product
          Owner, I blend agile practices, design thinking, and a dash of insufferable optimism to deliver high-quality
          software that drives value.
        </p>
        <p>
          When I’m not tackling hard problems at work, you’ll find me volunteering to diversify STEM fields,
          mentoring students, or chasing creative endeavors outside of tech.
        </p>
      </section>

      <section className="experience-section">
        <h2>My Experience</h2>
        <div className="experience">
          <h3>Microsoft, Senior Technical Program Manager</h3>
          <p>July 2019 - Present | New York, NY</p>
          <p>
            As a Senior Technical Program Manager, I lead product strategies that help Microsoft’s technical
            organizations collaborate and innovate with strategic customers. I’ve envisioned and delivered internal
            tools, dashboards, and custom applications that support over 10,000 employees. My work ensures data
            transparency, improves processes, and measures value-add to customers.
          </p>
        </div>
        <div className="experience">
          <h3>Microsoft, Partner Development Manager</h3>
          <p>June 2017 - June 2019 | Chicago, IL</p>
          <p>
            In this role, I worked closely with startups to envision and strengthen their software products using Azure
            solutions. I guided cloud migrations, hosted envisioning sessions, and helped companies scale revenue by
            leveraging Microsoft’s technologies.
          </p>
        </div>
        <div className="experience">
          <h3>University of Toledo, IT Technician</h3>
          <p>2013 - 2017</p>
          <p>
            Supported the university’s IT department by troubleshooting technical issues, assisting students and
            faculty, and maintaining the university’s digital infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
