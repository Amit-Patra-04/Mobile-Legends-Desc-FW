import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, Sparkles } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';

export default function SearchModal({ onClose, onSelectHero }) {
  const [query, setQuery] = useState('');

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

  const results = HEROES.filter((h) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      h.name.toLowerCase().includes(q) ||
      h.title.toLowerCase().includes(q) ||
      h.role.toLowerCase().includes(q) ||
      h.speciality.toLowerCase().includes(q) ||
      h.faction.toLowerCase().includes(q) ||
      h.region.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-xl animate-fadeIn select-none">
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden glass-panel border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col bg-[#070b14]">
        
        {/* Search Input Field */}
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search champions by name, title, role, or kingdom..."
            className="w-full bg-transparent text-sm font-mono text-white placeholder:text-zinc-500 outline-none"
          />
          <button
            onClick={() => {
              audioManager.playClick();
              onClose();
            }}
            className="text-zinc-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1.5">
          {results.length > 0 ? (
            results.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  audioManager.playClick();
                  onSelectHero(h);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/40 hover:bg-zinc-800/80 border border-transparent hover:border-zinc-700 text-left transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img src={h.image} alt={h.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {h.name}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {h.title} • {h.role} ({h.region})
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                    {h.speciality}
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </div>
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-xs font-mono text-zinc-500">
              NO CHAMPIONS FOUND MATCHING &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Modal Footer Key Hints */}
        <div className="p-3 bg-zinc-950/80 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>{results.length} CHAMPIONS INDEXED</span>
          <div className="flex items-center gap-2">
            <span>[ESC] TO CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
