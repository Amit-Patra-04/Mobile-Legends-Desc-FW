import React, { useEffect, useState, useRef } from 'react';
import { audioManager } from '../utils/audio';

export default function IntroSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const canvasRef = useRef(null);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      speedY: -Math.random() * 0.8 - 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.4 ? '234, 179, 8' : '6, 182, 212', // Gold or cyan
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEnter = () => {
    audioManager.init();
    audioManager.playClick();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030509] text-white overflow-hidden select-none transition-opacity duration-700">
      {/* Background Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-70" />

      {/* Atmospheric radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={handleEnter}
        className="absolute top-8 right-8 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-zinc-400 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/50 bg-black/40 backdrop-blur transition-all duration-200"
      >
        <span>SKIP INTRO</span>
        <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">ESC</span>
      </button>

      {/* Center Emblem & Typography */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        {/* MLBB Crest Monogram */}
        <div className="relative mb-8 group">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400/20 via-yellow-600/10 to-amber-900/30 border border-amber-500/40 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.25)] animate-pulse-glow">
            <svg
              className="w-14 h-14 text-amber-400 drop-shadow-[0_0_12px_rgba(234,179,8,0.8)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          {/* Subtle spinning rune ring */}
          <div className="absolute -inset-2 rounded-2xl border border-amber-500/20 border-dashed animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Title */}
        <p className="font-mono text-xs tracking-[0.35em] text-amber-400/90 uppercase mb-2">
          Land of Dawn // Archive
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-wider text-white mb-4">
          MOBILE LEGENDS
        </h1>
        <p className="font-sans text-xs md:text-sm text-zinc-400 max-w-md tracking-wide leading-relaxed mb-8">
          Where ancient legends awaken, steel clashes with celestial sorcery, and destiny is written in the heat of battle.
        </p>

        {/* Progress Bar & Counter */}
        <div className="w-64 md:w-80 flex flex-col items-center gap-3">
          <div className="w-full h-1 bg-zinc-800/80 rounded-full overflow-hidden p-[1px] border border-zinc-700/50">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full transition-all duration-200 shadow-[0_0_10px_#eab308]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between w-full font-mono text-[11px] text-zinc-500">
            <span>SYNCING CANON</span>
            <span className="text-amber-400 font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Enter Button (Once Loaded or ready) */}
        <div className="mt-8 h-12 flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleEnter}
              className="px-8 py-3 rounded-full font-serif text-xs md:text-sm tracking-widest uppercase font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_30px_rgba(234,179,8,0.5)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              ENTER THE LAND OF DAWN
            </button>
          ) : (
            <span className="text-xs font-mono text-zinc-600 animate-pulse">
              INITIALIZING IMMERSIVE SIMULATION...
            </span>
          )}
        </div>
      </div>

      {/* Bottom Legal Attribution Note */}
      <div className="absolute bottom-6 text-[10px] font-mono text-zinc-600 tracking-wider">
        AN AWARD-WINNING INTERACTIVE MLBB EXPERIENCE • UNOFFICIAL TRIBUTE
      </div>
    </div>
  );
}
