import React, { useRef, useCallback, useEffect } from 'react';

/**
 * LiquidGlassCard: High-performance refractive optical card
 * Optimized for buttery-smooth 60-120fps scrolling and interaction (Zero React state churn on mousemove)
 */
export default function LiquidGlassCard({
  children,
  className = '',
  glowColor = '#38bdf8',
  enableTilt = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const isHoveredRef = useRef(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (rafRef.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));
      el.style.setProperty('--mouse-x', `${percentX}%`);
      el.style.setProperty('--mouse-y', `${percentY}%`);

      if (enableTilt) {
        const tiltX = ((y / rect.height) - 0.5) * -4;
        const tiltY = ((x / rect.width) - 0.5) * 4;
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.012, 1.012, 1)`;
      }
    });
  }, [enableTilt]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (cardRef.current) {
      cardRef.current.classList.add('is-hovered');
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (cardRef.current) {
      cardRef.current.classList.remove('is-hovered');
      cardRef.current.style.setProperty('--mouse-x', '50%');
      cardRef.current.style.setProperty('--mouse-y', '50%');
      if (enableTilt) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
      className={`group/glass relative rounded-2xl overflow-hidden bg-[#060914] border border-white/[0.08] transition-[border-color,box-shadow,transform] duration-300 will-change-transform hover:border-white/[0.22] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_30px_-5px_rgba(56,189,248,0.2)] shadow-[0_12px_40px_rgba(0,0,0,0.7)] ${className}`}
      {...props}
    >
      {/* 1. Dynamic Liquid Glass Specular Caustic Glint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/glass:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.12), rgba(56, 189, 248, 0.05) 40%, transparent 70%)`,
        }}
      />

      {/* 2. Chromatic Dispersion Rim */}
      <div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none opacity-15 group-hover/glass:opacity-80 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), ${glowColor}40, rgba(255,255,255,0.18) 20%, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* 3. Deep Internal Glass Ambient Glow */}
      <div
        className="absolute -inset-10 pointer-events-none opacity-8 group-hover/glass:opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 65%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
