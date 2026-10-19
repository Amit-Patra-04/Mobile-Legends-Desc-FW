import React, { useState } from 'react';
import { Eye, Box, Zap, Sparkles, Scale, Maximize2 } from 'lucide-react';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';
import LiquidGlassCard from './LiquidGlassCard';
import { MLBBClassIcon, MLBBLaneIcon } from './MLBBThemeIcons';

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
        className="group relative flex flex-col h-full cursor-default card-awwwards crosshairs-container overflow-hidden"
      >
        {/* Subtle Corner Registration Marks */}
        <div className="crosshair-tl" />
        <div className="crosshair-tr" />
        <div className="crosshair-bl" />
        <div className="crosshair-br" />

        {/* Artwork Container with Well-Framed Uncropped Aspect Ratio */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-[#04060b] cursor-pointer"
          onClick={() => {
            audioManager.playClick();
            onOpenDetail(hero);
          }}
          title="Click to open full chronicle"
        >
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              if (hero.portrait && e.target.src !== hero.portrait) {
                e.target.src = hero.portrait;
              }
            }}
          />

          {/* Ambient Lighting Overlay: Subtle & Clear (Does NOT obscure artwork) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-40" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 mix-blend-color pointer-events-none"
            style={{ backgroundColor: hero.themeColor }}
          />

          {/* Top Badges with Official MLBB Icons */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span
              className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium tracking-widest uppercase border backdrop-blur-xl flex items-center gap-1.5 shadow-lg"
              style={{
                borderColor: `${hero.themeColor}66`,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
              }}
            >
              <MLBBClassIcon role={hero.role} className="w-3 h-3" />
              <span>{hero.role}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-[9px] font-mono text-[#cbd5e1] bg-black/70 border border-white/[0.08] backdrop-blur-xl flex items-center gap-1 shadow-lg">
              <MLBBLaneIcon lane={hero.lane} className="w-3 h-3 text-[#38bdf8]" />
              <span>{hero.lane}</span>
            </span>
          </div>

          {/* Hover Action Triggers (Top Right) */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Quick Full Art Lightbox Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              className="bg-black/80 hover:bg-[#f3d288] p-1.5 rounded-full border border-white/[0.1] hover:border-[#f3d288] text-[#cbd5e1] hover:text-black cursor-pointer shadow-xl transition-all"
              title="Inspect full uncropped artwork"
            >
              <Maximize2 className="w-3 h-3" />
            </button>

            {/* Quick Compare Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                onAddToCompare(hero);
              }}
              className="bg-black/80 hover:bg-[#f3d288] p-1.5 rounded-full border border-white/[0.1] hover:border-[#f3d288] text-[#cbd5e1] hover:text-black cursor-pointer shadow-xl transition-all"
              title="Compare this hero"
            >
              <Scale className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Hero Meta & Narrative Information */}
        <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#94a3b8]/70">
                {hero.region}
              </span>
              <span className="text-[9.5px] font-mono font-medium text-[#f3d288] px-2 py-0.5 rounded-full bg-[#f3d288]/10 border border-[#f3d288]/20">
                WR {hero.winRate}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#f3d288] transition-colors duration-300">
              {hero.name}
            </h3>
            <p className="text-xs font-mono text-[#94a3b8] -mt-0.5 mb-2.5">
              {hero.title}
            </p>

            <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
              {hero.lore}
            </p>
          </div>

          {/* Specialty Tag and Difficulty Meter */}
          <div className="space-y-2 pt-2.5 border-t border-white/[0.06]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
              <span>Speciality:</span>
              <span className="text-white font-medium">{hero.speciality}</span>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
              <span>Difficulty:</span>
              <div className="flex items-center gap-1">
                {[20, 40, 60, 80, 100].map((step) => (
                  <div
                    key={step}
                    className={`w-2.5 h-1.5 rounded-xs transition-colors ${
                      hero.difficulty >= step - 10
                        ? 'bg-[#f3d288] shadow-[0_0_6px_rgba(243,210,136,0.6)]'
                        : 'bg-white/[0.08]'
                    }`}
                  />
                ))}
                <span className="ml-1 text-[10px] text-[#94a3b8]">({hero.difficultyLabel})</span>
              </div>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => {
                audioManager.playClick();
                onOpenDetail(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-black/40 hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#f3d288]/50 text-[10px] font-mono tracking-wider text-[#cbd5e1] hover:text-white transition-all cursor-pointer"
              title="Open comprehensive hero chronicle"
            >
              <Eye className="w-3 h-3 text-[#f3d288]" />
              <span>LORE</span>
            </button>

            <button
              onClick={() => {
                audioManager.playSkillFlare();
                onSelectSkillHero(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-black/40 hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#38bdf8]/50 text-[10px] font-mono tracking-wider text-[#cbd5e1] hover:text-white transition-all cursor-pointer"
              title="Inspect abilities in Skills Lab"
            >
              <Zap className="w-3 h-3 text-[#38bdf8]" />
              <span>SKILLS</span>
            </button>

            <button
              onClick={() => {
                audioManager.playClick();
                onOpenChamber(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-xl bg-[#f3d288]/10 hover:bg-[#f3d288]/20 border border-[#f3d288]/30 hover:border-[#f3d288] text-[10px] font-mono tracking-wider text-[#f3d288] transition-all cursor-pointer"
              title="View hero in 3D chamber"
            >
              <Box className="w-3 h-3" />
              <span>3D HOLO</span>
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
