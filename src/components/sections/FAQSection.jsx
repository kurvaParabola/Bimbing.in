import React from 'react';
import Section from '../ui/Section.jsx';
import Icon from '../ui/Icon.jsx';
import { faqData } from '../../data/faq.js';
import './FAQSection.css';

/**
 * Bimbing.in — FAQSection (S07)
 * Menggunakan elemen native <details>/<summary> dengan atribut name untuk exclusive accordion.
 * Sesuai PRD Bagian 8.3 dan 15.5.
 */
export default function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="Tanya Jawab"
      title="Pertanyaan yang Sering Diajukan"
      intro="Temukan klarifikasi langsung seputar metode bimbingan, komitmen integritas, dan teknis pelaksanaan sesi."
      tone="subtle"
    >
      <div className="bi-faq-list">
        {faqData.map((item, index) => (
          <details
            key={item.id}
            name="bimbingin-faq"
            className="bi-faq-item"
            open={index === 0}
          >
            <summary className="bi-faq-summary">
              <span>{item.question}</span>
              <span className="bi-faq-icon" aria-hidden="true">
                <Icon name="chevron-down" size={18} />
              </span>
            </summary>
            <div className="bi-faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
