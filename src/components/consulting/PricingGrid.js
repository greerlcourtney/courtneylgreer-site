import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../data/consultingServices';

function PricingGrid() {
  return (
    <section className="consulting-pricing">
      <h2 className="text-reveal">Services</h2>
      <div className="consulting-pricing__grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default PricingGrid;
