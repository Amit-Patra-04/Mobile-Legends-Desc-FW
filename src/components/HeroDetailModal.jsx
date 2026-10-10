import React, { useEffect } from 'react';
import { X, Shield, Zap, Box, Compass, Users, Sparkles, Flame, Heart } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';

export default function HeroDetailModal({ hero, onClose, onSelectHero, onOpenChamber }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!hero) return null;

  const relatedHeroes = HEROES.filter(
    (h) => h.id !== hero.id && (h.region === hero.region || h.role === hero.role)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn select-none">
      
      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-panel border border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] flex flex-col my-auto">
        
        {/* Header Splash Art Banner with Dynamic Gradient */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-950 flex-shrink-0">
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover object-center filter brightness-90"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-[#080c16]/50 to-transparent" />
          <div
            className="absolute inset-0 opacity-30 mix-blend-color"
            style={{ backgroundColor: hero.themeColor }}
          />

          {/* Close Action Button */}
          <button
            onClick={() => {
              audioManager.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Hero Identification */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase border backdrop-blur"
                  style={{
                    borderColor: `${hero.themeColor}88`,
                    backgroundColor: `${hero.themeColor}22`,
                    color: '#ffffff',
                  }}
                >
                  {hero.role} • {hero.speciality}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-black/60 border border-zinc-700">
                  {hero.region}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-wider text-white uppercase drop-shadow-lg">
                {hero.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-amber-400">
                {hero.title}
              </p>
            </div>

            {/* Quick 3D Chamber Button */}
            <button
              onClick={() => {
                audioManager.playClick();
                onClose();
                onOpenChamber(hero);
              }}
              className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-xs font-mono text-amber-300 flex items-center gap-2 transition-all cursor-pointer w-fit shadow-lg"
            >
              <Box className="w-4 h-4 text-amber-400" />
              <span>LAUNCH IN 3D CHAMBER</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#080c16]">
          
          {/* Quotes Section */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="border-l-2 pl-3" style={{ borderColor: hero.themeColor }}>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                SIGNATURE BATTLE CRY
              </div>
              <div className="font-sans italic text-zinc-200 text-sm md:text-base font-light">
                &ldquo;{hero.voiceQuote}&rdquo;
              </div>
            </div>
            <div className="border-l-2 sm:border-l pl-3 sm:pl-4 border-zinc-800">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                LORE EPITAPH
              </div>
              <div className="font-sans text-xs text-zinc-400">
                &ldquo;{hero.loreQuote}&rdquo;
              </div>
            </div>
          </div>

          {/* Grid Layout: Lore Narrative & Combat Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Origin Story & Relationships */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>ORIGIN & LORE CHRONICLE</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {hero.lore}
                </p>
              </div>

              {/* Faction & Canon Alignments */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 mb-1">
                  OFFICIAL FACTION: <span className="text-white font-bold">{hero.faction}</span>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  PRIMARY COMBAT LANE: <span className="text-amber-400 font-bold">{hero.lane}</span>
                </div>
              </div>

              {/* Relationships Matrix */}
              <div>
                <h3 className="font-serif text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>RELATIONSHIPS & ALLIANCES</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {hero.relationships.map((rel) => (
                    <div
                      key={rel.name}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-white">{rel.name}</span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                            rel.type === 'Ally'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : rel.type === 'Nemesis' || rel.type === 'Rival'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {rel.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 font-sans">{rel.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Combat Attributes Radar/Bars */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>COMBAT ATTRIBUTES</span>
                </h3>

                <div className="space-y-3.5 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
                  {/* Offense */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                      <span>Offense Rating</span>
                      <span className="text-rose-400 font-bold">{hero.attributes.offense}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"
                        style={{ width: `${hero.attributes.offense}%` }}
                      />
                    </div>
                  </div>

                  {/* Durability */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                      <span>Durability Rating</span>
                      <span className="text-emerald-400 font-bold">{hero.attributes.durability}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        style={{ width: `${hero.attributes.durability}%` }}
                      />
                    </div>
                  </div>

                  {/* Ability Effects */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                      <span>Ability Effects</span>
                      <span className="text-cyan-400 font-bold">{hero.attributes.abilityEffects}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${hero.attributes.abilityEffects}%` }}
                      />
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                      <span>Tactical Difficulty</span>
                      <span className="text-amber-400 font-bold">{hero.difficulty}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full"
                        style={{ width: `${hero.difficulty}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Skins Preview */}
              <div>
                <h3 className="font-serif text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>AVAILABLE SKINS ({hero.skins.length})</span>
                </h3>
                <div className="space-y-2">
                  {hero.skins.map((skin) => (
                    <div
                      key={skin.name}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{skin.name}</div>
                        <div className="text-[11px] text-zinc-400">{skin.tagline}</div>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                        style={{
                          backgroundColor: `${skin.badgeColor}22`,
                          color: skin.badgeColor,
                          border: `1px solid ${skin.badgeColor}66`,
                        }}
                      >
                        {skin.tier}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Heroes Recommendation */}
          <div className="pt-6 border-t border-zinc-800/80">
            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
              EXPLORE RELATED REGIONAL HEROES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedHeroes.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    audioManager.playClick();
                    onSelectHero(r);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 hover:bg-zinc-800/80 border border-zinc-800 text-left transition-all cursor-pointer group"
                >
                  <img src={r.image} alt={r.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      {r.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">{r.role} • {r.region}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
