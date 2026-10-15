import React, { useState, useRef, useCallback } from 'react';

/**
 * LiquidGlassCard: Recreating Apple VisionOS & macOS Liquid Glass Refraction
 * Inspired by dashersw/liquid-glass-js
 * 
 * Features:
 * - Dynamic optical refraction highlight tracking mouse coordinate (x, y)
 * - Chromatic edge dispersion (spectral prism separation on border)
 * - Smooth dampening perspective tilt
 * - Specular caustic sheen and depth illusion
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
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setCoords({ x: percentX, y: percentY });

    if (enableTilt) {
      const tiltX = ((y / rect.height) - 0.5) * -7;
      const tiltY = ((x / rect.width) - 0.5) * 7;
      setTilt({ x: tiltX, y: tiltY });
    }
  }, [enableTilt]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setCoords({ x: 50, y: 50 });
  };

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
          ? 'transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-2xl bg-[#040816]/75 border border-white/[0.1] transition-all duration-300 ${
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
          background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.14), rgba(56, 189, 248, 0.06) 40%, transparent 70%)`,
        }}
      />

      {/* 2. Chromatic Dispersion Rim (Prismatic Refraction along Glass Border) */}
      <div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 0.9 : 0.25,
          background: `radial-gradient(280px circle at ${coords.x}% ${coords.y}%, ${glowColor}40, rgba(255,255,255,0.2) 20%, transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1.2px',
        }}
      />

      {/* 3. Deep Internal Glass Ambient Glow */}
      <div
        className="absolute -inset-10 pointer-events-none blur-3xl opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, ${glowColor}, transparent 65%)`,
          opacity: isHovered ? 0.35 : 0.15,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
