import React from 'react';
import { Eye, Box, Zap, Sparkles, Scale } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function HeroCard({
  hero,
  onOpenDetail,
  onOpenChamber,
  onSelectSkillHero,
  onAddToCompare,
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass-panel border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(234,179,8,0.25)] flex flex-col">
      {/* Artwork Container with Zoom Effect */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-90" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-color pointer-events-none"
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
          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-black/60 border border-zinc-700/60 backdrop-blur">
            {hero.lane}
          </span>
        </div>

        {/* Quick Compare Trigger (Top Right on hover) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            audioManager.playClick();
            onAddToCompare(hero);
          }}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 hover:bg-amber-500 p-1.5 rounded-lg border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-black cursor-pointer shadow-lg"
          title="Compare this hero"
        >
          <Scale className="w-3.5 h-3.5" />
        </button>
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
    </div>
  );
}
