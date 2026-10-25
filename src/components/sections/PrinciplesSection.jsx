import React from 'react';
import Section from '../ui/Section.jsx';
import Icon from '../ui/Icon.jsx';
import { principlesData } from '../../data/principles.js';
import './PrinciplesSection.css';

/**
 * Bimbing.in — PrinciplesSection (S05)
 * Menegaskan integritas akademik dan batasan layanan tanpa klaim palsu.
 */
export default function PrinciplesSection() {
  return (
    <Section
      id="prinsip"
      eyebrow="Komitmen Kami"
      title="Prinsip Layanan Bimbingan"
      intro="Kami membangun rasa saling percaya melalui batasan yang jelas, kejujuran proses, dan penghormatan penuh terhadap integritas akademik."
      tone="default"
    >
      <ul className="bi-principles-grid" aria-label="Daftar Prinsip Bimbingan">
        {principlesData.map((principle) => (
          <li key={principle.id}>
            <article className="bi-principle-card">
              <div className="bi-principle-card__icon-box" aria-hidden="true">
                <Icon name={principle.icon} size={24} />
              </div>
              <div className="bi-principle-card__content">
                <h3 className="bi-principle-card__title">{principle.title}</h3>
                <p className="bi-principle-card__desc">{principle.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
