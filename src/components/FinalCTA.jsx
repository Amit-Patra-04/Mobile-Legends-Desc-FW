import React from 'react';
import { ArrowUpRight, Sparkles, Compass, Shield } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function FinalCTA() {
  const scrollTo = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-28 bg-[#030509] overflow-hidden">
      {/* Background Cinematic Key Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/clash_keyart.jpg"
          alt="MLBB Battlefield Clash"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        {/* Cinematic atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030509] via-[#030509]/60 to-[#030509]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* Top Monogram */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-amber-500/40 backdrop-blur text-xs font-mono tracking-widest text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE IMMERSIVE CHRONICLE</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          YOUR LEGEND AWAITS IN THE LAND OF DAWN
        </h2>

        {/* Narrative Subtitle */}
        <p className="font-sans text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Will you stand as the unyielding bulwark with Commander Tigreal, weave supersonic cables with Fanny, or bend lightning and steel with Gusion? The chronicles of destiny are ready to be written.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo('#heroes')}
            className="px-8 py-4 rounded-full font-serif text-xs sm:text-sm tracking-widest uppercase font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_35px_rgba(234,179,8,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <span>RETURN TO HERO ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('#lore')}
            className="px-8 py-4 rounded-full font-mono text-xs sm:text-sm tracking-wider uppercase text-zinc-200 hover:text-white bg-black/70 hover:bg-black/90 border border-zinc-700 hover:border-amber-400/60 backdrop-blur transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>DISCOVER CONTINENT LORE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
