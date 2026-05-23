import React, { useEffect } from 'react';
import ExternalOrPlaceholderLink from '../shared/ExternalOrPlaceholderLink';
import CardMedia from '../shared/CardMedia';
import CardMore from '../shared/CardMore';
import experience from '../data/experience';
import speakingPress from '../data/speakingPress';
import judgingAdvising from '../data/judgingAdvising';

function ExperiencePage() {
  useEffect(() => {
    document.title = 'Experience | Courtney L. Greer';
  }, []);

  return (
    <>
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
    </>
  );
}

export default ExperiencePage;
