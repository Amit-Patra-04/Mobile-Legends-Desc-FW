import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Shield, ArrowRight, Zap, Eye, EyeOff } from 'lucide-react';
import { audioManager } from '../utils/audio';

const LOADING_STAGES = [
  { threshold: 25, label: 'AWAKENING THE SACRED REALM' },
  { threshold: 55, label: 'ASSEMBLING ALL 133 HEROES' },
  { threshold: 85, label: 'HARNESSING THE TWILIGHT ORB' },
  { threshold: 100, label: 'THE BATTLEFIELD IS READY' },
];

export default function IntroSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showFullRoster, setShowFullRoster] = useState(false);
  const canvasRef = useRef(null);
  const barRef = useRef(null);

  // Track mouse for interactive 3D parallax tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX - innerWidth / 2) / (innerWidth / 2),
        y: (e.clientY - innerHeight / 2) / (innerHeight / 2),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Kinetic Arcane Canvas: Concentric Rune Rings & Floating Solar Embers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let tick = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Dynamic radial warp sparks bursting from center (Arcane Cyan, Silver, Indigo, Gold)
    const stars = Array.from({ length: 75 }, () => {
      const rand = Math.random();
      let color;
      if (rand < 0.42) color = '#38bdf8'; // Arcane celestial cyan
      else if (rand < 0.65) color = '#ffffff'; // Diamond starlight
      else if (rand < 0.82) color = '#818cf8'; // Twilight astral indigo
      else color = '#fbbf24'; // Mythic solar gold
      return {
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * 500 + 40,
        speed: Math.random() * 3 + 1,
        size: Math.random() * 2.2 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        color,
      };
    });

    // Floating ambient arcane wisps & embers
    const embers = Array.from({ length: 42 }, () => {
      const rand = Math.random();
      let color;
      if (rand < 0.45) color = '#38bdf8'; // Arcane cyan spirit wisp
      else if (rand < 0.72) color = '#a855f7'; // Astral violet mote
      else color = '#fbbf24'; // Solar gold ember
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.8,
        speedY: -Math.random() * 1.2 - 0.4,
        speedX: (Math.random() - 0.5) * 0.8,
        alpha: Math.random() * 0.8 + 0.2,
        color,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2 + mousePos.x * 25;
      const cy = canvas.height / 2 + mousePos.y * 20;
      tick += 0.015;

      // 1. Concentric Runic Circles: Cosmic Twilight Synergy
      ctx.save();
      ctx.translate(cx, cy);

      // Outer arcane cyan rune ring (celestial aura)
      ctx.beginPath();
      ctx.arc(0, 0, 230 + Math.sin(tick * 1.5) * 8, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 18]);
      ctx.stroke();

      // Middle rotating twilight violet counter-ring
      ctx.rotate(-tick * 0.4);
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.3)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([25, 10, 8, 12]);
      ctx.stroke();

      // Inner fast spinning radiant solar gold energy circle
      ctx.rotate(tick * 0.9);
      ctx.beginPath();
      ctx.arc(0, 0, 130, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.38)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([40, 15]);
      ctx.stroke();

      ctx.restore();

      // 2. Warp starburst particles
      stars.forEach((s) => {
        s.dist += s.speed;
        if (s.dist > Math.max(canvas.width, canvas.height) * 0.7) {
          s.dist = Math.random() * 40 + 20;
          s.angle = Math.random() * Math.PI * 2;
        }

        const px = cx + Math.cos(s.angle) * s.dist;
        const py = cy + Math.sin(s.angle) * s.dist;
        const tailLength = Math.min(s.speed * 4, 18);
        const tx = cx + Math.cos(s.angle) * (s.dist - tailLength);
        const ty = cy + Math.sin(s.angle) * (s.dist - tailLength);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = Math.min(1, (s.dist / 350) * s.alpha);
        ctx.lineWidth = s.size;
        ctx.stroke();
      });

      // 3. Ambient arcane embers drifting upwards
      embers.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1.0;
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [mousePos]);

  // 60FPS Buttery Smooth Loading Progression via requestAnimationFrame
  useEffect(() => {
    let animId;
    let startTime = null;
    const duration = 2600; // 2.6s silky smooth cinematic progression
    let lastInt = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth custom game-feel easing (easeInOutQuad)
      const p = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const pct = Math.min(100, p * 100);

      // Directly update the progress bar DOM element on every display frame (60-120fps)
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
      }

      // Update React state for the percentage label only when integer advances
      const currentInt = Math.floor(pct);
      if (currentInt !== lastInt) {
        lastInt = currentInt;
        setProgress(currentInt);
      }

      if (t < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        if (barRef.current) barRef.current.style.width = '100%';
        setProgress(100);
        setIsReady(true);
      }
    };

    animId = requestAnimationFrame(animate);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEnter = () => {
    audioManager.init();
    audioManager.playSkillFlare();
    onComplete();
  };

  const currentStage =
    LOADING_STAGES.find((stage) => progress <= stage.threshold) ||
    LOADING_STAGES[LOADING_STAGES.length - 1];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#020409] text-white overflow-y-auto sm:overflow-hidden transition-opacity duration-700 p-3.5 xs:p-5 sm:p-6 md:p-8 lg:p-10 select-none">
      
      {/* 1. Master Background: All 133 Heroes Single Composite Image */}
      <div className={`absolute inset-0 flex items-center justify-center bg-[#020409] ${showFullRoster ? 'pointer-events-auto overflow-auto sm:overflow-hidden' : 'pointer-events-none overflow-hidden'}`}>
        <img
          src="/assets/images/all_133_heroes_mosaic.jpg"
          alt="Mobile Legends: Bang Bang 133 Heroes Roster"
          className={`w-full h-full ${showFullRoster ? 'object-contain p-1 sm:p-2 md:p-4' : 'object-cover'} transition-all duration-500`}
          style={{
            transform: showFullRoster ? 'none' : `scale(1.1) translate3d(${-mousePos.x * 20}px, ${-mousePos.y * 14}px, 0)`,
            filter: showFullRoster ? 'brightness(1) contrast(108%)' : 'brightness(0.38) contrast(125%)',
          }}
        />
        {/* Subtle cinematic golden twilight vignette (cleared in static roster view) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/60 to-[#020409]/80 transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`absolute inset-0 bg-radial from-transparent via-[#020409]/45 to-[#020409] transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      {/* 2. Runic Canvas Layer */}
      <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 ${showFullRoster ? 'opacity-0' : 'opacity-100'}`} />

      {/* 3. Top Controls Bar: Clean, Minimalist & Responsive */}
      <div className="relative z-20 w-full flex items-center justify-between max-w-7xl pt-1 sm:pt-0">
        {/* Sleek Cyan-Gold Eye Toggle Button */}
        <button
          onClick={() => setShowFullRoster(!showFullRoster)}
          title={showFullRoster ? "Restore Codex Focus" : "View 133 Heroes Static Roster"}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer backdrop-blur-xl shadow-lg group ${
            showFullRoster
              ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-[0_0_25px_rgba(6,182,212,0.7)]'
              : 'bg-slate-950/70 border-cyan-500/40 hover:border-cyan-300 text-cyan-300 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
          }`}
          aria-label="Toggle 133 Heroes View"
        >
          {showFullRoster ? (
            <EyeOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 group-hover:scale-115 transition-transform" />
          ) : (
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:scale-115 transition-transform" />
          )}
        </button>

        {/* Fancy Skip CTA */}
        <button
          onClick={handleEnter}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full font-serif text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-zinc-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-400/80 bg-slate-950/70 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg group"
        >
          <span>SKIP</span>
          <span className="text-[9px] sm:text-[10px] text-cyan-400 font-mono tracking-normal bg-cyan-500/15 px-1 sm:px-1.5 py-0.5 rounded border border-cyan-500/35">
            ESC
          </span>
        </button>
      </div>

      {/* 4. Center Stage: Official Logo & WOW-Level Mythological Controls */}
      <div
        className={`relative z-20 flex flex-col items-center text-center px-2 xs:px-4 max-w-3xl my-auto transition-opacity duration-500 w-full ${
          showFullRoster ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          transform: showFullRoster ? 'none' : `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
          transition: 'transform 0.3s ease-out, opacity 0.5s ease',
        }}
      >
        {/* Official Game Logo with Radiant Twilight Aura (Cyan & Solar Gold) */}
        <div className="relative mb-2 sm:mb-3.5 flex flex-col items-center group">
          <div className="absolute -inset-10 sm:-inset-14 bg-gradient-to-r from-cyan-500/30 via-amber-400/35 to-indigo-500/30 rounded-full blur-2xl sm:blur-3xl opacity-80 pointer-events-none animate-pulse" />
          
          <img
            src="/assets/images/mlbb_official_logo.png"
            alt="Mobile Legends: Bang Bang"
            className="w-48 xs:w-60 sm:w-72 md:w-88 lg:w-[420px] max-w-[85vw] h-auto object-contain filter drop-shadow-[0_0_30px_rgba(56,189,248,0.65)] drop-shadow-[0_0_55px_rgba(245,158,11,0.45)] group-hover:scale-103 transition-transform duration-500 relative z-10"
          />
        </div>

        {/* WOW-Level 3D Chiseled Metallic Twilight Typography */}
        <div className="flex flex-col items-center mb-3.5 sm:mb-5 w-full">
          {/* Ethereal Super-title in Celestial Cyan */}
          <div className="flex items-center gap-2 sm:gap-2.5 mb-0.5 sm:mb-1">
            <span className="w-5 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/80" />
            <span className="font-serif text-[9px] xs:text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.55em] uppercase text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
              CHRONICLES OF
            </span>
            <span className="w-5 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-cyan-400/80" />
          </div>

          {/* Imperial Classical Title for Land of Dawn */}
          <div className="relative my-0.5 sm:my-1.5 flex items-center justify-center">
            {/* Subtle Ethereal Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-400/20 to-amber-400/10 rounded-full pointer-events-none blur-lg" />
            
            <h1 className="relative z-10 text-land-of-dawn whitespace-nowrap text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold uppercase my-0.5 sm:my-1 select-none leading-none">
              LAND OF DAWN
            </h1>
          </div>

          {/* Regal Runic Ornament Line with Cyan & Gold Stars */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-0.5 sm:mt-1">
            <span className="w-8 sm:w-14 h-[1px] sm:h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-amber-300" />
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_#38bdf8]">✦</span>
              <span className="text-zinc-300">⚔</span>
              <span className="text-amber-400 drop-shadow-[0_0_8px_#f59e0b]">✦</span>
            </span>
            <span className="w-8 sm:w-14 h-[1px] sm:h-[1.5px] bg-gradient-to-l from-transparent via-cyan-400/80 to-amber-300" />
          </div>
        </div>

        {/* Luxury Twilight Arcane Progress Rail */}
        <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md flex flex-col items-center mb-4 sm:mb-6">
          <div className="relative w-full h-2 sm:h-2.5 bg-[#030712]/90 rounded-full overflow-hidden p-[2px] border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 rounded-full relative shadow-[0_0_16px_rgba(56,189,248,0.7)] will-change-[width]"
              style={{ width: '0%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.4s_infinite]" />
            </div>
          </div>

          {/* Fancy Stage Label & Dynamic Percentage */}
          <div className="flex justify-between items-center w-full mt-2 px-0.5 gap-2">
            <span className="font-serif text-[10px] xs:text-[11px] sm:text-xs text-cyan-200 tracking-[0.16em] sm:tracking-[0.22em] uppercase font-bold flex items-center gap-1.5 drop-shadow truncate max-w-[70%]">
              <Zap className="w-3 h-3 text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="truncate">{currentStage.label}</span>
            </span>
            <span className="font-display text-base sm:text-lg md:text-xl text-cyan-300 tracking-wider text-wow-gold font-bold flex-shrink-0 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
              {progress}%
            </span>
          </div>
        </div>

        {/* 5. Sleek Refined CTA Button with Rotating 50-50 Dual-Color Border */}
        <div className="min-h-[46px] sm:min-h-[52px] flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleEnter}
              className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden cursor-pointer group hover:scale-103 transition-transform duration-300 shadow-[0_0_25px_rgba(0,0,0,0.9)]"
            >
              {/* Rotating 50-50 Dual-Color Border Line (50% Cyan, 50% Gold) */}
              <div className="border-50-50-rotating" />

              {/* Static Solid Button Plate (No background color animation) */}
              <div className="relative z-1 flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#060b14] hover:bg-[#0b1326] transition-colors">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 drop-shadow-[0_0_8px_#38bdf8] group-hover:scale-110 transition-transform" />
                <span className="font-serif text-[11px] xs:text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.22em] uppercase text-zinc-100 group-hover:text-white font-bold drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                  ENTER THE BATTLEFIELD
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 drop-shadow-[0_0_8px_#f59e0b] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ) : (
            <button
              onClick={handleEnter}
              className="group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-cyan-500/40 bg-slate-950/70 backdrop-blur-md hover:border-cyan-300 text-cyan-300 hover:text-white transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-cyan-500" />
              </span>
              <span className="font-serif text-[10px] xs:text-[11px] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-cyan-200 group-hover:text-white">
                AWAKENING REALM... <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono">[CLICK TO SKIP]</span>
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Invisible bottom spacer to balance top controls and maintain 100% vertical centering */}
      <div className="relative z-20 w-full h-9 sm:h-10 opacity-0 pointer-events-none select-none" />
    </div>
  );
}
