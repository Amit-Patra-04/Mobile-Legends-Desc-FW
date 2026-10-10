import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, Sparkles, SlidersHorizontal } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import HeroCard from './HeroCard';
import { audioManager } from '../utils/audio';

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

  const roles = ['ALL', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Tank'];
  const lanes = ['ALL', 'Jungle', 'Mid Lane', 'Gold Lane', 'EXP Lane', 'Roam'];
  const difficulties = ['ALL', 'Easy', 'Moderate', 'High', 'Extreme'];

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

  const resetFilters = () => {
    audioManager.playClick();
    setSearchQuery('');
    setSelectedRole('ALL');
    setSelectedLane('ALL');
    setSelectedDifficulty('ALL');
    setSortBy('default');
  };

  return (
    <section id="heroes" className="relative w-full py-24 bg-[#030509] text-white">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-amber-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-400">
                ROSTER OF LEGENDS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              THE HERO ARCHIVE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Discover champion origins, tactical battle roles, verified lane specialities, and combat attributes across all kingdoms of the Land of Dawn.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400 flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SHOWING {filteredHeroes.length} OF {HEROES.length} CHAMPIONS</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#070b14]/90 backdrop-blur-md p-5 rounded-2xl border border-zinc-800/90 shadow-2xl space-y-4 mb-10">
          
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
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
                className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  selectedRole === r
                    ? 'bg-amber-500 text-black font-bold shadow-[0_0_12px_rgba(234,179,8,0.5)]'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Lane Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 mr-2 uppercase">
              LANE:
            </span>
            {lanes.map((lane) => (
              <button
                key={lane}
                onClick={() => {
                  audioManager.playClick();
                  setSelectedLane(lane);
                }}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono tracking-wider transition-all cursor-pointer ${
                  selectedLane === lane
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                    : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
                }`}
              >
                {lane}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Cards Grid */}
        {filteredHeroes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHeroes.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                onOpenDetail={onOpenDetail}
                onOpenChamber={onOpenChamber}
                onSelectSkillHero={onSelectSkillHero}
                onAddToCompare={onAddToCompare}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 flex flex-col items-center justify-center text-center glass-panel rounded-3xl p-8 border border-zinc-800">
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
