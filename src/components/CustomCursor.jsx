import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ enabled = true, hideRing = false }) {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;

    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }

      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-item')
      );
      const nextHover = !!isInteractive;
      if (nextHover !== isHoveredRef.current) {
        setIsHovered(nextHover);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (dotRef.current) dotRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const updateLoop = () => {
      if (isVisibleRef.current) {
        trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.22;
        trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.22;

        if (ringRef.current) {
          const scale = isHoveredRef.current ? 1.75 : 1;
          ringRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
        }
      }
      rafId = requestAnimationFrame(updateLoop);
    };

    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      {!hideRing && (
        <div
          ref={ringRef}
          className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform opacity-0 transition-opacity duration-200"
          style={{
            width: '36px',
            height: '36px',
            border: isHovered
              ? '1.5px solid rgba(251, 191, 36, 0.95)'
              : '1px solid rgba(245, 158, 11, 0.5)',
            boxShadow: isHovered
              ? '0 0 16px rgba(251, 191, 36, 0.65)'
              : '0 0 10px rgba(245, 158, 11, 0.3)',
          }}
        />
      )}
      {/* Core Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full will-change-transform opacity-0 transition-all duration-150"
        style={{
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: isHovered ? '#fbbf24' : '#ffb800',
          boxShadow: isHovered ? '0 0 12px #fbbf24, 0 0 20px #f59e0b' : '0 0 8px #ffb800',
        }}
      />
    </>
  );
}
