import React, { useRef, useEffect, useState, useMemo } from 'react';
import Section from '../ui/Section.jsx';
import ServiceCard from './ServiceCard.jsx';
import { servicesData } from '../../data/services.js';
import './ServicesSection.css';

/**
 * Bimbing.in — ServicesSection (S03)
 * Karosel looping otomatis dengan ukuran kartu seragam,
 * dapat ditahan (hold) untuk digeser bebas ke kiri atau ke kanan.
 */
export default function ServicesSection() {
  const trackRef = useRef(null);
  const animFrameId = useRef(null);
  const [isHeld, setIsHeld] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const hasMovedRef = useRef(false);

  const activeServices = useMemo(() => {
    return servicesData
      .filter((s) => s.isActive)
      .sort((a, b) => a.order - b.order);
  }, []);

  // Gandakan item 3 kali untuk seamless infinite loop
  const repeatedServices = useMemo(() => {
    return [
      ...activeServices.map((s) => ({ ...s, uniqueKey: `set1-${s.id}` })),
      ...activeServices.map((s) => ({ ...s, uniqueKey: `set2-${s.id}` })),
      ...activeServices.map((s) => ({ ...s, uniqueKey: `set3-${s.id}` })),
    ];
  }, [activeServices]);

  // Set posisi scroll awal ke set tengah
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Tunggu render selesai untuk menghitung lebar 1 set
    const timer = setTimeout(() => {
      const singleSetWidth = track.scrollWidth / 3;
      if (singleSetWidth > 0 && track.scrollLeft === 0) {
        track.scrollLeft = singleSetWidth;
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [repeatedServices]);

  // Auto-scroll loop saat tidak di-hold
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.75; // px per frame

    const loop = () => {
      const singleSetWidth = track.scrollWidth / 3;

      if (!isHeld && !isDraggingRef.current && singleSetWidth > 0) {
        track.scrollLeft += speed;

        // Looping ke kiri jika melebihi set ke-2
        if (track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        }
      }

      // Handle loop batas kiri jika pengguna menggeser jauh ke kiri
      if (track.scrollLeft <= 2 && singleSetWidth > 0) {
        track.scrollLeft += singleSetWidth;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isHeld]);

  // Mouse Drag / Hold Handlers
  const handleMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;

    isDraggingRef.current = true;
    setIsHeld(true);
    hasMovedRef.current = false;
    dragStartXRef.current = e.pageX;
    dragStartScrollRef.current = track.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const deltaX = e.pageX - dragStartXRef.current;
    if (Math.abs(deltaX) > 5) {
      hasMovedRef.current = true;
    }

    track.scrollLeft = dragStartScrollRef.current - deltaX;

    // Handle seamless wrap saat digeser manual
    const singleSetWidth = track.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (track.scrollLeft >= singleSetWidth * 2) {
        track.scrollLeft -= singleSetWidth;
        dragStartScrollRef.current -= singleSetWidth;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft += singleSetWidth;
        dragStartScrollRef.current += singleSetWidth;
      }
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsHeld(false);
  };

  // Touch Drag / Hold Handlers
  const handleTouchStart = (e) => {
    const track = trackRef.current;
    if (!track || !e.touches[0]) return;

    isDraggingRef.current = true;
    setIsHeld(true);
    dragStartXRef.current = e.touches[0].pageX;
    dragStartScrollRef.current = track.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !e.touches[0]) return;
    const track = trackRef.current;
    if (!track) return;

    const deltaX = e.touches[0].pageX - dragStartXRef.current;
    track.scrollLeft = dragStartScrollRef.current - deltaX;

    const singleSetWidth = track.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (track.scrollLeft >= singleSetWidth * 2) {
        track.scrollLeft -= singleSetWidth;
        dragStartScrollRef.current -= singleSetWidth;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft += singleSetWidth;
        dragStartScrollRef.current += singleSetWidth;
      }
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsHeld(false);
  };

  return (
    <Section
      id="layanan"
      eyebrow="Katalog Layanan"
      title="Pilih Kategori Bimbingan"
      intro="Pendampingan privat terarah untuk membantumu memahami materi kuliah dan menuntaskan proyek teknis."
      tone="default"
    >
      <div className="bi-services-carousel-wrapper">
        <ul
          ref={trackRef}
          className={`bi-services-track ${isHeld ? 'bi-services-track--dragging' : ''}`.trim()}
          aria-label="Daftar Kategori Layanan Berjalan"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {repeatedServices.map((service) => (
            <li key={service.uniqueKey} className="bi-services-item">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
