import React, { useRef } from 'react';
import { track } from '@vercel/analytics';
import { HOURLY_RATE } from '../data/consultingServices';

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
        {service.hours ? (
          <p className="service-card__hours">
            {service.hours} hours &middot; ${HOURLY_RATE}/hr
          </p>
        ) : null}
        <p className="service-card__description">{service.description}</p>
        {service.details ? (
          <p className="service-card__details">{service.details}</p>
        ) : null}
      </div>
    </div>
  );
}

export default ServiceCard;
