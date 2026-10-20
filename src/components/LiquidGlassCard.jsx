import React, { useState, useRef, useCallback, useEffect } from 'react';

/**
 * LiquidGlassCard: High-performance refractive optical card
 * Optimized for buttery-smooth 60-120fps scrolling and interaction
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
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !isHovered) return;
    if (rafRef.current) return; // Throttled to display frame rate

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));
      setCoords({ x: percentX, y: percentY });

      if (enableTilt) {
        const tiltX = ((y / rect.height) - 0.5) * -5;
        const tiltY = ((x / rect.width) - 0.5) * 5;
        setTilt({ x: tiltX, y: tiltY });
      }
    });
  }, [enableTilt, isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setCoords({ x: 50, y: 50 });
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
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`
          : 'none',
        transition: isHovered
          ? 'transform 0.08s ease-out, border-color 0.25s ease, box-shadow 0.25s ease'
          : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className={`relative rounded-2xl overflow-hidden bg-[#060914] border border-white/[0.08] transition-all duration-300 will-change-transform ${
        isHovered
          ? 'border-white/[0.22] shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_30px_-5px_rgba(56,189,248,0.2)]'
          : 'shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
      } ${className}`}
      {...props}
    >
      {/* 1. Dynamic Liquid Glass Specular Caustic Glint */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.12), rgba(56, 189, 248, 0.05) 40%, transparent 70%)`,
        }}
      />

      {/* 2. Chromatic Dispersion Rim */}
      <div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 0.8 : 0.15,
          background: `radial-gradient(280px circle at ${coords.x}% ${coords.y}%, ${glowColor}40, rgba(255,255,255,0.18) 20%, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* 3. Deep Internal Glass Ambient Glow */}
      <div
        className="absolute -inset-10 pointer-events-none opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, ${glowColor}, transparent 65%)`,
          opacity: isHovered ? 0.3 : 0.08,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
