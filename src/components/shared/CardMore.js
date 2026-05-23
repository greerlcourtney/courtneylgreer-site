import React from 'react';

function CardMore({ more }) {
  if (more == null || more === '') return null;
  const blocks = Array.isArray(more) ? more : [more];
  return (
    <details className="content-card__details">
      <summary className="content-card__summary">More</summary>
      <div className="content-card__more">
        {blocks.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </details>
  );
}

export default CardMore;
