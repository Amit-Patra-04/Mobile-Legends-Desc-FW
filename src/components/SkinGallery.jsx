import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Crown, Shield, Eye, Flame, Check, Maximize2, Shrink, Layers } from 'lucide-react';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';

const FEATURED_SKINS = [
  {
    hero: 'Alucard',
    name: 'Obsidian Blade',
    tier: 'Legend',
    tierColor: '#ec4899',
    image: '/assets/images/skins/alucard_obsidian.jpg',
    defaultImage: '/assets/images/alucard.jpg',
    effects: 'Custom Voice Lines • Plasma Energy Greatsword • Cyber Holographic Recall',
    lore: 'Transformed by high-tech biomechanical cyber-engineering, Alucard steps into a neon metropolis armed with an obsidian plasma-edge greatsword to hunt rogue cyber entities.',
  },
  {
    hero: 'Gusion',
    name: 'Night Owl',
    tier: 'Collector',
    tierColor: '#a855f7',
    image: '/assets/images/skins/gusion_night_owl.jpg',
    defaultImage: '/assets/images/gusion.jpg',
    effects: 'Phantom Feathers Particle Stream • Nocturnal Sound Effects • Moonlight Blur',
    lore: 'An enigmatic nocturnal phantom cloaked in midnight feathers and sacred gold filigree. His flying daggers manifest as ethereal luminescent owl feathers slicing across the dark.',
  },
  {
    hero: 'Granger',
    name: 'Starfall Knight',
    tier: 'Legend',
    tierColor: '#ec4899',
    image: '/assets/images/skins/granger_starfall.jpg',
    defaultImage: '/assets/images/granger.jpg',
    effects: 'Cosmic Super Bullets • Starfall Cannon Transform • Nebula Trail Animation',
    lore: 'An astral guardian traversing deep galaxies in impenetrable silver and gold celestial armor, unleashing devastating starfall cannon volleys to defend space sectors.',
  },
];

