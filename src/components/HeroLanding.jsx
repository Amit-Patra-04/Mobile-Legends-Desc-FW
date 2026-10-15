import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Shield,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Compass,
  Box,
  Maximize2,
  Zap,
  Swords,
  Crosshair,
  Volume2
} from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';
import ShaderGradientBg from './ShaderGradientBg';
import LiquidGlassCard from './LiquidGlassCard';

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const hero = HEROES[activeHeroIndex] || HEROES[0];
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeSkillHover, setActiveSkillHover] = useState(null);
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const containerRef = useRef(null);

  // Spotlight curated champions for the stage selector
  const spotlightHeroes = HEROES.slice(0, 8);

  // Interactive 3D Parallax Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard navigation for champion carousel (Left & Right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextHero();
      } else if (e.key === 'ArrowLeft') {
        handlePrevHero();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeHeroIndex]);

  const handleHeroSwitch = (idx) => {
    if (idx === activeHeroIndex) return;
    audioManager.playSkillFlare();
    setActiveHeroIndex(idx);
    setActiveSkillHover(null);
  };

  const handleNextHero = () => {
    const nextIdx = (activeHeroIndex + 1) % spotlightHeroes.length;
    handleHeroSwitch(nextIdx);
  };

  const handlePrevHero = () => {
    const prevIdx = (activeHeroIndex - 1 + spotlightHeroes.length) % spotlightHeroes.length;
    handleHeroSwitch(prevIdx);
  };

  const handlePlayVoice = () => {
    audioManager.playClick();
    setIsVoicePlaying(true);
    audioManager.playQuote(hero.voiceQuote);
    setTimeout(() => setIsVoicePlaying(false), 2500);
  };

  const scrollToSection = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 90;
      const elementPos = el.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#030509] pt-24 sm:pt-28 pb-8 select-none"
    >
      {/* 1. Background Layer: 3D Fluid WebGL Shader Gradient (Inspired by ruucm/shadergradient) */}
      <ShaderGradientBg themeColor={hero.themeColor} className="opacity-45" />

      {/* 2. Monumental Kinetic Typographic Watermark (Awwwards Signature Depth) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none"
        style={{
          transform: `translate3d(${mouseOffset.x * -24}px, ${mouseOffset.y * -16}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <span className="text-[18vw] font-black uppercase text-stroke-watermark leading-none tracking-tighter whitespace-nowrap opacity-15">
          {hero.name}
        </span>
      </div>

      {/* 3. Main Stage Content Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ========================================================
              LEFT FLANK: Hero Narrative Dossier & Tactical Arsenal
              ======================================================== */}
          <div className="lg:col-span-5 space-y-5 text-left order-2 lg:order-1">
            
            {/* Identity & Origin Metadata Capsule */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-zinc-300 font-mono text-xs tracking-wider">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: hero.themeColor }}
                />
                <span className="font-semibold uppercase tracking-widest text-amber-300">
                  {hero.region}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-cyan-300 uppercase">{hero.faction}</span>
              </div>

              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800">
                CHAMPION #{String(activeHeroIndex + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Monumental Hero Headline */}
            <div>
              <h1 className="hero-kinetic-title text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none drop-shadow-2xl">
                {hero.name}
              </h1>
              
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <span className="font-mono text-base sm:text-xl text-amber-400 font-semibold tracking-wide">
                  {hero.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="font-mono text-xs text-zinc-300 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 uppercase tracking-widest">
                  {hero.role}
                </span>
                <span className="font-mono text-xs text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-widest">
                  {hero.lane}
                </span>
              </div>
            </div>

            {/* Lore Narrative Excerpt */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-lg font-sans line-clamp-3">
              {hero.lore}
            </p>

            {/* Interactive Canon Voice Line Pill */}
            <div
              onClick={handlePlayVoice}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-amber-400/40 transition-all cursor-pointer group max-w-md shadow-sm"
              title="Click to play synthesized voice line"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Volume2 className={`w-4 h-4 ${isVoicePlaying ? 'animate-bounce text-amber-300' : ''}`} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                  CANON VOICE ARCHIVE
                </span>
                <span className="text-xs italic text-zinc-300 group-hover:text-amber-200 transition-colors truncate block">
                  &ldquo;{hero.voiceQuote}&rdquo;
                </span>
              </div>
            </div>

            {/* Tactical Abilities Matrix (Awwwards Direct Skill Showcase) */}
            {hero.abilities && hero.abilities.length > 0 && (
              <div className="space-y-2 pt-1 max-w-md">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Zap className="w-3 h-3" />
                    <span>TACTICAL ABILITY ARSENAL</span>
                  </span>
                  <span className="text-zinc-500">HOVER TO INSPECT</span>
                </div>

                <div className="flex items-center gap-2">
                  {hero.abilities.map((ability, aIdx) => {
                    const isHovered = activeSkillHover === aIdx;

                    return (
                      <div
                        key={ability.id || aIdx}
                        onMouseEnter={() => {
                          setActiveSkillHover(aIdx);
                          audioManager.playSkillFlare();
                        }}
                        onMouseLeave={() => setActiveSkillHover(null)}
                        className={`relative flex-1 p-2 rounded-xl border transition-all cursor-pointer text-center ${
                          isHovered
                            ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                            : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        <div className="text-base sm:text-lg mb-0.5">{ability.icon || '⚔️'}</div>
                        <div className="text-[9px] font-mono tracking-wider uppercase text-zinc-400 truncate">
                          {ability.type || `Skill ${aIdx + 1}`}
                        </div>

                        {/* Interactive Floating Tooltip */}
                        {isHovered && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-[#060b18]/95 backdrop-blur-2xl border border-cyan-400/50 shadow-2xl z-30 text-left pointer-events-none animate-fadeIn">
                            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 font-bold mb-1">
                              <span>{ability.name}</span>
                              <span className="text-zinc-400 font-normal">{ability.cooldown}</span>
                            </div>
                            <div className="text-[11px] text-zinc-300 font-sans leading-snug">
                              {ability.description}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* High-Impact Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  audioManager.playClick();
                  onSelectHeroForDetail(hero);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-serif font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_10px_25px_-5px_rgba(234,179,8,0.4)] hover:scale-103 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>EXPLORE CHRONICLE</span>
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  onSelectHeroForChamber(hero);
                }}
                className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/50 text-white font-mono text-xs sm:text-sm tracking-wider flex items-center gap-2 hover:scale-103 transition-all cursor-pointer"
              >
                <Box className="w-4 h-4 text-cyan-400" />
                <span>3D CHAMBER</span>
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setIsLightboxOpen(true);
                }}
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="Inspect uncropped full-resolution art"
              >
                <Maximize2 className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* ========================================================
              CENTER & RIGHT: Monumental Hero Artwork & Combat HUD
              ======================================================== */}
          <div className="lg:col-span-7 relative flex flex-col lg:flex-row items-center justify-center gap-6 order-1 lg:order-2">
            
            {/* Monumental Hero Character Artwork with Ethereal Twilight Halo */}
            <div
              className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] h-[460px] sm:h-[580px] lg:h-[680px] flex items-center justify-center group cursor-pointer"
              style={{
                transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 10}px, 0)`,
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={() => {
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              title="Click to expand high-resolution artwork"
            >
              {/* Ethereal Ambient Halo & Spinning Runic Rings */}
              <div
                className="absolute inset-4 rounded-full blur-3xl opacity-35 pointer-events-none transition-colors duration-700"
                style={{ backgroundColor: hero.themeColor }}
              />
              <div className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-white/[0.06] pointer-events-none animate-[spin_80s_linear_infinite]" />
              <div
                className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full border border-dashed pointer-events-none opacity-30 animate-[spin_50s_linear_infinite_reverse]"
                style={{ borderColor: hero.themeColor }}
              />

              {/* Main Champion Character Portrait: Unconstrained & Imposing */}
              <img
                src={hero.image}
                alt={hero.name}
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] group-hover:scale-104 transition-transform duration-500 ease-out"
                loading="eager"
              />

              {/* Quick View Tag on Hover */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                <span className="font-mono text-[9px] text-amber-300 tracking-widest uppercase">
                  CLICK TO VIEW FULL ART
                </span>
              </div>
            </div>

            {/* Tactical Combat HUD Dossier (Apple Liquid Glass Card) */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <LiquidGlassCard glowColor={hero.themeColor} className="p-4 space-y-4">
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    COMBAT TELEMETRY
                  </span>
                  <span className="font-mono text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {hero.popularity || 'RANK S+'}
                  </span>
                </div>

                {/* Animated Combat Stat Gauges */}
                <div className="space-y-2.5">
                  {[
                    { label: 'OFFENSE', val: hero.attributes?.offense || 85, color: '#ef4444' },
                    { label: 'DURABILITY', val: hero.attributes?.durability || 45, color: '#38bdf8' },
                    { label: 'ABILITY', val: hero.attributes?.abilityEffects || 70, color: '#a855f7' },
                    { label: 'DIFFICULTY', val: hero.difficulty || 40, color: '#f59e0b' },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-zinc-400">{stat.label}</span>
                        <span className="text-zinc-200 font-semibold">{stat.val}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden p-[1px] border border-white/[0.05]">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${stat.val}%`,
                            backgroundColor: stat.color,
                            boxShadow: `0 0 8px ${stat.color}88`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Win Rate & Speciality Badge */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">WIN RATE</span>
                  <span className="text-emerald-400 font-bold">{hero.winRate || '52.4%'}</span>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 tracking-wider truncate">
                  SPECIALITY: <span className="text-zinc-300">{hero.speciality}</span>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. AWWWARDS CINEMATIC CHAMPION RAIL / FILMSTRIP (Bottom)
          ======================================================== */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <LiquidGlassCard glowColor={hero.themeColor} className="p-2 sm:p-2.5 flex items-center justify-between gap-3">
          
          {/* Navigation Controls & Index Counter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handlePrevHero}
              onMouseEnter={() => audioManager.playHover()}
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Previous Champion (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs font-bold text-amber-400 tracking-widest px-1">
              {String(activeHeroIndex + 1).padStart(2, '0')}{' '}
              <span className="text-zinc-600 font-normal">/ {String(spotlightHeroes.length).padStart(2, '0')}</span>
            </span>

            <button
              onClick={handleNextHero}
              onMouseEnter={() => audioManager.playHover()}
              className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Next Champion (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Curated Champions Filmstrip */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {spotlightHeroes.map((h, idx) => {
              const isSelected = idx === activeHeroIndex;

              return (
                <button
                  key={h.id}
                  onClick={() => handleHeroSwitch(idx)}
                  onMouseEnter={() => audioManager.playHover()}
                  className={`relative flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? 'bg-white/[0.12] border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105 z-10'
                      : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  title={`${h.name} - ${h.title}`}
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-6 h-6 rounded-md object-cover object-top"
                  />
                  <div className="text-left hidden sm:block">
                    <div className="text-[11px] font-serif font-bold text-white uppercase leading-none">
                      {h.name}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 tracking-wider">
                      {h.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Browse All 133 Champions Button */}
          <button
            onClick={() => scrollToSection('#heroes')}
            onMouseEnter={() => audioManager.playHover()}
            className="flex-shrink-0 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            title="Browse all 133 Mobile Legends champions in Archive"
          >
            <span>ROSTER (133)</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </LiquidGlassCard>
      </div>

      {/* Fullscreen Unconstrained Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={hero.image}
        hero={hero}
        altText={hero.name}
      />
    </section>
  );
}
