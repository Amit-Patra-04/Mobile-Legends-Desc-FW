import React from 'react';
import { ArrowUp, Heart, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    audioManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#020306] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/mlbb_official_logo.png"
                alt="Mobile Legends: Bang Bang"
                className="h-8 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]"
              />
              <span className="font-mono text-[10px] tracking-widest text-amber-500/80 uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                OFFICIAL CODEX
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
              An award-winning interactive cinematic universe exploring the lore, characters, 3D artifacts, and mechanical combat intricacies of the Land of Dawn.
            </p>
            <div className="font-mono text-[11px] text-zinc-500">
              CRAFTED WITH REACT • THREE.JS • TAILWIND • WEB AUDIO API
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-widest">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  onClick={() => scrollTo('#heroes')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Hero Archive Roster
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#skills-lab')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Tactical Skills Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#chamber')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Interactive 3D Chamber
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#lore')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Land of Dawn Map & Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#skins')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Visual Evolution Vault
                </button>
              </li>
            </ul>
          </div>

          {/* Canonical Roster Coverage */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-widest">
              CANON CHAMPIONS COVERED
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              {['Alucard', 'Gusion', 'Fanny', 'Kagura', 'Granger', 'Chou', 'Beatrix', 'Tigreal'].map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full lore, abilities, voice lines, and 3D telemetry verified</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>
              Disclaimer: This is an unofficial, non-commercial fan tribute project. Mobile Legends: Bang Bang, its logo, character designs, lore, and assets are trademarks and copyright of MOONTON Games. Not affiliated with or endorsed by MOONTON.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            title="Return to summit"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
