import React from 'react';
import Section from '../ui/Section.jsx';
import { siteConfig } from '../../config/site.js';
import './MentorSection.css';

/**
 * Bimbing.in — MentorSection (S06)
 * Dinonaktifkan secara default di MVP sesuai PRD Bagian 8.3.
 * Bila flag showMentors bernilai false, komponen mengembalikan null tanpa markup DOM yang tersisa.
 */
export default function MentorSection({ mentors = [] }) {
  if (!siteConfig.features.showMentors || mentors.length === 0) {
    return null;
  }

  return (
    <Section
      id="mentor"
      eyebrow="Tim Pembimbing"
      title="Belajar Bersama Mentor Berpengalaman"
      intro="Didampingi praktisi dan akademisi yang sabar dan berkomitmen membimbing hingga tuntas."
      tone="default"
    >
      <ul className="bi-mentors-grid" aria-label="Daftar Pembimbing">
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            <article className="bi-mentor-card">
              <div className="bi-mentor-card__avatar">
                {mentor.photo ? (
                  <img src={mentor.photo} alt={`Foto profil ${mentor.name}`} />
                ) : (
                  <span>{mentor.name?.charAt(0)}</span>
                )}
              </div>
              <h3 className="bi-mentor-card__name">{mentor.name}</h3>
              <p className="bi-mentor-card__role">{mentor.expertise}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
