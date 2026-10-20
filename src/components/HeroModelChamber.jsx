import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCw, RefreshCw, Layers, Sparkles, Box, Info, Shield, Sliders } from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import LiquidGlassCard from './LiquidGlassCard';

// 3D Holographic Totem and Runic Dais
function Hero3DHologram({ color, wireframe, heroName }) {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (outerRingRef.current) outerRingRef.current.rotation.y += delta * 0.4;
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += delta * 0.5;
      innerRingRef.current.rotation.z -= delta * 0.3;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.6;
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Levitating Core Crystal */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={coreRef} position={[0, 0.5, 0]}>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color={color}
            wireframe={wireframe}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Outer Runic Energy Ring */}
      <mesh ref={outerRingRef} position={[0, 0.5, 0]}>
        <torusGeometry args={[2.2, 0.05, 16, 64]} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          emissive={color}
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Inner Tilted Gyro Ring */}
      <mesh ref={innerRingRef} position={[0, 0.5, 0]}>
        <torusGeometry args={[1.7, 0.04, 16, 48]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe={wireframe}
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Floating Orbital Energy Orbs */}
      {[0, 1, 2, 3].map((idx) => {
        const angle = (idx * Math.PI) / 2;
        return (
          <Float key={idx} speed={3 + idx} rotationIntensity={0.5} floatIntensity={2}>
            <mesh position={[Math.cos(angle) * 2.8, 0.5 + Math.sin(angle * 2) * 0.5, Math.sin(angle) * 2.8]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          </Float>
        );
      })}

      {/* Runic Ground Dais Plinth */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[2.6, 2.9, 0.3, 32]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.9}
          roughness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ground Runic Glowing Ring */}
      <mesh position={[0, -1.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.4, 48]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// Particle field in 3D
function AmbientEmbers({ count = 120, color }) {
  const pointsRef = useRef();

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
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
        size={0.08}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroModelChamber({ initialHeroId }) {
  const [selectedHero, setSelectedHero] = useState(() => {
    return HEROES.find((h) => h.id === initialHeroId) || HEROES[0];
  });
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [accentColor, setAccentColor] = useState(selectedHero.themeColor);
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'artwork'
  const controlsRef = useRef();
  const sectionRef = useRef(null);
  const [isChamberVisible, setIsChamberVisible] = useState(false);

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

  useEffect(() => {
    if (initialHeroId) {
      const h = HEROES.find((item) => item.id === initialHeroId);
      if (h) {
        setSelectedHero(h);
        setAccentColor(h.themeColor);
      }
    }
  }, [initialHeroId]);

  const handleSelectHero = (hero) => {
    audioManager.playSkillFlare();
    setSelectedHero(hero);
    setAccentColor(hero.themeColor);
  };

  const handleResetCamera = () => {
    audioManager.playClick();
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <section ref={sectionRef} id="chamber" className="relative w-full py-24 bg-[#030509] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-amber-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-400">
                INTERACTIVE 3D ARTIFACT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              THE 3D HERO CHAMBER
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Orbit, inspect geometry, and examine character energy telemetry in an atmospheric real-time 3D WebGL chamber.
            </p>
          </div>

          {/* Quick Roster Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {HEROES.slice(0, 18).map((h) => (
              <button
                key={h.id}
                onClick={() => handleSelectHero(h)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${
                  selectedHero.id === h.id
                    ? 'bg-zinc-800 border-amber-400 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <img src={h.image} alt={h.name} className="w-5 h-5 rounded-md object-cover" />
                <span className="text-xs font-mono">{h.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Chamber Stage Container */}
        <LiquidGlassCard glowColor={accentColor} enableTilt={false} className="relative w-full h-[620px] rounded-3xl overflow-hidden flex flex-col justify-between">
          
          {/* Top Control Bar inside Chamber */}
          <div className="relative z-20 flex flex-wrap items-center justify-between p-4 sm:p-6 gap-3 bg-gradient-to-b from-[#030509]/90 to-transparent">
            {/* Hero Title & Telemetry Header */}
            <div>
              <div className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
                ACTIVE CHAMBER // {selectedHero.region}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{selectedHero.name}</span>
                <span className="text-xs font-mono font-normal text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  {selectedHero.title}
                </span>
              </h3>
            </div>

            {/* View Mode & Visual Toggles */}
            <div className="flex items-center gap-2">
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
                camera={{ position: [0, 1.2, 5.5], fov: 45 }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <color attach="background" args={['#030509']} />
                
                {/* Cinematic Studio Lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-4, 2, -3]} intensity={2.0} color={accentColor} />
                <pointLight position={[3, -2, 2]} intensity={1.0} color="#3b82f6" />

                <Suspense fallback={null}>
                  <Hero3DHologram
                    color={accentColor}
                    wireframe={wireframe}
                    heroName={selectedHero.name}
                  />
                  <AmbientEmbers color={accentColor} />
                </Suspense>

                <OrbitControls
                  ref={controlsRef}
                  autoRotate={autoRotate}
                  autoRotateSpeed={1.5}
                  enablePan={false}
                  minDistance={3.5}
                  maxDistance={8}
                  maxPolarAngle={Math.PI / 2 + 0.1}
                />
              </Canvas>
            ) : (
              /* High-Resolution Artwork Viewer Mode */
              <div className="relative w-full h-full flex items-center justify-center p-8 bg-zinc-950">
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="max-h-[85%] max-w-[85%] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-radial from-transparent to-[#030509] pointer-events-none" />
              </div>
            )}
          </div>

          {/* Bottom Telemetry HUD Overlay inside Chamber */}
          <div className="relative z-20 p-4 sm:p-6 bg-gradient-to-t from-[#030509]/95 via-[#030509]/70 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-auto">
            {/* Technical Specifications */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-zinc-800">
              <div>
                <span className="text-zinc-500">TRIANGLES:</span>{' '}
                <span className="text-white font-bold">{selectedHero.polyCount}</span>
              </div>
              <div className="hidden sm:block text-zinc-700">|</div>
              <div>
                <span className="text-zinc-500">SHADER:</span>{' '}
                <span className="text-amber-400">{wireframe ? 'WIREFRAME' : 'PBR HOLOGRAPHIC'}</span>
              </div>
              <div className="hidden sm:block text-zinc-700">|</div>
              <div>
                <span className="text-zinc-500">CONTROLS:</span>{' '}
                <span className="text-cyan-400">ORBIT / PINCH-ZOOM</span>
              </div>
            </div>

            {/* Color Accent Switcher */}
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-2 rounded-2xl border border-zinc-800">
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
                  className={`w-5 h-5 rounded-full border transition-all cursor-pointer ${
                    accentColor === c.hex ? 'scale-125 border-white shadow-md' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.label}
                />
              ))}
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </section>
  );
}
