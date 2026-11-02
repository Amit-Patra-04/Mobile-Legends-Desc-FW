import React, { useEffect, useState, useRef } from 'react';
import { Shield, ArrowRight, Eye, EyeOff, Volume2, VolumeX, Swords, ChevronRight, Crosshair } from 'lucide-react';
import { audioManager } from '../utils/audio';

const LOADING_STEPS = [
  { threshold: 25, label: 'AWAKENING THE REALM' },
  { threshold: 55, label: 'SYNCHRONIZING 133 HEROES' },
  { threshold: 85, label: 'ALIGNING THE TWILIGHT ORB' },
  { threshold: 100, label: 'SANCTUM ISLAND READY' },
];

export default function IntroSequence({ onComplete }) {
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showFullRoster, setShowFullRoster] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const canvasRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);
  const stepLabelRef = useRef(null);
  const bgImageRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const hasTriggeredAwakening = useRef(false);

  // Keyboard shortcut listener (ESC, Enter, Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Living Cinematic Canvas: Golden Embers, Celestial Gyroscope Locked to 100% Dead Center
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    // High-DPI exact pixel buffer sizing & CSS synchronization
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      mouseRef.current.targetY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // 32 Atmospheric Battlefield Embers (Rising with organic micro-currents)
    const embers = Array.from({ length: 32 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.4 + 0.6,
      speedY: -(Math.random() * 0.45 + 0.25),
      swaySpeed: Math.random() * 0.8 + 0.4,
      swayAmp: Math.random() * 0.6 + 0.3,
      swayOffset: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.55 + 0.25,
      hue: Math.random() > 0.35 ? '#fbbf24' : '#38bdf8' // Solar gold or celestial cyan
    }));

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Reset transform and clear physical buffer
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply DPR scaling for crisp sub-pixel rendering
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      time += 0.01;

      // Smooth mouse lerp for background parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Parallax update strictly on background image
      if (bgImageRef.current && !showFullRoster) {
        bgImageRef.current.style.transform = `scale(1.06) translate3d(${-mouseRef.current.x * 20}px, ${-mouseRef.current.y * 14}px, 0)`;
      }

      // Mathematical 100% Dead Center of the Screen Viewport
      const cx = w / 2;
      const cy = h / 2;

      // 1. Ambient Central Twilight Core Glow (Locked to Screen Center)
      const coreGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, 260);
      coreGlow.addColorStop(0.0, 'rgba(234, 179, 8, 0.12)');
      coreGlow.addColorStop(0.3, 'rgba(56, 189, 248, 0.06)');
      coreGlow.addColorStop(0.7, 'rgba(217, 119, 6, 0.02)');
      coreGlow.addColorStop(1.0, 'rgba(2, 4, 9, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.fill();

      // 2. Refined Minimalist Astronomical Gyroscope (Locked to 100% Screen Center)
      ctx.save();
      ctx.translate(cx, cy);

      // Outer Prime Meridian Ring (Warm Solar Gold Hairline)
      ctx.save();
      ctx.rotate(time * 0.22);
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.28)';
      ctx.lineWidth = 0.85;
      ctx.stroke();

      // Cardinal Axis Hash Marks
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const x1 = Math.cos(angle) * 173;
        const y1 = Math.sin(angle) * 173;
        const x2 = Math.cos(angle) * 187;
        const y2 = Math.sin(angle) * 187;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.65)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();

      // Middle Counter-Rotating Orbit Ring (Dashed Celestial Cyan)
      ctx.save();
      ctx.rotate(-time * 0.32);
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 0.75;
      ctx.setLineDash([10, 16]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Innermost Soft Focus Ring
      ctx.beginPath();
      ctx.arc(0, 0, 100, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.16)';
      ctx.lineWidth = 0.65;
      ctx.stroke();

      ctx.restore();

      // 3. Living Battlefield Embers with Glowing Halos (High-performance multi-tier arcs, 0 shadowBlur overhead)
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];
        p.y += p.speedY;
        p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmp;

        if (p.y < -15) {
          p.y = h + 15;
          p.x = Math.random() * w;
        }

        // Soft outer ambient halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = p.hue;
        ctx.globalAlpha = p.alpha * 0.25;
        ctx.fill();

        // Bright luminous core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = p.alpha * 0.85;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showFullRoster]);

  // Buttery-Smooth 60/120FPS Hardware-Accelerated Progression
  useEffect(() => {
    let animId;
    let startTime = null;
    const duration = 2400; // 2.4s calm, refined progression
    let lastInt = -1;
    let currentStepLabel = LOADING_STEPS[0].label;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Ken Perlin's Smootherstep (6t^5 - 15t^4 + 10t^3)
      // Zero 1st & 2nd derivatives at both ends: pure liquid gold continuity
      const p = 6 * Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t, 3);
      const clampedP = Math.max(0, Math.min(1, p));

      // Direct GPU compositor transform (zero layout reflow)
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clampedP})`;
      }

      const currentInt = Math.min(100, Math.floor(clampedP * 100));
      if (currentInt !== lastInt) {
        lastInt = currentInt;
        if (percentRef.current) {
          percentRef.current.textContent = `${currentInt}%`;
        }

        const step =
          LOADING_STEPS.find((s) => currentInt <= s.threshold) ||
          LOADING_STEPS[LOADING_STEPS.length - 1];

        if (step.label !== currentStepLabel) {
          currentStepLabel = step.label;
          if (stepLabelRef.current) {
            stepLabelRef.current.textContent = step.label;
          }
        }
      }

      if (t < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        if (barRef.current) barRef.current.style.transform = 'scaleX(1)';
        if (percentRef.current) percentRef.current.textContent = '100%';
        if (stepLabelRef.current) {
          stepLabelRef.current.textContent = LOADING_STEPS[LOADING_STEPS.length - 1].label;
        }
        setIsReady(true);
        if (!hasTriggeredAwakening.current) {
          hasTriggeredAwakening.current = true;
          audioManager.playAwakening();
        }
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleToggleSound = () => {
    const active = audioManager.toggleMusic();
    setIsMuted(!active);
  };

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    audioManager.playSkillFlare();
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#020409] text-white overflow-hidden select-none transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 1. Master Official MLBB Heroes Battle Backdrop: 100% Responsive on Mobile, Tablet & Desktop */}
      <div className={`absolute inset-0 flex items-center justify-center overflow-hidden ${showFullRoster ? 'pointer-events-auto overflow-auto' : 'pointer-events-none'}`}>
        {showFullRoster ? (
          <img
            src="/assets/images/all_133_heroes_mosaic.jpg"
            alt="Mobile Legends: Bang Bang All 133 Heroes Roster"
            className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-500"
            style={{ filter: 'brightness(1) contrast(108%)' }}
          />
        ) : (
          <picture className="w-full h-full">
            {/* Mobile Viewports (<= 640px): 9:16 vertical portrait tailored for phones */}
            <source
              media="(max-width: 640px)"
              srcSet="/assets/images/mlbb_heroes_mobile.jpg"
            />
            {/* Tablet Viewports (641px - 1024px): 4:3 balanced composition for iPads & Tablets */}
            <source
              media="(max-width: 1024px)"
              srcSet="/assets/images/mlbb_heroes_tablet.jpg"
            />
            {/* Desktop & Widescreen (>= 1025px): Full 16:9 panoramic hero lineup */}
            <img
              ref={bgImageRef}
              src="/assets/images/mlbb_heroes_desktop.jpg"
              alt="Mobile Legends: Bang Bang Official Heroes Lineup"
              className="w-full h-full object-cover object-center transition-all duration-700 will-change-transform"
              style={{
                filter: 'brightness(0.78) contrast(116%) saturate(114%)',
                transform: 'scale(1.06)'
              }}
            />
          </picture>
        )}

        {/* Cinematic Vignette Framing: Top and Bottom Letterbox Depth */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#020409] via-transparent to-[#020409]/80 transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />

        {/* Soft Center Radial Spotlight: Preserves Hero Backdrop Vibrancy while Keeping UI Crystal Clear */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(2,4,9,0.50) 0%, rgba(2,4,9,0.18) 50%, rgba(2,4,9,0.85) 100%)'
          }}
        />

        {/* Subtle Warm Amber & Celestial Cyan Horizon Flares */}
        <div className={`absolute -top-24 left-1/4 w-[450px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`absolute -bottom-24 right-1/4 w-[450px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      {/* 2. Living Astronomical Gyroscope & Floating Embers Canvas (100% Viewport Synchronization) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 pointer-events-none z-10 w-full h-full transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* 3. Top Header: Positioned as Fixed Absolute Overlay */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-6 sm:py-8 max-w-7xl mx-auto pointer-events-none">
        {/* Left Utility Controls: Sound + Roster Mode Switcher */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={handleToggleSound}
            title={isMuted ? 'Enable Audio' : 'Mute Audio'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
              !isMuted
                ? 'bg-amber-500/15 border-amber-400/60 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'bg-black/40 border-white/10 hover:border-white/30 text-zinc-400 hover:text-white'
            }`}
            aria-label="Toggle Sound"
          >
            {!isMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Roster View Switcher */}
          <button
            onClick={() => setShowFullRoster(!showFullRoster)}
            title={showFullRoster ? "Back to Heroes Lineup" : "Inspect All 133 Heroes Roster"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-sm ${
              showFullRoster
                ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                : 'border-white/10 hover:border-amber-400/50 bg-black/40 hover:bg-black/60 text-zinc-300 hover:text-amber-200'
            }`}
            aria-label="Toggle 133 Heroes View"
          >
            {showFullRoster ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-amber-400" />}
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase">
              {showFullRoster ? 'HEROES LINEUP' : '133 HEROES ROSTER'}
            </span>
          </button>
        </div>

        {/* Center Minimalist Brand Indicator */}
        <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-300 hidden md:block">
          SANCTUM ISLAND // OFFICIAL HEROES
        </div>

        {/* Right Action: Clean Skip */}
        <div className="pointer-events-auto">
          <button
            onClick={handleEnter}
            onMouseEnter={() => audioManager.playHover()}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-serif text-[11px] tracking-[0.18em] uppercase text-zinc-300 hover:text-amber-300 border border-slate-700/80 hover:border-amber-400/60 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md shadow-md transition-all duration-300 cursor-pointer"
          >
            <span>SKIP INTRO</span>
            <span className="text-[8.5px] text-amber-400/90 font-mono tracking-normal bg-white/10 px-1.5 py-0.2 rounded border border-white/10">
              ESC
            </span>
          </button>
        </div>
      </header>

      {/* 4. Center Stage: Exact 100% Dead Center Positioning */}
      <main className={`relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto w-full my-auto pointer-events-auto transition-opacity duration-500 ${showFullRoster ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Official MLBB Logo in Clean Form with Soft Bloom */}
        <div className="relative mb-3 flex flex-col items-center">
          <img
            src="/assets/images/mlbb_official_logo.png"
            alt="Mobile Legends: Bang Bang"
            className="w-44 sm:w-56 md:w-64 h-auto object-contain filter drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)] opacity-95"
          />
        </div>

        {/* Editorial Subtitle */}
        <div className="flex flex-col items-center mb-5">
          <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.45em] uppercase text-amber-400/90 font-medium mb-1">
            CHRONICLES OF
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] text-zinc-100 font-normal uppercase select-none">
            LAND OF DAWN
          </h1>
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mt-2.5" />
        </div>

        {/* Ultra-Minimalist Hairline Progress Bar (60/120FPS GPU Accelerated) */}
        <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center mb-5">
          {/* 2px Precision Hairline Rail */}
          <div className="relative w-full h-[2px] bg-white/15 rounded-full overflow-hidden backdrop-blur-xs">
            <div
              ref={barRef}
              className="h-full w-full bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-300 rounded-full will-change-transform shadow-[0_0_12px_rgba(234,179,8,0.85)] origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          {/* Understated Stage Label & Percentage Readout */}
          <div className="flex justify-between items-center w-full mt-2 px-0.5 text-zinc-400 font-mono text-[10px] sm:text-[11px] tracking-wider">
            <span
              ref={stepLabelRef}
              className="uppercase tracking-[0.16em] text-zinc-300 font-sans font-medium"
            >
              {LOADING_STEPS[0].label}
            </span>
            <span
              ref={percentRef}
              className="text-amber-400 font-mono font-medium drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            >
              0%
            </span>
          </div>
        </div>

        {/* 5. Master Authentic MLBB Gaming Battle Crest Button */}
        <div className="min-h-[76px] flex flex-col items-center justify-center">
          {isReady ? (
            <div className="relative group flex flex-col items-center">
              {/* Outer Breathing Radiant Energy Corona */}
              <div className="game-btn-aura" />

              {/* Flanking Ornate Mechanical Brackets & Crest Button */}
              <div className="relative flex items-center gap-2 sm:gap-3">
                {/* Left Moniyan Wingtip Ornament */}
                <div className="hidden sm:flex flex-col items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:-translate-x-1.5 transition-all duration-300">
                  <div className="w-3.5 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
                  <div className="w-2 h-2 rotate-45 border border-amber-400 bg-amber-400/40 shadow-[0_0_8px_#f59e0b]" />
                  <div className="w-3.5 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400" />
                </div>

                {/* Master MOBA Match Entry Button */}
                <button
                  onClick={handleEnter}
                  onMouseEnter={() => audioManager.playHover()}
                  className="btn-mlbb-battle btn-mlbb-battle-animated-border game-btn-chamfer relative overflow-hidden"
                  title="Click or press [Enter] / [Space] to enter the battlefield"
                >
                  {/* Inner Obsidian Core Plate */}
                  <div className="btn-mlbb-battle-core game-btn-chamfer-inner">
                    {/* Animated Liquid Light Sheen */}
                    <div className="btn-mlbb-sheen" />

                    {/* Crossed Mythic Battle Swords Icon */}
                    <div className="relative flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gradient-to-br from-amber-400/25 via-slate-900/60 to-cyan-500/25 border border-amber-400/50 shadow-[0_0_14px_rgba(245,158,11,0.4)] shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Swords className="w-4 h-4 text-amber-300 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                      {/* Luminous Corner Gems */}
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
                      <span className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_6px_#f59e0b]" />
                    </div>

                    {/* Button Gaming Typography Suite */}
                    <div className="flex flex-col items-center text-center px-1.5 py-0.5">
                      <div className="flex items-center gap-1.5 leading-none mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8] animate-pulse" />
                        <span className="text-[8px] sm:text-[8.5px] font-mono font-bold tracking-[0.22em] uppercase text-cyan-300">
                          MATCH READY // 5V5
                        </span>
                        <span className="text-white/25 text-[8.5px]">•</span>
                        <span className="text-[8px] sm:text-[8.5px] font-mono font-bold tracking-[0.2em] uppercase text-amber-400">
                          133 LEGENDS
                        </span>
                      </div>
                      <span className="font-game-btn text-xs sm:text-sm md:text-[15px] tracking-[0.16em] uppercase text-game-gold leading-tight select-none">
                        ENTER THE BATTLEFIELD
                      </span>
                    </div>

                    {/* Right Action Chevron */}
                    <div className="relative flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-gradient-to-br from-amber-400/25 via-slate-900/60 to-cyan-500/25 border border-amber-400/50 shadow-[0_0_14px_rgba(245,158,11,0.4)] shrink-0 group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300">
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                    </div>
                  </div>
                </button>

                {/* Right Moniyan Wingtip Ornament */}
                <div className="hidden sm:flex flex-col items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  <div className="w-3.5 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
                  <div className="w-2 h-2 rotate-45 border border-amber-400 bg-amber-400/40 shadow-[0_0_8px_#f59e0b]" />
                  <div className="w-3.5 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400" />
                </div>
              </div>

              {/* Under-Button Quick Shortcut Cue */}
              <div className="mt-2.5 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[8.5px] font-mono text-zinc-400 tracking-widest uppercase shadow-md">
                  <span>PRESS</span>
                  <kbd className="px-1.5 py-0.2 rounded bg-white/10 text-amber-300 border border-white/20 font-bold font-mono">
                    ENTER
                  </kbd>
                  <span>OR</span>
                  <kbd className="px-1.5 py-0.2 rounded bg-white/10 text-amber-300 border border-white/20 font-bold font-mono">
                    SPACE
                  </kbd>
                  <span>TO DEPLOY</span>
                </span>
              </div>
            </div>
          ) : (
            /* Pre-Ready Locked Match Queue State */
            <div className="relative inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e1832]/95 to-slate-900/90 border border-slate-700/80 shadow-2xl">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 border-t-amber-400 animate-spin" />
                <Crosshair className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-amber-400 font-bold">
                    PREPARING BATTLE CODEX...
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                  SYNCHRONIZING 133 CHAMPIONS
                </span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 6. Minimalist Footer: Positioned as Fixed Absolute Overlay */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-6 text-[10px] font-mono text-zinc-400 max-w-7xl mx-auto pointer-events-none">
        <span className="tracking-wider text-zinc-300">133 LEGENDS ASSEMBLED</span>
        <span className="hidden sm:inline-block tracking-wider text-zinc-400">
          8K SANCTUM ISLAND ARENA
        </span>
        <span className="tracking-wider text-right text-zinc-300">SECURE PROTOCOL</span>
      </footer>
    </div>
  );
}
