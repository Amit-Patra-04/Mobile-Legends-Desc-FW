import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Zap, Play, RotateCcw, Clock, Droplet, Sparkles, Shield, ChevronRight, Award, Flame } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';

export default function SkillsLab({ selectedHeroId }) {
  const [activeHero, setActiveHero] = useState(() => {
    return HEROES.find((h) => h.id === selectedHeroId) || HEROES[0];
  });
  const [activeAbilityIndex, setActiveAbilityIndex] = useState(0);
  const [comboSequence, setComboSequence] = useState([]);
  const [comboScore, setComboScore] = useState(0);
  const [comboRank, setComboRank] = useState(null);
  const canvasRef = useRef(null);

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

      // Ability Icon Symbol
      ctx.font = '36px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(ability.icon, 0, 0);

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
    <section id="skills-lab" className="relative w-full py-24 bg-[#030509] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-cyan-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">
                TACTICAL ABILITY MATRIX
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              THE SKILLS LAB & COMBO ARENA
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Inspect verified skill kits, cooldown telemetry, and test tactical combo choreography with live combat grading.
            </p>
          </div>

          {/* Hero Quick Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {HEROES.map((h) => (
              <button
                key={h.id}
                onClick={() => handleHeroSelect(h)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  activeHero.id === h.id
                    ? 'bg-zinc-800 border-amber-400 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <img src={h.image} alt={h.name} className="w-5 h-5 rounded-md object-cover" />
                <span className="text-xs font-mono">{h.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Skills Lab Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070b14]/90 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl">
          
          {/* Left Column: Ability Selection & Detailed Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Ability Pill Selector (Passive + 3 Skills) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {activeHero.abilities.map((ab, idx) => (
                <button
                  key={ab.id}
                  onClick={() => handleAbilitySelect(idx)}
                  className={`flex flex-col items-center p-3 rounded-2xl border transition-all cursor-pointer text-center ${
                    activeAbilityIndex === idx
                      ? 'bg-zinc-800/90 border-amber-400 text-white shadow-[0_0_20px_rgba(234,179,8,0.25)] scale-102'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  <span className="text-2xl mb-1">{ab.icon}</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-amber-400 font-semibold">
                    {ab.type}
                  </span>
                  <span className="font-serif text-xs font-bold truncate w-full mt-0.5">
                    {ab.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Ability Telemetry Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    {ability.type} ABILITY
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                    <span>{ability.name}</span>
                    <span className="text-xl">{ability.icon}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
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
                {ability.description}
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
                      className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1"
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
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">{activeHero.name}</span>
                <span>•</span>
                <span className="text-amber-400">{activeHero.role}</span>
                <span>•</span>
                <span>{activeHero.speciality}</span>
              </div>
              <span className="text-zinc-500">VERIFIED MOONTON CANON</span>
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
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none bg-black/70 backdrop-blur px-3 py-2 rounded-xl border border-white/10">
              <div>
                <div className="font-mono text-[9px] text-zinc-400 uppercase">ACTIVE FX SIGNATURE</div>
                <div className="font-serif text-xs font-bold text-white">{ability.name}</div>
              </div>
              <span className="font-mono text-[10px] text-amber-400">{ability.type}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
