import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    document.title = 'Courtney L. Greer';
  }, []);

  return (
    <>
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
    </>
  );
}

export default HomePage;
