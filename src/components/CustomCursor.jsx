import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-item')
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrame;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.75 : 1})`,
          width: '36px',
          height: '36px',
          border: isHovered
            ? '1.5px solid rgba(234, 179, 8, 0.8)'
            : '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: isHovered
            ? '0 0 15px rgba(234, 179, 8, 0.4)'
            : '0 0 8px rgba(255, 255, 255, 0.15)',
        }}
      />
      {/* Core Dot */}
      <div
        className="pointer-events-none fixed z-[10000] rounded-full transition-colors duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: isHovered ? '#fbbf24' : '#ffffff',
          boxShadow: isHovered ? '0 0 10px #fbbf24' : 'none',
        }}
      />
    </>
  );
}
