import React from 'react';
import Section from '../ui/Section.jsx';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Icon from '../ui/Icon.jsx';
import { stepsData } from '../../data/steps.js';
import './HowItWorksSection.css';

/**
 * Bimbing.in — HowItWorksSection (S04)
 * Menampilkan alur 4 langkah bernomor dalam semantic <ol>.
 */
export default function HowItWorksSection() {
  return (
    <Section
      id="cara-kerja"
      eyebrow="Alur Proses"
      title="Cara Kerja Bimbingan"
      intro="Empat langkah sederhana untuk memulai sesi belajar yang tenang, terstruktur, dan terarah."
      tone="subtle"
    >
      <ol className="bi-steps-list" aria-label="Tahapan Cara Kerja">
        {stepsData.map((item) => (
          <li key={item.step}>
            <div className="bi-step-card">
              <div className="bi-step-card__header">
                <span className="bi-step-card__badge" aria-label={`Langkah ${item.step}`}>
                  {item.step}
                </span>
                <span className="bi-step-card__icon" aria-hidden="true">
                  <Icon name={item.icon} size={22} />
                </span>
              </div>
              <h3 className="bi-step-card__title">{item.title}</h3>
              <p className="bi-step-card__desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="bi-how-it-works__cta">
        <WhatsAppButton
          placement="how_it_works"
          label="Mulai Konsultasi Langkah Pertama"
          variant="secondary"
          size="md"
        />
      </div>
    </Section>
  );
}
