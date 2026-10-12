import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Eye, EyeOff, Sparkles, Shield, Compass } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  altText,
  hero,
}) {
  const [scale, setScale] = useState(1);
  const [showMeta, setShowMeta] = useState(true);
  const [activeSource, setActiveSource] = useState(imageSrc);

  // Sync active source when imageSrc or hero changes
  useEffect(() => {
    setActiveSource(imageSrc);
    setScale(1);
  }, [imageSrc, hero]);

  // Handle keyboard shortcuts (Esc, +, -)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        audioManager.playClick();
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        setScale((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        setScale((prev) => Math.max(prev - 0.25, 0.75));
      } else if (e.key === '0') {
        setScale(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasPortraitOption = hero && hero.portrait && hero.image && hero.portrait !== hero.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-fadeIn select-none p-4"
      onClick={() => {
        audioManager.playClick();
        onClose();
      }}
    >
      {/* Top Floating Controls Bar */}
      <div
        className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Artwork Meta Pill */}
        <div className="pointer-events-auto flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-zinc-700/80 shadow-2xl">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
            {hero ? hero.name : altText || 'MASTER ARTWORK'}
          </span>
          {hero && (
            <span
              className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border"
              style={{
                borderColor: `${hero.themeColor}88`,
                backgroundColor: `${hero.themeColor}22`,
                color: hero.themeColor,
              }}
            >
              {hero.role}
            </span>
          )}
        </div>

        {/* Right: Interactive Zoom, Toggle & Close Tools */}
        <div className="pointer-events-auto flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-700/80 shadow-2xl">
          {/* Zoom Out */}
          <button
            onClick={() => {
              audioManager.playClick();
              setScale((prev) => Math.max(prev - 0.25, 0.75));
            }}
            className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Scale Indicator / Reset */}
          <button
            onClick={() => {
              audioManager.playClick();
              setScale(1);
            }}
            className="px-2.5 py-1 text-xs font-mono text-amber-400 hover:text-amber-300 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            title="Reset Zoom (0)"
          >
            {Math.round(scale * 100)}%
          </button>

          {/* Zoom In */}
          <button
            onClick={() => {
              audioManager.playClick();
              setScale((prev) => Math.min(prev + 0.25, 3));
            }}
            className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-zinc-700" />

          {/* UI Toggle (Pure Screen Mode) */}
          <button
            onClick={() => {
              audioManager.playClick();
              setShowMeta(!showMeta);
            }}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              showMeta ? 'text-amber-400 bg-amber-500/10' : 'text-zinc-400 hover:text-white'
            }`}
            title={showMeta ? 'Hide Details' : 'Show Details'}
          >
            {showMeta ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          {/* Close Action */}
          <button
            onClick={() => {
              audioManager.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-colors cursor-pointer"
            title="Close Lightbox (Esc)"
          >
            <X className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport: Clean, 100% Uncropped, Edge-to-Edge */}
      <div
        className="relative max-w-[94vw] max-h-[88vh] flex items-center justify-center overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeSource}
          alt={altText || (hero ? hero.name : 'Hero Artwork')}
          className="max-w-[92vw] max-h-[86vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-200 ease-out select-none"
          style={{ transform: `scale(${scale})` }}
          draggable={false}
        />
      </div>

      {/* Bottom Floating Info & Source Selector */}
      {showMeta && hero && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row items-center gap-3 bg-zinc-950/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-zinc-800 shadow-2xl max-w-xl text-center sm:text-left"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-zinc-400 mb-0.5">
              <span>{hero.region}</span>
              <span>•</span>
              <span className="text-amber-400">{hero.title}</span>
            </div>
            <div className="text-xs text-zinc-300 line-clamp-1 italic">
              &ldquo;{hero.loreQuote || hero.voiceQuote}&rdquo;
            </div>
          </div>

          {/* Alternate Source Switcher (e.g. Portrait vs Splash Art) */}
          {hasPortraitOption && (
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-700/80">
              <button
                onClick={() => {
                  audioManager.playClick();
                  setActiveSource(hero.image);
                }}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono cursor-pointer transition-all ${
                  activeSource === hero.image
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                SPLASH
              </button>
              <button
                onClick={() => {
                  audioManager.playClick();
                  setActiveSource(hero.portrait);
                }}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono cursor-pointer transition-all ${
                  activeSource === hero.portrait
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                PORTRAIT
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
