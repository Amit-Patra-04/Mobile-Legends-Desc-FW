import React, { useState, useRef, Suspense, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import {
  RotateCw,
  RefreshCw,
  Layers,
  Sparkles,
  Box,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Dices,
  Search,
  Zap,
  Flame,
  Shield,
  Compass,
} from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import LiquidGlassCard from './LiquidGlassCard';
import SkillIcon from './SkillIcon';
import { cleanSkillDescription } from '../utils/skillUtils';

// ============================================================================
// 1. 3D HERO CHARACTER MONUMENT & HOLOGRAPHIC STANDEE
// Accurate high-resolution character artwork on a sculpted double-sided pedestal
// ============================================================================
function HeroCharacterStandee({ hero, color, wireframe }) {
  const [texture, setTexture] = useState(null);
  const standeeRef = useRef();

  useEffect(() => {
    if (!hero?.image) return;
    let active = true;
    const loader = new THREE.TextureLoader();
    loader.load(
      hero.image,
      (tex) => {
        if (!active) return;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        setTexture(tex);
      },
      undefined,
      (err) => {
        console.warn('Hero texture load fallback:', err);
      }
    );
    return () => {
      active = false;
    };
  }, [hero?.image]);

  useFrame((state) => {
    if (standeeRef.current) {
      // Gentle heroic suspension float
      standeeRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <group ref={standeeRef}>
      {/* Heavy Obsidian & Metallic Bezel Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.46, 3.46, 0.06]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.92}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Radiant Glowing Energy Bezel Border */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.52, 3.52, 0.04]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.65}
          wireframe={true}
        />
      </mesh>

      {/* Front Face: Authentic Official Hero Splash Artwork */}
      <mesh position={[0, 0, 0.035]}>
        <planeGeometry args={[2.38, 3.38]} />
        {texture ? (
          <meshStandardMaterial
            map={texture}
            roughness={0.25}
            metalness={0.08}
            wireframe={wireframe}
            side={THREE.FrontSide}
          />
        ) : (
          <meshStandardMaterial color="#0f172a" wireframe={wireframe} />
        )}
      </mesh>

      {/* Back Face: Hero Monogram Crest & Canon Sigil Plate */}
      <group position={[0, 0, -0.035]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <planeGeometry args={[2.38, 3.38]} />
          <meshStandardMaterial
            color="#070c18"
            metalness={0.88}
            roughness={0.25}
            wireframe={wireframe}
            side={THREE.FrontSide}
          />
        </mesh>

        {/* Back Frame Inner Runic Seals */}
        <mesh position={[0, 0.3, 0.01]}>
          <ringGeometry args={[0.65, 0.72, 36]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.3, 0.01]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
            wireframe={true}
          />
        </mesh>
      </group>
    </group>
  );
}

// ============================================================================
// 2. 3D ORBITAL IN-GAME SKILL SATELLITES
// The hero's 4 actual in-game circular skill icons orbiting in real-time 3D space
// ============================================================================
function OrbitingSkillSatellites({ abilities, color, activeSkillIdx, onSelectSkill }) {
  const groupRef = useRef();
  const [textures, setTextures] = useState({});

  useEffect(() => {
    if (!abilities) return;
    let active = true;
    const loader = new THREE.TextureLoader();
    abilities.forEach((ab, idx) => {
      if (ab.icon) {
        loader.load(ab.icon, (tex) => {
          if (!active) return;
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.generateMipmaps = true;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.magFilter = THREE.LinearFilter;
          setTextures((prev) => ({ ...prev, [idx]: tex }));
        });
      }
    });
    return () => {
      active = false;
    };
  }, [abilities]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.38;
    }
  });

  const count = abilities?.length || 0;
  const radius = count > 5 ? 2.6 : count > 4 ? 2.4 : 2.25;
  const coinRadius = count > 5 ? 0.28 : 0.34;

  return (
    <group ref={groupRef} position={[0, 0.45, 0]}>
      {Array.from({ length: count }).map((_, idx) => {
        const angle = (idx * Math.PI * 2) / count;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const isSelected = activeSkillIdx === idx;
        const currentAbility = abilities[idx] || {};
        const isUlt = currentAbility.type === 'Ultimate' || (!currentAbility.type && idx === count - 1);
        const isPassive = currentAbility.type === 'Passive' || idx === 0;
        const isEnhanced = currentAbility.type === 'Enhanced' || currentAbility.type === 'Morph' || currentAbility.type === 'Stance';
        const ringColor = isUlt ? '#f59e0b' : isPassive ? '#38bdf8' : isEnhanced ? '#a855f7' : color;
        const tex = textures[idx];

        return (
          <group
            key={idx}
            position={[x, Math.sin(idx * 1.5) * 0.22, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectSkill && onSelectSkill(idx);
            }}
          >
            <Float speed={2.5 + idx * 0.4} rotationIntensity={0.2} floatIntensity={0.5}>
              {/* Metallic Circular Satellite Coin Bezel */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[coinRadius, coinRadius, 0.045, 32]} />
                <meshStandardMaterial
                  color={ringColor}
                  emissive={ringColor}
                  emissiveIntensity={isSelected ? 0.9 : 0.35}
                  metalness={0.92}
                  roughness={0.2}
                />
              </mesh>

              {/* Front & Back Faces with Actual In-Game Skill Icon */}
              {tex && (
                <>
                  <mesh position={[0, 0, 0.024]}>
                    <circleGeometry args={[coinRadius * 0.88, 32]} />
                    <meshBasicMaterial map={tex} side={THREE.FrontSide} />
                  </mesh>
                  <mesh position={[0, 0, -0.024]} rotation={[0, Math.PI, 0]}>
                    <circleGeometry args={[coinRadius * 0.88, 32]} />
                    <meshBasicMaterial map={tex} side={THREE.FrontSide} />
                  </mesh>
                </>
              )}

              {/* Glowing Tactical Aura Halo */}
              <mesh>
                <ringGeometry args={[coinRadius * 1.12, coinRadius * 1.28, 32]} />
                <meshBasicMaterial
                  color={ringColor}
                  side={THREE.DoubleSide}
                  transparent
                  opacity={isSelected ? 0.95 : 0.55}
                />
              </mesh>
            </Float>
          </group>
        );
      })}
    </group>
  );
}

// ============================================================================
// 3. AUTHENTIC MLBB SUMMONER BATTLE DAIS & RUNIC PEDESTAL
// Concentric stepped platform with rotating arcane floor seals
// ============================================================================
function SummonerBattleDais({ color, wireframe }) {
  const outerRingRef = useRef();
  const innerRingRef = useRef();

  useFrame((state, delta) => {
    if (outerRingRef.current) outerRingRef.current.rotation.z += delta * 0.18;
    if (innerRingRef.current) innerRingRef.current.rotation.z -= delta * 0.26;
  });

  return (
    <group position={[0, -1.25, 0]}>
      {/* Tier 1 Primary Obsidian Base Plinth */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[2.85, 3.15, 0.3, 48]} />
        <meshStandardMaterial
          color="#0a0f1d"
          metalness={0.92}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Tier 2 Raised Golden Runic Platform */}
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[2.35, 2.5, 0.16, 48]} />
        <meshStandardMaterial
          color="#10192e"
          metalness={0.88}
          roughness={0.25}
          wireframe={wireframe}
        />
      </mesh>

      {/* Outer Runic Ground Ring */}
      <mesh
        ref={outerRingRef}
        position={[0, 0.15, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[2.45, 2.65, 48]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.85} />
      </mesh>

      {/* Inner Concentric Arcane Ring */}
      <mesh
        ref={innerRingRef}
        position={[0, 0.16, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.7, 1.85, 36]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.65} />
      </mesh>

      {/* Central Underglow Core Disc */}
      <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

// ============================================================================
// 4. AMBIENT VOLUMETRIC EMBERS & ENERGY PARTICLES
// ============================================================================
function AmbientEmbers({ count = 130, color }) {
  const pointsRef = useRef();

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ============================================================================
// MAIN 3D HERO CHAMBER COMPONENT
// ============================================================================
export default function HeroModelChamber({ initialHeroId }) {
  const [selectedHero, setSelectedHero] = useState(() => {
    return HEROES.find((h) => h.id === initialHeroId) || HEROES[0];
  });
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [accentColor, setAccentColor] = useState(selectedHero.themeColor);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'artwork'
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const controlsRef = useRef();
  const sectionRef = useRef(null);
  const [isChamberVisible, setIsChamberVisible] = useState(false);

  // Sync when initialHeroId changes from external launch buttons
  useEffect(() => {
    if (initialHeroId) {
      const h = HEROES.find((item) => item.id === initialHeroId);
      if (h) {
        setSelectedHero(h);
        setAccentColor(h.themeColor);
        setActiveSkillIdx(0);
      }
    }
  }, [initialHeroId]);

  // Viewport intersection observer to conserve GPU cycles
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsChamberVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsChamberVisible(entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Filtered heroes list across all 133 heroes
  const filteredHeroes = useMemo(() => {
    return HEROES.filter((h) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.title.toLowerCase().includes(q) ||
        h.region.toLowerCase().includes(q);
      const matchesRole =
        selectedRole === 'ALL' ||
        h.role.toLowerCase().includes(selectedRole.toLowerCase()) ||
        (h.secondaryRole && h.secondaryRole.toLowerCase().includes(selectedRole.toLowerCase()));
      return matchesSearch && matchesRole;
    });
  }, [searchQuery, selectedRole]);

  const handleSelectHero = (hero) => {
    audioManager.playSkillFlare();
    setSelectedHero(hero);
    setAccentColor(hero.themeColor);
    setActiveSkillIdx(0);
  };

  const handleNextHero = () => {
    audioManager.playClick();
    const currentIndex = HEROES.findIndex((h) => h.id === selectedHero.id);
    const nextIndex = (currentIndex + 1) % HEROES.length;
    handleSelectHero(HEROES[nextIndex]);
  };

  const handlePrevHero = () => {
    audioManager.playClick();
    const currentIndex = HEROES.findIndex((h) => h.id === selectedHero.id);
    const prevIndex = (currentIndex - 1 + HEROES.length) % HEROES.length;
    handleSelectHero(HEROES[prevIndex]);
  };

  const handleRandomHero = () => {
    audioManager.playSkillFlare();
    const randomIndex = Math.floor(Math.random() * HEROES.length);
    handleSelectHero(HEROES[randomIndex]);
  };

  const handleResetCamera = () => {
    audioManager.playClick();
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handlePlayVoice = () => {
    audioManager.playSkillFlare();
    setIsPlayingVoice(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = selectedHero.voiceQuote || selectedHero.loreQuote;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 0.95;
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingVoice(false), 2400);
    }
  };

  const activeSkill =
    selectedHero.abilities && selectedHero.abilities[activeSkillIdx]
      ? selectedHero.abilities[activeSkillIdx]
      : selectedHero.abilities?.[0];

  const roleCategories = ['ALL', 'TANK', 'FIGHTER', 'ASSASSIN', 'MAGE', 'MARKSMAN', 'SUPPORT'];

  return (
    <section ref={sectionRef} id="chamber" className="relative w-full py-24 bg-[#030509] text-white overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(5rem,14vw,15rem)] tracking-[0.14em] opacity-35 select-none pointer-events-none whitespace-nowrap z-0">
        CHAMBER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* ==============================================================
            SECTION HEADER & HERO ROSTER EXPLORER (ALL 133 HEROES)
            ============================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-amber-400 font-semibold">
                  [ 04 // WEBGL ARTIFACT ] • CANONICAL 3D REPOSITORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                <span className="editorial-italic text-amber-400 font-normal mr-2">The 3D</span>
                <span className="font-serif uppercase font-bold tracking-tight">Hero Chamber</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-2 max-w-xl leading-relaxed">
                Orbit, inspect high-resolution hero geometry, examine orbiting in-game skill satellites, and review authentic combat attributes for all 133 Mobile Legends champions.
              </p>
            </div>

            {/* Quick Hero Steppers & Random Summoner */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrevHero}
                className="px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-lg"
                title="Previous Champion"
              >
                <ChevronLeft className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">PREV</span>
              </button>

              <button
                onClick={handleRandomHero}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.25)]"
                title="Summon Random Champion"
              >
                <Dices className="w-4 h-4 text-amber-400" />
                <span>SUMMON RANDOM</span>
              </button>

              <button
                onClick={handleNextHero}
                className="px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-lg"
                title="Next Champion"
              >
                <span className="hidden sm:inline">NEXT</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Search Bar & Role Filter Pills across all 133 heroes */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 133 heroes by name, title, origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-black/60 border border-zinc-700/80 rounded-xl text-xs font-mono text-white placeholder-zinc-500 outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Role Categories */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
                {roleCategories.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      audioManager.playClick();
                      setSelectedRole(r);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      selectedRole === r
                        ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(234,179,8,0.4)]'
                        : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="text-[10px] font-mono text-zinc-500 whitespace-nowrap hidden lg:block">
                {filteredHeroes.length} OF {HEROES.length} CHAMPIONS
              </div>
            </div>

            {/* Scrollable Hero Carousel Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
              {filteredHeroes.map((h) => {
                const isSelected = selectedHero.id === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => handleSelectHero(h)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap group shrink-0 ${
                      isSelected
                        ? 'bg-zinc-800 border-amber-400 text-white shadow-[0_0_16px_rgba(234,179,8,0.35)] scale-102'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    <img
                      src={h.image}
                      alt={h.name}
                      className={`w-6 h-6 rounded-full object-cover border ${
                        isSelected ? 'border-amber-400 ring-1 ring-amber-400' : 'border-zinc-700'
                      }`}
                    />
                    <div className="text-left">
                      <div className="text-xs font-mono font-medium leading-tight text-white group-hover:text-amber-300">
                        {h.name}
                      </div>
                      <div className="text-[9px] font-mono text-zinc-500 leading-none">
                        {h.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==============================================================
            3D CHAMBER STAGE CONTAINER
            ============================================================== */}
        <LiquidGlassCard
          glowColor={accentColor}
          enableTilt={false}
          className="relative w-full h-[640px] sm:h-[680px] rounded-3xl overflow-hidden flex flex-col justify-between border border-white/[0.08] shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
        >
          {/* Top Control Bar inside Chamber */}
          <div className="relative z-20 flex flex-wrap items-center justify-between p-4 sm:p-6 gap-3 bg-gradient-to-b from-[#030509]/95 via-[#030509]/75 to-transparent">
            {/* Hero Title & Telemetry Header */}
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-0.5">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>ORIGIN: {selectedHero.region}</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">{selectedHero.faction}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <span>{selectedHero.name}</span>
                <span className="text-xs font-mono font-normal text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  {selectedHero.title}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 hidden md:inline">
                  {selectedHero.role} ({selectedHero.lane})
                </span>
              </h3>
            </div>

            {/* View Mode & Visual Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handlePlayVoice}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  isPlayingVoice
                    ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
                }`}
                title="Play Canonical Hero Voice Quote"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingVoice ? 'animate-bounce' : 'text-amber-400'}`} />
                <span>{isPlayingVoice ? 'SPEAKING' : 'VOICE QUOTE'}</span>
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setViewMode(viewMode === '3d' ? 'artwork' : '3d');
                }}
                className="px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{viewMode === '3d' ? '2.5D ARTWORK VIEW' : '3D HOLOGRAPHIC MODE'}</span>
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setAutoRotate(!autoRotate);
                }}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  autoRotate
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-zinc-900/90 border-zinc-700 text-zinc-400'
                }`}
                title="Toggle Auto-Rotation"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setWireframe(!wireframe);
                }}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  wireframe
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-zinc-900/90 border-zinc-700 text-zinc-400'
                }`}
                title="Toggle Wireframe Shading"
              >
                <Box className="w-4 h-4" />
              </button>

              <button
                onClick={handleResetCamera}
                className="p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
                title="Reset Camera Angle"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Stage Viewport */}
          <div className="absolute inset-0 z-10">
            {viewMode === '3d' ? (
              <Canvas
                frameloop={isChamberVisible ? 'always' : 'never'}
                camera={{ position: [0, 0.9, 5.2], fov: 46 }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <color attach="background" args={['#030509']} />

                {/* Cinematic Studio Lighting */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[4, 8, 5]} intensity={1.8} color="#ffffff" />
                <directionalLight position={[-4, 4, -3]} intensity={1.2} color={accentColor} />
                <pointLight position={[0, -1, 0]} intensity={1.5} color={accentColor} distance={6} />
                <spotLight position={[0, 6, 0]} intensity={2.0} angle={0.6} penumbra={0.8} color="#ffffff" />

                <Suspense fallback={null}>
                  <group position={[0, -0.3, 0]}>
                    {/* Accurate 3D Hero Character Standee */}
                    <HeroCharacterStandee
                      hero={selectedHero}
                      color={accentColor}
                      wireframe={wireframe}
                    />

                    {/* Orbiting In-Game Circular Skill Satellites */}
                    <OrbitingSkillSatellites
                      abilities={selectedHero.abilities}
                      color={accentColor}
                      activeSkillIdx={activeSkillIdx}
                      onSelectSkill={(idx) => {
                        audioManager.playSkillFlare();
                        setActiveSkillIdx(idx);
                      }}
                    />

                    {/* Concentric MLBB Summoner Battle Dais */}
                    <SummonerBattleDais
                      color={accentColor}
                      wireframe={wireframe}
                    />

                    {/* Ambient Volumetric Embers */}
                    <AmbientEmbers color={accentColor} count={130} />
                  </group>
                </Suspense>

                <OrbitControls
                  ref={controlsRef}
                  autoRotate={autoRotate}
                  autoRotateSpeed={1.3}
                  enablePan={false}
                  minDistance={2.8}
                  maxDistance={7.5}
                  maxPolarAngle={Math.PI / 2 + 0.05}
                  minPolarAngle={Math.PI / 6}
                />
              </Canvas>
            ) : (
              /* High-Resolution Artwork Viewer Mode */
              <div className="relative w-full h-full flex items-center justify-center p-8 bg-zinc-950">
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="max-h-[82%] max-w-[82%] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-radial from-transparent to-[#030509] pointer-events-none" />
              </div>
            )}
          </div>

          {/* Bottom Telemetry HUD Overlay & Skill Arsenal Strip inside Chamber */}
          <div className="relative z-20 p-4 sm:p-6 bg-gradient-to-t from-[#030509]/95 via-[#030509]/80 to-transparent flex flex-col gap-3 pointer-events-auto">
            
            {/* Interactive Hero Skill Strip in Chamber */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-black/70 backdrop-blur-md px-4 py-3 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  3D ARSENAL SATELLITES:
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  {(selectedHero.abilities || []).map((ab, idx) => (
                    <SkillIcon
                      key={ab.id || idx}
                      ability={ab}
                      index={idx}
                      size={(selectedHero.abilities?.length || 0) > 5 ? 'xs' : 'sm'}
                      isSelected={activeSkillIdx === idx}
                      showBadge={true}
                      onClick={() => {
                        audioManager.playSkillFlare();
                        setActiveSkillIdx(idx);
                      }}
                      title={`${ab.type || 'Skill'}: ${ab.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Skill Telemetry readout */}
              {activeSkill && (
                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="text-white font-bold flex items-center gap-1.5 flex-wrap">
                    <span className="text-amber-400 uppercase font-semibold">[{activeSkill.type}]</span>
                    {activeSkill.form && (
                      <span className="text-cyan-400 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                        {activeSkill.form}
                      </span>
                    )}
                    <span>{activeSkill.name}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-zinc-400 text-[11px]">
                    <span>CD: {activeSkill.cooldown || 'N/A'}</span>
                    <span>•</span>
                    <span>Cost: {activeSkill.cost || 'None'}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Row: Technical Metrics and Energy Lighting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Technical Specifications */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-zinc-800">
                <div>
                  <span className="text-zinc-500">CHAMPION:</span>{' '}
                  <span className="text-white font-bold">{selectedHero.name}</span>
                </div>
                <div className="hidden sm:block text-zinc-700">|</div>
                <div>
                  <span className="text-zinc-500">SHADER:</span>{' '}
                  <span className="text-amber-400">{wireframe ? 'WIREFRAME MESH' : 'PBR HOLOGRAPHIC'}</span>
                </div>
                <div className="hidden sm:block text-zinc-700">|</div>
                <div>
                  <span className="text-zinc-500">CONTROLS:</span>{' '}
                  <span className="text-cyan-400">ORBIT 360° / PINCH ZOOM</span>
                </div>
              </div>

              {/* Color Accent Switcher */}
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-zinc-800 shrink-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">
                  ENERGY LIGHTING:
                </span>
                {[
                  { hex: selectedHero.themeColor, label: 'Hero Theme' },
                  { hex: '#f59e0b', label: 'Imperial Gold' },
                  { hex: '#06b6d4', label: 'Cadia Cyan' },
                  { hex: '#ec4899', label: 'Sakura Violet' },
                  { hex: '#ef4444', label: 'Abyssal Red' },
                ].map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      audioManager.playClick();
                      setAccentColor(c.hex);
                    }}
                    className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                      accentColor === c.hex ? 'scale-125 border-white shadow-md' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
