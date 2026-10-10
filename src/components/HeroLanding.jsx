import React, { useState, useEffect, useRef } from 'react';
import { Shield, Sparkles, ChevronDown, Eye, Compass, Box } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const hero = HEROES[activeHeroIndex];
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x: x * 12, y: y * 8 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHeroSwitch = (idx) => {
    if (idx === activeHeroIndex) return;
    audioManager.playSkillFlare();
    setActiveHeroIndex(idx);
  };

  const scrollToSection = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030509] pt-20 pb-12 select-none"
    >
      {/* Dynamic Ambient Background Glow matched to Hero */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-1000 opacity-60"
        style={{
          background: `radial-gradient(circle at 65% 45%, ${hero.themeColor}33 0%, rgba(3,5,9,0.95) 70%)`,
        }}
      />

      {/* Atmospheric Fog / Lighting Rays */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[82vh]">
        
        {/* Left Column: Typographic Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          
          {/* Faction & Role Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-widest uppercase border backdrop-blur-md"
              style={{
                borderColor: `${hero.themeColor}88`,
                backgroundColor: `${hero.themeColor}1a`,
                color: '#ffffff',
                boxShadow: `0 0 15px ${hero.glowColor}`,
              }}
            >
              {hero.role} • {hero.speciality}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800">
              {hero.region}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider text-amber-400/90 bg-amber-500/10 border border-amber-500/30">
              LANE: {hero.lane}
            </span>
          </div>

          {/* Hero Name & Title */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400 mb-1">
              CHAMPION ARCHIVE // {hero.title}
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
              {hero.name}
            </h1>
          </div>

          {/* Voice Quote in Stylized Dialogue Box */}
          <div className="relative pl-4 border-l-2 py-1 max-w-xl transition-colors duration-500" style={{ borderColor: hero.themeColor }}>
            <p className="font-sans italic text-base md:text-lg text-zinc-200 font-light tracking-wide">
              &ldquo;{hero.voiceQuote}&rdquo;
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              — Verified Audio Transmission, Moniyan Archives
            </p>
          </div>

          {/* Concise Bio */}
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg font-sans">
            {hero.lore.slice(0, 220)}...
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollToSection('#heroes')}
              className="px-6 py-3 rounded-full font-serif text-xs md:text-sm tracking-widest uppercase font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:shadow-[0_0_35px_rgba(234,179,8,0.7)] transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              EXPLORE HEROES
            </button>

            <button
              onClick={() => onSelectHeroForDetail(hero)}
              className="px-5 py-3 rounded-full font-mono text-xs tracking-wider uppercase text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-amber-400/50 flex items-center gap-2 transition-all duration-200 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>CHRONICLE</span>
            </button>

            <button
              onClick={() => {
                onSelectHeroForChamber(hero);
                scrollToSection('#chamber');
              }}
              className="px-5 py-3 rounded-full font-mono text-xs tracking-wider uppercase text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-cyan-400/50 flex items-center gap-2 transition-all duration-200 cursor-pointer"
            >
              <Box className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D CHAMBER</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80 max-w-md">
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">DIFFICULTY</div>
              <div className="text-sm font-bold text-zinc-200">{hero.difficultyLabel} ({hero.difficulty}%)</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">POPULARITY</div>
              <div className="text-sm font-bold text-amber-400">{hero.popularity}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase">CANON FACTION</div>
              <div className="text-sm font-bold text-zinc-200 truncate">{hero.faction}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Artifact & Layered Parallax Artwork */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Background Decorative Rings */}
          <div className="absolute w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border border-zinc-800/80 pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div
            className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full border border-dashed pointer-events-none opacity-40 transition-colors duration-700"
            style={{ borderColor: hero.themeColor }}
          />

          {/* Hero Artwork Frame with Subtle Parallax */}
          <div
            className="relative w-full max-w-[540px] aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out group"
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />

            {/* Gradient Overlays for Cinematic Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030509] via-transparent to-transparent opacity-70" />
            <div
              className="absolute inset-0 mix-blend-color opacity-30 transition-colors duration-700 pointer-events-none"
              style={{ backgroundColor: hero.themeColor }}
            />

            {/* In-Artwork Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                  CANON SPLASH ARTWORK // {hero.name.toUpperCase()}
                </span>
              </div>
              <div
                className="w-3 h-3 rounded-full animate-ping"
                style={{ backgroundColor: hero.themeColor }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Switcher Dock (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-[#060913]/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-2xl">
        <span className="text-[10px] font-mono text-zinc-500 px-2 tracking-widest uppercase">
          ROSTER:
        </span>
        {HEROES.map((h, idx) => (
          <button
            key={h.id}
            onClick={() => handleHeroSwitch(idx)}
            className={`relative w-10 h-10 rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
              idx === activeHeroIndex
                ? 'border-amber-400 scale-110 shadow-[0_0_15px_rgba(234,179,8,0.6)] z-10'
                : 'border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600'
            }`}
            title={`${h.name} - ${h.title}`}
          >
            <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
            {idx === activeHeroIndex && (
              <div className="absolute inset-0 bg-amber-400/20 mix-blend-overlay" />
            )}
          </button>
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#heroes')}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 hover:text-amber-400 transition-colors duration-200 cursor-pointer"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400/80" />
      </button>
    </section>
  );
}
