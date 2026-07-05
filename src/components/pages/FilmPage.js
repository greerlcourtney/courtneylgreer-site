import React, { useEffect } from 'react';
import filmCredits from '../data/filmCredits';

function FilmPage() {
  useEffect(() => {
    document.title = 'Film | Courtney L. Greer';
  }, []);

  return (
    <>
      <section className="film-hero" aria-label="Hero">
        <p className="film-hero__name">Courtney L. Greer</p>
        <h1 className="film-hero__title">
          Director. Cinematographer. Storyteller.
        </h1>
      </section>

      <section className="film-statement" aria-labelledby="film-statement-heading">
        <h2 id="film-statement-heading" className="film-section-label">Statement</h2>
        <p className="film-statement__copy">
          I tell stories about people. My work lives at the intersection of community, creativity,
          and the moments that change us. Available for directing, cinematography, event film,
          and production.
        </p>
      </section>

      <section className="film-credits" aria-labelledby="film-credits-heading">
        <h2 id="film-credits-heading" className="film-section-label">Credits</h2>
        <ul className="film-credits__list" role="list">
          {filmCredits.map((credit) => (
            <li key={credit.title} className="film-credits__item">
              <span className="film-credits__title">{credit.title}</span>
              <span className="film-credits__meta">
                <span className="film-credits__roles">{credit.roles}</span>
                <span className="film-credits__year">{credit.year}</span>
                {credit.status && (
                  <span className="film-credits__status">{credit.status}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="film-reel" aria-labelledby="film-reel-heading">
        <h2 id="film-reel-heading" className="film-section-label">Reel</h2>
        <div className="film-reel__placeholder" aria-label="Video reel coming soon">
          <span className="film-reel__placeholder-text">Reel coming soon</span>
        </div>
      </section>

      <section className="film-contact" aria-labelledby="film-contact-heading">
        <h2 id="film-contact-heading" className="film-section-label">Contact</h2>
        <p className="film-contact__line">
          Available for film and production work.{' '}
          <a href="mailto:courtneygreer@heyvoxxy.com" className="film-contact__link">
            courtneygreer@heyvoxxy.com
          </a>
        </p>
      </section>
    </>
  );
}

export default FilmPage;
