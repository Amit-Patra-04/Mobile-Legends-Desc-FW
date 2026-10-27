import React, { useState } from 'react';

/**
 * Authentic Mobile Legends: Bang Bang Circular In-Game Skill Frame
 * Displays the exact circular skill icon with metallic gold/bronze bezel,
 * in-game tactical tier pip (P, I, II, ULT), and glowing combat halo.
 */
export default function SkillIcon({
  ability,
  index = 0,
  size = 'md',
  isSelected = false,
  showBadge = true,
  onClick,
  className = '',
  title,
}) {
  const [imageError, setImageError] = useState(false);

  const typeLower = (ability?.type || '').toLowerCase();
  const isPassive = typeLower.includes('passive') || (index === 0 && !typeLower.includes('skill') && !typeLower.includes('enhanced'));
  const isUltimate = typeLower.includes('ultimate');

  const sizeClasses = {
    xs: 'w-7 h-7 p-[1.5px]',
    sm: 'w-9 h-9 p-[1.5px]',
    md: 'w-11 h-11 p-[2px]',
    lg: 'w-14 h-14 p-[2.5px]',
    xl: 'w-16 h-16 p-[3px]',
  };

  const badgeSizeClasses = {
    xs: 'text-[6px] px-1 -bottom-0.5 -right-0.5',
    sm: 'text-[7px] px-1 py-0.2 -bottom-1 -right-0.5',
    md: 'text-[7.5px] px-1.5 py-0.2 -bottom-1 -right-0.5',
    lg: 'text-[8.5px] px-1.5 py-0.5 -bottom-1 -right-0.5',
    xl: 'text-[9px] px-2 py-0.5 -bottom-1.5 -right-0.5',
  };

  // Tactical badge labels
  let badgeLabel = 'S';
  if (isPassive) {
    badgeLabel = 'P';
  } else if (isUltimate) {
    badgeLabel = 'ULT';
  } else if (typeLower.includes('skill 1') || typeLower.includes('enhanced 1')) {
    badgeLabel = 'I';
  } else if (typeLower.includes('skill 2') || typeLower.includes('enhanced 2')) {
    badgeLabel = 'II';
  } else if (typeLower.includes('skill 3') || typeLower.includes('enhanced 3')) {
    badgeLabel = 'III';
  } else if (typeLower.includes('skill 4')) {
    badgeLabel = 'IV';
  } else if (typeLower.includes('special')) {
    badgeLabel = 'SP';
  } else {
    badgeLabel = index === 0 ? 'P' : `S${index}`;
  }

  // MLBB authentic circular bezel gradient:
  // Ultimate: Radiant Solar Gold Sunburst
  // Passive: Celestial Arcane Ring
  // Skills 1, 2, 3, 4: Forged Metallic Bronze-Gold
  const bezelGradient = isUltimate
    ? 'bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#78350f]'
    : isPassive
    ? 'bg-gradient-to-b from-[#38bdf8] via-[#1e3a8a] to-[#0f172a]'
    : typeLower.includes('enhanced')
    ? 'bg-gradient-to-b from-[#e879f9] via-[#a855f7] to-[#3b0764]'
    : 'bg-gradient-to-b from-[#f3d288] via-[#855a1e] to-[#261908]';

  const glowShadow = isSelected
    ? 'ring-2 ring-[#f3d288] shadow-[0_0_18px_rgba(243,210,136,0.7)] scale-110'
    : isUltimate
    ? 'shadow-[0_0_10px_rgba(245,158,11,0.35)] hover:shadow-[0_0_16px_rgba(245,158,11,0.6)]'
    : 'shadow-md hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]';

  const frameClass = `
    relative rounded-full aspect-square shrink-0 select-none transition-all duration-300
    ${sizeClasses[size] || sizeClasses.md}
    ${bezelGradient}
    ${glowShadow}
    ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''}
    ${className}
  `;

  return (
    <div
      onClick={onClick}
      className={frameClass}
      title={title || `${ability?.type || 'Skill'}: ${ability?.name || ''}`}
    >
      {/* Recessed Circular Core with Inset Shadow */}
      <div className="w-full h-full rounded-full overflow-hidden bg-black/95 flex items-center justify-center relative shadow-[inset_0_0_8px_rgba(0,0,0,0.85)]">
        {ability?.icon && !imageError ? (
          <img
            src={ability.icon}
            alt={ability.name || 'Hero Skill'}
            className="w-full h-full object-cover rounded-full pointer-events-none"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-amber-400 font-serif font-bold text-xs">
            {isPassive ? '✦' : isUltimate ? 'Ω' : '⚔'}
          </span>
        )}
      </div>

      {/* In-Game Action Bezel Pip (P, I, II, ULT) */}
      {showBadge && (
        <span
          className={`
            absolute rounded-full font-mono font-extrabold uppercase tracking-tighter border shadow-lg pointer-events-none
            ${badgeSizeClasses[size] || badgeSizeClasses.md}
            ${
              isUltimate
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black border-yellow-200 shadow-[0_0_6px_rgba(234,179,8,0.5)]'
                : isPassive
                ? 'bg-[#0f172a] text-[#38bdf8] border-[#38bdf8]/40'
                : 'bg-[#0f172a] text-[#f3d288] border-white/20'
            }
          `}
        >
          {badgeLabel}
        </span>
      )}
    </div>
  );
}
