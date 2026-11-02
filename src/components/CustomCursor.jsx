import React, { useEffect, useRef } from 'react';

export default function CustomCursor({ enabled = true, hideRing = false }) {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const isHoveredRef = useRef(false);
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

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
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;
      isHoveredRef.current = !!(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-item')
      );
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
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const updateLoop = () => {
      if (isVisibleRef.current) {
        trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.24;
        trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.24;

        if (ringRef.current) {
          const hovered = isHoveredRef.current;
          const scale = hovered ? 1.55 : 1;
          ringRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          ringRef.current.style.borderColor = hovered ? 'rgba(251, 191, 36, 0.95)' : 'rgba(245, 158, 11, 0.5)';
          ringRef.current.style.boxShadow = hovered ? '0 0 16px rgba(251, 191, 36, 0.65)' : '0 0 10px rgba(245, 158, 11, 0.3)';
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
      document.removeEventListener('mouseover', handleMouseOver);
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
            border: '1px solid rgba(245, 158, 11, 0.5)',
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.3)',
          }}
        />
      )}
      {/* Core Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full will-change-transform opacity-0 transition-opacity duration-150"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#ffb800',
          boxShadow: '0 0 8px #ffb800',
        }}
      />
    </>
  );
}
