import React, { useState, useEffect } from 'react';
import { X, Shield, Zap, Box, Compass, Users, Sparkles, Flame, Heart, Maximize2, Shrink, Layers, Award, Scale } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';

export default function HeroDetailModal({ hero, onClose, onSelectHero, onOpenChamber }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageFit, setImageFit] = useState('contain'); // 'contain' for 100% full uncropped view, 'cover' for dramatic fill
  const [activeTab, setActiveTab] = useState('lore'); // 'lore', 'skills', 'relations'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, isLightboxOpen]);

  if (!hero) return null;

  const relatedHeroes = HEROES.filter(
    (h) => h.id !== hero.id && (h.region === hero.region || h.role === hero.role)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-fadeIn select-none">
      
      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-panel border border-zinc-800 shadow-[0_30px_90px_rgba(0,0,0,0.98)] max-h-[94vh] flex flex-col my-auto bg-[#070b14]">
        
        {/* Top Floating Close Button */}
        <button
          onClick={() => {
            audioManager.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xl"
          title="Close Chronicle (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Showcase Header: Dedicated Dual-Column Display (Zero Image Obstruction) */}
        <div className="relative border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-[#070b14] p-5 sm:p-6 md:p-8 flex-shrink-0">
          
          {/* Ambient Lighting Glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-[90px]"
            style={{ backgroundColor: hero.themeColor }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Uncropped Character Artwork Frame */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div
                className="relative w-full max-w-[320px] h-72 sm:h-84 md:h-96 rounded-2xl overflow-hidden glass-panel border border-zinc-700/80 shadow-2xl bg-zinc-950 flex items-center justify-center cursor-pointer group"
                onClick={() => {
                  audioManager.playClick();
                  setIsLightboxOpen(true);
                }}
                title="Click to view full uncropped artwork in Lightbox"
              >
                {/* Subtle Theme Radial Gradient */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-500 blur-xl"
                  style={{ backgroundColor: hero.themeColor }}
                />

                {/* Character Splash Art: 100% Uncropped in 'contain' mode */}
                <img
                  src={hero.image}
                  alt={hero.name}
                  className={`w-full h-full transform group-hover:scale-102 transition-transform duration-300 ${
                    imageFit === 'contain'
                      ? 'object-contain p-2 sm:p-3 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]'
                      : 'object-cover object-top'
                  }`}
                />

                {/* Top Corner View Controls */}
                <div
                  className="absolute top-3 left-3 right-3 flex items-center justify-between z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span
                    className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md"
                    style={{
                      borderColor: `${hero.themeColor}88`,
                      backgroundColor: `${hero.themeColor}22`,
                      color: '#ffffff',
                    }}
                  >
                    CANON ART
                  </span>

                  <div className="flex items-center gap-1 bg-black/80 backdrop-blur p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => {
                        audioManager.playClick();
                        setImageFit(imageFit === 'contain' ? 'cover' : 'contain');
                      }}
                      className="px-1.5 py-0.5 text-[9px] font-mono text-zinc-300 hover:text-amber-300 rounded cursor-pointer"
                      title={imageFit === 'contain' ? 'Fill Frame' : 'Fit Entire Image'}
                    >
                      {imageFit === 'contain' ? 'UNCROPPED' : 'FILL'}
                    </button>
                    <button
                      onClick={() => {
                        audioManager.playClick();
                        setIsLightboxOpen(true);
                      }}
                      className="p-1 text-zinc-300 hover:text-amber-400 rounded cursor-pointer"
                      title="Open Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Click Hint */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-black/80 px-2 py-0.5 rounded-full border border-white/10 text-[9px] font-mono text-amber-300 whitespace-nowrap">
                  CLICK TO EXPAND ARTWORK
                </div>
              </div>
            </div>

            {/* Right: Identity, Badges & Primary Actions */}
            <div className="md:col-span-7 space-y-4 text-left">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border backdrop-blur"
                  style={{
                    borderColor: `${hero.themeColor}88`,
                    backgroundColor: `${hero.themeColor}22`,
                    color: '#ffffff',
                  }}
                >
                  {hero.role} {hero.secondaryRole && hero.secondaryRole !== 'None' ? `/ ${hero.secondaryRole}` : ''}
                </span>

                <span className="px-2.5 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-700">
                  {hero.lane}
                </span>

                <span className="px-2.5 py-1 rounded-full text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30">
                  {hero.region}
                </span>

                <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  WR: {hero.winRate}
                </span>
              </div>

              {/* Champion Name & Title */}
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                  {hero.name}
                </h1>
                <p className="font-mono text-sm sm:text-base text-amber-400 font-medium tracking-wide mt-0.5">
                  {hero.title}
                </p>
              </div>

              {/* Quotes Row */}
              <div
                onClick={() => audioManager.playQuote(hero.voiceQuote)}
                className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-colors cursor-pointer group"
                title="Click to play battle cry"
              >
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 mb-0.5">
                  <Compass className="w-3 h-3 text-amber-400" />
                  <span>SIGNATURE BATTLE CRY</span>
                </div>
                <div className="text-xs sm:text-sm italic text-zinc-200 group-hover:text-amber-200 transition-colors">
                  &ldquo;{hero.voiceQuote}&rdquo;
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    audioManager.playClick();
                    onClose();
                    onOpenChamber(hero);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-serif font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <Box className="w-4 h-4" />
                  <span>LAUNCH IN 3D CHAMBER</span>
                </button>

                <button
                  onClick={() => {
                    audioManager.playClick();
                    setIsLightboxOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>INSPECT FULL ARTWORK</span>
                </button>
              </div>

              {/* Quick Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs font-mono">
                <div className="bg-zinc-900/40 p-2 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">SPECIALITY</span>
                  <span className="text-zinc-200 font-semibold">{hero.speciality}</span>
                </div>
                <div className="bg-zinc-900/40 p-2 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">DIFFICULTY</span>
                  <span className="text-amber-400 font-semibold">{hero.difficultyLabel} ({hero.difficulty}%)</span>
                </div>
                <div className="bg-zinc-900/40 p-2 rounded-lg border border-zinc-800 sm:col-span-1 col-span-2">
                  <span className="text-[10px] text-zinc-500 block uppercase">FACTION</span>
                  <span className="text-zinc-200 font-semibold truncate">{hero.faction}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-800/80 bg-zinc-950/40">
          <button
            onClick={() => {
              audioManager.playClick();
              setActiveTab('lore');
            }}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'lore'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            ORIGIN & STORYLINE
          </button>

          <button
            onClick={() => {
              audioManager.playClick();
              setActiveTab('skills');
            }}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'skills'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            SKILL ARSENAL ({hero.abilities ? hero.abilities.length : 4})
          </button>

          <button
            onClick={() => {
              audioManager.playClick();
              setActiveTab('relations');
            }}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'relations'
                ? 'border-amber-400 text-amber-400 bg-amber-500/10'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            RELATIONSHIPS ({hero.relationships ? hero.relationships.length : 0})
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#080c16]">
          
          {/* Tab 1: Origin & Storyline */}
          {activeTab === 'lore' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Origin Story */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>CANON NARRATIVE CHRONICLE</span>
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800">
                    {hero.lore}
                  </p>
                </div>

                {hero.loreQuote && (
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">
                      CHRONICLE MOTTO
                    </div>
                    <div className="text-xs text-zinc-300 italic font-sans">
                      &ldquo;{hero.loreQuote}&rdquo;
                    </div>
                  </div>
                )}

                {/* Official Faction Telemetry */}
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">FACTION REPOSITORY:</span>
                    <span className="text-white font-bold">{hero.faction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">GEOGRAPHIC ORIGIN:</span>
                    <span className="text-amber-400 font-bold">{hero.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">TACTICAL SPECIALITY:</span>
                    <span className="text-zinc-200 font-bold">{hero.speciality}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Combat Attributes Telemetry */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>COMBAT TELEMETRY</span>
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
              </div>
            </div>
          )}

          {/* Tab 2: Skill Arsenal */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>COMBAT ABILITIES & SKILL PROTOCOLS</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hero.abilities && hero.abilities.map((skill) => (
                  <div
                    key={skill.id || skill.name}
                    className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg">
                          {skill.icon || '⚔️'}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{skill.name}</h4>
                          <span className="text-[10px] font-mono text-amber-400 uppercase">
                            {skill.type}
                          </span>
                        </div>
                      </div>

                      <div className="text-right text-[10px] font-mono text-zinc-400">
                        <div>CD: <span className="text-zinc-200">{skill.cooldown}</span></div>
                        <div>Cost: <span className="text-zinc-200">{skill.cost}</span></div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1 border-t border-zinc-800/80">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Relationships */}
          {activeTab === 'relations' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>CANON ALLIANCES & ADVERSARIES</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hero.relationships && hero.relationships.map((rel) => (
                  <div
                    key={rel.name}
                    className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif font-bold text-sm text-white">{rel.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-semibold ${
                          rel.type === 'Ally' || rel.type === 'Sovereign' || rel.type === 'Comrade'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : rel.type === 'Nemesis' || rel.type === 'Rival' || rel.type === 'Enemy'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {rel.type}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 font-sans">{rel.role}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Regional Heroes Recommendation */}
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
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-800/80 border border-zinc-800 text-left transition-all cursor-pointer group"
                >
                  <img src={r.image} alt={r.name} className="w-12 h-12 rounded-lg object-cover object-top" />
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

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={hero.image}
        hero={hero}
        altText={hero.name}
      />
    </div>
  );
}
