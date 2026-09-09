# Can Kepenk Resmi One-Page Web Sitesi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a rich, authoritative, high-converting One-Page website for "Can Kepenk Sistemleri" featuring an interactive remote-controlled shutter simulator, service catalog, direct WhatsApp quote generation, 7/24 emergency repair hotline, and reference gallery.

**Architecture:** Single-page architecture using vanilla semantic HTML5, modern CSS3 with custom properties and responsive layouts (CSS Grid/Flexbox), and modular Vanilla JavaScript. No heavyweight runtime frameworks; ensures near-instant loading speed, 100/100 Lighthouse performance, and rich micro-interactions.

**Tech Stack:** HTML5 (SEO & Schema.org LocalBusiness), CSS3 (Custom Properties, Glassmorphism, Animations), Vanilla JavaScript (Web Audio API for realistic shutter sounds, DOM manipulation), SVG Icons & optimized web media.

## Global Constraints

- Standalone static web application running directly in any modern browser.
- No automated price calculator (quotes and discovery are handled exclusively through WhatsApp and phone).
- All contact triggers must format real, usable tel: links and WhatsApp deep links (`https://wa.me/905320000000?text=...`).
- Fully responsive across mobile (360px+), tablet, laptop, and 4K desktop displays.
- Visual theme: Industrial dark (#0B0F17, #111827), steel slate (#1E293B, #334155), safety amber/gold (#F59E0B, #EAB308), emergency red (#EF4444), WhatsApp green (#22C55E).

---

### Task 1: Scaffolding, HTML5 Semantic Architecture & Structured Data

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: Design spec requirements (`docs/superpowers/specs/2026-09-09-kepenk-web-design.md`)
- Produces: Complete semantic DOM elements with descriptive IDs and classes for all sections (`#header`, `#hero`, `#sayaclar`, `#simulator`, `#modeller`, `#hizmetler`, `#kesif`, `#referanslar`, `#surec`, `#sss`, `#iletisim`, `#floating-cta`).

- [ ] **Step 1: Create semantic `index.html` file**
Write `index.html` including:
- Proper `<head>` tags: UTF-8, viewport, title ("Can Kepenk | İstanbul Otomatik Kepenk İmalatı & 7/24 Acil Servis"), meta description, OpenGraph tags, Google Fonts (`Outfit` & `Inter`).
- JSON-LD Structured Data: `LocalBusiness` / `HomeAndConstructionBusiness` schema with address, service area (İstanbul), telephone, openingHours (24/7 emergency).
- Sticky Header: Logo, district badge, smooth-scroll links, emergency call button and WhatsApp button.
- Hero Section: High-impact headline, subtext, CTA buttons, and 4-item counter banner.
- Simulator Container: Modern storefront frame with canvas/DOM shutter slats, digital control panel with Up/Down/Stop remote buttons, color picker, and slat type toggles.
- Product Cards Grid: 4 models (Dükkan Kepengi, Garaj Kapısı, İzolasyonlu Poliüretanlı, Ağır Hizmet Endüstriyel).
- 7/24 Service & Emergency Section: 5 service cards (Acil Tamir, Motor Değişimi, UPS Güç Kaynağı, Kumanda Kopyalama, Ücretsiz Keşif).
- Direct WhatsApp Quote / Keşif Form: Service selector, district selector (all Istanbul districts), note input, and instant WhatsApp trigger.
- Reference & Showcase Gallery: Category filter tabs, project image cards, and Before/After comparison widget.
- 4-Step Process Section & FAQ Accordion: Questions and answers regarding electricity cuts, timing, warranty, and emergency response.
- Footer & Istanbul District Tags: Full 39 district SEO tags, address, phone, contact details, copyright.
- Mobile Sticky CTA Bar: Fixed bottom bar for mobile screens with Call Now and WhatsApp buttons.

- [ ] **Step 2: Validate HTML5 structure and markup**
Run local syntax check or lint to verify closing tags, valid attributes, and semantic landmarks.

- [ ] **Step 3: Commit scaffolding**
```bash
git add index.html
git commit -m "feat: scaffold semantic HTML structure and LocalBusiness schema"
```

---

### Task 2: Industrial Design System & Responsive CSS Styling

**Files:**
- Create: `css/style.css`

**Interfaces:**
- Consumes: DOM structure from `index.html`
- Produces: Comprehensive styling, CSS variables, glassmorphism cards, remote control UI, animated shutter slats, responsive grid/flexbox layouts.

- [ ] **Step 1: Build CSS design tokens and base styles**
- Color tokens (`--bg-main`, `--bg-card`, `--accent-gold`, `--accent-red`, `--accent-green`, `--text-main`, `--text-muted`, `--border-steel`).
- Typography rules with Google Fonts `Outfit` (display/headings) and `Inter` (body/technical specs).
- Smooth scroll behavior, custom steel scrollbar, and container breakpoints.

- [ ] **Step 2: Style Hero, Counters & Header**
- Glassmorphism sticky header with backdrop-blur.
- Hero section with industrial gradient background, badge pulse animations, and high-contrast CTA buttons.
- 4-item live metric cards with steel borders and icon glows.

- [ ] **Step 3: Style the Interactive Remote Shutter Simulator**
- Hyper-realistic storefront showcase with interior light glow, brick/marble pillars, and window display.
- Animated roller shutter curtain: individually styled metal slats with realistic metallic gradients, interlocking joints, and optional perforated dot pattern.
- Realistic handheld remote control (kumanda) widget with tactile physical buttons (Up, Down, Stop), metallic casing, LED indicator light, and keychain loop.
- Color swatches and slat-type switcher buttons with active states.

- [ ] **Step 4: Style Cards, Gallery, FAQ Accordion & Forms**
- Product cards with badge tags, spec lists, and hover elevation.
- 7/24 Emergency cards with emergency red border accents and glowing icons.
- Instant quote form with dark inputs, focused amber outlines, and dual action buttons.
- Before/After interactive slider with draggable divider handle.
- Clean FAQ accordion with smooth open/close height transitions.
- Fixed mobile bottom bar (`position: fixed; bottom: 0; display: none;`) visible on mobile screens (`@media (max-width: 768px)`).

- [ ] **Step 5: Commit styles**
```bash
git add css/style.css
git commit -m "feat: implement industrial responsive design system and simulator styling"
```

---

### Task 3: Interactive Shutter Simulator & Audio Engine

**Files:**
- Create: `js/simulator.js`

**Interfaces:**
- Consumes: `#shutter-canvas` or `#shutter-curtain`, `#btn-up`, `#btn-down`, `#btn-stop`, `#remote-led`, color buttons, type buttons.
- Produces: Smooth animated shutter movement, status updates, Web Audio API sound synthesis (relay click, electric motor hum, slat clatter).

- [ ] **Step 1: Implement state machine for shutter motion**
States: `CLOSED` (0% open), `OPENING`, `OPEN` (100% open), `CLOSING`, `STOPPED` (partial).
- Connect `Up` button: Starts opening animation, turns LED green, plays motor sound.
- Connect `Down` button: Starts closing animation, turns LED amber, plays motor sound.
- Connect `Stop` button: Immediately pauses animation at current height, turns LED red, stops sound.
- Limit switches: Automatically stop when reaching 100% top or 0% bottom.

- [ ] **Step 2: Implement Web Audio API synthesis for mechanical feedback**
- Create synthesized relay clicks on button press (short impulse buffer).
- Create a low-frequency motor hum during shutter movement using oscillator node.
- Stop sound smoothly on stop/limit. Include mute option or graceful fallback if audio context is suspended until user interaction.

- [ ] **Step 3: Implement color and slat type switcher**
- Update shutter curtain CSS variables dynamically when user clicks Anthracite (RAL 7016), Metallic Silver, Matte Black, or Pure White.
- Toggle perforated texture class (`.slat-perforated`) when user selects Micro-Delikli Vitrin model.
- Sync active states on buttons.

- [ ] **Step 4: Connect "Bu Modeli WhatsApp'tan Sor" button**
- Formulate dynamic message: e.g. "Merhaba Can Kepenk, simülatörünüzde denediğim [Antrasit Gri] renkli [Mikro Delikli] dükkan kepengi modeli için bilgi ve fiyat almak istiyorum."
- Open WhatsApp URL with encoded message.

- [ ] **Step 5: Commit simulator logic**
```bash
git add js/simulator.js
git commit -m "feat: implement interactive remote shutter simulator with Web Audio synthesis"
```

---

### Task 4: Lead Generation, WhatsApp Dispatcher, Gallery & UI Interactions

**Files:**
- Create: `js/app.js`

**Interfaces:**
- Consumes: Contact form elements, district dropdown, category filters, Before/After slider, FAQ accordion items.
- Produces: Instant WhatsApp dispatching, smooth accordion toggling, interactive before/after image drag, gallery filtering.

- [ ] **Step 1: Configuration & Contact Engine**
- Centralized configuration object:
  ```javascript
  const CAN_KEPENK_CONFIG = {
    phone: "0532 000 00 00",
    phoneClean: "+905320000000",
    whatsapp: "905320000000",
    companyName: "Can Kepenk Sistemleri",
    city: "İstanbul"
  };
  ```
- Form submit handler: Reads service selection, district, and user notes.
- Generates pre-formatted WhatsApp link and opens in a new tab without requiring server-side backend.

- [ ] **Step 2: Before/After Interactive Comparison Slider**
- Slider input / mouse & touch drag events to resize the top image layer.
- Smooth label transition between "Eski / Hasarlı Kepenk" and "Can Kepenk Yeni Montaj".

- [ ] **Step 3: Reference Gallery Filter & FAQ Accordion**
- Category filter buttons (Tümü, Dükkan, Garaj, Endüstriyel) to show/hide items with fade-in animation.
- FAQ accordion click handlers: toggle `open` class, auto-close sibling items, accessibility `aria-expanded` attributes.

- [ ] **Step 4: Commit UI scripts**
```bash
git add js/app.js
git commit -m "feat: implement WhatsApp lead dispatcher, before-after slider and interactive accordion"
```

---

### Task 5: High-Quality Visual Media & SVG Assets

**Files:**
- Create: `assets/logo.svg`
- Create: `assets/remote-icon.svg`
- Create: `assets/images/*` (Realistically styled showcase photos and textures)

**Interfaces:**
- Consumes: Media asset requirements for gallery, hero, and before/after slider.
- Produces: Professional SVG icons, storefront background, and reference images.

- [ ] **Step 1: Create crisp SVG icons and badges**
- Steel roller shutter brand mark logo (`assets/logo.svg`).
- High-detail icons for services (Emergency siren, motor gear, UPS battery, RF remote, laser measure).

- [ ] **Step 2: Create reference imagery and showcase visuals**
- Generate/create sharp showcase images for shop shutters, garage doors, industrial warehouse doors, and before/after comparison.

- [ ] **Step 3: Commit assets**
```bash
git add assets/
git commit -m "feat: add vector icons and showcase imagery"
```

---

### Task 6: End-to-End Verification & Polish

**Files:**
- Test: All files via local browser verification

- [ ] **Step 1: Local HTTP server launch & live testing**
- Launch local static server (e.g. Python `http.server` or `npx serve`).
- Verify page load with browser subagent.

- [ ] **Step 2: Verify interactive features**
- Test Remote Control Up, Down, Stop functions.
- Test Color and Slat-type changes.
- Test Before/After image comparison slider drag.
- Test FAQ accordion opening and closing.
- Test WhatsApp link construction with encoded Turkish characters.
- Test Mobile responsive layout (375px viewport) and verify sticky bottom action bar.

- [ ] **Step 3: Final commit and cleanup**
```bash
git add -A
git commit -m "chore: complete Can Kepenk official website and pass all verifications"
```
