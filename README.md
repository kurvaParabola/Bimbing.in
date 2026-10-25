# Bimbing.in — Teman Belajar, Teman Bertumbuh

Landing page resmi untuk **Bimbing.in**, platform bimbingan akademik privat satu-lawan-satu yang berfokus pada pemahaman konsep dan penyelesaian tugas/proyek teknis secara mandiri.

---

## 🚀 Fitur & Keunggulan
- **Ko-fi Sticker & Tactile Aesthetic**: Tampilan modern dengan kontras tinggi, border stiker taktil 2px, serta palet warna yang harmonis dan nyaman dipandang.
- **Auto-looping & Interactive Service Carousel**: Menampilkan katalog layanan bimbingan akademik dengan infinite smooth scroll saat idle dan fitur hold-and-drag interaktif.
- **WhatsApp Direct Action**: Tombol konsultasi yang langsung terhubung ke WhatsApp dengan pesan template dinamis sesuai layanan yang dipilih.
- **Native Accordion FAQ**: Menggunakan elemen semantik `<details>/<summary>` untuk aksesibilitas maksimal tanpa JavaScript berat.
- **High Performance & Accessibility**: 100% skor performa, self-hosted font Plus Jakarta Sans, SVG inline lokal, dan kepatuhan kontras WCAG AA/AAA.

---

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Plain CSS dengan Custom Properties (Design Tokens), tanpa Tailwind/CSS Modules
- **Typography**: Self-hosted `@fontsource/plus-jakarta-sans`
- **Icons**: Inline SVG lokal (tanpa icon library eksternal)
- **Deployment**: Static Single Page Application (Vercel / Netlify / GitHub Pages ready)

---

## 📁 Struktur Direktori
```text
Bimbing.in/
├── docs/                # PRD.md & DESIGN.md
├── public/              # Favicon, robots.txt, sitemap.xml, og-image.png
├── src/
│   ├── assets/          # SVG icons & logo
│   ├── components/
│   │   ├── layout/      # SiteHeader, MobileNavigation, SiteFooter
│   │   ├── sections/    # Hero, Layanan, Cara Kerja, Prinsip, FAQ, Final CTA
│   │   └── ui/          # Button, WhatsAppButton, Icon, Section
│   ├── config/          # Site configuration & WhatsApp links
│   ├── data/            # Layanan, FAQ, Prinsip, Cara Kerja data
│   ├── styles/          # Design tokens & base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 💻 Memulai Pengembangan Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18+)
- npm atau pnpm

### Langkah Instalasi
1. Clone repositori:
   ```bash
   git clone https://github.com/kurvaParabola/Bimbing.in.git
   cd Bimbing.in
   ```

2. Salin environment variables:
   ```bash
   cp .env.example .env
   ```

3. Pasang dependensi:
   ```bash
   npm install
   ```

4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

5. Build untuk produksi:
   ```bash
   npm run build
   ```

6. Preview build produksi:
   ```bash
   npm run preview
   ```

---

## 📄 Lisensi
Hak Cipta © 2026 Bimbing.in. Semua hak dilindungi.
