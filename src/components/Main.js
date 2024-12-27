import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="main-page">
      {/* Header Section */}
      <header className="main-header">
        <h1>Hi, my name is Courtney Greer</h1>
        <p>I'm passionate about building people-centered products.</p>
      </header>

      {/* About Section */}
      <section className="main-about-section">
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
    </div>
  );
}

export default Main;
