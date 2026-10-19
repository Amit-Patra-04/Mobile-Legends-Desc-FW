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
    <section id="lore" className="relative w-full py-28 bg-[#04060b] text-white overflow-hidden">
      {/* Monumental Watermark Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(5rem,15vw,16rem)] tracking-[0.12em] opacity-40 select-none pointer-events-none whitespace-nowrap z-0">
        TERRITORIES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#f3d288] font-semibold">
                [ 04 // WORLD LORE ] • CARTOGRAPHIC REALMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              <span className="editorial-italic text-[#f3d288] font-normal mr-2">Chronicles of</span>
              <span className="font-serif uppercase font-bold tracking-tight">The Land of Dawn</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-2.5 max-w-xl leading-relaxed">
              Traverse the sacred territories of the continent, unearthing sovereign dynasties, high-tech bastions, and the cosmic timeline of creation.
            </p>
          </div>

          <div className="font-mono text-[11px] text-[#94a3b8] flex items-center gap-2.5 bg-black/50 px-4 py-2.5 rounded-full border border-white/[0.08] backdrop-blur-xl">
            <Compass className="w-3.5 h-3.5 text-[#f3d288]" />
            <span className="tracking-widest uppercase">REALMS // 06 SOVEREIGN TERRITORIES</span>
          </div>
        </div>

        {/* Interactive World Map & Region Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Map Graphic with Haute Architectural Reticle Pins */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden card-awwwards crosshairs-container border border-white/[0.08] shadow-2xl aspect-[16/10] bg-[#070b14] group">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />

            {/* High-Resolution Map Graphic */}
            <img
              src="/assets/images/land_of_dawn_map.jpg"
              alt="Land of Dawn Map"
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-700"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#030509]/30 to-[#030509]/80 pointer-events-none" />

            {/* Expand Map to Fullscreen Lightbox Button */}
            <button
              onClick={() => {
                audioManager.playClick();
                setIsMapLightboxOpen(true);
              }}
              className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black border border-white/20 text-xs font-mono text-zinc-200 hover:text-[#f3d288] backdrop-blur-xl transition-all cursor-pointer shadow-lg"
              title="Inspect full uncropped map in high resolution"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULL MAP</span>
            </button>

            {/* Territory Architectural Reticles (Replacing Emojis with Haute Horlogerie Beacons) */}
            {/* 01: Moniyan Empire */}
            <button
              onClick={() => handleRegionSelect(0)}
              className="absolute top-[52%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 0
                    ? 'scale-125 bg-[#f3d288] text-black shadow-[0_0_20px_#f3d288]'
                    : 'bg-black/80 text-[#f3d288] border border-[#f3d288]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 0 && <span className="absolute inset-0 rounded-full animate-ping bg-[#f3d288]/40" />}
                <span>I</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                MONIYAN
              </span>
            </button>

            {/* 02: Cadia Riverlands */}
            <button
              onClick={() => handleRegionSelect(1)}
              className="absolute top-[68%] left-[72%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 1
                    ? 'scale-125 bg-[#10b981] text-black shadow-[0_0_20px_#10b981]'
                    : 'bg-black/80 text-[#10b981] border border-[#10b981]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 1 && <span className="absolute inset-0 rounded-full animate-ping bg-[#10b981]/40" />}
                <span>II</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                CADIA
              </span>
            </button>

            {/* 03: Eruditio */}
            <button
              onClick={() => handleRegionSelect(2)}
              className="absolute top-[32%] left-[24%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 2
                    ? 'scale-125 bg-[#06b6d4] text-black shadow-[0_0_20px_#06b6d4]'
                    : 'bg-black/80 text-[#06b6d4] border border-[#06b6d4]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 2 && <span className="absolute inset-0 rounded-full animate-ping bg-[#06b6d4]/40" />}
                <span>III</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                ERUDITIO
              </span>
            </button>

            {/* 04: Northern Vale */}
            <button
              onClick={() => handleRegionSelect(3)}
              className="absolute top-[22%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 3
                    ? 'scale-125 bg-[#38bdf8] text-black shadow-[0_0_20px_#38bdf8]'
                    : 'bg-black/80 text-[#38bdf8] border border-[#38bdf8]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 3 && <span className="absolute inset-0 rounded-full animate-ping bg-[#38bdf8]/40" />}
                <span>IV</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                NORTH VALE
              </span>
            </button>

            {/* 05: The Abyss */}
            <button
              onClick={() => handleRegionSelect(4)}
              className="absolute top-[75%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 4
                    ? 'scale-125 bg-[#f43f5e] text-black shadow-[0_0_20px_#f43f5e]'
                    : 'bg-black/80 text-[#f43f5e] border border-[#f43f5e]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 4 && <span className="absolute inset-0 rounded-full animate-ping bg-[#f43f5e]/40" />}
                <span>V</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                THE ABYSS
              </span>
            </button>

            {/* 06: Celestial Palace */}
            <button
              onClick={() => handleRegionSelect(5)}
              className="absolute top-[22%] left-[49%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer z-10"
            >
              <div
                className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                  activeRegionIndex === 5
                    ? 'scale-125 bg-[#c084fc] text-black shadow-[0_0_20px_#c084fc]'
                    : 'bg-black/80 text-[#c084fc] border border-[#c084fc]/50 hover:scale-110'
                }`}
              >
                {activeRegionIndex === 5 && <span className="absolute inset-0 rounded-full animate-ping bg-[#c084fc]/40" />}
                <span>VI</span>
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-black/85 backdrop-blur-xl text-white border border-white/[0.12] whitespace-nowrap">
                CELESTIAL
              </span>
            </button>

            {/* Bottom In-Map Legend */}
            <div className="absolute bottom-4 left-4 z-10 bg-black/75 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/[0.1] text-[9px] font-mono text-zinc-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>CLICK ARCHITECTURAL BEACON TO EXPAND TERRITORY</span>
            </div>
          </div>

          {/* Right Column: Selected Territory Dossier with Haute Styling */}
          <div className="lg:col-span-5 space-y-6 card-awwwards crosshairs-container p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-2xl">
            <div className="crosshair-tl" />
            <div className="crosshair-tr" />
            <div className="crosshair-bl" />
            <div className="crosshair-br" />

            {/* Region Selector Pills */}
            <div className="flex flex-wrap gap-1.5 pb-2 border-b border-white/[0.06]">
              {REGIONS.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => handleRegionSelect(idx)}
                  className={`px-3 py-1.5 rounded-full text-[10.5px] font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                    activeRegionIndex === idx
                      ? 'bg-[#f3d288] text-black font-semibold shadow-[0_0_12px_rgba(243,210,136,0.35)]'
                      : 'bg-black/40 text-[#94a3b8] hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>

            {/* Region Identity */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-mono tracking-[0.25em] text-[#f3d288] uppercase">
                  CAPITAL // {region.capital}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
                  SECTOR 0{activeRegionIndex + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {region.name}
              </h3>
              <p className="text-xs font-mono text-[#f3d288] mt-0.5 mb-3">
                {region.title}
              </p>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-sans mb-4">
                {region.summary}
              </p>
            </div>

            {/* Prominent Factions */}
            <div>
              <div className="text-[9.5px] font-mono uppercase text-[#94a3b8]/70 tracking-widest mb-2">
                DOMINANT FACTIONS & ORDERS:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.factions.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/50 border border-white/[0.08] text-[#cbd5e1]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Native Heroes (Clickable to open detail!) */}
            <div>
              <div className="text-[9.5px] font-mono uppercase text-[#94a3b8]/70 tracking-widest mb-2">
                NATIVE CHAMPIONS (CLICK TO CHRONICLE):
              </div>
              <div className="flex flex-wrap gap-2">
                {region.heroes.map((hName) => (
                  <button
                    key={hName}
                    onClick={() => onSelectHeroByName && onSelectHeroByName(hName)}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#f3d288]/10 hover:bg-[#f3d288]/20 border border-[#f3d288]/30 hover:border-[#f3d288] text-[#f3d288] font-medium transition-all cursor-pointer"
                  >
                    {hName} →
                  </button>
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
