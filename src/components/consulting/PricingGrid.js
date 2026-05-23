import React, { useState } from 'react';
import { track } from '@vercel/analytics';
import ServiceCard from './ServiceCard';
import services from '../data/consultingServices';

function PricingGrid() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    const next = !expanded;
    setExpanded(next);
    track('services_explore_all', { expanded: next });
  };

  return (
    <section className="consulting-pricing">
      <div className="consulting-pricing__header">
        <h2 className="text-reveal">Services</h2>
        <button
          className="consulting-pricing__toggle"
          onClick={handleToggle}
        >
          {expanded ? 'Collapse' : 'Explore all'}
        </button>
      </div>
      <div className={`consulting-pricing__grid${expanded ? ' consulting-pricing__grid--expanded' : ''}`}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} expanded={expanded} />
        ))}
      </div>
    </section>
  );
}

export default PricingGrid;
