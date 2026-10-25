import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import Icon from '../ui/Icon.jsx';
import './ServiceCard.css';

/**
 * Bimbing.in — ServiceCard Component
 * Kartu kategori dengan teks rapi, ukuran seragam, dan tombol bertuliskan "Konsultasi".
 */
export default function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <article className="bi-service-card">
      <div className="bi-service-card__top">
        <div className="bi-service-card__icon-wrapper" aria-hidden="true">
          <Icon name={service.icon || 'code'} size={24} />
        </div>

        <div className="bi-service-card__title-box">
          <h3 className="bi-service-card__title">{service.name}</h3>
        </div>

        <p className="bi-service-card__desc">{service.shortDescription}</p>
      </div>

      <div className="bi-service-card__topics-wrapper">
        {service.topics && service.topics.length > 0 && (
          <>
            <p className="bi-service-card__topics-label">Contoh Topik:</p>
            <ul className="bi-service-card__topics">
              {service.topics.map((topic, index) => (
                <li key={index} className="bi-service-card__topic-item">
                  <span className="bi-service-card__topic-bullet" aria-hidden="true">
                    <Icon name="check" size={13} />
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="bi-service-card__bottom">
        <WhatsAppButton
          placement="service_card"
          category={service.waContext || service.name}
          label="Konsultasi"
          fullWidth
          size="md"
        />
      </div>
    </article>
  );
}
