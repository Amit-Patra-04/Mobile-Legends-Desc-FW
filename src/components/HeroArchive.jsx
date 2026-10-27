import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, RotateCcw, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import HeroCard from './HeroCard';
import { audioManager } from '../utils/audio';

const INITIAL_CARD_COUNT = 8;
const LOAD_MORE_STEP = 8;

export default function HeroArchive({
  onOpenDetail,
  onOpenChamber,
  onSelectSkillHero,
  onAddToCompare,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [selectedLane, setSelectedLane] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [sortBy, setSortBy] = useState('default');
  const [displayCount, setDisplayCount] = useState(INITIAL_CARD_COUNT);

  const roles = ['ALL', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
  const lanes = ['ALL', 'Jungle', 'Mid Lane', 'Gold Lane', 'EXP Lane', 'Roam'];
  const difficulties = ['ALL', 'Easy', 'Moderate', 'High', 'Extreme'];

  // Reset display count to initial 8 cards when any filter changes
  useEffect(() => {
    setDisplayCount(INITIAL_CARD_COUNT);
  }, [searchQuery, selectedRole, selectedLane, selectedDifficulty, sortBy]);

  const filteredHeroes = useMemo(() => {
    return HEROES.filter((hero) => {
      // Search
      const matchesSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.faction.toLowerCase().includes(searchQuery.toLowerCase());

      // Role
      const matchesRole =
        selectedRole === 'ALL' ||
        hero.role === selectedRole ||
        hero.secondaryRole === selectedRole;

      // Lane
      const matchesLane =
        selectedLane === 'ALL' ||
        hero.lane.toLowerCase().includes(selectedLane.toLowerCase().replace(' lane', ''));

      // Difficulty
      const matchesDifficulty =
        selectedDifficulty === 'ALL' || hero.difficultyLabel === selectedDifficulty;

      return matchesSearch && matchesRole && matchesLane && matchesDifficulty;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'diff-asc') return a.difficulty - b.difficulty;
      if (sortBy === 'diff-desc') return b.difficulty - a.difficulty;
      if (sortBy === 'winrate') return parseFloat(b.winRate) - parseFloat(a.winRate);
      return 0;
    });
  }, [searchQuery, selectedRole, selectedLane, selectedDifficulty, sortBy]);

  const visibleHeroes = useMemo(() => {
    return filteredHeroes.slice(0, displayCount);
  }, [filteredHeroes, displayCount]);

  const resetFilters = () => {
    audioManager.playClick();
    setSearchQuery('');
    setSelectedRole('ALL');
    setSelectedLane('ALL');
    setSelectedDifficulty('ALL');
    setSortBy('default');
    setDisplayCount(INITIAL_CARD_COUNT);
  };

  return (
    <section id="heroes" className="relative w-full py-28 bg-[#04060b] text-white overflow-hidden">
      {/* Monumental Watermark Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(5rem,15vw,16rem)] tracking-[0.12em] opacity-30 select-none pointer-events-none whitespace-nowrap z-0">
        CHAMPIONS
      </div>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[28rem] h-[28rem] bg-[#f3d288]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-pulse" />
              <span className="font-mono text-phi-xs tracking-[0.35em] uppercase text-[#f3d288] font-semibold">
                [ 02 // ARCHIVE ] • CANONICAL CODEX
              </span>
            </div>
            <h2 className="text-phi-3xl md:text-phi-4xl font-medium tracking-tight text-white leading-tight">
              <span className="editorial-italic text-[#f3d288] font-normal mr-2">Roster of</span>
              <span className="font-serif uppercase font-bold tracking-tight">The Land of Dawn</span>
            </h2>
            <p className="font-sans text-phi-sm text-[#94a3b8] mt-2.5 max-w-xl leading-relaxed">
              Explore tactical battle specialities, verified lane affinities, sovereign faction origins, and high-tier combat attributes across all 133 legendary champions.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar with Haute Corner Crosshairs */}
        <div className="card-awwwards crosshairs-container p-6 rounded-2xl border border-white/[0.08] shadow-2xl space-y-5 mb-12 bg-[#060914]/90">
          <div className="crosshair-tl" />
          <div className="crosshair-tr" />
          <div className="crosshair-bl" />
          <div className="crosshair-br" />
          
          {/* Search & Sort Row */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by hero name, faction, title..."
                className="w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-zinc-200 placeholder:text-zinc-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-zinc-500 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sorting Dropdown & Reset */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-3 py-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-mono text-zinc-400">SORT:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-mono text-zinc-200 outline-none cursor-pointer"
                >
                  <option value="default" className="bg-zinc-900">Default (Featured)</option>
                  <option value="winrate" className="bg-zinc-900">Highest Win Rate</option>
                  <option value="diff-desc" className="bg-zinc-900">Difficulty (Hard first)</option>
                  <option value="diff-asc" className="bg-zinc-900">Difficulty (Easy first)</option>
                  <option value="name" className="bg-zinc-900">Alphabetical (A-Z)</option>
                </select>
              </div>

              {(searchQuery || selectedRole !== 'ALL' || selectedLane !== 'ALL' || selectedDifficulty !== 'ALL' || sortBy !== 'default') && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">RESET</span>
                </button>
              )}
            </div>
          </div>

          {/* Role Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 mr-2 uppercase">
              ROLE:
            </span>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => {
                  audioManager.playClick();
                  setSelectedRole(r);
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedRole === r
                    ? 'bg-[#f3d288] text-black font-semibold shadow-[0_0_15px_rgba(243,210,136,0.35)]'
                    : 'bg-black/40 hover:bg-white/[0.06] text-[#94a3b8] hover:text-white border border-white/[0.06]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Lane Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[#94a3b8]/60 mr-2 uppercase">
              LANE:
            </span>
            {lanes.map((lane) => (
              <button
                key={lane}
                onClick={() => {
                  audioManager.playClick();
                  setSelectedLane(lane);
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedLane === lane
                    ? 'bg-[#38bdf8] text-black font-semibold shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                    : 'bg-black/40 hover:bg-white/[0.06] text-[#94a3b8] hover:text-white border border-white/[0.06]'
                }`}
              >
                {lane}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Cards Grid with Virtual Performance Optimization */}
        {visibleHeroes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleHeroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  hero={hero}
                  onOpenDetail={onOpenDetail}
                  onSelectSkillHero={onSelectSkillHero}
                  onAddToCompare={onAddToCompare}
                />
              ))}
            </div>

            {/* Show More Command Bar */}
            {displayCount < filteredHeroes.length ? (
              <div className="mt-14 flex flex-col items-center justify-center gap-5 p-6 rounded-2xl bg-[#060a14]/90 border border-white/[0.08] shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-phi-xs text-[#94a3b8] uppercase tracking-wider">
                    SHOWING {visibleHeroes.length} OF {filteredHeroes.length} CHAMPIONS
                  </span>
                  <div className="w-28 sm:w-44 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#38bdf8] to-[#f3d288] rounded-full transition-all duration-500"
                      style={{ width: `${(visibleHeroes.length / filteredHeroes.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      audioManager.playClick();
                      setDisplayCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredHeroes.length));
                    }}
                    className="group flex items-center gap-2.5 px-8 py-3 rounded-full font-mono text-phi-xs text-black font-bold bg-[#f3d288] hover:bg-[#ffe5a3] transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(243,210,136,0.3)] hover:scale-105 active:scale-95"
                  >
                    <span className="tracking-widest uppercase">SHOW MORE</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => {
                      audioManager.playClick();
                      setDisplayCount(filteredHeroes.length);
                    }}
                    className="px-5 py-3 rounded-full font-mono text-phi-xs text-[#cbd5e1] hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all duration-300 cursor-pointer tracking-wider uppercase hover:border-white/20 active:scale-95"
                  >
                    SHOW ALL ({filteredHeroes.length})
                  </button>
                </div>
              </div>
            ) : (
              /* All Champions Revealed Indicator */
              <div className="mt-12 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-phi-xs text-[#94a3b8] tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ALL {filteredHeroes.length} CHAMPIONS DISPLAYED
                </span>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="py-20 flex flex-col items-center justify-center text-center rounded-3xl p-8 border border-zinc-800 bg-[#060a14]/80">
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500 mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              NO CHAMPIONS MATCHED CRITERIA
            </h3>
            <p className="font-sans text-xs text-zinc-400 max-w-sm mb-6">
              No hero in the Moniyan records matches the query &ldquo;{searchQuery}&rdquo; under the chosen filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full font-serif text-xs uppercase font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
