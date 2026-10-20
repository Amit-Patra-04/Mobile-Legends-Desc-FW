import React, { useState, useMemo, memo } from 'react';
import {
  Eye,
  Zap,
  Sparkles,
  Scale,
  Maximize2,
  Compass,
  Users,
  ChevronRight,
  X,
  Volume2,
  Info,
  Shield,
  Swords,
  Flame,
  Award
} from 'lucide-react';
import { audioManager } from '../utils/audio';
import LightboxModal from './LightboxModal';
import LiquidGlassCard from './LiquidGlassCard';
import { MLBBClassIcon, MLBBLaneIcon } from './MLBBThemeIcons';

function HeroCard({
  hero,
  onOpenDetail,
  onSelectSkillHero,
  onAddToCompare,
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeAbility, setActiveAbility] = useState(null);
  const [isQuotePlaying, setIsQuotePlaying] = useState(false);

  // Deterministic lightweight particle motes (faded in on card hover for 60fps performance)
  const particles = useMemo(() => {
    let hash = 0;
    const str = hero.id || 'hero';
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Array.from({ length: 4 }, (_, i) => {
      const pseudoRand = Math.abs(Math.sin(hash + i * 37.19));
      return {
        id: i,
        left: `${12 + (pseudoRand * 76).toFixed(1)}%`,
        size: `${(2.5 + pseudoRand * 3).toFixed(1)}px`,
        duration: `${(3.5 + pseudoRand * 4).toFixed(2)}s`,
        delay: `${(i * 0.7).toFixed(2)}s`,
        opacity: (0.4 + pseudoRand * 0.5).toFixed(2),
      };
    });
  }, [hero.id]);

  // Primary relationship for lore depth
  const primaryRel = hero.relationships && hero.relationships.length > 0 ? hero.relationships[0] : null;

  // Combat attributes
  const {
    offense = 70,
    durability = 50,
    abilityEffects = 60,
    difficulty = 50,
  } = hero.attributes || {};

  // Identify standout combat strength
  const maxStatName = useMemo(() => {
    if (offense >= durability && offense >= abilityEffects) return 'OFFENSE';
    if (abilityEffects >= durability && abilityEffects >= offense) return 'ABILITY MAGIC';
    return 'DURABILITY';
  }, [offense, durability, abilityEffects]);

  // Background watermark archetype label
  const watermarkText = useMemo(() => {
    if (hero.faction && hero.faction.length <= 14) return hero.faction.toUpperCase();
    return hero.role.toUpperCase();
  }, [hero.faction, hero.role]);

  const handleAbilityClick = (e, ability) => {
    e.stopPropagation();
    audioManager.playSkillFlare();
    if (activeAbility?.id === ability.id) {
      setActiveAbility(null);
    } else {
      setActiveAbility(ability);
    }
  };

  const playVoiceQuote = (e) => {
    e.stopPropagation();
    audioManager.playClick();
    setIsQuotePlaying(true);
    setTimeout(() => setIsQuotePlaying(false), 2400);
  };

  return (
    <>
      <LiquidGlassCard
        glowColor={hero.themeColor}
        enableTilt={true}
        className="group relative flex flex-col h-full cursor-default card-awwwards crosshairs-container overflow-hidden select-none border border-white/[0.08] hover:border-[#f3d288]/40 transition-colors duration-300 rounded-2xl bg-[#060810]"
      >
        {/* Subtle Corner Registration Crosshairs */}
        <div className="crosshair-tl" />
        <div className="crosshair-tr" />
        <div className="crosshair-bl" />
        <div className="crosshair-br" />

        {/* Ambient Hero Spectral Aura Behind the Poster (Active on hover) */}
        <div
          className="absolute -top-16 -left-16 w-52 h-52 rounded-full pointer-events-none blur-[60px] opacity-10 group-hover:opacity-25 transition-opacity duration-500"
          style={{
            backgroundColor: hero.themeColor,
          }}
        />

        {/* ==============================================================
            POSTER ARCHIVAL HEADER: Serial, Faction, Rank & Telemetry
            ============================================================== */}
        <div className="relative px-3.5 py-2.5 bg-[#060a14]/95 border-b border-white/[0.06] flex items-center justify-between text-[9px] font-mono tracking-widest z-20">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: hero.themeColor }}
            />
            <span className="text-[#94a3b8] uppercase">
              № {hero.id.slice(0, 10).toUpperCase()}
            </span>
            <span className="text-white/[0.2]">•</span>
            <span className="text-[#f3d288] font-semibold">{hero.popularity}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#f3d288] font-bold px-1.5 py-0.5 rounded-full bg-[#f3d288]/10 border border-[#f3d288]/20">
              WR {hero.winRate}
            </span>
          </div>
        </div>

        {/* ==============================================================
            ANIMATED POSTER ARTWORK CANVAS:
            Particles, Monumental Typography Watermark, & Hero Portrait
            ============================================================== */}
        <div
          className="relative aspect-[3/3.9] overflow-hidden bg-[#04060b] cursor-pointer"
          onClick={() => {
            audioManager.playClick();
            onOpenDetail(hero);
          }}
          title="Click to view full uncropped chronicle"
        >
          {/* Subtle CRT holographic scanline sweep (Active on Hover) */}
          <div className="poster-scanline opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Monumental Typography Watermark (Behind Hero) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span className="text-stroke-watermark font-serif text-[clamp(2.4rem,6vw,4.5rem)] font-bold tracking-[0.25em] opacity-35 transform -rotate-12 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500 whitespace-nowrap">
              {watermarkText}
            </span>
          </div>

          {/* Animated Elemental Particle Field (Activated smoothly on hover for optimal 60fps) */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {particles.map((pt) => (
              <span
                key={pt.id}
                className="poster-particle shadow-[0_0_8px]"
                style={{
                  left: pt.left,
                  width: pt.size,
                  height: pt.size,
                  animationDuration: pt.duration,
                  animationDelay: pt.delay,
                  backgroundColor: hero.themeColor,
                  color: hero.themeColor,
                  opacity: pt.opacity,
                }}
              />
            ))}
          </div>

          {/* Official High-Resolution Hero Portrait Artwork */}
          <img
            src={hero.image}
            alt={hero.name}
            className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              if (hero.portrait && e.target.src !== hero.portrait) {
                e.target.src = hero.portrait;
              }
            }}
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060810] via-transparent to-black/30 opacity-70 pointer-events-none" />
          <div
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
            style={{ backgroundColor: hero.themeColor }}
          />

          {/* Top Floating MLBB Archetype & Lane Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
            <span
              className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium tracking-widest uppercase border flex items-center gap-1.5 shadow-lg"
              style={{
                borderColor: `${hero.themeColor}88`,
                backgroundColor: 'rgba(4, 6, 12, 0.85)',
                color: '#ffffff',
              }}
            >
              <MLBBClassIcon role={hero.role} className="w-3 h-3" />
              <span>{hero.role}</span>
            </span>

            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono text-[#cbd5e1] bg-[#04060c]/85 border border-white/[0.08] flex items-center gap-1 shadow-lg">
              <MLBBLaneIcon lane={hero.lane} className="w-3 h-3 text-[#38bdf8]" />
              <span>{hero.lane}</span>
            </span>
          </div>

          {/* Top Right Quick Action Tools (Inspect Full Art & Compare) */}
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                setIsLightboxOpen(true);
              }}
              className="bg-black/90 hover:bg-[#f3d288] p-1.5 rounded-full border border-white/[0.12] hover:border-[#f3d288] text-[#cbd5e1] hover:text-black cursor-pointer shadow-xl transition-all"
              title="Inspect full uncropped poster"
            >
              <Maximize2 className="w-3 h-3" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                audioManager.playClick();
                onAddToCompare(hero);
              }}
              className="bg-black/90 hover:bg-[#f3d288] p-1.5 rounded-full border border-white/[0.12] hover:border-[#f3d288] text-[#cbd5e1] hover:text-black cursor-pointer shadow-xl transition-all"
              title="Compare this champion"
            >
              <Scale className="w-3 h-3" />
            </button>
          </div>

          {/* Voice Quote Play Button (Bottom Left on Art) */}
          <div className="absolute bottom-2.5 left-2.5 z-20">
            <button
              onClick={playVoiceQuote}
              className={`p-1.5 rounded-full border text-[9px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                isQuotePlaying
                  ? 'bg-[#f3d288] text-black border-[#f3d288] shadow-[0_0_12px_rgba(243,210,136,0.6)]'
                  : 'bg-black/80 hover:bg-black text-[#cbd5e1] hover:text-[#f3d288] border-white/[0.1]'
              }`}
              title="Play canonical voice audio cue"
            >
              <Volume2 className={`w-3 h-3 ${isQuotePlaying ? 'animate-bounce' : ''}`} />
              <span className="text-[8.5px] uppercase tracking-wider hidden sm:inline">
                {isQuotePlaying ? 'SPEAKING' : 'VOICE'}
              </span>
            </button>
          </div>

          {/* Standout Combat Specialty Pill (Bottom Right on Art) */}
          <div className="absolute bottom-2.5 right-2.5 z-20">
            <span className="px-2 py-0.5 rounded-full text-[8.5px] font-mono tracking-widest text-[#94a3b8] bg-black/80 border border-white/[0.08]">
              {hero.speciality.split('/')[0].trim()}
            </span>
          </div>
        </div>

        {/* ==============================================================
            KINETIC MARQUEE RIBBON: Voice Quote & Lore Narrative Ticker
            ============================================================== */}
        <div className="relative overflow-hidden bg-black/90 border-y border-white/[0.06] py-1 text-[9px] font-mono tracking-wider text-[#94a3b8] z-20">
          <div className="animate-poster-marquee flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="text-[#f3d288]">✦</span>
              <span className="text-zinc-200 italic">&ldquo;{hero.voiceQuote || hero.loreQuote}&rdquo;</span>
            </span>
            <span className="flex items-center gap-2 text-[#94a3b8]/70">
              <span>// FACTION:</span>
              <span className="text-white font-medium">{hero.faction}</span>
            </span>
            <span className="flex items-center gap-2 text-[#94a3b8]/70">
              <span>// ORIGIN:</span>
              <span className="text-[#38bdf8]">{hero.region.split('/')[0].trim()}</span>
            </span>
            {/* Duplicate for seamless marquee continuity */}
            <span className="flex items-center gap-2">
              <span className="text-[#f3d288]">✦</span>
              <span className="text-zinc-200 italic">&ldquo;{hero.voiceQuote || hero.loreQuote}&rdquo;</span>
            </span>
            <span className="flex items-center gap-2 text-[#94a3b8]/70">
              <span>// FACTION:</span>
              <span className="text-white font-medium">{hero.faction}</span>
            </span>
            <span className="flex items-center gap-2 text-[#94a3b8]/70">
              <span>// ORIGIN:</span>
              <span className="text-[#38bdf8]">{hero.region.split('/')[0].trim()}</span>
            </span>
          </div>
        </div>

        {/* ==============================================================
            POSTER META BODY: Name, Title, Canon Relations & Lore
            ============================================================== */}
        <div className="p-4 flex flex-col flex-1 justify-between space-y-3.5 z-20">
          <div>
            {/* Territory Origin and Standout Axis */}
            <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[#94a3b8] mb-1">
              <span className="flex items-center gap-1 text-[#94a3b8]/80 truncate max-w-[65%]">
                <Compass className="w-2.5 h-2.5 text-[#38bdf8] flex-shrink-0" />
                <span className="truncate">{hero.region}</span>
              </span>
              <span
                className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-xs border font-medium flex-shrink-0"
                style={{
                  color: hero.themeColor,
                  borderColor: `${hero.themeColor}44`,
                  backgroundColor: `${hero.themeColor}12`,
                }}
              >
                {maxStatName}
              </span>
            </div>

            {/* Monumental Hero Name & Title */}
            <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#f3d288] transition-colors duration-200">
              {hero.name}
            </h3>
            <p className="text-[11px] font-mono text-[#f3d288]/90 tracking-wide -mt-0.5 mb-2">
              {hero.title}
            </p>

            {/* Canonical Lore Excerpt */}
            <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
              {hero.lore}
            </p>

            {/* Minute Lore Relationship Badge */}
            {primaryRel && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] rounded-lg px-2 py-1">
                <Users className="w-3 h-3 text-[#f3d288] flex-shrink-0" />
                <span className="text-[#94a3b8]">{primaryRel.type}:</span>
                <span className="text-white font-medium truncate">{primaryRel.name}</span>
                <span className="text-[#94a3b8]/60 text-[9px] truncate">({primaryRel.role})</span>
              </div>
            )}
          </div>

          {/* ==============================================================
              MINUTE ABILITIES RUNES & INTERACTIVE TACTICAL HUD
              ============================================================== */}
          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#94a3b8]">
              <span className="flex items-center gap-1 text-[#f3d288]">
                <Zap className="w-3 h-3" />
                <span>TACTICAL RUNES:</span>
              </span>
              <span className="text-[9px] text-[#94a3b8]/70">
                {activeAbility ? 'CLICK TO CLOSE' : 'CLICK TO INSPECT'}
              </span>
            </div>

            {/* 4 Ability Rune Badges: Passive, Skill 1, Skill 2, Ultimate */}
            <div className="grid grid-cols-4 gap-1.5">
              {(hero.abilities || []).slice(0, 4).map((ability, idx) => {
                const labels = ['P', 'I', 'II', 'ULT'];
                const isSelected = activeAbility?.id === ability.id;
                return (
                  <button
                    key={ability.id || idx}
                    onClick={(e) => handleAbilityClick(e, ability)}
                    onMouseEnter={() => audioManager.playHover()}
                    className={`relative py-1 px-1 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-[#f3d288] text-black border-[#f3d288] shadow-[0_0_12px_rgba(243,210,136,0.5)]'
                        : 'bg-black/50 hover:bg-white/[0.08] text-[#cbd5e1] hover:text-white border-white/[0.08] hover:border-[#f3d288]/40'
                    }`}
                    title={`${ability.type}: ${ability.name}`}
                  >
                    <span className="text-xs leading-none">{ability.icon || '⚡'}</span>
                    <span className="text-[8.5px] font-mono font-bold mt-0.5 tracking-tighter">
                      {labels[idx] || `S${idx}`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Tactical Ability HUD Drawer (Revealed on Rune Click/Hover) */}
            {activeAbility && (
              <div className="p-2.5 rounded-xl bg-[#080d1a] border border-[#f3d288]/40 shadow-2xl space-y-1.5 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{activeAbility.icon || '⚡'}</span>
                    <span className="text-xs font-serif font-bold text-white">
                      {activeAbility.name}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveAbility(null);
                    }}
                    className="text-[#94a3b8] hover:text-white text-xs p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[9px] font-mono text-[#f3d288]">
                  <span>{activeAbility.type}</span>
                  <span>•</span>
                  <span>CD: {activeAbility.cooldown || 'N/A'}</span>
                  <span>•</span>
                  <span>COST: {activeAbility.cost || 'None'}</span>
                </div>

                <p className="text-[10px] text-[#cbd5e1] leading-relaxed line-clamp-3">
                  {activeAbility.description}
                </p>

                <div className="pt-1 flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      audioManager.playSkillFlare();
                      onSelectSkillHero(hero);
                    }}
                    className="text-[9px] font-mono text-[#38bdf8] hover:underline flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>TRAIN IN LAB</span>
                    <ChevronRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ==============================================================
              MINUTE COMBAT ATTRIBUTES HUD:
              Offense, Durability, Ability Effects, Difficulty Meters
              ============================================================== */}
          <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9px] font-mono text-[#94a3b8]">
              {/* Offense */}
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span>OFFENSE</span>
                  <span className={offense >= 80 ? 'text-[#f3d288] font-bold' : 'text-zinc-400'}>
                    {offense}%
                  </span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${offense}%`,
                      backgroundColor: offense >= 80 ? '#f3d288' : '#ef4444',
                    }}
                  />
                </div>
              </div>

              {/* Durability */}
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span>DURABILITY</span>
                  <span className={durability >= 80 ? 'text-[#f3d288] font-bold' : 'text-zinc-400'}>
                    {durability}%
                  </span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${durability}%`,
                      backgroundColor: durability >= 80 ? '#f3d288' : '#10b981',
                    }}
                  />
                </div>
              </div>

              {/* Ability Effects */}
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span>ABILITY</span>
                  <span className={abilityEffects >= 80 ? 'text-[#f3d288] font-bold' : 'text-zinc-400'}>
                    {abilityEffects}%
                  </span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${abilityEffects}%`,
                      backgroundColor: abilityEffects >= 80 ? '#f3d288' : '#38bdf8',
                    }}
                  />
                </div>
              </div>

              {/* Difficulty */}
              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span>DIFFICULTY</span>
                  <span className="text-zinc-400">{hero.difficultyLabel}</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${difficulty}%`,
                      backgroundColor: difficulty >= 80 ? '#a855f7' : '#eab308',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==============================================================
              INTERACTIVE ACTION COMMAND BUTTONS:
              Lore Chronicle and Skills Lab
              ============================================================== */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => {
                audioManager.playClick();
                onOpenDetail(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-black/40 hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#f3d288]/50 text-[10px] font-mono tracking-wider text-[#cbd5e1] hover:text-white transition-all cursor-pointer"
              title="Open full canonical chronicle"
            >
              <Eye className="w-3.5 h-3.5 text-[#f3d288]" />
              <span>CHRONICLE</span>
            </button>

            <button
              onClick={() => {
                audioManager.playSkillFlare();
                onSelectSkillHero(hero);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/30 hover:border-[#38bdf8] text-[10px] font-mono tracking-wider text-[#38bdf8] hover:text-white transition-all cursor-pointer"
              title="Inspect combos in Skills Lab"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>SKILLS LAB</span>
            </button>
          </div>
        </div>
      </LiquidGlassCard>

      {/* Lightbox Modal for Uncropped Full Poster Artwork */}
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

export default memo(HeroCard);
