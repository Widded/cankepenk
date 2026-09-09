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
    phoneDisplay: '0532 000 00 00',
    phoneClean: '+905320000000',
    whatsappNumber: '905320000000',
    city: 'İstanbul'
  };

  // --- DOMContentLoaded INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppForm();
    initBeforeAfterSlider();
    initGalleryFilter();
    initFaqAccordion();
    initMobileNav();
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

  // 2. ÖNCESİ / SONRASI İNTERAKTİF KAYDIRICI (BEFORE/AFTER SLIDER)
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

  // 3. REFERANS GALERİ FİLTRESİ
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

  // 4. SSS AKORDİYON
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

  // 5. MOBİL GEZİNTİ MENÜSÜ
  function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-link');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
      });
    });
  }

})();
