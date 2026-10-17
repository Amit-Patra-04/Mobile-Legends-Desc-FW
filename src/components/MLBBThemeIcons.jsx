import React from 'react';

/**
 * Authentic Mobile Legends: Bang Bang Vector Emblems & Icons
 * Faithful reproduction of official MLBB Roles, Lanes, and Combat Glyphs
 */

// 1. Official MLBB Role Emblems
export function MLBBClassIcon({ role = 'Fighter', className = 'w-5 h-5' }) {
  const normalized = (role || '').toLowerCase();

  if (normalized.includes('tank')) {
    // Heavy Fortress Bulwark Shield with Horned Crest
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2L5 6.5V14.5C5 21.5 9.8 27.8 16 30C22.2 27.8 27 21.5 27 14.5V6.5L16 2Z"
          fill="url(#tankGrad)"
          stroke="#fef08a"
          strokeWidth="1.2"
        />
        <path
          d="M16 5.5L8 9V14.5C8 19.8 11.5 24.8 16 26.8C20.5 24.8 24 19.8 24 14.5V9L16 5.5Z"
          stroke="#f59e0b"
          strokeWidth="1"
          fill="#1e293b"
          fillOpacity="0.6"
        />
        <path d="M16 9V23M11 15H21" stroke="#fef08a" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="tankGrad" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#0284c7" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalized.includes('fighter')) {
    // Crossed Battle Axes & Golden War Gauntlet
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" fill="#180d05" stroke="#f59e0b" strokeWidth="1" />
        {/* Crossed Blades */}
        <path d="M8 8L24 24M24 8L8 24" stroke="#fef08a" strokeWidth="2.2" strokeLinecap="round" />
        {/* Axe Heads */}
        <path
          d="M6 7C6 11 9 13 11 11L9 6C7 5 6 7 6 7Z"
          fill="#ea580c"
          stroke="#fef08a"
          strokeWidth="1"
        />
        <path
          d="M26 7C26 11 23 13 21 11L23 6C25 5 26 7 26 7Z"
          fill="#ea580c"
          stroke="#fef08a"
          strokeWidth="1"
        />
        <path
          d="M6 25C6 21 9 19 11 21L9 26C7 27 6 25 6 25Z"
          fill="#ea580c"
          stroke="#fef08a"
          strokeWidth="1"
        />
        <path
          d="M26 25C26 21 23 19 21 21L23 26C25 27 26 25 26 25Z"
          fill="#ea580c"
          stroke="#fef08a"
          strokeWidth="1"
        />
        <circle cx="16" cy="16" r="3" fill="#fbbf24" stroke="#ffffff" strokeWidth="1" />
      </svg>
    );
  }

  if (normalized.includes('assassin')) {
    // Dual Shadow Daggers / Swift Phantom Blades
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L28 16L16 30L4 16L16 2Z" fill="#180424" stroke="#c084fc" strokeWidth="1" />
        {/* Curved Daggers */}
        <path
          d="M16 4C14 10 11 14 6 16C11 18 14 22 16 28C18 22 21 18 26 16C21 14 18 10 16 4Z"
          fill="url(#assassinGrad)"
          stroke="#e879f9"
          strokeWidth="1.2"
        />
        <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
        <defs>
          <linearGradient id="assassinGrad" x1="16" y1="4" x2="16" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f43f5e" />
            <stop offset="0.5" stopColor="#a855f7" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalized.includes('mage')) {
    // Arcane Eye & Mystic Celestial Orb
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" fill="#031525" stroke="#38bdf8" strokeWidth="1" />
        <path
          d="M16 5L20 12L27 16L20 20L16 27L12 20L5 16L12 12L16 5Z"
          fill="url(#mageGrad)"
          stroke="#7dd3fc"
          strokeWidth="1"
        />
        <circle cx="16" cy="16" r="4.5" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#0284c7" />
        <defs>
          <linearGradient id="mageGrad" x1="16" y1="5" x2="16" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (normalized.includes('marksman')) {
    // Golden Recurve Bow & Arrow Crosshair
    return (
      <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13.5" fill="#181002" stroke="#f59e0b" strokeWidth="1" />
        {/* Bow Arch */}
        <path
          d="M7 16C7 10 11 6 16 6C18 6 22 9 24 16C22 23 18 26 16 26C11 26 7 22 7 16Z"
          stroke="#fbbf24"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Piercing Arrow */}
        <path d="M4 16H28" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 11L28 16L22 21" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2" fill="#ef4444" />
      </svg>
    );
  }

  // Support: Divine Healing Wings & Life Lotus
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="#022013" stroke="#10b981" strokeWidth="1" />
      {/* Radiant Wings */}
      <path
        d="M6 14C10 10 14 12 16 16C18 12 22 10 26 14C23 20 18 22 16 26C14 22 9 20 6 14Z"
        fill="url(#suppGrad)"
        stroke="#6ee7b7"
        strokeWidth="1.2"
      />
      <path d="M16 10V22M11 16H21" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <defs>
        <linearGradient id="suppGrad" x1="16" y1="10" x2="16" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#065f46" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Official MLBB Lane Badges
