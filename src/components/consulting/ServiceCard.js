import React, { useRef } from 'react';
import { track } from '@vercel/analytics';

function ServiceCard({ service }) {
  const hoverStart = useRef(null);

  const handleMouseEnter = () => {
    hoverStart.current = Date.now();
  };

  const handleMouseLeave = () => {
    if (hoverStart.current) {
      const dwellMs = Date.now() - hoverStart.current;
      if (dwellMs > 1000) {
        track('service_hover', {
          service: service.id,
          dwell_seconds: Math.round(dwellMs / 1000),
        });
      }
      hoverStart.current = null;
    }
  };

  return (
    <div
      className="service-card content-card fade-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content-card__body">
        <h3 className="service-card__name">{service.name}</h3>
        <p className="service-card__price">{service.price}</p>
        <p className="service-card__headline">{service.headline}</p>
        <p className="service-card__description">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
