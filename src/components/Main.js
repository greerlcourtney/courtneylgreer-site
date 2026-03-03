import React from 'react';
import ScrollAnimation from './ScrollAnimation';

function Main() {
  const projects = [
    {
      name: 'Voxxy',
      description: 'AI-powered social planning platform.',
      url: 'https://www.voxxyai.com/',
      category: 'Startup',
      tech: ['React', 'Node.js', 'AI/ML'],
    },
    {
      name: 'Black Tech News',
      description: 'Aggregator for Black tech innovation stories.',
      url: 'https://www.blacktechnews.cc/',
      category: 'Side Project',
      tech: ['React', 'API'],
    },
    {
      name: 'Spin The Globe',
      description: 'Discover stories from around the world.',
      url: 'https://www.wolfdevelopmentstudio.com/spin-the-globe',
      category: 'Side Project',
      tech: ['React', 'API'],
    },
    {
      name: 'Kudos',
      description: 'Two-sided marketplace connecting parents with tutors.',
      url: 'https://kudos-tutor-student.vercel.app/',
      category: 'Hackathon Winner',
      tech: ['React', 'Node.js'],
    },
    {
      name: 'MCAT Quiz',
      description: 'MCAT prep quiz application.',
      url: 'https://mcat-tracker-pro.vercel.app/',
      category: 'Side Project',
      tech: ['React', 'Vercel'],
    },
  ];

  const experience = [
    {
      title: 'CEO & Co-Founder, Voxxy AI',
      date: 'Present',
      description: 'Leading product, fundraising, and go-to-market for a two-product AI company. Building with paying customers, shipping weekly, and preparing for a pre-seed round.',
    },
    {
      title: 'Senior Technical Program Manager, Microsoft',
      date: '2019–2024',
      description: 'Led product strategy and cross-functional delivery. Shipped internal tools to 10K+ users. Built dashboards, Power Apps, and Azure DevOps integrations. Hosted conferences and hackathons.',
    },
    {
      title: 'Partner Development Manager, Microsoft',
      date: '2017–2019',
      description: 'Managed a $2M Azure portfolio across 50+ startups and ISVs. Drove cloud adoption, delivered technical training to 100+ recruits, and spoke at industry events.',
    },
  ];

  const community = [
    {
      title: 'CS Teacher, Boys and Girls High School (Brooklyn)',
      description: 'Taught computer science to high schoolers through the TEALS program. Delivered lessons on generative AI and cybersecurity. Hosted career days at Microsoft.',
    },
    {
      title: 'Board of Directors, Seattle Pride',
      description: 'Helped transition the Seattle Pride Parade to a virtual event during the pandemic. Supported fundraising and community engagement.',
    },
    {
      title: 'Volunteer, Black Girls Code & Girls Who Code',
      description: 'Led coding workshops, hackathons, and summer camps. Developed an 8-week HTML/CSS curriculum for high school students in Toledo, Ohio.',
    },
    {
      title: 'Lab IT Technician, Center on Halsted',
      description: 'Supported community members with resume building and computer literacy.',
    },
  ];

  return (
    <div className="main-page">
      <div className="progress-line" />
      <ScrollAnimation />

      {/* Hero Section */}
      <section className="hero-section">
        <h1><span className="text-reveal">Courtney Greer</span><span className="accent">.</span></h1>
        <p className="hero-tagline text-reveal">Founder. Builder. Community technologist.</p>
        <p className="hero-description">
          I build tools that help people connect in real life. Currently CEO & Co-Founder of Voxxy AI, where we're creating the infrastructure for social planning — from dinner with friends to large-scale community events.
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/courtney-greer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/greerlcourtney/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:courtneygreer@heyvoxxy.com">Email</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="text-reveal">About</h2>
        <div className="about-content">
          <p>
            I'm a CS grad turned program manager turned startup founder. I spent 8 years at Microsoft leading product strategy, shipping enterprise tools used by 10,000+ employees, managing a $2M cloud portfolio, and building systems that actually worked at scale. Along the way, I founded equity groups, launched AI products, and mentored first-time builders.
          </p>
          <p>
            Then I left to build the thing I couldn't stop thinking about.
          </p>
          <p>
            Voxxy started from a simple frustration: planning anything with a group of people is unreasonably hard. That insight — combined with years of community organizing, teaching CS in Brooklyn public schools, and watching how real people coordinate in real life — became the foundation for what we're building today.
          </p>
          <p className="highlight">
            I'm a community organizer who learned to code, and a technologist who never stopped organizing. That's the lens I build through.
          </p>
        </div>
      </section>

      {/* What I'm Building Section */}
      <section className="building-section">
        <h2 className="text-reveal">What I'm Building</h2>
        <div className="building-intro">
          <h3>Voxxy AI</h3>
          <p>Social planning infrastructure for the real world. Two products, one mission: making it easier for people to get together.</p>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <span className="product-type">B2C</span>
            <h4>Voxxy Mobile</h4>
            <p>A dining recommendation app that takes the indecision out of "where should we eat?" Powered by AI, built around your group's actual preferences.</p>
          </div>
          <div className="product-card">
            <span className="product-type">B2B</span>
            <h4>Voxxy Presents</h4>
            <p>An event management platform purpose-built for recurring community events — art markets, pop-ups, food festivals, and more. Already in paid pilot with event producers managing thousands of vendors and attendees.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="text-reveal">Experience</h2>
        <div className="experience-grid">
          {experience.map((item, index) => (
            <div key={index} className="experience-card">
              <h3>{item.title}</h3>
              <div className="date">{item.date}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="text-reveal">Projects</h2>
        <div className="horizontal-scroll-wrapper">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <span className="category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="scroll-hint">Scroll to see more →</p>
      </section>

      {/* Community & Teaching Section */}
      <section className="community-section">
        <h2 className="text-reveal">Community & Teaching</h2>
        <p className="community-intro">
          Before I was building products, I was building programs. Community work isn't a side project for me — it's the reason I build.
        </p>
        <div className="horizontal-scroll-wrapper">
          <div className="community-grid">
            {community.map((item, index) => (
              <div key={index} className="community-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="scroll-hint">Scroll to see more →</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="text-reveal">Let's Talk</h2>
        <p>I'm always down to connect with founders, builders, and anyone thinking about how technology can bring people together.</p>
        <a href="mailto:courtneygreer@heyvoxxy.com" className="email-link">courtneygreer@heyvoxxy.com</a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/courtney-greer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/greerlcourtney/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://heyvoxxy.com" target="_blank" rel="noopener noreferrer">heyvoxxy.com</a>
        </div>
      </section>
    </div>
  );
}

export default Main;
