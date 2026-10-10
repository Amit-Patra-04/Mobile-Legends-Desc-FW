import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Scale, Menu, X, Sparkles } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function Navbar({ onOpenSearch, onOpenCompare }) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = audioManager.toggleMusic();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'HEROES', href: '#heroes' },
    { label: 'SKILLS LAB', href: '#skills-lab' },
    { label: '3D CHAMBER', href: '#chamber' },
    { label: 'WORLD LORE', href: '#lore' },
    { label: 'SKINS VAULT', href: '#skins' },
  ];

  const handleLinkClick = (e, href) => {
    audioManager.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030509]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#030509]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            audioManager.playClick();
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.7)] transition-all">
            <div className="w-full h-full bg-[#070b14] rounded-[7px] flex items-center justify-center">
              <span className="font-serif text-amber-400 font-bold text-sm tracking-tighter">M</span>
            </div>
          </div>
          <div>
            <div className="font-serif text-xs md:text-sm font-extrabold tracking-widest text-white group-hover:text-amber-300 transition-colors">
              MOBILE LEGENDS
            </div>
            <div className="font-mono text-[9px] tracking-[0.25em] text-amber-500/80 -mt-0.5">
              CHRONICLES
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              onMouseEnter={() => audioManager.playHover()}
              className="text-xs font-mono tracking-widest text-zinc-400 hover:text-amber-400 transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-yellow-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Utility Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Search Button */}
          <button
            onClick={() => {
              audioManager.playClick();
              onOpenSearch();
            }}
            onMouseEnter={() => audioManager.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-amber-500/50 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-all duration-200"
            title="Search heroes (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">SEARCH</span>
            <kbd className="hidden sm:inline-block text-[9px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* Compare Button */}
          <button
            onClick={() => {
              audioManager.playClick();
              onOpenCompare();
            }}
            onMouseEnter={() => audioManager.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-400 transition-all duration-200"
            title="Compare heroes side by side"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>COMPARE</span>
          </button>

          {/* Sound Ambiance Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => audioManager.playHover()}
            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${
              isAudioActive
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-[0_0_12px_rgba(234,179,8,0.4)]'
                : 'bg-zinc-900/80 border-zinc-700/60 text-zinc-400 hover:text-white'
            }`}
            title={isAudioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
          >
            {isAudioActive ? (
              <div className="flex items-end gap-[2px] h-3">
                <span className="w-[2px] bg-amber-400 animate-[bounce_0.8s_infinite] h-2" />
                <span className="w-[2px] bg-amber-400 animate-[bounce_0.6s_infinite] h-3" />
                <span className="w-[2px] bg-amber-400 animate-[bounce_1s_infinite] h-1.5" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#060913]/98 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-mono tracking-widest text-zinc-300 hover:text-amber-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompare();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>COMPARE HEROES</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
