/**
 * Can Kepenk - Temel Uygulama Scripti
 * WhatsApp Yönlendirici, Öncesi/Sonrası Kaydırıcı, Galeri Filtresi & SSS Akordiyonu
 */

(function () {
  'use strict';

  // --- MERKEZİ İLETİŞİM KONFİGÜRASYONU ---
  // Telefon ve WhatsApp numaralarını buradan tek seferde değiştirebilirsiniz:
  const CONFIG = {
    companyName: 'Can Kepenk Sistemleri',
    phoneDisplay: '0505 447 13 56',
    phoneClean: '+905054471356',
    whatsappNumber: '905054471356',
    city: 'İstanbul'
  };

  // --- DOMContentLoaded INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppForm();
    initHeroSlider();
    initMobileHeroStats();
    initBeforeAfterSlider();
    initGalleryFilter();
    initFaqAccordion();
    initMobileNav();
    initLightbox();
    initHeaderScroll();
  });

  // 1. HIZLI KEŞİF & WHATSAPP FORMU
  function initWhatsAppForm() {
    const btnSubmit = document.getElementById('btn-submit-wa');
    const serviceSelect = document.getElementById('service-type');
    const districtSelect = document.getElementById('district-select');
    const notesInput = document.getElementById('form-notes');

    if (!btnSubmit) return;

    btnSubmit.addEventListener('click', () => {
      const service = serviceSelect ? serviceSelect.value : 'Otomatik Kepenk';
      const district = districtSelect ? districtSelect.value : '';
      const notes = notesInput ? notesInput.value.trim() : '';

      if (!district) {
        alert('Lütfen hizmet almak istediğiniz İstanbul ilçesini seçiniz.');
        if (districtSelect) districtSelect.focus();
        return;
      }

      // WhatsApp formatlı mesaj metni
      let message = `*Merhaba Can Kepenk,* web siteniz üzerinden keşif ve teklif talebinde bulunuyorum:\n\n`;
      message += `📍 *İlçe:* İstanbul / ${district}\n`;
      message += `🛠️ *Hizmet:* ${service}\n`;
      if (notes) {
        message += `📝 *Açıklama / Ölçü:* ${notes}\n\n`;
      } else {
        message += `\n`;
      }
      message += `En kısa sürede keşif ve yaklaşık fiyat bilgisi rica ediyorum.`;

      const encoded = encodeURIComponent(message);
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // 2. MOBİL HERO ARKA PLAN SLAYTI
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-mobile-slide');
    if (slides.length < 2) return;

    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const INTERVAL = 4500;
    let index = 0;
    let timer = null;

    function showSlide(nextIndex) {
      slides[index].classList.remove('active');
      index = nextIndex;
      slides[index].classList.add('active');
    }

    function start() {
      if (timer || !mobileQuery.matches || reduceMotion.matches) return;
      timer = window.setInterval(() => {
        showSlide((index + 1) % slides.length);
      }, INTERVAL);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function sync() {
      if (mobileQuery.matches && !document.hidden) {
        start();
      } else {
        stop();
      }
    }

    document.addEventListener('visibilitychange', sync);
    mobileQuery.addEventListener('change', sync);
    reduceMotion.addEventListener('change', sync);
    sync();
  }

  // 3. MOBİLDE İSTATİSTİKLERİ HİZMETLER ÜSTÜNE TAŞI
  function initMobileHeroStats() {
    const stats = document.querySelector('.hero-stats');
    const servicesContainer = document.querySelector('#hizmetler .container');
    if (!stats || !servicesContainer) return;

    const servicesHeader = servicesContainer.querySelector('.section-header');
    const originalParent = stats.parentNode;
    const originalNext = stats.nextSibling;
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    function place() {
      if (mobileQuery.matches) {
        if (stats.parentNode !== servicesContainer) {
          stats.classList.add('hero-stats--inline');
          servicesContainer.insertBefore(stats, servicesHeader);
        }
      } else if (stats.parentNode !== originalParent) {
        stats.classList.remove('hero-stats--inline');
        originalParent.insertBefore(stats, originalNext);
      }
    }

    mobileQuery.addEventListener('change', place);
    place();
  }

  // 4. ÖNCESİ / SONRASI İNTERAKTİF KAYDIRICI (BEFORE/AFTER SLIDER)
  function initBeforeAfterSlider() {
    const container = document.getElementById('ba-comparator');
    const beforeLayer = document.getElementById('ba-before-layer');
    const handle = document.getElementById('ba-handle');

    if (!container || !beforeLayer || !handle) return;

    let isDragging = false;

    function updatePosition(clientX) {
      const rect = container.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      let percentage = (offsetX / rect.width) * 100;

      // Clamp between 5% and 95%
      percentage = Math.max(5, Math.min(95, percentage));

      beforeLayer.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    // Mouse Events
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      updatePosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events (Mobile)
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // 5. REFERANS GALERİ FİLTRESİ
  function initGalleryFilter() {
    const tabs = document.querySelectorAll('#gallery-tabs .tab-btn');
    const cards = document.querySelectorAll('#gallery-grid .gallery-card');

    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 180);
          }
        });
      });
    });
  }

  // 6. SSS AKORDİYON
  function initFaqAccordion() {
    const items = document.querySelectorAll('#faq-accordion .faq-item');

    items.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const icon = item.querySelector('.faq-icon');

      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all items
        items.forEach(it => {
          it.classList.remove('open');
          const itBtn = it.querySelector('.faq-question');
          const itIcon = it.querySelector('.faq-icon');
          if (itBtn) itBtn.setAttribute('aria-expanded', 'false');
          if (itIcon) itIcon.textContent = '+';
        });

        // Toggle clicked
        if (!isOpen) {
          item.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
          if (icon) icon.textContent = '−';
        }
      });
    });
  }

  // 7. MOBİL GEZİNTİ MENÜSÜ
  function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav-menu');
    const header = document.getElementById('header');
    const links = document.querySelectorAll('.nav-link');

    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove('mobile-open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      if (header) header.classList.remove('menu-open');
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('mobile-open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (header) header.classList.toggle('menu-open', isOpen);
    });

    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // 8. LIGHTBOX GALERİ
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (!lightbox || !lightboxImg || !galleryCards.length) return;

    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.gallery-media img');
        if (!img) return;

        const title = card.querySelector('.gallery-title');
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || 'Büyük Görsel';
        if (lightboxCaption) {
          lightboxCaption.textContent = title ? title.textContent : '';
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        lightboxImg.src = '';
        if (lightboxCaption) lightboxCaption.textContent = '';
      }, 300);
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 9. MOBİL ŞEFFAF HEADER (KAYDIRINCA ZEMİN KAZANIR)
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 160);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

})();