export default function SkinGallery() {
  const [activeSkinIndex, setActiveSkinIndex] = useState(0);
  const [compareMode, setCompareMode] = useState(false);
  const [imageFit, setImageFit] = useState('contain'); // 'contain' for full uncropped artwork
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const skin = FEATURED_SKINS[activeSkinIndex];

  const handleSelectSkin = (idx) => {
    if (idx === activeSkinIndex) return;
    audioManager.playSkillFlare();
    setActiveSkinIndex(idx);

    // Particle burst celebration for switching skin
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#ec4899', '#a855f7', '#38bdf8'],
    });
  };

  const currentDisplayImage = compareMode ? skin.defaultImage : skin.image;

  return (
    <section id="skins" className="relative w-full py-24 bg-[#030509] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-purple-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-purple-400">
                VISUAL EVOLUTION VAULT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              SKINS & COSMETICS
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Inspect legendary cosmetic metamorphoses, custom skill particle effects, audio transformations, and alternate universe storylines.
            </p>
          </div>

          {/* Skin Selection Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FEATURED_SKINS.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => handleSelectSkin(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  activeSkinIndex === idx
                    ? 'bg-zinc-800 border-amber-400 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-mono">{s.hero} • {s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Skin Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070b14]/90 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl">
          
          {/* Left Column: Visual Artwork Display (Completely Uncropped & Clean) */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div
              className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden glass-panel border border-zinc-700/80 shadow-2xl group bg-zinc-950 flex items-center justify-center cursor-pointer"
              onClick={() => {
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              title="Click to view full uncropped skin artwork"
            >
              <img
                src={currentDisplayImage}
                alt={skin.name}
                className={`w-full h-full transform group-hover:scale-102 transition-transform duration-500 ${
                  imageFit === 'contain'
                    ? 'object-contain p-2 sm:p-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]'
                    : 'object-cover object-center'
                }`}
              />

              {/* Top Controls Bar (Clean and off the character) */}
              <div
                className="absolute top-4 left-4 right-4 flex items-center justify-between z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border backdrop-blur-md shadow-lg"
                  style={{
                    borderColor: skin.tierColor,
                    backgroundColor: `${skin.tierColor}33`,
                    color: '#ffffff',
                  }}
                >
                  {compareMode ? 'DEFAULT MODEL' : `${skin.tier} EDITION`}
                </span>

                <div className="flex items-center gap-2">
                  {/* Fit/Fill Toggle */}
                  <button
                    onClick={() => {
                      audioManager.playClick();
                      setImageFit(imageFit === 'contain' ? 'cover' : 'contain');
                    }}
                    className="px-2.5 py-1 rounded-full bg-black/75 hover:bg-black/90 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer backdrop-blur shadow-lg flex items-center gap-1"
                    title={imageFit === 'contain' ? 'Fill Frame' : 'Fit Entire Image'}
                  >
                    {imageFit === 'contain' ? <Shrink className="w-3 h-3" /> : <Layers className="w-3 h-3" />}
                    <span>{imageFit === 'contain' ? 'UNCROPPED' : 'FILL'}</span>
                  </button>

                  {/* Compare Default vs Skin Button */}
                  <button
                    onClick={() => {
                      audioManager.playClick();
                      setCompareMode(!compareMode);
                    }}
                    className="px-3 py-1 rounded-full bg-black/75 hover:bg-black/90 border border-zinc-700 text-xs font-mono text-zinc-200 hover:text-amber-300 transition-all cursor-pointer backdrop-blur shadow-lg"
                  >
                    {compareMode ? 'VIEW SKIN' : 'COMPARE DEFAULT'}
                  </button>

                  {/* Expand Lightbox Button */}
                  <button
                    onClick={() => {
                      audioManager.playClick();
                      setIsLightboxOpen(true);
                    }}
                    className="p-1.5 rounded-full bg-black/75 hover:bg-black/90 border border-zinc-700 text-zinc-300 hover:text-amber-400 transition-all cursor-pointer backdrop-blur shadow-lg"
                    title="Fullscreen Lightbox"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Click Hint (Hover Only) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono text-amber-300 whitespace-nowrap">
                CLICK FOR FULL UNCONSTRAINED RESOLUTION
              </div>
            </div>

            {/* Title Bar Placed OUTSIDE the Image Frame (NO Cropping / NO Hiding) */}
            <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block">
                  {skin.hero} // {compareMode ? 'DEFAULT ATTIRE' : skin.tier}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {compareMode ? `${skin.hero} (Classic Model)` : skin.name}
                </h4>
              </div>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          {/* Right Column: Skin Dossier & Exclusive Effects */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                  COSMETIC CLASSIFICATION
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                  style={{
                    backgroundColor: `${skin.tierColor}22`,
                    color: skin.tierColor,
                    border: `1px solid ${skin.tierColor}66`,
                  }}
                >
                  {skin.tier}
                </span>
              </div>
              <h3 className="font-serif text-3xl font-extrabold text-white">
                {skin.name}
              </h3>
              <p className="font-mono text-xs text-zinc-400 mt-0.5">
                CHAMPION: {skin.hero}
              </p>
            </div>

            {/* Alternate Lore */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">
                TRANSFORMATION LORE:
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {skin.lore}
              </p>
            </div>

            {/* Visual & Particle Features */}
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-2">
                VERIFIED BATTLE ENHANCEMENTS:
              </div>
              <div className="space-y-2">
                {skin.effects.split('•').map((eff, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-800/80"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{eff.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Unlock Showcase trigger */}
            <button
              onClick={() => {
                audioManager.playSkillFlare();
                confetti({
                  particleCount: 75,
                  spread: 80,
                  origin: { y: 0.6 },
                });
              }}
              className="w-full py-3 rounded-xl font-mono text-xs tracking-wider uppercase font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>TEST TRANSFORMATION CELEBRATION</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={currentDisplayImage}
        altText={`${skin.hero} - ${skin.name}`}
      />
    </section>
  );
}
