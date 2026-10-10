// Procedural Web Audio API sound generator for zero-latency, asset-free cinematic audio

class AudioManager {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.osc1 = null;
    this.osc2 = null;
    this.isMuted = true;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
      }
    } catch {
      // AudioContext unavailable or blocked
    }
  }

  toggleMusic() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.isMuted) {
      // Stop ambient
      this.stopAmbient();
      this.isMuted = true;
      return false;
    } else {
      // Start ambient
      this.startAmbient();
      this.isMuted = false;
      return true;
    }
  }

  startAmbient() {
    if (!this.ctx) return;
    try {
      this.stopAmbient();

      // Master ambient gain
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      // Low drone (deep bass note ~55Hz A1)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sawtooth';
      this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);

      // Warm low pass filter for cinematic rumble
      const filter1 = this.ctx.createBiquadFilter();
      filter1.type = 'lowpass';
      filter1.frequency.setValueAtTime(120, this.ctx.currentTime);

      // Ethereal fifth harmonic (82.4Hz E2)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(82.4, this.ctx.currentTime);

      const filter2 = this.ctx.createBiquadFilter();
      filter2.type = 'lowpass';
      filter2.frequency.setValueAtTime(180, this.ctx.currentTime);

      // Connect
      this.osc1.connect(filter1);
      filter1.connect(this.ambientGain);

      this.osc2.connect(filter2);
      filter2.connect(this.ambientGain);

      this.ambientGain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
    } catch {
      // ignore
    }
  }

  stopAmbient() {
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          if (this.osc1) { this.osc1.stop(); this.osc1.disconnect(); this.osc1 = null; }
          if (this.osc2) { this.osc2.stop(); this.osc2.disconnect(); this.osc2 = null; }
        }, 500);
      } catch {
        // ignore
      }
    }
  }

  playHover() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // ignore
    }
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // ignore
    }
  }

  playSkillFlare() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {
      // ignore
    }
  }
}

export const audioManager = new AudioManager();