export function MLBBLaneIcon({ lane = 'Gold Lane', className = 'w-4 h-4' }) {
  const norm = (lane || '').toLowerCase();

  if (norm.includes('gold')) {
    // Gold Ingot / Wealth Sigil
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#2d1c02" stroke="#f59e0b" strokeWidth="1.2" />
        <path d="M12 5L17 9V15L12 19L7 15V9L12 5Z" fill="#fbbf24" stroke="#fef08a" strokeWidth="0.8" />
        <path d="M12 8V16M9.5 10.5L14.5 13.5M9.5 13.5L14.5 10.5" stroke="#78350f" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('exp')) {
    // Ancient Battle Crest / Mastery Tome
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#2a0808" stroke="#ef4444" strokeWidth="1.2" />
        <path d="M7 7L17 17M17 7L7 17" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" fill="#f59e0b" />
      </svg>
    );
  }

  if (norm.includes('mid')) {
    // Arcane Core / Nexus Monolith
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#04182e" stroke="#38bdf8" strokeWidth="1.2" />
        <path d="M12 4L18 12L12 20L6 12L12 4Z" fill="#0284c7" stroke="#bae6fd" strokeWidth="1" />
        <circle cx="12" cy="12" r="2" fill="#ffffff" />
      </svg>
    );
  }

  if (norm.includes('roam')) {
    // Winged Boots / Compass of Roaming
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#032014" stroke="#10b981" strokeWidth="1.2" />
        <path d="M12 5V19M5 12H19" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="#a7f3d0" strokeWidth="1" />
      </svg>
    );
  }

  // Jungle: Monster Fang & Hunter Machete
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#201103" stroke="#f97316" strokeWidth="1.2" />
      <path d="M9 7C11 10 13 11 16 11C13 13 11 16 9 17C10 14 9 12 7 11C10 10 10 8 9 7Z" fill="#fb923c" />
    </svg>
  );
}

