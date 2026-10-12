import React, { useState } from 'react';
import { Compass, MapPin, Landmark, Shield, Clock, ChevronRight, Sparkles, Maximize2 } from 'lucide-react';
import { REGIONS, TIMELINE_EVENTS } from '../data/regionsData';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';

export default function LoreUniverse({ onSelectHeroByName }) {
  const [activeRegionIndex, setActiveRegionIndex] = useState(0);
  const [isMapLightboxOpen, setIsMapLightboxOpen] = useState(false);
  const region = REGIONS[activeRegionIndex];

  const handleRegionSelect = (idx) => {
    audioManager.playClick();
    setActiveRegionIndex(idx);
  };

  return (
    <section id="lore" className="relative w-full py-24 bg-[#030509] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-amber-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-400">
                CHRONICLES OF CONTINENTS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              THE WORLD OF MLBB
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Traverse the sacred territories of the Land of Dawn, unearthing ancient kingdoms, technological bastions, and the cosmic timeline of creation.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400 flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>TERRITORY EXPLORER // 6 REALMS</span>
          </div>
        </div>

        {/* Interactive World Map & Region Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Map Graphic with Territory Pins */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-zinc-800 shadow-2xl aspect-[16/10] bg-[#070b14] group">
            {/* High-Resolution Map Graphic */}
            <img
              src="/assets/images/land_of_dawn_map.jpg"
              alt="Land of Dawn Map"
              className="w-full h-full object-cover filter brightness-85 group-hover:scale-102 transition-transform duration-700"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#030509]/40 to-[#030509]/80 pointer-events-none" />

            {/* Expand Map to Fullscreen Lightbox Button */}
            <button
              onClick={() => {
                audioManager.playClick();
                setIsMapLightboxOpen(true);
              }}
              className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black border border-white/20 text-xs font-mono text-zinc-200 hover:text-amber-400 backdrop-blur transition-all cursor-pointer shadow-lg"
              title="Inspect full uncropped map in high resolution"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULL MAP</span>
            </button>

            {/* Territory Interactive Pins */}
            {/* Moniyan Empire */}
            <button
              onClick={() => handleRegionSelect(0)}
              className="absolute top-[52%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 0 ? 'scale-125 ring-4 ring-amber-400/50 bg-amber-500 text-black' : 'bg-black/80 text-amber-400 border border-amber-500/50'
                }`}
              >
                🦁
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                Moniyan
              </span>
            </button>

            {/* Cadia Riverlands */}
            <button
              onClick={() => handleRegionSelect(1)}
              className="absolute top-[68%] left-[72%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 1 ? 'scale-125 ring-4 ring-emerald-400/50 bg-emerald-500 text-black' : 'bg-black/80 text-emerald-400 border border-emerald-500/50'
                }`}
              >
                🐉
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                Cadia
              </span>
            </button>

            {/* Eruditio */}
            <button
              onClick={() => handleRegionSelect(2)}
              className="absolute top-[32%] left-[24%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 2 ? 'scale-125 ring-4 ring-cyan-400/50 bg-cyan-500 text-black' : 'bg-black/80 text-cyan-400 border border-cyan-500/50'
                }`}
              >
                ⚙️
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                Eruditio
              </span>
            </button>

            {/* Northern Vale */}
            <button
              onClick={() => handleRegionSelect(3)}
              className="absolute top-[22%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 3 ? 'scale-125 ring-4 ring-sky-400/50 bg-sky-500 text-black' : 'bg-black/80 text-sky-400 border border-sky-500/50'
                }`}
              >
                ❄️
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                Northern Vale
              </span>
            </button>

            {/* Barren Lands & Abyss */}
            <button
              onClick={() => handleRegionSelect(4)}
              className="absolute top-[75%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 4 ? 'scale-125 ring-4 ring-rose-400/50 bg-rose-500 text-black' : 'bg-black/80 text-rose-400 border border-rose-500/50'
                }`}
              >
                🔥
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                The Abyss
              </span>
            </button>

            {/* Celestial Palace */}
            <button
              onClick={() => handleRegionSelect(5)}
              className="absolute top-[22%] left-[49%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-lg transition-transform ${
                  activeRegionIndex === 5 ? 'scale-125 ring-4 ring-purple-400/50 bg-purple-500 text-black' : 'bg-black/80 text-purple-400 border border-purple-500/50'
                }`}
              >
                ✨
              </div>
              <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 backdrop-blur text-white border border-white/10">
                Celestial Palace
              </span>
            </button>

            {/* Bottom In-Map Legend */}
            <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>CLICK TERRITORY PIN TO INSPECT LORE</span>
            </div>
          </div>

          {/* Right Column: Selected Territory Dossier */}
          <div className="lg:col-span-5 space-y-6 bg-[#070b14]/90 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl">
            {/* Region Selector Pills */}
            <div className="flex flex-wrap gap-1.5">
              {REGIONS.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => handleRegionSelect(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeRegionIndex === idx
                      ? 'bg-amber-400 text-black font-bold shadow-md'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  }`}
                >
                  {r.crest} {r.name}
                </button>
              ))}
            </div>

            {/* Region Identity */}
            <div className="pt-2 border-t border-zinc-800">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{region.crest}</span>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    CAPITAL: {region.capital}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {region.name}
                  </h3>
                </div>
              </div>
              <p className="text-xs font-mono text-amber-400 mb-3">
                {region.title}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-4">
                {region.summary}
              </p>
            </div>

            {/* Prominent Factions */}
            <div>
              <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider mb-2">
                DOMINANT FACTIONS & GUILDS:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.factions.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-700/80 text-zinc-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Native Heroes */}
            <div>
              <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider mb-2">
                PROMINENT NATIVE CHAMPIONS:
              </div>
              <div className="flex flex-wrap gap-2">
                {region.heroes.map((hName) => (
                  <span
                    key={hName}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold"
                  >
                    {hName}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Landmarks */}
            <div className="pt-2 border-t border-zinc-800">
              <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                KEY STRATEGIC LANDMARKS:
              </div>
              <div className="text-xs text-zinc-400 font-sans">
                {region.landmarks.join(' • ')}
              </div>
            </div>
          </div>
        </div>

        {/* Chronological Historical Timeline */}
        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-400">
              HISTORICAL CODEX
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white uppercase mt-1">
              CHRONOLOGY OF MAJOR LAND OF DAWN EVENTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div
                key={event.title}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{event.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {event.year}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {event.category}
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    {event.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Lightbox Modal */}
      <LightboxModal
        isOpen={isMapLightboxOpen}
        onClose={() => setIsMapLightboxOpen(false)}
        imageSrc="/assets/images/land_of_dawn_map.jpg"
        altText="Land of Dawn Illustrated Master Map"
      />
    </section>
  );
}
