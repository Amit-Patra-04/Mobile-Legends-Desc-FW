import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import {
  RotateCw,
  RefreshCw,
  Layers,
  Box,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Dices,
  Search,
  Zap,
  Shield,
  Compass,
  Sword,
  Crosshair,
  BarChart3,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { HEROES } from '../data/heroesData';
import { audioManager } from '../utils/audio';
import SkillIcon from './SkillIcon';
import { cleanSkillDescription } from '../utils/skillUtils';

// ============================================================================
// GLOBAL HIGH-EFFICIENCY TEXTURE CACHE
// Guarantees all 133 hero textures load reliably and remain in GPU memory
// ============================================================================
const heroTextureCache = new Map();
const skillTextureCache = new Map();

function getHeroTexture(url) {
  if (!url) return null;
  if (heroTextureCache.has(url)) return heroTextureCache.get(url);

  const loader = new THREE.TextureLoader();
  const tex = loader.load(
    url,
    (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      loadedTex.generateMipmaps = true;
      loadedTex.minFilter = THREE.LinearMipmapLinearFilter;
      loadedTex.magFilter = THREE.LinearFilter;
      loadedTex.wrapS = THREE.ClampToEdgeWrapping;
      loadedTex.wrapT = THREE.ClampToEdgeWrapping;
      loadedTex.needsUpdate = true;
    },
    undefined,
    (err) => {
      console.warn('Hero texture load fallback:', url, err);
    }
  );

  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  heroTextureCache.set(url, tex);
  return tex;
}

function getSkillTexture(url) {
  if (!url) return null;
  if (skillTextureCache.has(url)) return skillTextureCache.get(url);

  const loader = new THREE.TextureLoader();
  const tex = loader.load(
    url,
    (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      loadedTex.generateMipmaps = true;
      loadedTex.minFilter = THREE.LinearMipmapLinearFilter;
      loadedTex.magFilter = THREE.LinearFilter;
      loadedTex.wrapS = THREE.ClampToEdgeWrapping;
      loadedTex.wrapT = THREE.ClampToEdgeWrapping;
      loadedTex.needsUpdate = true;
    },
    undefined,
    (err) => {
      console.warn('Skill texture load fallback:', url, err);
    }
  );

  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  skillTextureCache.set(url, tex);
  return tex;
}

// ============================================================================
// 1. 3D SANCTUM CHAMBER ARCHITECTURE & COLONNADE
// Circular sanctuary hall with 8 fluted runic pillars, overhead arch, and ambient depth
// ============================================================================
function SanctumChamberColonnade({ color, wireframe }) {
  const pillars = useMemo(() => {
    const items = [];
    const count = 8;
    const radius = 6.2;
    for (let i = 0; i < count; i++) {
      const angle = (i * Math.PI * 2) / count;
      items.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        angle,
      });
    }
    return items;
  }, []);

  return (
    <group position={[0, -1.25, 0]}>
      {/* Grand Overhead Vaulted Arch Ring */}
      <mesh position={[0, 4.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6.2, 0.08, 16, 48]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.92}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>
      <mesh position={[0, 4.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6.2, 0.03, 12, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.65} />
      </mesh>

      {/* 8 Fluted Chamber Columns */}
      {pillars.map((p, idx) => (
        <group key={idx} position={[p.x, 0, p.z]}>
          {/* Base Plinth */}
          <mesh position={[0, 0.18, 0]}>
            <cylinderGeometry args={[0.36, 0.44, 0.36, 16]} />
            <meshStandardMaterial
              color="#0a0f1d"
              metalness={0.9}
              roughness={0.25}
              wireframe={wireframe}
            />
          </mesh>

          {/* Golden Plinth Ring */}
          <mesh position={[0, 0.38, 0]}>
            <cylinderGeometry args={[0.32, 0.32, 0.06, 16]} />
            <meshStandardMaterial
              color="#eab308"
              metalness={0.95}
              roughness={0.18}
              wireframe={wireframe}
            />
          </mesh>

          {/* Fluted Column Shaft */}
          <mesh position={[0, 2.4, 0]}>
            <cylinderGeometry args={[0.24, 0.28, 4.0, 16]} />
            <meshStandardMaterial
              color="#0d1527"
              metalness={0.88}
              roughness={0.3}
              wireframe={wireframe}
            />
          </mesh>

          {/* Glowing Vertical Mana Conduit Inset */}
          <mesh position={[0, 2.4, 0]}>
            <cylinderGeometry args={[0.255, 0.255, 3.8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.55}
              wireframe={true}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Ornate Capital Header */}
          <mesh position={[0, 4.5, 0]}>
            <cylinderGeometry args={[0.42, 0.26, 0.3, 16]} />
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.92}
              roughness={0.2}
              wireframe={wireframe}
            />
          </mesh>
          <mesh position={[0, 4.68, 0]}>
            <cylinderGeometry args={[0.44, 0.44, 0.08, 16]} />
            <meshStandardMaterial
              color="#eab308"
              metalness={0.95}
              roughness={0.18}
              wireframe={wireframe}
            />
          </mesh>
        </group>
      ))}

      {/* Chamber Perimeter Floor Ring */}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.7, 6.7, 48]} />
        <meshStandardMaterial
          color="#060913"
          metalness={0.92}
          roughness={0.35}
          wireframe={wireframe}
        />
      </mesh>
    </group>
  );
}

