import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;
