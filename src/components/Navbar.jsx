import React, { useState, useEffect } from 'react';
import { VolumeX, Search, Scale, X, ChevronRight } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function Navbar({ onOpenSearch, onOpenCompare }) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('heroes');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position & page exploration progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - winHeight;
      if (totalScrollable > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalScrollable) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for Active Navigation Spy
  useEffect(() => {
    const sectionIds = ['heroes', 'skills-lab', 'chamber', 'lore', 'skins', 'esports'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(observerCallback, observerOptions);
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const toggleSound = () => {
    const active = audioManager.toggleMusic();
    setIsAudioActive(active);
  };

  const navLinks = [
    { id: 'heroes', label: 'HEROES', num: '01', desc: '133 Champions Archive' },
    { id: 'skills-lab', label: 'SKILLS LAB', num: '02', desc: 'Tactical Combos & Ratios' },
    { id: 'chamber', label: '3D CHAMBER', num: '03', desc: 'Real-time WebGL Chamber' },
    { id: 'lore', label: 'WORLD LORE', num: '04', desc: 'Land of Dawn Factions' },
    { id: 'skins', label: 'SKINS VAULT', num: '05', desc: 'Legendary Visual Evolutions' },
    { id: 'esports', label: 'ESPORTS', num: '06', desc: 'Competitive Tournament Circuit' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    audioManager.playClick();
    setMobileMenuOpen(false);

    const target = document.getElementById(id);
    if (target) {
      const navOffset = 90;
      const elementPos = target.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Floating Island Dock (Awwwards Clean Capsule) */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-1.25rem)] sm:w-[calc(100%-3rem)] max-w-7xl z-40 transition-all duration-500 ease-out`}
      >
        <div
          className={`relative rounded-2xl sm:rounded-full px-4 sm:px-7 py-2.5 sm:py-3.5 flex items-center justify-between overflow-hidden transition-all duration-500 ${
            isScrolled ? 'awwwards-dock-scrolled' : 'awwwards-dock'
          }`}
        >
          {/* Subtle Ambient Specular Flare (Cyan to Solar Gold) */}
          <div className="absolute -top-10 left-1/4 w-48 h-20 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 right-1/4 w-48 h-20 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* 1. Brand Identity */}
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                audioManager.playClick();
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center gap-2.5 group cursor-pointer select-none"
              title="Return to Zenith"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-amber-400/30 to-blue-600/40 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/assets/images/mlbb_official_logo.png"
                  alt="Mobile Legends: Bang Bang"
                  className="h-7 sm:h-8 w-auto object-contain relative filter drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          </div>

          {/* 2. Center Dynamic Navigation Links (Clean, No Mini Box Elements) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  onMouseEnter={() => audioManager.playHover()}
                  className={`group relative py-1 text-xs font-mono tracking-[0.16em] uppercase transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="link-inner">
                    <span>{link.label}</span>
                    <span aria-hidden="true" className="text-amber-300 font-semibold">{link.label}</span>
                  </span>

                  {/* Clean active indicator underline without any box */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Utility Suite */}
          <div className="flex items-center gap-2 sm:gap-2.5 z-10">
            {/* Spotlight Search Launcher */}
            <button
              onClick={() => {
                audioManager.playClick();
                onOpenSearch();
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-cyan-400/40 text-[11px] font-mono text-zinc-300 hover:text-white transition-all duration-300 group shadow-sm cursor-pointer"
              title="Search Heroes (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline tracking-wider">SEARCH</span>
            </button>

            {/* Duel Compare Launcher */}
            <button
              onClick={() => {
                audioManager.playClick();
                onOpenCompare();
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400/60 text-[11px] font-mono text-amber-300 transition-all duration-300 group cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.15)]"
              title="Compare Champions Head-to-Head"
            >
              <Scale className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
              <span className="tracking-wider">COMPARE</span>
            </button>

            {/* Live Audio Soundscape Visualizer */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => audioManager.playHover()}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer select-none ${
                isAudioActive
                  ? 'bg-cyan-500/15 border-cyan-400/60 text-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.35)]'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.1] text-zinc-400 hover:text-white'
              }`}
              title={isAudioActive ? 'Mute Procedural Soundscape' : 'Awaken Procedural Soundscape'}
            >
              {isAudioActive ? (
                <>
                  <div className="flex items-end gap-[2px] h-3 w-3.5">
                    <span className="w-[2px] bg-gradient-to-t from-cyan-400 to-amber-300 rounded-full animate-eq-1" />
                    <span className="w-[2px] bg-gradient-to-t from-cyan-400 to-amber-300 rounded-full animate-eq-2" />
                    <span className="w-[2px] bg-gradient-to-t from-cyan-400 to-amber-300 rounded-full animate-eq-3" />
                    <span className="w-[2px] bg-gradient-to-t from-cyan-400 to-amber-300 rounded-full animate-eq-4" />
                  </div>
                  <span className="hidden xl:inline text-[10px] font-mono tracking-wider font-semibold text-cyan-300">
                    432Hz
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden xl:inline text-[10px] font-mono tracking-wider">
                    SOUND
                  </span>
                </>
              )}
            </button>

            {/* Mobile Editorial Menu Trigger */}
            <button
              onClick={() => {
                audioManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              onMouseEnter={() => audioManager.playHover()}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-amber-400" />
              ) : (
                <div className="flex flex-col gap-1 w-3.5">
                  <span className="w-full h-[1.5px] bg-white rounded-full" />
                  <span className="w-2.5 h-[1.5px] bg-cyan-400 rounded-full ml-auto" />
                  <span className="w-full h-[1.5px] bg-amber-400 rounded-full" />
                </div>
              )}
            </button>
          </div>

          {/* Real-time Exploration Scroll Progress Hairline along Bottom Rim */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/[0.06] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-300 to-amber-400 relative transition-all duration-150 ease-out shadow-[0_0_8px_rgba(56,189,248,0.8)]"
              style={{ width: `${scrollProgress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 blur-[2px]" />
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Curtain */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#02040b]/96 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn md:hidden">
          {/* Curtain Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/mlbb_official_logo.png"
                alt="Mobile Legends: Bang Bang"
                className="h-8 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              />
              <span className="font-mono text-[10px] tracking-widest text-cyan-400">
                CHRONICLES
              </span>
            </div>

            <button
              onClick={() => {
                audioManager.playClick();
                setMobileMenuOpen(false);
              }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Editorial Nav Links (Clean, No Badges/Mini Boxes) */}
          <div className="flex flex-col gap-4 my-auto py-6">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  style={{ animationDelay: `${idx * 0.06}s` }}
                  className={`animate-mobile-item flex items-center justify-between group py-3 border-b border-white/[0.05] transition-all ${
                    isActive ? 'text-amber-400 pl-2' : 'text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400/70 font-semibold tracking-widest">
                      {link.num}
                    </span>
                    <div>
                      <div className="font-serif text-lg tracking-wider font-bold group-hover:text-amber-300 transition-colors">
                        {link.label}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-500 tracking-wide">
                        {link.desc}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>

          {/* Curtain Footer & Action Suite */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  audioManager.playClick();
                  onOpenSearch();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200 tracking-wider hover:bg-white/10 cursor-pointer"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span>SEARCH</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  audioManager.playClick();
                  onOpenCompare();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 tracking-wider hover:bg-amber-500/20 cursor-pointer"
              >
                <Scale className="w-4 h-4 text-amber-400" />
                <span>COMPARE</span>
              </button>
            </div>

            {/* Soundscape Control for Mobile */}
            <button
              onClick={toggleSound}
              className={`w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl border text-xs font-mono tracking-wider transition-all cursor-pointer ${
                isAudioActive
                  ? 'bg-cyan-500/15 border-cyan-400/50 text-cyan-300'
                  : 'bg-white/5 border-white/10 text-zinc-400'
              }`}
            >
              {isAudioActive ? (
                <>
                  <div className="flex items-end gap-[2px] h-3 w-3">
                    <span className="w-[2px] bg-cyan-400 rounded-full animate-eq-1" />
                    <span className="w-[2px] bg-cyan-400 rounded-full animate-eq-2" />
                    <span className="w-[2px] bg-amber-400 rounded-full animate-eq-3" />
                  </div>
                  <span>PROCEDURAL SOUNDSCAPE ACTIVE (432Hz)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-zinc-400" />
                  <span>ENABLE PROCEDURAL SOUNDSCAPE</span>
                </>
              )}
            </button>

            {/* Footer Telemetry */}
            <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 tracking-widest pt-2">
              <span>LAND OF DAWN ENGINE v2.4</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
