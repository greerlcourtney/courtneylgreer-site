import React from 'react';

/** Renders a real anchor, or a non-clickable span when `href` is missing or `#`. */
function ExternalOrPlaceholderLink({ href, className, children }) {
  const isPlaceholder = !href || href === '#';
  if (isPlaceholder) {
    return (
      <span className={`${className} is-placeholder-link`} title="Link coming soon">
        {children}
      </span>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalOrPlaceholderLink;
