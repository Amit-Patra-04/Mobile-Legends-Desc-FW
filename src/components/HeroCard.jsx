import React, { useState } from 'react';
import { Eye, Box, Zap, Sparkles, Scale, Maximize2 } from 'lucide-react';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';
import LiquidGlassCard from './LiquidGlassCard';

export default function HeroCard({
  hero,
  onOpenDetail,
  onOpenChamber,
  onSelectSkillHero,
  onAddToCompare,
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <LiquidGlassCard
        glowColor={hero.themeColor}
        enableTilt={true}
        className="group flex flex-col h-full cursor-default"
      >
        {/* Artwork Container with Well-Framed Uncropped Aspect Ratio */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-zinc-950 cursor-pointer"
          onClick={() => {
            audioManager.playClick();
            onOpenDetail(hero);
          }}
          title="Click to open full chronicle"
        >
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              if (hero.portrait && e.target.src !== hero.portrait) {
                e.target.src = hero.portrait;
              }
            }}
          />

          {/* Ambient Lighting Overlay: Subtle & Clear (Does NOT obscure artwork) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-30" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 mix-blend-color pointer-events-none"
            style={{ backgroundColor: hero.themeColor }}
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span
              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase border backdrop-blur-md"
              style={{
                borderColor: `${hero.themeColor}88`,
                backgroundColor: `${hero.themeColor}22`,
                color: '#ffffff',
              }}
            >
              {hero.role}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-black/60 border border-zinc-700/60 backdrop-blur">
              {hero.lane}
            </span>
          </div>

          {/* Hover Action Triggers (Top Right) */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {/* Quick Full Art Lightbox Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              className="bg-black/80 hover:bg-amber-500 p-1.5 rounded-lg border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-black cursor-pointer shadow-lg"
              title="Inspect full uncropped artwork"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Quick Compare Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                onAddToCompare(hero);
              }}
              className="bg-black/80 hover:bg-amber-500 p-1.5 rounded-lg border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-black cursor-pointer shadow-lg"
              title="Compare this hero"
            >
              <Scale className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Meta & Narrative Information */}
        <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                {hero.region}
              </span>
              <span className="text-[10px] font-mono font-semibold text-amber-400">
                WR: {hero.winRate}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {hero.name}
            </h3>
            <p className="text-xs font-mono text-zinc-400 -mt-0.5 mb-2">
              {hero.title}
            </p>

            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
              {hero.lore}
            </p>
          </div>

          {/* Specialty Tag and Difficulty Meter */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/80">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Speciality:</span>
              <span className="text-zinc-200">{hero.speciality}</span>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>Difficulty:</span>
              <div className="flex items-center gap-1">
                {[20, 40, 60, 80, 100].map((step) => (
                  <div
                    key={step}
                    className={`w-2.5 h-1.5 rounded-xs transition-colors ${
                      hero.difficulty >= step - 10
                        ? 'bg-amber-400 shadow-[0_0_6px_rgba(234,179,8,0.5)]'
                        : 'bg-zinc-800'
                    }`}
                  />
                ))}
                <span className="ml-1 text-[10px] text-zinc-400">({hero.difficultyLabel})</span>
              </div>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => {
                audioManager.playClick();
                onOpenDetail(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[11px] font-mono text-zinc-200 hover:text-white transition-all cursor-pointer"
              title="Open comprehensive hero chronicle"
            >
              <Eye className="w-3 h-3 text-amber-400" />
              <span>Lore</span>
            </button>

            <button
              onClick={() => {
                audioManager.playSkillFlare();
                onSelectSkillHero(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-500/50 text-[11px] font-mono text-zinc-200 hover:text-white transition-all cursor-pointer"
              title="Inspect abilities in Skills Lab"
            >
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>Skills</span>
            </button>

            <button
              onClick={() => {
                audioManager.playClick();
                onOpenChamber(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400 text-[11px] font-mono text-amber-300 transition-all cursor-pointer"
              title="View hero in 3D chamber"
            >
              <Box className="w-3 h-3" />
              <span>3D</span>
            </button>
          </div>
        </div>
      </LiquidGlassCard>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={hero.image}
        hero={hero}
        altText={hero.name}
      />
    </>
  );
}