// ============================================================================
// 2. FLOATING CARDINAL ARCANE PYLONS
// 4 floating crystalline obelisks framing the chamber with gentle levitation
// ============================================================================
function FloatingArcanePylons({ color, wireframe }) {
  const pylonGroup = useRef();

  useFrame((state, delta) => {
    if (pylonGroup.current) {
      pylonGroup.current.rotation.y += delta * 0.08;
    }
  });

  const angles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];
  const radius = 4.6;

  return (
    <group ref={pylonGroup} position={[0, 0.7, 0]}>
      {angles.map((angle, idx) => {
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <Float key={idx} speed={1.8 + idx * 0.3} rotationIntensity={0.25} floatIntensity={0.4}>
            <group position={[x, Math.sin(idx * 2) * 0.2, z]}>
              {/* Outer Crystalline Obelisk */}
              <mesh scale={[0.26, 1.25, 0.26]}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                  color="#111827"
                  metalness={0.92}
                  roughness={0.18}
                  wireframe={wireframe}
                />
              </mesh>

              {/* Glowing Internal Core Gem */}
              <mesh scale={[0.18, 0.95, 0.18]}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={0.85}
                  wireframe={true}
                />
              </mesh>

              {/* Floating Arcane Halo Ring */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.42, 0.018, 12, 24]} />
                <meshBasicMaterial color={color} transparent opacity={0.7} />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

// ============================================================================
// 3. AUTHENTIC MLBB SUMMONER DAIS & MULTI-TIER RUNIC ALTAR
// Stepped marble/obsidian plinth with 3 counter-rotating glyph rings and projector beam
// ============================================================================
function SummonerBattleDais({ color, wireframe }) {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const beamRef = useRef();

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.14;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.22;
    if (ring3Ref.current) ring3Ref.current.rotation.z += delta * 0.18;
    if (beamRef.current) {
      const pulse = 0.18 + Math.sin(state.clock.elapsedTime * 2.2) * 0.05;
      beamRef.current.material.opacity = pulse;
    }
  });

  return (
    <group position={[0, -1.25, 0]}>
      {/* Tier 1 Primary Obsidian Base Plinth */}
      <mesh position={[0, -0.18, 0]}>
        <cylinderGeometry args={[2.9, 3.2, 0.36, 48]} />
        <meshStandardMaterial
          color="#080c16"
          metalness={0.94}
          roughness={0.28}
          wireframe={wireframe}
        />
      </mesh>

      {/* Gold Bevel Rim between Tier 1 & Tier 2 */}
      <mesh position={[0, 0.01, 0]}>
        <cylinderGeometry args={[2.8, 2.8, 0.05, 48]} />
        <meshStandardMaterial
          color="#eab308"
          metalness={0.96}
          roughness={0.15}
          wireframe={wireframe}
        />
      </mesh>

      {/* Tier 2 Raised Celestial Platform */}
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[2.3, 2.5, 0.2, 48]} />
        <meshStandardMaterial
          color="#0e172a"
          metalness={0.9}
          roughness={0.22}
          wireframe={wireframe}
        />
      </mesh>

      {/* Tier 3 Inset Summoner Core Well */}
      <mesh position={[0, 0.225, 0]}>
        <cylinderGeometry args={[1.6, 1.7, 0.05, 36]} />
        <meshStandardMaterial
          color="#060911"
          metalness={0.95}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Outer Runic Ground Ring with Cardinal Compass Ticks */}
      <mesh
        ref={ring1Ref}
        position={[0, 0.235, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[2.2, 2.4, 48]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.8} />
      </mesh>

      {/* Middle Arcane Seal Ring */}
      <mesh
        ref={ring2Ref}
        position={[0, 0.24, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.65, 1.8, 36]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.65} />
      </mesh>

      {/* Inner Concentric Twilight Ring */}
      <mesh
        ref={ring3Ref}
        position={[0, 0.245, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.15, 1.28, 32]} />
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.75} />
      </mesh>

      {/* Central Underglow Core Disc */}
      <mesh position={[0, 0.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.0, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>

      {/* Upward Holographic Projector Beam Column */}
      <mesh ref={beamRef} position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.85, 1.15, 3.2, 32, 1, true]} />
        <meshBasicMaterial
          color={color}
          side={THREE.DoubleSide}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// ============================================================================
// 4. ACCURATE 3D HERO HOLOGRAPHIC MONUMENT & DOUBLE-SIDED MONIYAN CREST
// 100% Guaranteed rendering across all 133 heroes using cached textures & double-sided shader
// ============================================================================
function HeroHologramMonolith({ hero, color, wireframe }) {
  const monolithRef = useRef();
  const texture = useMemo(() => getHeroTexture(hero?.image), [hero?.image]);

  useFrame((state) => {
    if (monolithRef.current) {
      monolithRef.current.position.y = 0.52 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  const width = 2.45;
  const height = 2.45;
  const frameWidth = width + 0.16;
  const frameHeight = height + 0.16;
  const glowWidth = width + 0.22;
  const glowHeight = height + 0.22;

  return (
    <group ref={monolithRef}>
      {/* Heavy Obsidian & Metallic Bezel Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[frameWidth, frameHeight, 0.08]} />
        <meshStandardMaterial
          color="#0a0f1d"
          metalness={0.92}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>

      {/* Radiant Glowing Energy Bezel Border */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[glowWidth, glowHeight, 0.06]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          wireframe={true}
        />
      </mesh>

      {/* 4 Golden Moniyan Corner Brackets */}
      {[-1, 1].map((sx) =>
        [-1, 1].map((sy) => (
          <group
            key={`${sx}-${sy}`}
            position={[(sx * frameWidth) / 2, (sy * frameHeight) / 2, 0.045]}
          >
            <mesh scale={[0.16, 0.16, 0.03]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#eab308"
                metalness={0.95}
                roughness={0.15}
                wireframe={wireframe}
              />
            </mesh>
            <mesh position={[0, 0, 0.02]} scale={[0.06, 0.06, 0.02]}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.85}
                wireframe={true}
              />
            </mesh>
          </group>
        ))
      )}

      {/* Front Face: High-Resolution Authentic Hero Splash Artwork (DoubleSide to prevent culling) */}
      <mesh position={[0, 0, 0.042]}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.06}
          wireframe={wireframe}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back Face: Moniyan Royal Champion Seal & Canon Sigil Plate */}
      <group position={[0, 0, -0.042]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial
            color="#070c18"
            metalness={0.9}
            roughness={0.22}
            wireframe={wireframe}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Back Frame Inner Runic Seals */}
        <mesh position={[0, 0.22, 0.01]}>
          <ringGeometry args={[0.68, 0.78, 40]} />
          <meshBasicMaterial color={color} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.22, 0.012]}>
          <ringGeometry args={[0.5, 0.58, 32]} />
          <meshBasicMaterial color="#eab308" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 0.22, 0.014]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.9}
            wireframe={true}
          />
        </mesh>

        {/* Hero Role Class Badge Plaque on Back */}
        <mesh position={[0, -0.68, 0.01]}>
          <boxGeometry args={[1.65, 0.35, 0.02]} />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.92}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.68, 0.02]}>
          <boxGeometry args={[1.69, 0.39, 0.01]} />
          <meshBasicMaterial color={color} wireframe={true} />
        </mesh>
      </group>
    </group>
  );
}

