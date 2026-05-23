import React from 'react';

function CardMedia({ imageSrc, imageAlt }) {
  if (!imageSrc) return null;
  return (
    <div className="content-card__media">
      <img src={imageSrc} alt={imageAlt || ''} loading="lazy" />
    </div>
  );
}

export default CardMedia;
