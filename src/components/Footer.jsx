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
    <footer className="relative w-full bg-[#020306] text-[#94a3b8] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-[#f3d288]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/mlbb_official_logo.png"
                alt="Mobile Legends: Bang Bang"
                className="h-8 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(243,210,136,0.35)]"
              />
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#f3d288] uppercase px-2.5 py-0.5 rounded-full bg-[#f3d288]/10 border border-[#f3d288]/20">
                OFFICIAL CODEX
              </span>
            </div>
            <p className="font-sans text-xs text-[#94a3b8] leading-relaxed max-w-sm">
              An interactive cinematic universe exploring the lore, characters, 3D artifacts, and mechanical combat intricacies of the Land of Dawn.
            </p>
            <div className="font-mono text-[10px] tracking-widest text-[#94a3b8]/60 uppercase">
              CRAFTED WITH REACT • THREE.JS • GSAP • LENIS • WEB AUDIO API
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[10px] text-white uppercase tracking-[0.25em]">
              NAVIGATION INDEX
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  onClick={() => scrollTo('#heroes')}
                  className="hover:text-[#f3d288] transition-colors cursor-pointer"
                >
                  01 // Hero Archive (133 Roster)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#skills-lab')}
                  className="hover:text-[#f3d288] transition-colors cursor-pointer"
                >
                  02 // Tactical Skills Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#chamber')}
                  className="hover:text-[#f3d288] transition-colors cursor-pointer"
                >
                  03 // 3D WebGL Hologram Chamber
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#lore')}
                  className="hover:text-[#f3d288] transition-colors cursor-pointer"
                >
                  04 // Land of Dawn World Lore
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#skins')}
                  className="hover:text-[#f3d288] transition-colors cursor-pointer"
                >
                  05 // Visual Evolution Vault
                </button>
              </li>
            </ul>
          </div>

          {/* Canonical Roster Coverage */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] text-white uppercase tracking-[0.25em]">
              FEATURED CITADEL LORE
            </div>
            <div className="flex flex-wrap gap-1.5 text-[10.5px] font-mono">
              {['Alucard', 'Gusion', 'Fanny', 'Kagura', 'Granger', 'Chou', 'Beatrix', 'Tigreal'].map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded-full bg-black/40 border border-white/[0.08] text-[#cbd5e1]"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="pt-2 text-[10px] font-mono text-[#94a3b8]/70 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f3d288]" />
              <span>Full lore, abilities, soundscapes, and 3D telemetry verified</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94a3b8]/70">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-[#f3d288] flex-shrink-0" />
            <span>
              Disclaimer: This is an unofficial, non-commercial fan tribute experience. Mobile Legends: Bang Bang, logos, and artwork are copyright of MOONTON Games.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-[#f3d288] hover:text-black border border-white/[0.1] text-xs font-mono text-zinc-300 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-xl"
            title="Return to zenith"
          >
            <span>BACK TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