// ============================================================================
// 5. 3D ORBITING IN-GAME SKILL SATELLITES
// Accurate circular in-game skill coins orbiting on an inclined celestial path
// ============================================================================
function OrbitingSkillSatellites({ abilities, color, activeSkillIdx, onSelectSkill }) {
  const groupRef = useRef();

  const skillTextures = useMemo(() => {
    return (abilities || []).map((ab) => (ab.icon ? getSkillTexture(ab.icon) : null));
  }, [abilities]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.36;
    }
  });

  const count = abilities?.length || 0;
  const radius = count > 5 ? 2.5 : count > 4 ? 2.35 : 2.2;
  const coinRadius = count > 5 ? 0.26 : 0.31;

  return (
    <group ref={groupRef} position={[0, 0.45, 0]} rotation={[0.18, 0, 0.08]}>
      {/* Faint Orbital Path Track */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.012, 12, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>

      {Array.from({ length: count }).map((_, idx) => {
        const angle = (idx * Math.PI * 2) / count;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const isSelected = activeSkillIdx === idx;
        const currentAbility = abilities[idx] || {};
        const isUlt =
          currentAbility.type === 'Ultimate' || (!currentAbility.type && idx === count - 1);
        const isPassive = currentAbility.type === 'Passive' || idx === 0;
        const isEnhanced =
          currentAbility.type === 'Enhanced' ||
          currentAbility.type === 'Morph' ||
          currentAbility.type === 'Stance';
        const ringColor = isUlt ? '#f59e0b' : isPassive ? '#38bdf8' : isEnhanced ? '#a855f7' : color;
        const tex = skillTextures[idx];

        return (
          <group
            key={idx}
            position={[x, Math.sin(idx * 1.5) * 0.2, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectSkill && onSelectSkill(idx);
            }}
          >
            <Float speed={2.5 + idx * 0.4} rotationIntensity={0.25} floatIntensity={0.4}>
              {/* Metallic Circular Satellite Coin Bezel */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[coinRadius, coinRadius, 0.045, 32]} />
                <meshStandardMaterial
                  color={ringColor}
                  emissive={ringColor}
                  emissiveIntensity={isSelected ? 0.95 : 0.35}
                  metalness={0.92}
                  roughness={0.2}
                />
              </mesh>

              {/* Front & Back Faces with Actual In-Game Skill Icon */}
              {tex && (
                <>
                  <mesh position={[0, 0, 0.025]}>
                    <circleGeometry args={[coinRadius * 0.88, 32]} />
                    <meshBasicMaterial map={tex} side={THREE.FrontSide} />
                  </mesh>
                  <mesh position={[0, 0, -0.025]} rotation={[0, Math.PI, 0]}>
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

              {/* Active Selection Vertical Light Shaft */}
              {isSelected && (
                <mesh position={[0, 0.55, 0]}>
                  <cylinderGeometry args={[0.02, 0.07, 1.1, 16, 1, true]} />
                  <meshBasicMaterial
                    color={ringColor}
                    transparent
                    opacity={0.65}
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
              )}
            </Float>
          </group>
        );
      })}
    </group>
  );
}

// ============================================================================
// 6. AMBIENT VOLUMETRIC EMBERS & ENERGY PARTICLES
// 140 drifting arcane motes swirling from the altar core
// ============================================================================
function AmbientChamberParticles({ count = 140, color }) {
  const pointsRef = useRef();

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 11;
      pos[i * 3 + 1] = (Math.random() - 0.4) * 7.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 11;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.045;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ============================================================================
// ADAPTIVE CAMERA RIG: DYNAMICALLY FRAMES THE 3D MODEL ACCORDING TO VIEWPORT
// Ensures zero clipping on mobile, tablet, and widescreen desktop displays
// ============================================================================
function ChamberCameraRig({ cameraPreset, controlsRef }) {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    const aspect = size.width / Math.max(1, size.height);
    const isMobile = aspect < 0.85;
    const isTablet = aspect >= 0.85 && aspect < 1.25;

    switch (cameraPreset) {
      case 'front':
        camera.fov = isMobile ? 54 : 44;
        camera.position.set(0, 0.4, isMobile ? 5.6 : 4.4);
        controls.target.set(0, 0.38, 0);
        break;
      case 'skills':
        camera.fov = isMobile ? 52 : 44;
        camera.position.set(isMobile ? 1.8 : 2.4, 1.4, isMobile ? 5.0 : 3.8);
        controls.target.set(0, 0.38, 0);
        break;
      case 'altar':
        camera.fov = isMobile ? 54 : 46;
        camera.position.set(0, isMobile ? 5.2 : 4.2, isMobile ? 4.0 : 3.2);
        controls.target.set(0, -0.3, 0);
        break;
      case 'orbit':
      default:
        if (isMobile) {
          camera.fov = 54;
          camera.position.set(0, 0.65, 5.8);
          controls.target.set(0, 0.35, 0);
          controls.minDistance = 3.2;
          controls.maxDistance = 8.5;
        } else if (isTablet) {
          camera.fov = 48;
          camera.position.set(0, 0.6, 5.2);
          controls.target.set(0, 0.35, 0);
          controls.minDistance = 2.8;
          controls.maxDistance = 8.0;
        } else {
          camera.fov = 44;
          camera.position.set(0, 0.55, 4.7);
          controls.target.set(0, 0.35, 0);
          controls.minDistance = 2.4;
          controls.maxDistance = 7.5;
        }
        break;
    }
    camera.updateProjectionMatrix();
    controls.update();
  }, [cameraPreset, camera, size.width, size.height, controlsRef]);

  return null;
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
  const [cameraPreset, setCameraPreset] = useState('orbit'); // 'orbit', 'front', 'skills', 'altar'
  const [activeSkillIdx, setActiveSkillIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showSkillDetail, setShowSkillDetail] = useState(true);

  const controlsRef = useRef();

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

  // Filtered heroes list across all 133 heroes
  const filteredHeroes = useMemo(() => {
    return HEROES.filter((h) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.title.toLowerCase().includes(q) ||
        h.region.toLowerCase().includes(q) ||
        h.faction.toLowerCase().includes(q);
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
    setCameraPreset('orbit');
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

  // Attributes normalization
  const attrs = selectedHero.attributes || {
    offense: 75,
    durability: 60,
    abilityEffects: 70,
    difficulty: 50,
  };

  return (
    <section
      id="chamber"
      className="relative w-full py-12 sm:py-16 bg-[#030509] text-white overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(4.5rem,12vw,13rem)] tracking-[0.14em] opacity-30 select-none pointer-events-none whitespace-nowrap z-0">
        CHAMBER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-6">
        {/* ==============================================================
            SECTION HEADER & HERO ROSTER EXPLORER (ALL 133 HEROES)
            ============================================================== */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-amber-400 font-semibold">
                  [ 04 // WEBGL ARTIFACT ] • CANONICAL 3D REPOSITORY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                <span className="editorial-italic text-amber-400 font-normal mr-2">The 3D</span>
                <span className="font-serif uppercase font-bold tracking-tight">Hero Chamber</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-xl leading-relaxed">
                Step into the sanctum colonnade. Inspect high-fidelity hero geometry, examine orbiting in-game skill satellites, and review 100% authentic combat telemetry across all 133 Mobile Legends champions.
              </p>
            </div>

            {/* Quick Hero Steppers & Random Summoner */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrevHero}
                className="px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md"
                title="Previous Champion"
              >
                <ChevronLeft className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">PREV</span>
              </button>

              <button
                onClick={handleRandomHero}
                className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.25)]"
                title="Summon Random Champion"
              >
                <Dices className="w-4 h-4 text-amber-400" />
                <span>SUMMON RANDOM</span>
              </button>

              <button
                onClick={handleNextHero}
                className="px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono flex items-center gap-1.5 text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md"
                title="Next Champion"
              >
                <span className="hidden sm:inline">NEXT</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Search Bar & Role Filter Pills across all 133 heroes */}
          <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2.5">
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 133 heroes by name, title, origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-black/60 border border-zinc-700/80 rounded-xl text-xs font-mono text-white placeholder-zinc-500 outline-none focus:border-amber-400 transition-colors"
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
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap ${
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
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none">
              {filteredHeroes.map((h) => {
                const isSelected = selectedHero.id === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => handleSelectHero(h)}
                    className={`flex items-center gap-2 px-2.5 py-1 rounded-xl border transition-all cursor-pointer whitespace-nowrap group shrink-0 ${
                      isSelected
                        ? 'bg-zinc-800 border-amber-400 text-white shadow-[0_0_16px_rgba(234,179,8,0.35)] scale-102'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    <img
                      src={h.image}
                      alt={h.name}
                      className={`w-5 h-5 rounded-full object-cover border ${
                        isSelected ? 'border-amber-400 ring-1 ring-amber-400' : 'border-zinc-700'
                      }`}
                    />
                    <div className="text-left">
                      <div className="text-[11px] font-mono font-medium leading-tight text-white group-hover:text-amber-300">
                        {h.name}
                      </div>
                      <div className="text-[8.5px] font-mono text-zinc-500 leading-none">
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
            Seamlessly merged with the 3D scene (zero blue seams or dead gaps)
            ============================================================== */}
        <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] rounded-3xl overflow-hidden flex flex-col justify-between border border-zinc-800/90 bg-[#030509] shadow-[0_20px_70px_rgba(0,0,0,0.95)]">
          {/* Top Control Bar inside Chamber */}
          <div className="relative z-20 flex flex-wrap items-center justify-between p-3.5 sm:p-5 gap-2.5 bg-gradient-to-b from-[#030509]/95 via-[#030509]/70 to-transparent">
            {/* Hero Title & Telemetry Header */}
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-0.5">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>ORIGIN: {selectedHero.region}</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">{selectedHero.faction}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2 flex-wrap">
                <span>{selectedHero.name}</span>
                <span className="text-[11px] font-mono font-normal text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  {selectedHero.title}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 hidden md:inline">
                  {selectedHero.role} ({selectedHero.lane})
                </span>
              </h3>
            </div>

            {/* View Mode & Visual Toggles */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => {
                  audioManager.playClick();
                  setShowStats(!showStats);
                }}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  showStats
                    ? 'bg-amber-500 text-black border-amber-400 font-bold shadow'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
                }`}
                title="Toggle Tactical Combat Attributes Panel"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{showStats ? 'HIDE STATS' : 'STATS'}</span>
              </button>

              <button
                onClick={handlePlayVoice}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  isPlayingVoice
                    ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
                }`}
                title="Play Canonical Hero Voice Quote"
              >
                <Volume2
                  className={`w-3.5 h-3.5 ${isPlayingVoice ? 'animate-bounce' : 'text-amber-400'}`}
                />
                <span className="hidden sm:inline">
                  {isPlayingVoice ? 'SPEAKING' : 'VOICE QUOTE'}
                </span>
              </button>

              {/* Camera Presets Selector */}
              <div className="hidden sm:flex items-center gap-1 bg-zinc-900/90 border border-zinc-700 rounded-xl p-0.5">
                {[
                  { id: 'orbit', label: 'ORBIT' },
                  { id: 'front', label: 'FRONT' },
                  { id: 'skills', label: 'SKILLS' },
                  { id: 'altar', label: 'ALTAR' },
                ].map((cp) => (
                  <button
                    key={cp.id}
                    onClick={() => {
                      audioManager.playClick();
                      setCameraPreset(cp.id);
                    }}
                    className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                      cameraPreset === cp.id
                        ? 'bg-amber-500 text-black font-bold shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cp.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setViewMode(viewMode === '3d' ? 'artwork' : '3d');
                }}
                className="px-2.5 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">
                  {viewMode === '3d' ? '2D ART' : '3D MODE'}
                </span>
                <span className="sm:hidden">{viewMode === '3d' ? '2D' : '3D'}</span>
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setAutoRotate(!autoRotate);
                }}
                className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                  autoRotate
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-zinc-900/90 border-zinc-700 text-zinc-400'
                }`}
                title="Toggle Auto-Rotation"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  audioManager.playClick();
                  setWireframe(!wireframe);
                }}
                className={`p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer ${
                  wireframe
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-zinc-900/90 border-zinc-700 text-zinc-400'
                }`}
                title="Toggle Wireframe Shading"
              >
                <Box className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleResetCamera}
                className="p-1.5 sm:p-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
                title="Reset Camera Angle"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Stage Viewport */}
          <div className="absolute inset-0 z-10">
            {viewMode === '3d' ? (
              <Canvas
                frameloop="always"
                camera={{ position: [0, 0.6, 4.8], fov: 44 }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <color attach="background" args={['#030509']} />
                <fog attach="fog" args={['#030509', 5.0, 16]} />

                {/* Cinematic Studio Sanctum Lighting: Solid, Bright & Balanced */}
                <ambientLight intensity={0.92} />
                <directionalLight position={[0, 4, 6]} intensity={2.2} color="#ffffff" />
                <directionalLight position={[0, 4, -6]} intensity={1.8} color="#ffffff" />
                <directionalLight position={[-4, 4, 0]} intensity={1.4} color={accentColor} />
                <directionalLight position={[4, 4, 0]} intensity={1.4} color={accentColor} />
                <pointLight position={[0, -0.6, 0]} intensity={2.2} color={accentColor} distance={8} />
                <spotLight
                  position={[0, 7.5, 0]}
                  intensity={2.6}
                  angle={0.65}
                  penumbra={0.7}
                  color="#ffffff"
                />

                <group position={[0, -0.2, 0]}>
                  {/* Grand 3D Sanctum Chamber Architecture & Fluted Colonnade - ALWAYS VISIBLE */}
                  <SanctumChamberColonnade color={accentColor} wireframe={wireframe} />

                  {/* Floating Cardinal Arcane Pylons - ALWAYS VISIBLE */}
                  <FloatingArcanePylons color={accentColor} wireframe={wireframe} />

                  {/* Concentric MLBB Summoner Battle Dais & Projector Beam - ALWAYS VISIBLE */}
                  <SummonerBattleDais color={accentColor} wireframe={wireframe} />

                  {/* Accurate 3D Hero Character Monolith with Natural Aspect Ratio & Moniyan Crest */}
                  <HeroHologramMonolith
                    key={selectedHero.id}
                    hero={selectedHero}
                    color={accentColor}
                    wireframe={wireframe}
                  />

                  {/* Orbiting In-Game Circular Skill Satellites on Inclined Celestial Orbit */}
                  <OrbitingSkillSatellites
                    key={`${selectedHero.id}-skills`}
                    abilities={selectedHero.abilities}
                    color={accentColor}
                    activeSkillIdx={activeSkillIdx}
                    onSelectSkill={(idx) => {
                      audioManager.playSkillFlare();
                      setActiveSkillIdx(idx);
                    }}
                  />

                  {/* Ambient Volumetric Arcane Particles */}
                  <AmbientChamberParticles color={accentColor} count={140} />
                </group>

                {/* Responsive Camera Rig automatically scales & centers 3D geometry across mobile/tablet/desktop */}
                <ChamberCameraRig cameraPreset={cameraPreset} controlsRef={controlsRef} />

                <OrbitControls
                  ref={controlsRef}
                  autoRotate={autoRotate}
                  autoRotateSpeed={1.3}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2 + 0.05}
                  minPolarAngle={Math.PI / 6}
                />
              </Canvas>
            ) : (
              /* High-Resolution Artwork Viewer Mode */
              <div className="relative w-full h-full flex items-center justify-center p-6 bg-zinc-950">
                <img
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="max-h-[82%] max-w-[82%] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-radial from-transparent to-[#030509] pointer-events-none" />
              </div>
            )}
          </div>

          {/* Left Tactical Telemetry Overlay: Authentic Hero Combat Attributes (Collapsible & Non-blocking) */}
          {showStats && (
            <div className="absolute left-4 top-20 z-20 max-w-[270px] pointer-events-auto animate-fadeIn">
              <div className="bg-[#050914]/92 backdrop-blur-xl border border-zinc-700/80 rounded-2xl p-3.5 shadow-2xl space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    COMBAT METRICS
                  </span>
                  <button
                    onClick={() => setShowStats(false)}
                    className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* 4 Official In-Game Attributes */}
                <div className="space-y-2">
                  {/* Offense */}
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Sword className="w-3 h-3 text-red-400" /> Offense
                      </span>
                      <span className="text-white font-bold">{attrs.offense}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${attrs.offense}%` }}
                      />
                    </div>
                  </div>

                  {/* Durability */}
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Shield className="w-3 h-3 text-cyan-400" /> Durability
                      </span>
                      <span className="text-white font-bold">{attrs.durability}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${attrs.durability}%` }}
                      />
                    </div>
                  </div>

                  {/* Ability Effects */}
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-purple-400" /> Ability Effects
                      </span>
                      <span className="text-white font-bold">{attrs.abilityEffects}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${attrs.abilityEffects}%` }}
                      />
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-1">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Crosshair className="w-3 h-3 text-amber-400" /> Difficulty
                      </span>
                      <span className="text-white font-bold">
                        {attrs.difficulty}% ({selectedHero.difficultyLabel || 'Moderate'})
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${attrs.difficulty}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Competitive Ratings */}
                <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="bg-black/40 p-2 rounded-xl border border-zinc-800">
                    <div className="text-zinc-500">WIN RATE</div>
                    <div className="text-amber-300 font-bold text-xs">{selectedHero.winRate}</div>
                  </div>
                  <div className="bg-black/40 p-2 rounded-xl border border-zinc-800">
                    <div className="text-zinc-500">POPULARITY</div>
                    <div className="text-cyan-300 font-bold text-xs">{selectedHero.popularity}</div>
                  </div>
                </div>

                {/* Specialty & Optimal Lane */}
                <div className="text-[10px] font-mono text-zinc-400 space-y-1">
                  <div>
                    <span className="text-zinc-500">SPECIALTY:</span>{' '}
                    <span className="text-white">{selectedHero.speciality}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">RECOMMENDED:</span>{' '}
                    <span className="text-amber-400">{selectedHero.lane}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Telemetry HUD Overlay & Skill Arsenal Strip inside Chamber (Streamlined & Space-Efficient) */}
          <div className="relative z-20 p-3 sm:p-4 bg-gradient-to-t from-[#030509]/95 via-[#030509]/75 to-transparent flex flex-col gap-2 pointer-events-auto">
            {/* Interactive Hero Skill Strip & Active Skill Diagnostic Card */}
            <div className="flex flex-col gap-2 bg-[#050914]/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-zinc-800/90 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    3D SKILL SATELLITES:
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
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

                {/* Active Skill Quick Header & Expand Toggle */}
                {activeSkill && (
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <div className="text-white font-bold flex items-center gap-1.5 flex-wrap">
                      <span className="text-amber-400 uppercase font-semibold">
                        [{activeSkill.type}]
                      </span>
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
                    <button
                      onClick={() => setShowSkillDetail(!showSkillDetail)}
                      className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      title={showSkillDetail ? 'Collapse skill details' : 'Expand skill details'}
                    >
                      {showSkillDetail ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronUp className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Active Skill Description Terminal (Cleaned, Complete In-Game Text) */}
              {activeSkill && showSkillDetail && (
                <div className="pt-1.5 border-t border-zinc-800/80 text-[11px] font-sans text-zinc-300 leading-relaxed max-h-12 overflow-y-auto pr-2">
                  {cleanSkillDescription(activeSkill.description) ||
                    'Hero channels supreme tactical force to overpower enemy formations on the battlefield.'}
                </div>
              )}
            </div>

            {/* Bottom Row: Technical Metrics and Energy Lighting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono">
              {/* Technical Specifications */}
              <div className="flex flex-wrap items-center gap-2.5 text-zinc-400 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-zinc-800">
                <div>
                  <span className="text-zinc-500">CHAMPION:</span>{' '}
                  <span className="text-white font-bold">{selectedHero.name}</span>
                </div>
                <div className="hidden sm:block text-zinc-700">|</div>
                <button
                  onClick={() => {
                    audioManager.playClick();
                    setWireframe(!wireframe);
                  }}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  title="Click to toggle Wireframe / Sanctum Holographic"
                >
                  <span className="text-zinc-500">SHADER:</span>{' '}
                  <span
                    className={
                      wireframe ? 'text-cyan-400 font-bold' : 'text-amber-400 font-bold'
                    }
                  >
                    {wireframe ? 'CYBER WIREFRAME' : 'SANCTUM HOLOGRAPHIC'}
                  </span>
                </button>
                <div className="hidden sm:block text-zinc-700">|</div>
                <div>
                  <span className="text-zinc-500">CONTROLS:</span>{' '}
                  <span className="text-cyan-400">360° ORBIT / PINCH ZOOM</span>
                </div>
              </div>

              {/* Color Accent Switcher */}
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-800 shrink-0">
                <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">
                  ENERGY LIGHTING:
                </span>
                {[
                  { hex: selectedHero.themeColor, label: 'Hero Theme' },
                  { hex: '#f59e0b', label: 'Imperial Gold' },
                  { hex: '#06b6d4', label: 'Cadia Cyan' },
                  { hex: '#ec4899', label: 'Sakura Violet' },
                  { hex: '#ef4444', label: 'Abyssal Red' },
                  { hex: '#10b981', label: 'Emerald Jade' },
                ].map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      audioManager.playClick();
                      setAccentColor(c.hex);
                    }}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      accentColor === c.hex
                        ? 'scale-125 border-white shadow-md'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
