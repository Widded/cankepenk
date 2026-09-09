/**
 * Can Kepenk - İnteraktif Kepenk Simülatörü ve Web Audio Motoru
 * Fiziksel kumanda arayüzü, sarmal kepenk animasyonu ve ses sentezi
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIS ENGINE (Web Audio API) ---
  class ShutterAudioEngine {
    constructor() {
      this.ctx = null;
      this.motorOsc = null;
      this.motorGain = null;
      this.enabled = true;
      this.initOnFirstInteraction = this.initOnFirstInteraction.bind(this);
      
      document.addEventListener('click', this.initOnFirstInteraction, { once: true });
      document.addEventListener('touchstart', this.initOnFirstInteraction, { once: true });
    }

    initOnFirstInteraction() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
    }

    ensureContext() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Physical relay click sound on button press
    playRelayClick() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    }

    // Start electric tubular motor hum
    startMotorSound() {
      if (!this.enabled) return;
      this.ensureContext();
      if (!this.ctx) return;

      this.stopMotorSound(); // Ensure no duplicates

      const now = this.ctx.currentTime;
      this.motorOsc = this.ctx.createOscillator();
      this.motorGain = this.ctx.createGain();

      // Low frequency tubular motor sound ~110Hz + harmonics
      this.motorOsc.type = 'sawtooth';
      this.motorOsc.frequency.setValueAtTime(115, now);

      // Low pass filter to remove harshness
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      this.motorGain.gain.setValueAtTime(0.01, now);
      this.motorGain.gain.linearRampToValueAtTime(0.12, now + 0.15);

      this.motorOsc.connect(filter);
      filter.connect(this.motorGain);
      this.motorGain.connect(this.ctx.destination);

      this.motorOsc.start(now);
    }

    // Stop tubular motor sound
    stopMotorSound() {
      if (this.motorGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.motorGain.gain.linearRampToValueAtTime(0.001, now + 0.1);
        setTimeout(() => {
          if (this.motorOsc) {
            try { this.motorOsc.stop(); } catch (e) {}
            this.motorOsc.disconnect();
            this.motorOsc = null;
          }
        }, 120);
      }
    }
  }

  // --- SHUTTER CONTROLLER & SIMULATOR ---
  class ShutterSimulator {
    constructor() {
      this.audio = new ShutterAudioEngine();
      
      // DOM Elements
      this.curtain = document.getElementById('shutter-curtain');
      this.statusDot = document.getElementById('shutter-status-dot');
      this.statusText = document.getElementById('shutter-status-text');
      this.posText = document.getElementById('shutter-pos-pct');
      this.remoteLed = document.getElementById('remote-led');
      this.btnUp = document.getElementById('btn-shutter-up');
      this.btnDown = document.getElementById('btn-shutter-down');
      this.btnStop = document.getElementById('btn-shutter-stop');
      this.soundToggle = document.getElementById('sound-toggle');
      this.summaryText = document.getElementById('simulator-selection-summary');
      this.btnQuote = document.getElementById('btn-quote-from-simulator');

      // State: curtain coverage (100 = fully closed, 0 = fully open)
      this.curtainCoverage = 100; // starts closed
      this.state = 'CLOSED'; // 'CLOSED', 'OPENING', 'OPEN', 'CLOSING', 'STOPPED'
      this.animationFrame = null;
      this.speed = 0.55; // % per tick

      // Configuration state
      this.selectedColor = 'anthracite';
      this.selectedColorName = 'Antrasit Gri (RAL 7016)';
      this.selectedType = 'solid';
      this.selectedTypeName = 'Dolu Çelik Profil';

      this.initEvents();
      this.updateUI();
    }

    initEvents() {
      // Remote buttons
      if (this.btnUp) {
        this.btnUp.addEventListener('click', () => {
          this.audio.playRelayClick();
          this.startOpening();
        });
      }

      if (this.btnDown) {
        this.btnDown.addEventListener('click', () => {
          this.audio.playRelayClick();
          this.startClosing();
        });
      }

      if (this.btnStop) {
        this.btnStop.addEventListener('click', () => {
          this.audio.playRelayClick();
          this.stopShutter();
        });
      }

      // Sound toggle
      if (this.soundToggle) {
        this.soundToggle.addEventListener('change', (e) => {
          this.audio.enabled = e.target.checked;
          if (!this.audio.enabled) {
            this.audio.stopMotorSound();
          }
        });
      }

      // Color Swatches
      const colorBtns = document.querySelectorAll('.color-swatch-btn');
      colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          colorBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const color = btn.getAttribute('data-color');
          const name = btn.getAttribute('data-color-name');
          this.setColor(color, name);
        });
      });

      // Type Buttons
      const typeBtns = document.querySelectorAll('.type-btn');
      typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          typeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const type = btn.getAttribute('data-type');
          const name = btn.getAttribute('data-type-name');
          this.setType(type, name);
        });
      });

      // WhatsApp Quote button from simulator
      if (this.btnQuote) {
        this.btnQuote.addEventListener('click', () => {
          this.requestQuoteFromSimulator();
        });
      }
    }

    setColor(colorKey, colorName) {
      this.selectedColor = colorKey;
      this.selectedColorName = colorName;

      if (this.curtain) {
        this.curtain.classList.remove('color-anthracite', 'color-silver', 'color-black', 'color-white');
        this.curtain.classList.add(`color-${colorKey}`);
      }
      this.updateSummary();
    }

    setType(typeKey, typeName) {
      this.selectedType = typeKey;
      this.selectedTypeName = typeName;

      if (this.curtain) {
        if (typeKey === 'perforated') {
          this.curtain.classList.add('type-perforated');
        } else {
          this.curtain.classList.remove('type-perforated');
        }
      }
      this.updateSummary();
    }

    updateSummary() {
      if (this.summaryText) {
        this.summaryText.textContent = `Seçim: ${this.selectedColorName.split('(')[0].trim()} • ${this.selectedTypeName.split('(')[0].trim()}`;
      }
    }

    startOpening() {
      if (this.curtainCoverage <= 0) {
        // Already fully open
        this.setLed('led-green');
        return;
      }

      this.state = 'OPENING';
      this.setLed('led-green');
      this.audio.startMotorSound();
      this.runAnimation();
    }

    startClosing() {
      if (this.curtainCoverage >= 100) {
        // Already fully closed
        this.setLed('led-amber');
        return;
      }

      this.state = 'CLOSING';
      this.setLed('led-amber');
      this.audio.startMotorSound();
      this.runAnimation();
    }

    stopShutter() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }
      this.state = 'STOPPED';
      this.setLed('led-red');
      this.audio.stopMotorSound();
      this.updateUI();

      setTimeout(() => {
        this.setLed('');
      }, 1200);
    }

    setLed(className) {
      if (!this.remoteLed) return;
      this.remoteLed.className = 'remote-led';
      if (className) {
        this.remoteLed.classList.add(className);
      }
    }

    runAnimation() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }

      const loop = () => {
        if (this.state === 'OPENING') {
          this.curtainCoverage -= this.speed;
          if (this.curtainCoverage <= 0) {
            this.curtainCoverage = 0;
            this.state = 'OPEN';
            this.audio.stopMotorSound();
            this.setLed('');
          }
        } else if (this.state === 'CLOSING') {
          this.curtainCoverage += this.speed;
          if (this.curtainCoverage >= 100) {
            this.curtainCoverage = 100;
            this.state = 'CLOSED';
            this.audio.stopMotorSound();
            this.setLed('');
          }
        } else {
          return;
        }

        this.updateUI();

        if (this.state === 'OPENING' || this.state === 'CLOSING') {
          this.animationFrame = requestAnimationFrame(loop);
        }
      };

      this.animationFrame = requestAnimationFrame(loop);
    }

    updateUI() {
      if (this.curtain) {
        this.curtain.style.height = `${this.curtainCoverage.toFixed(1)}%`;
      }

      const openPercent = Math.round(100 - this.curtainCoverage);
      if (this.posText) {
        this.posText.textContent = `%${openPercent} Açık`;
      }

      if (!this.statusDot || !this.statusText) return;

      this.statusDot.className = 'status-dot';

      if (this.state === 'OPENING') {
        this.statusDot.classList.add('status-moving');
        this.statusText.textContent = `Durum: Kepenk Yukarı Sarılıyor (%${openPercent})`;
      } else if (this.state === 'CLOSING') {
        this.statusDot.classList.add('status-moving');
        this.statusText.textContent = `Durum: Kepenk Aşağı İniyor (%${openPercent})`;
      } else if (this.state === 'OPEN') {
        this.statusDot.classList.add('status-open');
        this.statusText.textContent = 'Durum: Kepenk Tamamen Açık (Vitrin Aydınlık)';
      } else if (this.state === 'CLOSED') {
        this.statusDot.classList.add('status-closed');
        this.statusText.textContent = 'Durum: Kepenk Kilitli (Maksimum Güvenlik)';
      } else if (this.state === 'STOPPED') {
        this.statusDot.classList.add('status-moving');
        this.statusText.textContent = `Durum: Kademeli Durduruldu (%${openPercent} Seviyesinde)`;
      }
    }

    requestQuoteFromSimulator() {
      const msg = `Merhaba Can Kepenk, web sitenizdeki canlı simülatörde incelediğim [${this.selectedColorName}] renkli ve [${this.selectedTypeName}] model otomatik kepenk için ölçü ve fiyat teklifi almak istiyorum.`;
      const encoded = encodeURIComponent(msg);
      const url = `https://wa.me/905320000000?text=${encoded}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  // Initialize Simulator when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    window.canKepenkSimulator = new ShutterSimulator();
  });

})();
