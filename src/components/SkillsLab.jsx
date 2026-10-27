import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Zap, Play, RotateCcw, Clock, Droplet, Sparkles, Shield, ChevronRight, Award, Flame } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import SkillIcon from './SkillIcon';
import { cleanSkillDescription } from '../utils/skillUtils';

export default function SkillsLab({ selectedHeroId }) {
  const [activeHero, setActiveHero] = useState(() => {
    return HEROES.find((h) => h.id === selectedHeroId) || HEROES[0];
  });
  const [activeAbilityIndex, setActiveAbilityIndex] = useState(0);
  const [comboSequence, setComboSequence] = useState([]);
  const [comboScore, setComboScore] = useState(0);
  const [comboRank, setComboRank] = useState(null);
  const [heroSearch, setHeroSearch] = useState('');
  const canvasRef = useRef(null);

  const filteredHeroes = heroSearch.trim()
    ? HEROES.filter((h) =>
        h.name.toLowerCase().includes(heroSearch.toLowerCase()) ||
        h.role.toLowerCase().includes(heroSearch.toLowerCase())
      )
    : HEROES;

  // Sync if prop changes
  useEffect(() => {
    if (selectedHeroId) {
      const found = HEROES.find((h) => h.id === selectedHeroId);
      if (found) {
        setActiveHero(found);
        setActiveAbilityIndex(0);
        setComboSequence([]);
        setComboRank(null);
        setComboScore(0);
      }
    }
  }, [selectedHeroId]);

  const ability = activeHero.abilities[activeAbilityIndex] || activeHero.abilities[0];

  const skillImgRef = useRef(null);

  useEffect(() => {
    if (ability?.icon) {
      const img = new Image();
      img.src = ability.icon;
      img.onload = () => {
        skillImgRef.current = img;
      };
    }
  }, [ability?.icon]);

  // Dynamic Skill FX Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let tick = 0;
    const particles = [];

    const createSkillParticles = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 4; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        particles.push({
          x: centerX + (Math.random() - 0.5) * 40,
          y: centerY + (Math.random() - 0.5) * 40,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3.5 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: activeHero.themeColor,
        });
      }
    };

    const render = () => {
      tick++;
      ctx.fillStyle = 'rgba(6, 10, 20, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      createSkillParticles();

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      // Rotating skill aura ring
      ctx.beginPath();
      ctx.arc(0, 0, 70 + Math.sin(tick * 0.05) * 10, 0, Math.PI * 2);
      ctx.strokeStyle = activeHero.themeColor;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Inner glowing core
      const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, 60);
      gradient.addColorStop(0, `${activeHero.themeColor}aa`);
      gradient.addColorStop(0.6, `${activeHero.themeColor}22`);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, 60, 0, Math.PI * 2);
      ctx.fill();

      // Ability Circular In-Game Icon Rendering
      if (skillImgRef.current && skillImgRef.current.complete && skillImgRef.current.naturalWidth > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(skillImgRef.current, -30, -30, 60, 60);
        ctx.restore();

        // Metallic circular bezel around canvas icon
        ctx.beginPath();
        ctx.arc(0, 0, 31, 0, Math.PI * 2);
        ctx.strokeStyle = activeAbilityIndex === 3 ? '#f59e0b' : '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      } else {
        ctx.font = '24px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#f3d288';
        ctx.fillText(activeAbilityIndex === 0 ? '✦' : activeAbilityIndex === 3 ? 'Ω' : '⚔', 0, 0);
      }

      ctx.restore();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [activeHero, activeAbilityIndex, ability]);

  const handleHeroSelect = (hero) => {
    audioManager.playSkillFlare();
    setActiveHero(hero);
    setActiveAbilityIndex(0);
    setComboSequence([]);
    setComboRank(null);
    setComboScore(0);
  };

  const handleAbilitySelect = (idx) => {
    audioManager.playClick();
    setActiveAbilityIndex(idx);

    // Track combo sequence
    const chosen = activeHero.abilities[idx];
    const newSeq = [...comboSequence, chosen.type];
    setComboSequence(newSeq);
    const newScore = comboScore + 250;
    setComboScore(newScore);

    if (newSeq.length >= 4) {
      audioManager.playSkillFlare();
      setComboRank('SSS RANK PERFECT');
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.65 },
        colors: [activeHero.themeColor, '#fbbf24', '#ffffff'],
      });
    } else if (newSeq.length === 3) {
      setComboRank('SS RANK EXCELLENT');
    } else if (newSeq.length === 2) {
      setComboRank('S RANK GOOD');
    }
  };

  const handleResetCombo = () => {
    audioManager.playClick();
    setComboSequence([]);
    setComboRank(null);
    setComboScore(0);
  };

  return (
    <section id="skills-lab" className="relative w-full py-28 bg-[#04060b] text-white overflow-hidden">
      {/* Monumental Watermark Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(5rem,15vw,16rem)] tracking-[0.12em] opacity-40 select-none pointer-events-none whitespace-nowrap z-0">
        SYNTHESIS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#38bdf8] font-semibold">
                [ 03 // TACTICAL LAB ] • ARCANUM MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              <span className="editorial-italic text-[#38bdf8] font-normal mr-2">Arcane</span>
              <span className="font-serif uppercase font-bold tracking-tight">Skills Laboratory</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-2.5 leading-relaxed">
              Analyze official ability kits, frame data, cooldown telemetry, and test tactical combo sequence choreography with real-time combat performance grading.
            </p>
          </div>

          {/* Hero Quick Switcher Strip */}
          <div className="w-full lg:max-w-xl min-w-0 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                SELECT HERO ({filteredHeroes.length}):
              </span>
              <input
                type="text"
                placeholder="Search heroes..."
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#38bdf8] w-36 sm:w-44"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full min-w-0">
              {filteredHeroes.map((h) => (
                <button
                  key={h.id}
                  onClick={() => handleHeroSelect(h)}
                  className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer max-w-[150px] ${
                    activeHero.id === h.id
                      ? 'bg-[#38bdf8] border-[#38bdf8] text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                      : 'bg-black/50 border-white/[0.08] text-[#94a3b8] hover:text-white hover:bg-white/[0.06]'
                  }`}
                  title={h.name}
                >
                  <img src={h.image} alt={h.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
                  <span className="text-xs font-mono truncate">{h.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Skills Lab Display Card with Corner Crosshairs */}
        <div className="card-awwwards crosshairs-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-2xl">
          <div className="crosshair-tl" />
          <div className="crosshair-tr" />
          <div className="crosshair-bl" />
          <div className="crosshair-br" />
          
          {/* Left Column: Ability Selection & Detailed Information */}
          <div className="lg:col-span-7 space-y-6 min-w-0">
            
            {/* Active Champion Profile Header inside the Lab */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 min-w-0 overflow-hidden">
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="relative shrink-0">
                  <img
                    src={activeHero.image}
                    alt={activeHero.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-amber-400 shadow-[0_0_12px_rgba(234,179,8,0.3)]"
                  />
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-black/95 border border-amber-400/60 text-[8.5px] font-mono text-amber-300 font-bold leading-none">
                    {activeHero.role.split('/')[0]}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white truncate max-w-full">
                      {activeHero.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase font-semibold shrink-0">
                      {activeHero.role}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-zinc-400 truncate max-w-full mt-0.5">
                    {activeHero.title} • {activeHero.region}
                  </p>
                </div>
              </div>

              {/* Quick Champion Picker Dropdown */}
              <div className="shrink-0 flex items-center gap-2">
                <select
                  value={activeHero.id}
                  onChange={(e) => {
                    const h = HEROES.find((item) => item.id === e.target.value);
                    if (h) handleHeroSelect(h);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer focus:outline-none focus:border-amber-400 transition-colors max-w-[180px] truncate"
                  title="Select Champion"
                >
                  {HEROES.map((h) => (
                    <option key={h.id} value={h.id} className="bg-zinc-900 text-white">
                      {h.name} ({h.role})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ability Pill Selector (Standard 3, 4 Active Skills, or 3+3 Transformation) */}
            <div className={`grid gap-2.5 ${
              activeHero.abilities.length > 5
                ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-4'
                : activeHero.abilities.length === 5
                ? 'grid-cols-2 sm:grid-cols-5'
                : 'grid-cols-2 sm:grid-cols-4'
            }`}>
              {activeHero.abilities.map((ab, idx) => (
                <button
                  key={ab.id || idx}
                  onClick={() => handleAbilitySelect(idx)}
                  className={`min-w-0 w-full overflow-hidden flex flex-col items-center p-2 sm:p-2.5 rounded-2xl border transition-all cursor-pointer text-center group ${
                    activeAbilityIndex === idx
                      ? 'bg-zinc-800/90 border-amber-400 text-white shadow-[0_0_20px_rgba(234,179,8,0.25)] scale-102'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                  title={`${ab.type}: ${ab.name}${ab.form ? ` (${ab.form})` : ''}`}
                >
                  <div className="mb-1.5 shrink-0">
                    <SkillIcon
                      ability={ab}
                      index={idx}
                      size="md"
                      isSelected={activeAbilityIndex === idx}
                      showBadge={true}
                    />
                  </div>
                  {ab.form && (
                    <span className="text-[7.5px] font-mono text-cyan-400 font-bold uppercase tracking-wider mb-0.5 truncate max-w-full px-1">
                      {ab.form}
                    </span>
                  )}
                  <span className="font-mono text-[9px] tracking-widest uppercase text-amber-400 font-semibold truncate max-w-full px-1">
                    {ab.type}
                  </span>
                  <span className="font-serif text-xs font-bold truncate max-w-full px-1 w-full mt-0.5 group-hover:text-amber-200 transition-colors">
                    {ab.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Ability Telemetry Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-4 min-w-0 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <SkillIcon
                    ability={ability}
                    index={activeAbilityIndex}
                    size="lg"
                    showBadge={true}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                        {ability.type} ABILITY
                      </span>
                      {ability.form && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase font-bold shrink-0">
                          {ability.form}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white truncate max-w-full">
                      {ability.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono shrink-0">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>CD: {ability.cooldown}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Droplet className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{ability.cost}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {cleanSkillDescription(ability.description)}
              </p>

              {/* Interactive Combo Arena HUD */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      LIVE COMBO CHAIN:
                    </span>
                  </div>
                  {comboSequence.length > 0 && (
                    <button
                      onClick={handleResetCombo}
                      className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>RESET COMBO</span>
                    </button>
                  )}
                </div>

                {/* Combo Sequence Pills */}
                <div className="flex flex-wrap items-center gap-2 min-h-[36px] bg-zinc-950 p-2 rounded-xl border border-zinc-800">
                  {comboSequence.length > 0 ? (
                    comboSequence.map((step, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-fadeIn"
                      >
                        {step}
                      </span>
                    ))
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-500">
                      Click ability pills above to test combo string execution...
                    </span>
                  )}
                </div>

                {/* Combo Rank Output */}
                {comboRank && (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="font-bold">{comboRank}</span>
                    </div>
                    <span>CALCULATED BURST: +{comboScore} DMG</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Hero Synergy Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs font-mono text-zinc-400 overflow-hidden">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                <span className="text-white font-bold truncate max-w-[160px]">{activeHero.name}</span>
                <span>•</span>
                <span className="text-amber-400 shrink-0">{activeHero.role}</span>
                <span>•</span>
                <span className="truncate max-w-[200px]">{activeHero.speciality}</span>
              </div>
              <span className="text-zinc-500 shrink-0 text-[11px]">VERIFIED MOONTON CANON</span>
            </div>
          </div>

          {/* Right Column: Real-Time Animated Ability Visualizer Canvas */}
          <div className="lg:col-span-5 relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 bg-[#040711] flex items-center justify-center shadow-inner">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            {/* Visualizer Status Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SIMULATION ACTIVE</span>
            </div>

            {/* Bottom Ability Name Label */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none bg-black/70 backdrop-blur px-3 py-2 rounded-xl border border-white/10 overflow-hidden">
              <div className="min-w-0 flex-1 mr-2">
                <div className="font-mono text-[9px] text-zinc-400 uppercase">ACTIVE FX SIGNATURE</div>
                <div className="font-serif text-xs font-bold text-white truncate">{ability.name}</div>
              </div>
              <span className="font-mono text-[10px] text-amber-400 shrink-0">{ability.type}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
