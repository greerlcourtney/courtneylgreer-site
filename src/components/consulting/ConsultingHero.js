import React from 'react';

function ConsultingHero() {
  return (
    <section className="consulting-hero">
      <h1 className="text-reveal">Wolf Development Studios</h1>
      <p className="consulting-hero__tagline">
        AI implementation, software setup, and team training for small businesses.
      </p>
      <div className="consulting-hero__contact">
        <a href="mailto:team@wolfdevelopmentstudio.com">team@wolfdevelopmentstudio.com</a>
        <span className="consulting-hero__sep" aria-hidden="true">&middot;</span>
        <a href="https://www.wolfdevelopmentstudios.com" target="_blank" rel="noopener noreferrer">
          wolfdevelopmentstudios.com
        </a>
      </div>
    </section>
  );
}

export default ConsultingHero;
