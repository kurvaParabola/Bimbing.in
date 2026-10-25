import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton.jsx';
import { siteConfig } from '../../config/site.js';
import './FinalCTASection.css';

/**
 * Bimbing.in — FinalCTASection (S08)
 * Blok penutup dengan satu aksi konversi utama menuju WhatsApp.
 */
export default function FinalCTASection() {
  return (
    <section id="kontak" className="bi-final-cta" aria-labelledby="kontak-heading">
      <div className="bi-container">
        <div className="bi-final-cta__card">
          <div className="bi-final-cta__inner">
            <span className="bi-final-cta__eyebrow">Mulai Belajar Bersama</span>

            <h2 id="kontak-heading" className="bi-final-cta__title">
              Siap Mengurai Kendala Belajarmu?
            </h2>

            <p className="bi-final-cta__desc">
              Jangan biarkan kebingungan menumpuk hingga mendekati deadline.
              Konsultasikan topik materi atau tugasmu secara santai bersama admin kami.
            </p>

            <div className="bi-final-cta__action">
              <WhatsAppButton
                placement="final_cta"
                size="lg"
                label="Konsultasi via WhatsApp Sekarang"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
