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

  playRealmSwell(regionId = 'moniyan') {
    if (this.isMuted || !this.ctx) return;
    try {
      const chords = {
        moniyan: [329.63, 415.3, 493.88, 659.25], // E Major triad + octave (Radiant Light)
        cadia: [293.66, 392.0, 440.0, 587.33], // D Pentatonic (Sacred Bamboo & Dragon)
        eruditio: [261.63, 369.99, 440.0, 523.25], // C Lydian augmented (Clockwork Science)
        northern_vale: [174.61, 261.63, 349.23, 523.25], // F Power chord (Glacial Fjord)
        abyss: [65.41, 77.78, 98.0, 116.54], // C Low dark dissonant (Demonic Void)
        celestial_palace: [349.23, 440.0, 523.25, 659.25, 783.99], // F Major 9th (Transcendent Gods)
      };

      const freqs = chords[regionId] || chords.moniyan;
      const t = this.ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = regionId === 'abyss' ? 'sawtooth' : regionId === 'eruditio' ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, t);

        const stagger = idx * 0.04;
        const dur = regionId === 'abyss' ? 1.2 : 0.8;
        const peak = 0.04 / freqs.length;

        gain.gain.setValueAtTime(0.0001, t + stagger);
        gain.gain.exponentialRampToValueAtTime(peak, t + stagger + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + stagger + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + stagger);
        osc.stop(t + stagger + dur + 0.05);
      });
    } catch {
      // ignore
    }
  }

  playBattlefieldSwell(objectiveId = 'overview') {
    if (this.isMuted || !this.ctx) return;
    try {
      const chords = {
        overview: [220.0, 329.63, 440.0, 659.25], // A minor add9 (Epic Grandeur)
        lord: [110.0, 164.81, 220.0, 277.18], // A low warhorn (The Slumbering Titan)
        turtle: [349.23, 440.0, 523.25, 698.46], // F Major shimmer (Aquatic Celestial)
        nexus: [261.63, 392.0, 523.25, 783.99], // C Major radiance (Divine Crystal Nexus)
        crucible: [146.83, 220.0, 293.66, 440.0], // D power chord (Mid-Lane Clash)
      };

      const freqs = chords[objectiveId] || chords.overview;
      const t = this.ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = objectiveId === 'lord' ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(freq, t);

        const stagger = idx * 0.05;
        const dur = objectiveId === 'lord' ? 1.4 : 0.9;
        const peak = 0.045 / freqs.length;

        gain.gain.setValueAtTime(0.0001, t + stagger);
        gain.gain.exponentialRampToValueAtTime(peak, t + stagger + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + stagger + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + stagger);
        osc.stop(t + stagger + dur + 0.05);
      });
    } catch {
      // ignore
    }
  }

  playSpatialWhoosh() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, this.ctx.currentTime + 0.12);
      osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.28);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.28);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.28);
    } catch {
      // ignore
    }
  }

  playAwakening() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    try {
      const notes = [329.63, 415.30, 493.88, 659.25, 987.77]; // E major radiant pentachord
      const t = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = idx === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.05, t + 0.8);

        const delay = idx * 0.05;
        gain.gain.setValueAtTime(0.0001, t + delay);
        gain.gain.exponentialRampToValueAtTime(0.04, t + delay + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + delay);
        osc.stop(t + delay + 1.25);
      });
    } catch {
      // ignore
    }
  }

  playWarp() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    try {
      const t = this.ctx.currentTime;
      // Sub-bass impact
      const sub = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(120, t);
      sub.frequency.exponentialRampToValueAtTime(38, t + 0.6);
      subGain.gain.setValueAtTime(0.12, t);
      subGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
      sub.connect(subGain);
      subGain.connect(this.ctx.destination);
      sub.start(t);
      sub.stop(t + 0.85);

      // High rushing energy sweep
      const sweep = this.ctx.createOscillator();
      const sweepGain = this.ctx.createGain();
      sweep.type = 'triangle';
      sweep.frequency.setValueAtTime(220, t);
      sweep.frequency.exponentialRampToValueAtTime(1400, t + 0.4);
      sweep.frequency.exponentialRampToValueAtTime(440, t + 0.7);
      sweepGain.gain.setValueAtTime(0.04, t);
      sweepGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
      sweep.connect(sweepGain);
      sweepGain.connect(this.ctx.destination);
      sweep.start(t);
      sweep.stop(t + 0.8);
    } catch {
      // ignore
    }
  }
}

export const audioManager = new AudioManager();
