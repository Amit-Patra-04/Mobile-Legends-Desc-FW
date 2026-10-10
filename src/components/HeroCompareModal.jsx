import React, { useState, useEffect } from 'react';
import { X, Scale, Flame, Shield, Zap, Sparkles, Trophy } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';

export default function HeroCompareModal({ initialHero, onClose }) {
  const [heroA, setHeroA] = useState(() => initialHero || HEROES[0]);
  const [heroB, setHeroB] = useState(() => {
    return HEROES.find((h) => h.id !== (initialHero ? initialHero.id : HEROES[0].id)) || HEROES[1];
  });

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

  const attributesList = [
    { key: 'offense', label: 'Offense Power', icon: Flame, color: 'text-rose-400' },
    { key: 'durability', label: 'Durability / Armor', icon: Shield, color: 'text-emerald-400' },
    { key: 'abilityEffects', label: 'Ability Effects', icon: Zap, color: 'text-cyan-400' },
    { key: 'difficulty', label: 'Execution Difficulty', icon: Sparkles, color: 'text-amber-400' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn select-none">
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden glass-panel border border-zinc-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] flex flex-col my-auto bg-[#080c16]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase">
                TACTICAL HERO COMPARISON
              </h2>
              <p className="font-mono text-xs text-zinc-400">
                Direct comparative attribute analysis & matchup dynamics
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              audioManager.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer transition-all"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Side-by-Side Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Hero A Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest">
                  CHAMPION ALPHA
                </span>
                <select
                  value={heroA.id}
                  onChange={(e) => {
                    const found = HEROES.find((h) => h.id === e.target.value);
                    if (found) {
                      audioManager.playClick();
                      setHeroA(found);
                    }
                  }}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-mono text-white outline-none cursor-pointer"
                >
                  {HEROES.map((h) => (
                    <option key={h.id} value={h.id} className="bg-zinc-900">
                      {h.name} ({h.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={heroA.image}
                  alt={heroA.name}
                  className="w-20 h-20 rounded-xl object-cover border border-zinc-700"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{heroA.name}</h3>
                  <div className="text-xs font-mono text-zinc-400">{heroA.title}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
                    <span>{heroA.role}</span>
                    <span>•</span>
                    <span>{heroA.lane}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-zinc-800">
                <div className="bg-zinc-950 p-2 rounded-lg">
                  <div className="text-[10px] text-zinc-500 uppercase">WIN RATE</div>
                  <div className="text-white font-bold">{heroA.winRate}</div>
                </div>
                <div className="bg-zinc-950 p-2 rounded-lg">
                  <div className="text-[10px] text-zinc-500 uppercase">FACTION</div>
                  <div className="text-white font-bold truncate">{heroA.faction}</div>
                </div>
              </div>
            </div>

            {/* Hero B Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  CHAMPION BETA
                </span>
                <select
                  value={heroB.id}
                  onChange={(e) => {
                    const found = HEROES.find((h) => h.id === e.target.value);
                    if (found) {
                      audioManager.playClick();
                      setHeroB(found);
                    }
                  }}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1 text-xs font-mono text-white outline-none cursor-pointer"
                >
                  {HEROES.map((h) => (
                    <option key={h.id} value={h.id} className="bg-zinc-900">
                      {h.name} ({h.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={heroB.image}
                  alt={heroB.name}
                  className="w-20 h-20 rounded-xl object-cover border border-zinc-700"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{heroB.name}</h3>
                  <div className="text-xs font-mono text-zinc-400">{heroB.title}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <span>{heroB.role}</span>
                    <span>•</span>
                    <span>{heroB.lane}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-zinc-800">
                <div className="bg-zinc-950 p-2 rounded-lg">
                  <div className="text-[10px] text-zinc-500 uppercase">WIN RATE</div>
                  <div className="text-white font-bold">{heroB.winRate}</div>
                </div>
                <div className="bg-zinc-950 p-2 rounded-lg">
                  <div className="text-[10px] text-zinc-500 uppercase">FACTION</div>
                  <div className="text-white font-bold truncate">{heroB.faction}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Comparative Attribute Bars */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 text-center">
              STATISTICAL ATTRIBUTE DELTAS
            </h4>

            {attributesList.map((attr) => {
              const valA = heroA.attributes[attr.key];
              const valB = heroB.attributes[attr.key];
              const Icon = attr.icon;

              return (
                <div key={attr.key} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-amber-400 flex items-center gap-1">
                      {heroA.name}: {valA}%
                      {valA > valB && <Trophy className="w-3 h-3 text-amber-400" />}
                    </span>
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 ${attr.color}`} />
                      <span>{attr.label}</span>
                    </span>
                    <span className="font-bold text-cyan-400 flex items-center gap-1">
                      {valB > valA && <Trophy className="w-3 h-3 text-cyan-400" />}
                      {heroB.name}: {valB}%
                    </span>
                  </div>

                  {/* Comparative Dual Bar */}
                  <div className="grid grid-cols-2 gap-1 h-2.5 bg-zinc-950 rounded-full p-0.5 overflow-hidden border border-zinc-800">
                    {/* Hero A Bar (aligns to right) */}
                    <div className="flex justify-end">
                      <div
                        className="h-full bg-gradient-to-l from-amber-400 to-amber-600 rounded-full transition-all duration-300"
                        style={{ width: `${valA}%` }}
                      />
                    </div>
                    {/* Hero B Bar (aligns to left) */}
                    <div className="flex justify-start">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-300"
                        style={{ width: `${valB}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tactical Matchup Verdict */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-bold">MATCHUP SYNERGY:</span>{' '}
              {heroA.name} ({heroA.speciality}) vs {heroB.name} ({heroB.speciality}). In direct lane skirmishes,{' '}
              {heroA.attributes.offense > heroB.attributes.offense ? heroA.name : heroB.name} exerts superior offensive pressure, while{' '}
              {heroA.attributes.durability > heroB.attributes.durability ? heroA.name : heroB.name} possesses higher survivability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