// 3. Official MLBB Skill Combat Medallion (Circular Beveled Rune Button)
export function MLBBSkillMedallion({
  type = 'Skill 1',
  name = 'Ability',
  isSelected = false,
  onClick,
  className = '',
}) {
  const isUlt = (type || '').toLowerCase().includes('ult');
  const isPassive = (type || '').toLowerCase().includes('passive');

  // Type label letter
  let labelTag = '1';
  if (isPassive) labelTag = 'P';
  else if (isUlt) labelTag = 'ULT';
  else if ((type || '').includes('2')) labelTag = '2';
  else if ((type || '').includes('3')) labelTag = '3';

  return (
    <button
      onClick={onClick}
      className={`relative group rounded-full transition-all duration-300 p-[2px] cursor-pointer ${
        isUlt ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11 sm:w-13 sm:h-13'
      } ${className}`}
      title={`${name} (${type})`}
    >
      {/* Outer Metallic Beveled Border */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isSelected
            ? 'bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.85)] scale-108'
            : isUlt
            ? 'bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 border border-amber-300/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
            : 'bg-gradient-to-tr from-zinc-700 via-amber-500/50 to-zinc-600 hover:border-amber-400'
        }`}
      />

      {/* Inner Chamber Stone */}
      <div className="relative w-full h-full rounded-full bg-[#070b14] border border-black/80 flex items-center justify-center overflow-hidden">
        {/* Subtle Runic Glyph */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
          <div className="w-8 h-8 rounded-full border border-dashed border-amber-400/40 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Central Glyph */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span
            className={`font-mono font-black tracking-wider leading-none select-none ${
              isUlt
                ? 'text-xs sm:text-sm text-amber-300 drop-shadow-[0_0_8px_#f59e0b]'
                : isPassive
                ? 'text-[11px] sm:text-xs text-cyan-300 drop-shadow-[0_0_6px_#38bdf8]'
                : 'text-xs text-white'
            }`}
          >
            {labelTag}
          </span>
        </div>

        {/* Cooldown Ring Ambient Sweep */}
        {isSelected && (
          <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-pulse pointer-events-none" />
        )}
      </div>

      {/* Type Tag Below Medallion */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          className={`text-[8px] font-mono px-1.5 py-0.2 rounded-full uppercase tracking-widest font-bold border ${
            isUlt
              ? 'bg-amber-500/20 text-amber-300 border-amber-400/50 shadow-sm'
              : isPassive
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
              : 'bg-zinc-900/90 text-zinc-300 border-zinc-700'
          }`}
        >
          {isUlt ? 'ULT' : isPassive ? 'PASSIVE' : `SKILL ${labelTag}`}
        </span>
      </div>
    </button>
  );
}

// 4. Authentic MLBB 5-Axis Pentagon Stat Radar Chart
export function MLBBStatRadar({
  attributes = { offense: 80, durability: 50, abilityEffects: 70, difficulty: 40 },
  themeColor = '#38bdf8',
  className = '',
}) {
  // 5 Axes: Offense, Durability, Ability Effects, Mobility (estimated), Difficulty
  const offense = attributes.offense || 75;
  const durability = attributes.durability || 50;
  const ability = attributes.abilityEffects || 65;
  const difficulty = attributes.difficulty || 45;
  const mobility = Math.min(100, Math.round((offense * 0.6 + ability * 0.4)));

  const size = 180;
  const center = size / 2;
  const radius = center - 25;

  // Compute 5 polygon points (Angles: -90, -18, 54, 126, 198)
  const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);
  const values = [offense, durability, ability, mobility, difficulty].map((v) => Math.max(15, Math.min(100, v)) / 100);

  // Outer reference grid points
  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  const labels = ['OFFENSE', 'SURVIVE', 'EFFECTS', 'MOBILITY', 'DIFFICULTY'];

  const valuePoints = angles.map((angle, i) => {
    const r = radius * values[i];
    return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
  }).join(' ');

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Concentric Radar Grids */}
        {gridLevels.map((lvl, lIdx) => {
          const pts = angles.map((angle) => {
            const r = radius * lvl;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');
          return (
            <polygon
              key={lIdx}
              points={pts}
              fill={lIdx === gridLevels.length - 1 ? '#040915' : 'transparent'}
              stroke="#ffffff"
              strokeOpacity={0.1 + lIdx * 0.05}
              strokeWidth="0.8"
            />
          );
        })}

        {/* 5 Axis Spoke Lines */}
        {angles.map((angle, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(angle)}
            y2={center + radius * Math.sin(angle)}
            stroke="#ffffff"
            strokeOpacity="0.15"
            strokeWidth="0.8"
          />
        ))}

        {/* Dynamic Filled Stats Polygon */}
        <polygon
          points={valuePoints}
          fill={themeColor}
          fillOpacity="0.35"
          stroke={themeColor}
          strokeWidth="1.8"
          className="transition-all duration-700 ease-out filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
        />

        {/* Glowing Data Vertices */}
        {angles.map((angle, i) => {
          const r = radius * values[i];
          const cx = center + r * Math.cos(angle);
          const cy = center + r * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill="#ffffff"
              stroke={themeColor}
              strokeWidth="1.5"
              className="transition-all duration-700 ease-out"
            />
          );
        })}

        {/* Axis Labels */}
        {angles.map((angle, i) => {
          const r = radius + 15;
          const lx = center + r * Math.cos(angle);
          const ly = center + r * Math.sin(angle);
          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-zinc-400 font-mono text-[8px] font-bold tracking-wider uppercase select-none"
            >
              {labels[i]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
