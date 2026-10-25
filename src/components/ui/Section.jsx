import React from 'react';
import './Section.css';

/**
 * Bimbing.in — Section Component
 * Pembungkus terstandar dengan container, heading hierarkis, dan tone warna.
 */
export default function Section({
  id,
  title,
  intro,
  eyebrow,
  tone = 'default',
  className = '',
  children,
}) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`bi-section bi-section--${tone} ${className}`.trim()}
    >
      <div className="bi-container">
        {(title || eyebrow || intro) && (
          <header className="bi-section__header">
            {eyebrow && <span className="bi-section__eyebrow">{eyebrow}</span>}
            {title && (
              <h2 id={headingId} className="bi-section__title">
                {title}
              </h2>
            )}
            {intro && <p className="bi-section__intro">{intro}</p>}
          </header>
        )}
        <div className="bi-section__content">{children}</div>
      </div>
    </section>
  );
}
