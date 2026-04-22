import React from 'react';
import ScrollAnimation from './ScrollAnimation';

/** Renders a real anchor, or a non-clickable span when `href` is missing or `#`. */
function ExternalOrPlaceholderLink({ href, className, children }) {
  const isPlaceholder = !href || href === '#';
  if (isPlaceholder) {
    return (
      <span className={`${className} is-placeholder-link`} title="Link coming soon">
        {children}
      </span>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function CardMedia({ imageSrc, imageAlt }) {
  if (!imageSrc) return null;
  return (
    <div className="content-card__media">
      <img src={imageSrc} alt={imageAlt || ''} loading="lazy" />
    </div>
  );
}

function CardMore({ more }) {
  if (more == null || more === '') return null;
  const blocks = Array.isArray(more) ? more : [more];
  return (
    <details className="content-card__details">
      <summary className="content-card__summary">More</summary>
      <div className="content-card__more">
        {blocks.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </details>
  );
}

function Main() {
  const projects = [
    {
      name: 'Voxxy',
      description: 'The operating system for recurring community events.',
      url: 'https://heyvoxxy.com',
      category: 'Startup',
      tech: ['React', 'Node.js', 'Ruby on Rails'],
    },
    {
      name: 'Fash-a-thon',
      description:
        'Co-produced a 6-day fashion design hackathon with 99 Yards, culminating in a YouTube live runway finale and winning looks featured in Brooklyn Fashion Week.',
      url:
        'https://www.linkedin.com/posts/hey-voxxy_heyvoxxy-brooklynfashionweek-activity-7452024681819295744-oKlS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA56CmABt_QI-ZXgbQvQPaqejKiFdbGhk9E',
      category: 'Event Production',
      tech: ['Live Production', 'Partnerships'],
      ctaLabel: 'View Recap →',
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
  ];

  const experience = [
    {
      title: 'CEO & Co-Founder, Voxxy',
      date: '2025 to Present',
      description:
        'Leading product, fundraising, and go-to-market for a B2B SaaS platform serving recurring event producers. Shipped to GA with paying customers, co-produced live events including the Spring Fash-a-thon and Taste of Brooklyn, and preparing for a pre-seed raise.',
    },
    {
      title: 'Senior Technical Program Manager, Microsoft',
      date: '2019 to 2024',
      description:
        'Led product strategy and cross-functional delivery for enterprise tooling used by 10,000+ employees. Built dashboards, Power Apps, and Azure DevOps integrations. Hosted conferences, hackathons, and internal programs focused on engineering excellence.',
    },
    {
      title: 'Partner Development Manager, Microsoft',
      date: '2017 to 2019',
      description:
        'Managed a $2M Azure portfolio across 50+ startups and ISVs. Drove cloud adoption strategy, delivered technical training to 100+ new recruits, and represented Microsoft at industry events.',
    },
  ];

  const speakingPress = [
    {
      headline: 'Guest Presenter',
      meta: 'University of Toledo · 2026',
      description:
        'Returned to her alma mater to speak with students in the College of Engineering on founding a startup, building in public, and navigating the jump from enterprise software to early-stage entrepreneurship.',
      linkLabel: 'View Presentation →',
      url: 'https://voxxy-drive.replit.app/s/courtneygreer/from-idea-to-impact-a-founders-guide-to-entrepreneurship-ai',
    },
    {
      headline: 'Panelist',
      meta: 'AI & Sustainability Global Summit · NYC · July 2025',
      description:
        'Hosted by GEMI.AI and Columbia University Technology Management. Courtney joined the Responsible AI and Community Impact panel, speaking on how AI can be built in service of inclusive, sustainable, and human-centered experiences.',
      linkLabel: 'Read the Recap →',
      url:
        'https://www.linkedin.com/posts/courtney-greer_i-had-a-fantastic-time-speaking-at-gemiai-activity-7353094889775005696-F7hh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA56CmABt_QI-ZXgbQvQPaqejKiFdbGhk9E',
    },
    {
      headline: 'Guest Speaker',
      meta: 'Association for Computing Machinery, University of Toledo',
      description:
        "Delivered a talk on growth mindset to student engineers at her alma mater, drawing on Dr. Carol Dweck's research and her own path from CS undergrad to enterprise technologist to founder. Hosted by ACM President Taylor Buckey.",
      linkLabel: 'View Post →',
      url:
        'https://www.linkedin.com/posts/courtney-greer_growthmindset-softskills-mindsetdevelopment-activity-7188657901656317952-XDqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA56CmABt_QI-ZXgbQvQPaqejKiFdbGhk9E',
    },
    {
      headline: 'Navigating the GenAI FOMO',
      meta: 'LinkedIn Pulse · Mar 2024',
      description:
        'On the digital divide in the GenAI era, democratizing technology, community-led development, and why inclusive adoption matters when disruptive tech creates real fear of missing out.',
      linkLabel: 'Read article →',
      url: 'https://www.linkedin.com/pulse/navigating-genai-fomo-ensuring-inclusivity-era-disruptive-greer-milke/',
    },
  ];

  const judgingAdvising = [
    {
      title: 'Judge \u2014 RocketHacks, University of Toledo',
      description:
        "Judged student teams building Hack for Good projects across sustainability, accessibility, and financial literacy. Returned to Toledo to support the university's growing focus on tech innovation across industries.",
      linkLabel: 'View Post →',
      url:
        'https://www.linkedin.com/posts/rocket-hacks_this-weekend-i-had-the-opportunity-to-judge-ugcPost-7307847512759959553-FD7K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA56CmABt_QI-ZXgbQvQPaqejKiFdbGhk9E',
    },
    {
      title: 'Guest Speaker & Judge \u2014 Brooklyn Technical High School Hackathon',
      description:
        "Judged and spoke at a student hackathon hosted by Brooklyn Tech's Girls Who Code chapter, in collaboration with the National Society of Black Engineers (NSBE) and TechCodes. Invited by student organizer Ashley Leung. A full-circle moment: Courtney was a beneficiary of NSBE and Girls Who Code programming during her own college years.",
      linkLabel: 'View Post →',
      url:
        'https://www.linkedin.com/posts/courtney-greer_i-had-the-incredible-privilege-this-past-activity-7160789540457103360-lEmX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA56CmABt_QI-ZXgbQvQPaqejKiFdbGhk9E',
    },
  ];

  const community = [
    {
      title: 'Chair, Juneteenth Hackathon',
      description:
        "Serving as a chair for one of the country's most meaningful celebrations of Black excellence in tech. Focused on making the hackathon a launchpad for the next generation of Black engineers, designers, and founders.",
      linkLabel: 'Juneteenth Conference board →',
      linkUrl: 'https://juneteenthconf.com/about/board/',
    },
    {
      title: 'CS Teacher, Brooklyn Public Schools (TEALS)',
      description:
        'Teaching computer science to high schoolers through the TEALS program. Delivered lessons on generative AI and cybersecurity. Hosted career days and helped students see themselves in the industry.',
    },
    {
      title: 'Board of Directors, Seattle Pride',
      description:
        'Helped transition the Seattle Pride Parade to a virtual event during the pandemic. Supported fundraising and community engagement during a critical moment for the organization.',
    },
    {
      title: 'Volunteer, Black Girls Code & Girls Who Code',
      description:
        'Led coding workshops, hackathons, and summer camps. Developed an 8-week HTML/CSS curriculum for high school students in Toledo, Ohio.',
    },
    {
      title: 'Lab IT Technician, Center on Halsted',
      description:
        'Supported LGBTQ+ community members in Chicago with resume building, computer literacy, and the skills needed to access economic opportunity.',
    },
  ];

  return (
    <div className="main-page">
      <div className="progress-line" />
      <ScrollAnimation />

      <section className="hero-section">
        <h1>
          <span className="text-reveal">Courtney L. Greer</span>
          <span className="accent">.</span>
        </h1>
        <p className="hero-tagline text-reveal">Founder. Technologist. Community builder.</p>
        <p className="hero-description">
          I build software for the people who bring people together. I&apos;m the CEO and Co-Founder of
          Voxxy, where we&apos;re building the operating system for recurring community events. Before that,
          I spent nearly a decade at Microsoft shipping enterprise tools at scale. Today I also teach CS in
          Brooklyn public schools, chair the Juneteenth Hackathon, and advocate for equity in tech every way
          I know how.
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/courtney-greer/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/greerlcourtney/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:courtneygreer@heyvoxxy.com">Email</a>
        </div>
      </section>

      <section className="about-section">
        <h2 className="text-reveal">About</h2>
        <div className="about-content">
          <p>
            I&apos;m a software engineer who became a program manager, a program manager who became a
            founder, and a technologist who never stopped organizing.
          </p>
          <p>
            I spent 8 years at Microsoft as a Senior Technical Program Manager and Partner Development
            Manager, where I led enterprise programs across product, security, and innovation, shipped internal
            tools used by 10,000+ employees, and managed a $2M cloud portfolio across 50+ startups and ISVs.
            I hosted conferences, ran hackathons, and trained the next wave of engineers coming in behind me.
          </p>
          <p>Then I left to build Voxxy.</p>
          <p>
            Voxxy started from a question I couldn&apos;t stop asking: why is it so hard for the people who
            bring people together to do their actual work? Art market producers, pop-up organizers, craft
            fair directors, fashion producers. These are the people holding neighborhoods together, and
            they&apos;re running the whole operation out of spreadsheets, DMs, and sticky notes. Voxxy is the
            infrastructure they&apos;ve been missing.
          </p>
          <p>
            What I bring to it is the lens I&apos;ve always had. I&apos;m a community organizer who learned to
            code, and a technologist who never left the community. I grew up watching what happens when
            people don&apos;t have access to the tools, the networks, or the rooms where decisions get made.
            That&apos;s shaped every build I&apos;ve ever shipped.
          </p>
          <p className="highlight">
            I build the tools I wish my community had. That&apos;s the whole thesis.
          </p>
        </div>
      </section>

      <section className="building-section">
        <h2 className="text-reveal">What I&apos;m Building</h2>
        <div className="building-editorial fade-in">
          <h3 className="building-product-name">Voxxy</h3>
          <p className="building-lede">The operating system for recurring community events.</p>
          <div className="building-body">
            <p>
              Most event software is built for one-off conferences and ticketed concerts. Voxxy is built for
              the producers who run the same market, pop-up, or fair season after season. Vendor
              applications, approvals, communications, and payments in one place, so organizers can spend
              less time on admin and more time building the community around their work.
            </p>
            <p>
              We&apos;re Brooklyn-based, currently in early access with our first paying customers, and
              preparing for our pre-seed round.
            </p>
          </div>
          <p className="building-tagline">Built for the people who bring people together.</p>
          <p className="building-live">
            Live at:{' '}
            <a href="https://heyvoxxy.com" target="_blank" rel="noopener noreferrer">
              heyvoxxy.com
            </a>
          </p>
        </div>
      </section>

      <section className="experience-section">
        <h2 className="text-reveal">Experience</h2>
        <div className="experience-grid">
          {experience.map((item, index) => (
            <div key={index} className="experience-card content-card fade-in">
              <CardMedia imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
              <div className="content-card__body">
                <h3>{item.title}</h3>
                <div className="date">{item.date}</div>
                <p>{item.description}</p>
                <CardMore more={item.more} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="text-reveal">Projects</h2>
        <div className="horizontal-scroll-wrapper">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card content-card">
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
        </div>
        <p className="scroll-hint">Scroll to see more →</p>
      </section>

      <section className="speaking-section">
        <h2 className="text-reveal">Speaking &amp; Press</h2>
        <p className="speaking-lead fade-in">
          A selection of recent talks, panels, and appearances at the intersection of technology, community,
          and equity.
        </p>
        <ul className="speaking-list">
          {speakingPress.map((item, index) => (
            <li key={index} className="speaking-item fade-in">
              <h3 className="speaking-headline">{item.headline}</h3>
              <p className="speaking-meta">{item.meta}</p>
              <p className="speaking-description">{item.description}</p>
              {item.linkLabel && item.url ? (
                <ExternalOrPlaceholderLink href={item.url} className="speaking-link">
                  {item.linkLabel}
                </ExternalOrPlaceholderLink>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="judging-section">
        <h2 className="text-reveal">Judging &amp; Advising</h2>
        <div className="judging-grid">
          {judgingAdvising.map((item, index) => (
            <div key={index} className="judging-card content-card fade-in">
              <CardMedia imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
              <div className="content-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <CardMore more={item.more} />
                {item.linkLabel && item.url ? (
                  <ExternalOrPlaceholderLink href={item.url} className="speaking-link judging-card-link">
                    {item.linkLabel}
                  </ExternalOrPlaceholderLink>
                ) : null}
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
        <div className="horizontal-scroll-wrapper">
          <div className="community-grid">
            {community.map((item, index) => (
              <div key={index} className="community-card content-card">
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
        </div>
        <p className="scroll-hint">Scroll to see more →</p>
      </section>

      <section className="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="contact-heading">
          Let&apos;s talk
        </h2>
        <p className="contact-intro">
          I&apos;m always down to connect with founders, builders, event producers, educators, and anyone
          thinking about how technology can bring people closer together in real life.
        </p>
        <a href="mailto:courtneygreer@heyvoxxy.com" className="contact-email">
          courtneygreer@heyvoxxy.com
        </a>
        <nav className="contact-nav" aria-label="Social and web">
          <a href="https://www.linkedin.com/in/courtney-greer/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="contact-nav-sep" aria-hidden="true">
            ·
          </span>
          <a href="https://github.com/greerlcourtney/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="contact-nav-sep" aria-hidden="true">
            ·
          </span>
          <a href="https://heyvoxxy.com" target="_blank" rel="noopener noreferrer">
            heyvoxxy.com
          </a>
        </nav>
      </section>
    </div>
  );
}

export default Main;
