import React from 'react';
import SiteHeader from './components/layout/SiteHeader.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import HowItWorksSection from './components/sections/HowItWorksSection.jsx';
import PrinciplesSection from './components/sections/PrinciplesSection.jsx';
import MentorSection from './components/sections/MentorSection.jsx';
import FAQSection from './components/sections/FAQSection.jsx';
import FinalCTASection from './components/sections/FinalCTASection.jsx';
import StickyCTA from './components/ui/StickyCTA.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';

export default function App() {
  return (
    <div className="bi-app">
      {/* Skip Link untuk Aksesibilitas Keyboard */}
      <a href="#main-content" className="bi-skip-link">
        Loncat ke konten utama
      </a>

      {/* S01 Navigation Bar */}
      <SiteHeader />

      <main id="main-content">
        {/* S02 Hero */}
        <HeroSection />

        {/* S03 Services */}
        <ServicesSection />

        {/* S04 How It Works */}
        <HowItWorksSection />

        {/* S05 Principles */}
        <PrinciplesSection />

        {/* S06 Mentor (Dikendalikan feature flag showMentors=false di config) */}
        <MentorSection />

        {/* S07 FAQ */}
        <FAQSection />

        {/* S08 Final CTA */}
        <FinalCTASection />
      </main>

      {/* Sticky CTA Mobile (P1) */}
      <StickyCTA />

      {/* S09 Footer */}
      <SiteFooter />
    </div>
  );
}
