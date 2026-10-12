import React, { useState, useEffect, useRef } from 'react';
import { Shield, Sparkles, ChevronDown, Eye, Compass, Box, Maximize2, Shrink, Layers } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const hero = HEROES[activeHeroIndex];
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [imageFit, setImageFit] = useState('contain'); // 'contain' for 100% uncropped view, 'cover' for immersive fill
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
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

  // Spotlight curated champions for the quick switcher
  const spotlightHeroes = HEROES.slice(0, 8);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030509] pt-20 pb-12 select-none"
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-1000 blur-[130px]"
        style={{
          background: `radial-gradient(circle at 65% 50%, ${hero.themeColor} 0%, transparent 60%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-8rem)]">
        
        {/* Left Column: Hero Narrative Dossier & Telemetry */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Identity & Origin Metadata Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-300">
              {hero.region} // {hero.faction}
            </span>
          </div>

          {/* Hero Name & Lore Title with Kinetic Glow */}
          <div>
            <h1 className="font-serif text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
              {hero.name.toUpperCase()}
            </h1>
            <p className="font-mono text-base sm:text-xl text-amber-400/90 font-medium tracking-wide mt-1">
              {hero.title}
            </p>
          </div>

          {/* Hero Lore Excerpt */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
            {hero.lore}
          </p>

          {/* Voice Quote Audio Trigger */}
          <div
            onClick={() => audioManager.playQuote(hero.voiceQuote)}
            className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all cursor-pointer group max-w-xl"
            title="Click to play synthesized voice line"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                CANON VOICE ARCHIVE
              </span>
              <span className="text-xs italic text-zinc-300 group-hover:text-amber-200 transition-colors">
                &ldquo;{hero.voiceQuote}&rdquo;
              </span>
            </div>
          </div>

          {/* Core Action Callouts */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                audioManager.playClick();
                onSelectHeroForDetail(hero);
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-serif font-bold text-sm tracking-wider uppercase flex items-center gap-2 shadow-[0_10px_25px_-5px_rgba(234,179,8,0.4)] transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>EXPLORE CHRONICLE</span>
            </button>

            <button
              onClick={() => {
                audioManager.playClick();
                onSelectHeroForChamber(hero);
              }}
              className="px-6 py-3 rounded-xl glass-panel hover:bg-zinc-800/80 border border-zinc-700 hover:border-amber-400/50 text-white font-mono text-sm tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <Box className="w-4 h-4 text-amber-400" />
              <span>3D CHAMBER</span>
            </button>

            <button
              onClick={() => {
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
              title="Inspect uncropped high-resolution splash art"
            >
              <Maximize2 className="w-4 h-4 text-amber-400" />
              <span>FULL ART</span>
            </button>
          </div>

          {/* Attribute Telemetry Grid */}
          <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg">
            <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">ROLE & LANE</div>
              <div className="text-sm font-bold text-zinc-200">
                {hero.role} <span className="text-zinc-500 text-xs font-normal">({hero.lane})</span>
              </div>
            </div>
            <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">DIFFICULTY</div>
              <div className="text-sm font-bold text-amber-400">
                {hero.difficultyLabel} ({hero.difficulty}%)
              </div>
            </div>
            <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800/80">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">CANON FACTION</div>
              <div className="text-sm font-bold text-zinc-200 truncate">{hero.faction}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Artifact & Layered Parallax Artwork */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Background Decorative Rings */}
          <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border border-zinc-800/80 pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div
            className="absolute w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full border border-dashed pointer-events-none opacity-40 transition-colors duration-700"
            style={{ borderColor: hero.themeColor }}
          />

          {/* Hero Artwork Frame: Spacious, Uncropped & Fully Accessible */}
          <div
            className="relative w-full max-w-[500px] h-[480px] sm:h-[580px] lg:h-[640px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-300 ease-out group flex items-center justify-center bg-zinc-950/80 cursor-pointer"
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
            onClick={() => {
              audioManager.playClick();
              setIsLightboxOpen(true);
            }}
            title="Click to view full uncropped artwork in Lightbox"
          >
            {/* Ambient Background Aura behind the character */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700 blur-2xl"
              style={{ backgroundColor: hero.themeColor }}
            />

            {/* Character Artwork: Completely Uncropped in Contain Mode */}
            <img
              src={hero.image}
              alt={hero.name}
              className={`w-full h-full transform group-hover:scale-102 transition-transform duration-500 ${
                imageFit === 'contain'
                  ? 'object-contain p-3 sm:p-5 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]'
                  : 'object-cover object-top'
              }`}
              loading="eager"
            />

            {/* Top Interactive Controls (DO NOT obscure character body) */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Badge */}
              <div className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: hero.themeColor }}
                />
                <span className="font-mono text-[10px] text-zinc-300 tracking-wider uppercase font-semibold">
                  {hero.name} // CANON ARTWORK
                </span>
              </div>

              {/* View Controls: Fit/Fill Toggle & Fullscreen Button */}
              <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 shadow-lg">
                <button
                  onClick={() => {
                    audioManager.playClick();
                    setImageFit(imageFit === 'contain' ? 'cover' : 'contain');
                  }}
                  className="px-2 py-1 text-[10px] font-mono text-zinc-300 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                  title={imageFit === 'contain' ? 'Switch to Immersive Fill' : 'Switch to Full Uncropped'}
                >
                  {imageFit === 'contain' ? <Shrink className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                  <span>{imageFit === 'contain' ? 'UNCROPPED' : 'FILL'}</span>
                </button>

                <button
                  onClick={() => {
                    audioManager.playClick();
                    setIsLightboxOpen(true);
                  }}
                  className="p-1 text-zinc-300 hover:text-amber-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Expand to Fullscreen Lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Subtle Hover Prompt at Bottom */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="font-mono text-[9px] text-amber-300 tracking-widest uppercase">
                CLICK TO OPEN FULL UNCONSTRAINED ARTWORK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Switcher Dock (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-[#060913]/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-800 shadow-2xl">
        <span className="text-[10px] font-mono text-zinc-500 px-2 tracking-widest uppercase">
          SPOTLIGHT:
        </span>
        {spotlightHeroes.map((h, idx) => (
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
            <img src={h.image} alt={h.name} className="w-full h-full object-cover object-top" />
            {idx === activeHeroIndex && (
              <div
                className="absolute inset-0 border-2 rounded-xl pointer-events-none"
                style={{ borderColor: h.themeColor }}
              />
            )}
          </button>
        ))}

        <button
          onClick={() => scrollToSection('#archive')}
          className="px-2.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-amber-400 hover:text-amber-300 cursor-pointer transition-colors"
          title="Browse all 132 Mobile Legends champions"
        >
          ALL 132 &rarr;
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={() => scrollToSection('#archive')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-amber-400">
          ENTER ARCHIVE
        </span>
        <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
      </div>

      {/* Fullscreen Uncropped Lightbox Modal */}
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
