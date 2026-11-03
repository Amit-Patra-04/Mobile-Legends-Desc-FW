import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield,
  Swords,
  Flame,
  Sparkles,
  Crosshair,
  Zap,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Box,
  Orbit,
  Eye,
  Activity
} from 'lucide-react';
import { audioManager } from '../utils/audio';
import { HEROES } from '../data/heroesData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// 1. WEAPON STANCES (AWWWARDS-LEVEL INTERACTIVE 3D FORGE ARTIFACTS)
// ============================================================================
const WEAPON_STANCES = [
  {
    id: 'excalibur',
    name: 'Dawn Excalibur',
    tagline: 'SACRED MONIYAN ARTIFACT',
    hero: 'Tigreal & Alucard',
    primaryColor: '#f59e0b',
    secondaryColor: '#38bdf8',
    glowColor: 'rgba(245, 158, 11, 0.55)',
    emissiveIntensity: 3.2,
    attack: '+480 TRUE DMG',
    crit: '35% CRIT RATE',
    lore: 'Forged from celestial star-metal in the ancient Moniyan citadel to purge the dark abyss.'
  },
  {
    id: 'abyssal',
    name: 'Abyssal Doomreaver',
    tagline: 'CORRUPTED VOID CLAYMORE',
    hero: 'Thamuz & Dyrroth',
    primaryColor: '#ef4444',
    secondaryColor: '#f97316',
    glowColor: 'rgba(239, 68, 68, 0.55)',
    emissiveIntensity: 3.8,
    attack: '+540 VOID BURST',
    crit: '45% PENETRATION',
    lore: 'Tempered in hellfire beneath the Crack of the Abyss, incinerating enemy shields and titan armor.'
  },
  {
    id: 'astral',
    name: 'Astral Stormblade',
    tagline: 'CELESTIAL TEMPEST RAPIER',
    hero: 'Gusion & Ling',
    primaryColor: '#06b6d4',
    secondaryColor: '#a855f7',
    glowColor: 'rgba(6, 182, 212, 0.55)',
    emissiveIntensity: 3.4,
    attack: '+420 SWIFT BURST',
    crit: '25% COOLDOWN',
    lore: 'Infused with the eternal Twilight Orb, granting its bearer instantaneous spatial blink strikes.'
  }
];

// ============================================================================
// 2. THE SIX SOVEREIGN DISCIPLINES (OFFICIAL REPRESENTATIVE CHAMPIONS)
// ============================================================================
const ROLES_SHOWCASE = [
  {
    id: 'tank',
    name: 'Tank',
    icon: Shield,
    heroName: 'Tigreal',
    heroTitle: 'Warrior of Dawn',
    heroId: 'tigreal',
    image: '/assets/images/heroes/tigreal.png',
    color: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.45)',
    desc: 'Unshakable frontline vanguards wielding celestial shields and heavy crowd control to protect the allied core.',
    winRate: '53.4%',
    lane: 'Roamer / EXP Lane',
    stats: { durability: 96, offense: 42, control: 95 }
  },
  {
    id: 'fighter',
    name: 'Fighter',
    icon: Swords,
    heroName: 'Alucard',
    heroTitle: 'Demon Hunter',
    heroId: 'alucard',
    image: '/assets/images/heroes/alucard.png',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    desc: 'Relentless close-quarters brawlers blending devastating physical burst with vampiric life steal.',
    winRate: '52.1%',
    lane: 'Jungle / EXP Lane',
    stats: { durability: 76, offense: 92, control: 60 }
  },
  {
    id: 'assassin',
    name: 'Assassin',
    icon: Flame,
    heroName: 'Gusion',
    heroTitle: 'Holy Blade',
    heroId: 'gusion',
    image: '/assets/images/heroes/gusion.png',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    desc: 'Hyper-agile tactical killers who weave through arcane daggers to obliterate priority carries.',
    winRate: '54.6%',
    lane: 'Mid Lane / Jungle',
    stats: { durability: 35, offense: 98, control: 52 }
  },
  {
    id: 'mage',
    name: 'Mage',
    icon: Sparkles,
    heroName: 'Kagura',
    heroTitle: 'Onmyouji Master',
    heroId: 'kagura',
    image: '/assets/images/heroes/kagura.png',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    desc: 'Mystical spellcasters commanding the Seimei Umbrella to manipulate spatial vortexes and wipe waves.',
    winRate: '53.8%',
    lane: 'Mid Lane',
    stats: { durability: 42, offense: 95, control: 88 }
  },
  {
    id: 'marksman',
    name: 'Marksman',
    icon: Crosshair,
    heroName: 'Miya',
    heroTitle: 'Moonlight Archer',
    heroId: 'miya',
    image: '/assets/images/heroes/miya.png',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    desc: 'Blessed by the Moon Goddess, delivering unmatched sustained physical DPS to shred enemy armor.',
    winRate: '51.8%',
    lane: 'Gold Lane',
    stats: { durability: 30, offense: 99, control: 45 }
  },
  {
    id: 'support',
    name: 'Support',
    icon: Zap,
    heroName: 'Angela',
    heroTitle: 'Bunnylove',
    heroId: 'angela',
    image: '/assets/images/heroes/angela.png',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    desc: 'Possesses allied champions across the entire map, projecting radiant shields and healing waves.',
    winRate: '55.2%',
    lane: 'Roamer',
    stats: { durability: 48, offense: 45, control: 92 }
  }
];

// 3 Curated ScrollTrigger Acts
const SCROLL_ACTS = [
  { id: 'forge', code: '01', roman: 'I', label: 'THE SACRED FORGE', progress: 0.0 },
  { id: 'roles', code: '02', roman: 'II', label: 'SOVEREIGN DISCIPLINES', progress: 0.52 },
  { id: 'deploy', code: '03', roman: 'III', label: 'BATTLE COMMAND', progress: 0.95 }
];

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeAct, setActiveAct] = useState(0);
  const [activeStanceIndex, setActiveStanceIndex] = useState(0);
  const [activeRoleIndex, setActiveRoleIndex] = useState(1);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [overdriveActive, setOverdriveActive] = useState(false);

  // Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const shrineGroupRef = useRef(null);
  const swordMasterGroupRef = useRef(null);
  const bladeCustomMatRef = useRef(null);
  const bladeSpineMatRef = useRef(null);
  const gemMeshRef = useRef(null);
  const coreLightRef = useRef(null);
  const tipLightRef = useRef(null);
  const monolithMatsRef = useRef([]);
  const daggerMatsRef = useRef([]);
  const shockwaveMeshRef = useRef(null);
  const shockwaveStateRef = useRef({ active: false, scale: 0.1, opacity: 0.0 });
  const targetColorRef = useRef(new THREE.Color('#f59e0b'));
  const targetSecondaryColorRef = useRef(new THREE.Color('#38bdf8'));

  // Pointer, Parallax & Physics
  const mouseScreenRef = useRef({ x: 0, y: 0 });
  const rotTarget = useRef({ x: 0, y: 0 });
  const rotCurrent = useRef({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const targetProgressRef = useRef(0.0);
  const screenShakeRef = useRef(0.0);

  const activeStance = WEAPON_STANCES[activeStanceIndex] || WEAPON_STANCES[0];
  const activeRole = ROLES_SHOWCASE[activeRoleIndex] || ROLES_SHOWCASE[0];

  // ============================================================================
  // 3. THREE.JS MASTER ENGINE: SCULPTED 3D SACRED GREATSWORD SHRINE WITH GLSL
  // ============================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // 1. Scene & Rich Atmospheric Midnight Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080d1a);
    scene.fog = new THREE.FogExp2(0x080d1a, 0.018);
    sceneRef.current = scene;

    // 2. Cinematic Perspective Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 16.5);
    camera.lookAt(0, 0.8, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer with ACES Tone Mapping & Specular Sharpness
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;

    // 4. Master Shrine Assembly Group
    const shrineGroup = new THREE.Group();
    scene.add(shrineGroup);
    shrineGroupRef.current = shrineGroup;

    // ========================================================================
    // A. THE SACRED GREATSWORD ASSEMBLY (COMPLEX GAME ARTIFACT)
    // ========================================================================
    const swordGroup = new THREE.Group();
    shrineGroup.add(swordGroup);
    swordMasterGroupRef.current = swordGroup;

    // 1. Custom GLSL Fresnel Blade Material (Iridescent Living Rim Shading)
    const bladeShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color('#0c182c') },
        uRimColor: { value: new THREE.Color('#f59e0b') },
        uTime: { value: 0.0 },
        uIntensity: { value: 2.2 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uRimColor;
        uniform float uTime;
        uniform float uIntensity;
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.8);
          float pulse = 0.88 + 0.12 * sin(uTime * 3.5 - vUv.y * 14.0);
          vec3 finalColor = mix(uColor, uRimColor, fresnel * uIntensity) * pulse;
          gl_FragColor = vec4(finalColor, 0.96);
        }
      `,
      transparent: true
    });
    bladeCustomMatRef.current = bladeShaderMat;

    // Razor-Sharp Double-Edged Diamond Blade Geometry
    const bladeGeo = new THREE.CylinderGeometry(0.04, 0.65, 8.6, 4, 1);
    bladeGeo.rotateY(Math.PI / 4);
    const bladeMesh = new THREE.Mesh(bladeGeo, bladeShaderMat);
    bladeMesh.scale.set(0.22, 1.0, 1.0); // Flatten into razor-sharp double edge
    bladeMesh.position.set(0, 3.8, 0);
    swordGroup.add(bladeMesh);

    // 2. Central Luminous Mana Fuller (The Runic Spine)
    const fullerGeo = new THREE.BoxGeometry(0.09, 7.0, 0.16);
    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf59e0b,
      emissiveIntensity: 3.5,
      roughness: 0.18
    });
    bladeSpineMatRef.current = fullerMat;
    const fullerMesh = new THREE.Mesh(fullerGeo, fullerMat);
    fullerMesh.position.set(0, 3.4, 0);
    swordGroup.add(fullerMesh);

    // Inlaid Diamond Runic Nodes along the Fuller
    for (let i = 0; i < 5; i++) {
      const rNodeGeo = new THREE.OctahedronGeometry(0.13, 0);
      const rNodeMesh = new THREE.Mesh(rNodeGeo, fullerMat);
      rNodeMesh.position.set(0, 1.1 + i * 1.15, 0);
      swordGroup.add(rNodeMesh);
    }

    // 3. Sculpted Winged Crossguard (Moniyan Imperial Wings)
    const guardGroup = new THREE.Group();
    guardGroup.position.set(0, -0.5, 0);
    swordGroup.add(guardGroup);

    const goldArmorMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.15
    });

    // Guard Center Hub
    const guardHubGeo = new THREE.BoxGeometry(0.88, 0.58, 0.78);
    const guardHubMesh = new THREE.Mesh(guardHubGeo, goldArmorMat);
    guardGroup.add(guardHubMesh);

    // Left Swept Wing
    const leftWingGeo = new THREE.ConeGeometry(0.38, 1.8, 4);
    leftWingGeo.rotateY(Math.PI / 4);
    const leftWing = new THREE.Mesh(leftWingGeo, goldArmorMat);
    leftWing.position.set(-1.05, 0.28, 0);
    leftWing.rotation.z = -Math.PI / 2.7;
    guardGroup.add(leftWing);

    // Right Swept Wing
    const rightWingGeo = new THREE.ConeGeometry(0.38, 1.8, 4);
    rightWingGeo.rotateY(Math.PI / 4);
    const rightWing = new THREE.Mesh(rightWingGeo, goldArmorMat);
    rightWing.position.set(1.05, 0.28, 0);
    rightWing.rotation.z = Math.PI / 2.7;
    guardGroup.add(rightWing);

    // Central Twilight Core Socket Ring
    const socketGeo = new THREE.TorusGeometry(0.44, 0.09, 16, 32);
    const socketMesh = new THREE.Mesh(socketGeo, goldArmorMat);
    socketMesh.rotation.x = Math.PI / 2;
    guardGroup.add(socketMesh);

    // Spinning Embedded Twilight Heart Gem
    const gemGeo = new THREE.IcosahedronGeometry(0.32, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xf59e0b,
      emissiveIntensity: 3.8,
      roughness: 0.08
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    gemMeshRef.current = gemMesh;
    guardGroup.add(gemMesh);

    // 4. Wrapped Leather Grip & Gold Spiral Wire
    const gripGeo = new THREE.CylinderGeometry(0.16, 0.18, 2.8, 16);
    const gripMat = new THREE.MeshStandardMaterial({
      color: 0x080f1e,
      roughness: 0.75,
      metalness: 0.25
    });
    const gripMesh = new THREE.Mesh(gripGeo, gripMat);
    gripMesh.position.set(0, -2.05, 0);
    swordGroup.add(gripMesh);

    // 5 Gold Spiral Ribs
    for (let i = 0; i < 5; i++) {
      const ribGeo = new THREE.TorusGeometry(0.19, 0.025, 8, 24);
      const ribMesh = new THREE.Mesh(ribGeo, goldArmorMat);
      ribMesh.position.set(0, -1.3 - i * 0.36, 0);
      swordGroup.add(ribMesh);
    }

    // 5. Crown Pommel Counterweight & Finial Jewel
    const pommelGeo = new THREE.CylinderGeometry(0.4, 0.2, 0.52, 8);
    const pommelMesh = new THREE.Mesh(pommelGeo, goldArmorMat);
    pommelMesh.position.set(0, -3.65, 0);
    swordGroup.add(pommelMesh);

    const finialGeo = new THREE.OctahedronGeometry(0.26, 0);
    const finialMesh = new THREE.Mesh(finialGeo, gemMat);
    finialMesh.position.set(0, -4.1, 0);
    swordGroup.add(finialMesh);

    // ========================================================================
    // B. FOUR ORBITING SPECTRAL AEGIS DAGGER SATELLITES
    // ========================================================================
    const daggers = [];
    const daggerMats = [];
    const daggerOrbitRadius = 3.4;

    for (let i = 0; i < 4; i++) {
      const dGroup = new THREE.Group();
      shrineGroup.add(dGroup);

      const dBladeGeo = new THREE.CylinderGeometry(0.02, 0.22, 2.4, 4);
      dBladeGeo.rotateY(Math.PI / 4);
      const dMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x38bdf8,
        emissiveIntensity: 2.5,
        roughness: 0.2
      });
      daggerMats.push(dMat);

      const dBlade = new THREE.Mesh(dBladeGeo, dMat);
      dBlade.scale.set(0.2, 1, 1);
      dGroup.add(dBlade);

      const dHilt = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.09, 0.09), goldArmorMat);
      dHilt.position.y = -1.2;
      dGroup.add(dHilt);

      const initialAngle = (i * Math.PI * 2) / 4;
      dGroup.position.set(
        Math.cos(initialAngle) * daggerOrbitRadius,
        2.5 + (i % 2 === 0 ? 0.9 : -0.9),
        Math.sin(initialAngle) * daggerOrbitRadius
      );

      daggers.push({
        group: dGroup,
        angle: initialAngle,
        speed: 0.5 + (i % 2) * 0.22,
        heightBase: 2.5 + (i % 2 === 0 ? 0.9 : -0.9)
      });
    }
    daggerMatsRef.current = daggerMats;

    // ========================================================================
    // C. FOUR ANCIENT LEVITATING MONOLITHS (SACRED SHRINE PILLARS)
    // ========================================================================
    const monoliths = [];
    const monolithMats = [];
    const monolithRadius = 6.0;

    for (let i = 0; i < 4; i++) {
      const mGroup = new THREE.Group();
      shrineGroup.add(mGroup);

      // Weathered Stone Shaft
      const shaftGeo = new THREE.BoxGeometry(0.58, 4.4, 0.58);
      const stoneMat = new THREE.MeshStandardMaterial({
        color: 0x091122,
        roughness: 0.65,
        metalness: 0.6
      });
      const shaft = new THREE.Mesh(shaftGeo, stoneMat);
      mGroup.add(shaft);

      // Beveled Pyramid Cap
      const capGeo = new THREE.ConeGeometry(0.5, 0.85, 4);
      capGeo.rotateY(Math.PI / 4);
      const cap = new THREE.Mesh(capGeo, stoneMat);
      cap.position.y = 2.5;
      mGroup.add(cap);

      // Vertical Glowing Runic Inlay
      const runeGeo = new THREE.BoxGeometry(0.08, 3.4, 0.62);
      const rMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xf59e0b,
        emissiveIntensity: 2.4
      });
      monolithMats.push(rMat);
      const runeMesh = new THREE.Mesh(runeGeo, rMat);
      mGroup.add(runeMesh);

      const mAngle = (i * Math.PI * 2) / 4 + Math.PI / 4;
      mGroup.position.set(
        Math.cos(mAngle) * monolithRadius,
        0.5,
        Math.sin(mAngle) * monolithRadius
      );

      monoliths.push({
        group: mGroup,
        angle: mAngle,
        baseY: 0.5,
        phase: i * 1.5
      });
    }
    monolithMatsRef.current = monolithMats;

    // ========================================================================
    // D. CONCENTRIC ARCANE GROUND RINGS
    // ========================================================================
    const ringGroup = new THREE.Group();
    ringGroup.position.y = -4.6;
    shrineGroup.add(ringGroup);

    // Outer Runic Orbit
    const outerRingGeo = new THREE.RingGeometry(5.4, 8.0, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = -Math.PI / 2;
    ringGroup.add(outerRing);

    // Inner Counter-Rotating Orbit
    const innerRingGeo = new THREE.RingGeometry(2.6, 4.4, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = -Math.PI / 2;
    ringGroup.add(innerRing);

    // Central Crucible Disc
    const centerRingGeo = new THREE.RingGeometry(0.8, 1.9, 32);
    const centerRingMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      side: THREE.DoubleSide
    });
    const centerRing = new THREE.Mesh(centerRingGeo, centerRingMat);
    centerRing.rotation.x = -Math.PI / 2;
    ringGroup.add(centerRing);

    // ========================================================================
    // E. DYNAMIC EXPANDING SHOCKWAVE SYSTEM (BURST ON STRIKE)
    // ========================================================================
    const shockwaveGeo = new THREE.RingGeometry(0.2, 0.8, 48);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.rotation.x = -Math.PI / 2;
    shockwaveMesh.position.y = -4.4;
    shrineGroup.add(shockwaveMesh);
    shockwaveMeshRef.current = shockwaveMesh;

    // ========================================================================
    // F. 2,000 LIVING SPIRAL STARDUST EMBERS (DYNAMIC VELOCITY FLOW)
    // ========================================================================
    const particleCount = 2000;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount);
    const pAngles = new Float32Array(particleCount);
    const pRadii = new Float32Array(particleCount);

    const cColorA = new THREE.Color('#f59e0b');
    const cColorB = new THREE.Color('#38bdf8');
    const cColorC = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.6 + Math.random() * 8.5;
      const angle = Math.random() * Math.PI * 2;
      pRadii[i] = radius;
      pAngles[i] = angle;

      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = -4.5 + Math.random() * 14.5;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;

      pVelocities[i] = 0.025 + Math.random() * 0.045;

      const dice = Math.random();
      const pColor = dice < 0.5 ? cColorA : dice < 0.85 ? cColorB : cColorC;
      pColors[i * 3] = pColor.r;
      pColors[i * 3 + 1] = pColor.g;
      pColors[i * 3 + 2] = pColor.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(pGeo, pMat);
    shrineGroup.add(particlePoints);

    // ========================================================================
    // G. AWWWARDS CINEMATIC LIGHTING RIG
    // ========================================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xf59e0b, 4.0, 26);
    coreLight.position.set(0, 0, 1.0);
    swordGroup.add(coreLight);
    coreLightRef.current = coreLight;

    const tipLight = new THREE.PointLight(0x38bdf8, 2.6, 20);
    tipLight.position.set(0, 7.8, 0.5);
    swordGroup.add(tipLight);
    tipLightRef.current = tipLight;

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    sunLight.position.set(16, 26, 20);
    scene.add(sunLight);

    const cyanRim = new THREE.DirectionalLight(0x38bdf8, 1.5);
    cyanRim.position.set(-18, 18, -12);
    scene.add(cyanRim);

    // ========================================================================
    // H. HIGH-PERFORMANCE 60/120FPS ANIMATION LOOP
    // ========================================================================
    let animId;
    let clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Update GLSL Shader time
      if (bladeCustomMatRef.current) {
        bladeCustomMatRef.current.uniforms.uTime.value = elapsed;
      }

      // Gem Continuous Gyro Rotation
      if (gemMeshRef.current) {
        gemMeshRef.current.rotation.x += delta * 1.6;
        gemMeshRef.current.rotation.y += delta * 2.2;
      }

      // Floating Sword Breathing Physics (Zero Uneven Tilt, Pure Cinematic Suspension)
      swordGroup.position.y = Math.sin(elapsed * 1.5) * 0.22;

      // Orbiting Daggers Rotation
      for (let i = 0; i < daggers.length; i++) {
        const d = daggers[i];
        d.angle += delta * d.speed;
        d.group.position.x = Math.cos(d.angle) * daggerOrbitRadius;
        d.group.position.z = Math.sin(d.angle) * daggerOrbitRadius;
        d.group.position.y = d.heightBase + Math.sin(elapsed * 2.0 + i) * 0.35;
        d.group.rotation.y += delta * 2.8;
      }

      // Levitating Monoliths Float
      for (let i = 0; i < monoliths.length; i++) {
        const m = monoliths[i];
        m.group.position.y = m.baseY + Math.sin(elapsed * 1.4 + m.phase) * 0.28;
      }

      // Concentric Floor Ring Rotations
      outerRing.rotation.z += delta * 0.08;
      innerRing.rotation.z -= delta * 0.15;
      centerRing.rotation.z += delta * 0.24;

      // Particle Upward Rise & Dynamic Swirl
      const posArr = pGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pAngles[i] += delta * 0.3;
        posArr[i * 3] = Math.cos(pAngles[i]) * pRadii[i];
        posArr[i * 3 + 2] = Math.sin(pAngles[i]) * pRadii[i];
        posArr[i * 3 + 1] += pVelocities[i] * (1.0 + targetProgressRef.current * 1.6);
        if (posArr[i * 3 + 1] > 10.0) {
          posArr[i * 3 + 1] = -4.5;
        }
      }
      pGeo.attributes.position.needsUpdate = true;

      // Shockwave Expansion Loop
      const sw = shockwaveStateRef.current;
      if (sw.active && shockwaveMeshRef.current) {
        sw.scale += delta * 16.0;
        sw.opacity -= delta * 1.4;
        shockwaveMeshRef.current.scale.set(sw.scale, sw.scale, 1);
        shockwaveMeshRef.current.material.opacity = Math.max(0, sw.opacity);
        if (sw.opacity <= 0) {
          sw.active = false;
        }
      }

      // Mouse Parallax & Drag Inertia
      rotCurrent.current.x += (rotTarget.current.x - rotCurrent.current.x) * 0.055;
      rotCurrent.current.y += (rotTarget.current.y - rotCurrent.current.y) * 0.055;

      shrineGroup.rotation.y = rotCurrent.current.x * 0.65 + dragOffset.current.x;
      shrineGroup.rotation.x = rotCurrent.current.y * 0.45 + dragOffset.current.y;

      // Dynamic Color Interpolation toward active weapon stance
      if (coreLightRef.current && targetColorRef.current) {
        coreLightRef.current.color.lerp(targetColorRef.current, 0.08);
      }
      if (tipLightRef.current && targetSecondaryColorRef.current) {
        tipLightRef.current.color.lerp(targetSecondaryColorRef.current, 0.08);
      }
      if (bladeCustomMatRef.current && targetColorRef.current) {
        bladeCustomMatRef.current.uniforms.uRimColor.value.lerp(targetColorRef.current, 0.08);
      }
      if (bladeSpineMatRef.current && targetColorRef.current) {
        bladeSpineMatRef.current.emissive.lerp(targetColorRef.current, 0.08);
      }
      for (let mat of daggerMatsRef.current) {
        mat.emissive.lerp(targetSecondaryColorRef.current, 0.08);
      }
      for (let mat of monolithMatsRef.current) {
        mat.emissive.lerp(targetColorRef.current, 0.08);
      }

      // Camera & Shrine GSAP ScrollTrigger Scrubbing:
      // Act 1 (0.0): Close-up heroic perspective on Greatsword (z=16.5, y=1.2)
      // Act 2 (0.5): Camera pulls back to majestic low angle framing shrine behind roles (z=20.0, y=2.2)
      // Act 3 (1.0): Camera plunges into hyperdrive alignment (z=11.2, y=0.0)
      const currentScroll = targetProgressRef.current;
      let targetCamZ = 16.5;
      let targetCamY = 1.2;

      if (currentScroll < 0.35) {
        targetCamZ = 16.5 - currentScroll * 4.0;
        targetCamY = 1.2;
      } else if (currentScroll < 0.75) {
        const t = (currentScroll - 0.35) / 0.4;
        targetCamZ = 15.1 + t * 4.9;
        targetCamY = 1.2 + t * 1.8;
      } else {
        const t = (currentScroll - 0.75) / 0.25;
        targetCamZ = 20.0 - t * 8.8;
        targetCamY = 3.0 - t * 3.0;
      }

      // Screen Shake Decay
      if (screenShakeRef.current > 0.001) {
        camera.position.x = (Math.random() - 0.5) * screenShakeRef.current;
        camera.position.y = targetCamY + (Math.random() - 0.5) * screenShakeRef.current;
        screenShakeRef.current *= 0.88;
      } else {
        camera.position.x = 0;
        camera.position.y += (targetCamY - camera.position.y) * 0.08;
      }

      camera.position.z += (targetCamZ - camera.position.z) * 0.08;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    // Window Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      bladeGeo.dispose();
      bladeShaderMat.dispose();
      fullerGeo.dispose();
      fullerMat.dispose();
      guardHubGeo.dispose();
      goldArmorMat.dispose();
      leftWingGeo.dispose();
      rightWingGeo.dispose();
      socketGeo.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      gripGeo.dispose();
      gripMat.dispose();
      pommelGeo.dispose();
      finialGeo.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      centerRingGeo.dispose();
      centerRingMat.dispose();
      shockwaveGeo.dispose();
      shockwaveMat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  // Sync colors when weapon stance changes
  useEffect(() => {
    if (activeStance) {
      targetColorRef.current = new THREE.Color(activeStance.primaryColor);
      targetSecondaryColorRef.current = new THREE.Color(activeStance.secondaryColor);
    }
  }, [activeStance]);

  // ============================================================================
  // 4. GSAP SCROLLTRIGGER ORCHESTRATION & LENIS SMOOTH SYNC
  // ============================================================================
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };
    if (window.lenis) {
      window.lenis.on('scroll', handleLenisScroll);
    }

    const st = ScrollTrigger.create({
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: (self) => {
        const prog = self.progress;
        setScrollProgress(prog);
        targetProgressRef.current = prog;

        if (prog < 0.33) {
          setActiveAct(0);
        } else if (prog < 0.72) {
          setActiveAct(1);
        } else {
          setActiveAct(2);
        }
      }
    });

    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', handleLenisScroll);
      }
      st.kill();
    };
  }, []);

  // Pointer Move & Drag Interaction
  useEffect(() => {
    const handlePointerMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.45;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.35;
      rotTarget.current = { x, y };
      mouseScreenRef.current = { x: e.clientX, y: e.clientY };

      if (isDragging) {
        const dx = (e.clientX - dragStart.current.x) * 0.005;
        const dy = (e.clientY - dragStart.current.y) * 0.005;
        dragOffset.current.x += dx;
        dragOffset.current.y += dy;
        dragStart.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Sound Toggle
  const handleToggleSound = () => {
    const isPlaying = audioManager.toggleMusic();
    setIsAudioActive(isPlaying);
    if (isPlaying) {
      audioManager.playSkillFlare();
    }
  };

  // Trigger Shockwave & Weapon Awaken Action
  const handleTriggerStrike = () => {
    audioManager.playAwakening();
    screenShakeRef.current = 0.65;
    setOverdriveActive(true);

    // Trigger 3D Shockwave
    shockwaveStateRef.current = {
      active: true,
      scale: 0.1,
      opacity: 0.95
    };

    if (coreLightRef.current) {
      coreLightRef.current.intensity = 8.5;
    }
    if (bladeSpineMatRef.current) {
      bladeSpineMatRef.current.emissiveIntensity = 6.5;
    }

    setTimeout(() => {
      setOverdriveActive(false);
      if (coreLightRef.current) {
        coreLightRef.current.intensity = 4.0;
      }
      if (bladeSpineMatRef.current) {
        bladeSpineMatRef.current.emissiveIntensity = 3.5;
      }
    }, 1800);
  };

  // Smooth Act Glide
  const handleGlideToAct = (actIdx) => {
    audioManager.playClick();
    const track = trackRef.current;
    if (!track) return;

    const actProgress = [0.0, 0.52, 0.95][actIdx] ?? 0.0;
    const trackTop = track.getBoundingClientRect().top + window.pageYOffset;
    const totalScrollable = track.offsetHeight - window.innerHeight;
    const targetScrollY = trackTop + actProgress * totalScrollable;

    if (window.lenis) {
      window.lenis.scrollTo(targetScrollY, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  // Section Scroll Helper
  const scrollToSection = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 70;
      const elementPos = el.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navOffset;
      if (window.lenis) {
        window.lenis.scrollTo(offsetPos, { duration: 1.2 });
      } else {
        window.scrollTo({ top: offsetPos, behavior: 'smooth' });
      }
    }
  };

  // Select Hero actions
  const handleInspectActiveHero = () => {
    audioManager.playSkillFlare();
    const found = HEROES.find((h) => h.id === activeRole.heroId);
    if (found && onSelectHeroForDetail) {
      onSelectHeroForDetail(found);
    }
  };

  const handleChamberActiveHero = () => {
    audioManager.playClick();
    const found = HEROES.find((h) => h.id === activeRole.heroId);
    if (found && onSelectHeroForChamber) {
      onSelectHeroForChamber(found);
    }
  };

  return (
    <section
      ref={trackRef}
      id="overview"
      className="relative w-full h-[280vh] bg-[#080d1a]"
    >
      {/* Sticky Pinned 100dvh Viewport Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className={`sticky top-0 left-0 w-full h-[100dvh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#080d1a] text-white select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* 1. Full-Bleed 3D WebGL Canvas (Greatsword Shrine) */}
        <canvas
          ref={canvasRef}
          onClick={handleTriggerStrike}
          className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
        />

        {/* 2. Cinematic Vignette & Atmospheric Depth */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080d1a]/85 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-[#080d1a]/60 pointer-events-none z-10" />

        {/* 3. Luxury Awwwards Navigation Header (Top Bar) */}
        <header className="relative z-30 px-6 sm:px-10 py-4 flex items-center justify-between pointer-events-none">
          {/* Left: MLBB Official Sanctum Arsenal Badge */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#f3d288] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[#f3d288] uppercase font-bold">
                SANCTUM ISLAND // MYTHIC FORGE
              </span>
              <span className="text-white/20 text-xs hidden sm:inline">|</span>
              <span className="font-mono text-[9px] tracking-wider text-zinc-400 hidden sm:inline uppercase">
                S36 ARSENAL
              </span>
            </div>
          </div>

          {/* Center: Live 3D Weapon Telemetry Badge */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl pointer-events-auto">
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-300">
              <Orbit className="w-3.5 h-3.5 text-[#38bdf8] animate-spin" style={{ animationDuration: '16s' }} />
              <span className="text-white font-semibold">ACTIVE RELIC:</span>
              <span className="text-[#f3d288] font-bold uppercase">{activeStance.name}</span>
              <span className="text-white/20">•</span>
              <span className="text-cyan-300 font-mono">{activeStance.attack}</span>
            </div>
          </div>

          {/* Right: Audio Equalizer & Sound Control */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={handleToggleSound}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                isAudioActive
                  ? 'bg-amber-500/20 border-amber-400/80 text-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                  : 'bg-slate-900/85 border-slate-700/80 text-zinc-400 hover:border-slate-500 hover:text-white'
              }`}
              title={isAudioActive ? 'Mute Spatial Soundtrack' : 'Enable Spatial Soundtrack'}
            >
              <div className="flex items-end gap-[2px] h-3">
                <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-1' : 'h-1.5'}`} />
                <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-2' : 'h-2.5'}`} />
                <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-3' : 'h-1'}`} />
                <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-4' : 'h-2'}`} />
              </div>
              <span className="text-[9.5px] font-mono tracking-widest uppercase">
                {isAudioActive ? 'AUDIO ON' : 'AUDIO OFF'}
              </span>
            </button>
          </div>
        </header>

        {/* ====================================================================
            CENTER STAGE: AWWWARDS 3-ACT EDITORIAL MASTERCLASS
            ==================================================================== */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 my-auto flex flex-col items-center justify-center text-center pointer-events-none">
          
          {/* ACT 1: THE CELESTIAL FORGE (0.00 – 0.33 Scroll Progress) */}
          <div
            className={`transition-all duration-700 w-full max-w-5xl flex flex-col items-center ${
              activeAct === 0
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-8 pointer-events-none absolute'
            }`}
          >
            {/* Moniyan Crest Micro-Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/85 border border-slate-700/80 text-[10px] font-mono tracking-[0.25em] text-[#f3d288] uppercase mb-3 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>CHRONICLES OF SANCTUM ISLAND // SEASON 36</span>
            </div>

            {/* Monumental Liquid Gold Headline */}
            <h1 className="text-land-of-dawn text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.14em] uppercase leading-none mb-3">
              LAND OF DAWN
            </h1>

            {/* Editorial Italian Roman Subtitle */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#f3d288]/80" />
              <span className="font-serif text-sm sm:text-lg md:text-xl tracking-[0.28em] uppercase text-zinc-200 font-medium drop-shadow-md">
                WHERE DIVINE MAGIC & ABYSSAL STEEL CONVERGE
              </span>
              <span className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#f3d288]/80" />
            </div>

            {/* Interactive Weapon Stance Switcher (High-Contrast Clean Terminal) */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 pointer-events-auto">
              {WEAPON_STANCES.map((stance, idx) => {
                const isSelected = activeStanceIndex === idx;
                return (
                  <button
                    key={stance.id}
                    onClick={() => {
                      audioManager.playSkillFlare();
                      setActiveStanceIndex(idx);
                    }}
                    onMouseEnter={() => audioManager.playHover()}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                      isSelected
                        ? 'bg-slate-800 border-2 text-white shadow-2xl scale-105'
                        : 'bg-slate-900/60 border border-slate-700/60 text-zinc-400 hover:text-white hover:border-slate-500'
                    }`}
                    style={{
                      borderColor: isSelected ? stance.primaryColor : undefined,
                      boxShadow: isSelected ? `0 0 25px ${stance.glowColor}` : undefined
                    }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: stance.primaryColor }}
                    />
                    <span className="font-bold uppercase tracking-wider">{stance.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Master Action Deck: Strike / Awaken & Explore */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 pointer-events-auto">
              {/* Tactical Mana Overdrive / Strike Trigger */}
              <button
                onClick={handleTriggerStrike}
                onMouseEnter={() => audioManager.playHover()}
                className="btn-overdrive-charge group cursor-pointer"
                title="Click to trigger physical 3D shockwave and acoustic resonance"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse group-hover:rotate-45 transition-transform" />
                <span className="font-game-btn text-xs tracking-[0.2em] uppercase text-[#fef08a]">
                  {overdriveActive ? 'MANA OVERDRIVE BURST!' : 'AWAKEN BLADE OVERDRIVE'}
                </span>
                <span className="text-[9px] font-mono text-zinc-400 bg-white/10 px-2 py-0.5 rounded">
                  CLICK TO STRIKE
                </span>
              </button>

              {/* Roster Archive Launch Button */}
              <button
                onClick={() => scrollToSection('#heroes')}
                onMouseEnter={() => audioManager.playHover()}
                className="btn-mlbb-battle btn-mlbb-battle-animated-border game-btn-chamfer relative overflow-hidden group cursor-pointer"
              >
                <div className="btn-mlbb-battle-core game-btn-chamfer-inner">
                  <div className="btn-mlbb-sheen" />
                  <Swords className="w-3.5 h-3.5 text-amber-300 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-game-btn text-xs tracking-[0.2em] uppercase text-game-gold select-none whitespace-nowrap">
                    EXPLORE 133 HEROES
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-300/80 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </button>
            </div>

            {/* Quick Strategic Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
              {[
                { val: '133', lbl: 'LEGENDS ASSEMBLED' },
                { val: '06', lbl: 'SOVEREIGN DISCIPLINES' },
                { val: '03', lbl: 'CONTESTED LANES' },
                { val: '8K', lbl: 'SANCTUM ARENA' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-2 px-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm"
                >
                  <span className="font-mono text-base sm:text-lg font-bold text-[#f3d288]">
                    {stat.val}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-zinc-400 uppercase">
                    {stat.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ACT 2: SOVEREIGN DISCIPLINES SHOWCASE (0.33 – 0.72 Scroll Progress) */}
          <div
            className={`transition-all duration-700 w-full max-w-5xl flex flex-col items-center ${
              activeAct === 1
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none absolute'
            }`}
          >
            {/* Act Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/85 border border-slate-700/80 text-[10px] font-mono tracking-[0.25em] text-[#f3d288] uppercase mb-2 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>THE SIX DISCIPLINES // STRATEGIC MASTERY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[0.16em] text-white mb-4 drop-shadow-xl">
              FORGED FOR VICTORY
            </h2>

            {/* 6 Role Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
              {ROLES_SHOWCASE.map((role, idx) => {
                const IconComponent = role.icon;
                const isSelected = activeRoleIndex === idx;
                return (
                  <button
                    key={role.id}
                    onClick={() => {
                      audioManager.playClick();
                      setActiveRoleIndex(idx);
                    }}
                    onMouseEnter={() => audioManager.playHover()}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                      isSelected
                        ? 'bg-slate-800 border-2 text-white shadow-2xl scale-105'
                        : 'bg-slate-900/60 border border-slate-700/60 text-zinc-400 hover:text-white hover:border-slate-500'
                    }`}
                    style={{
                      borderColor: isSelected ? role.color : undefined,
                      boxShadow: isSelected ? `0 0 22px ${role.glowColor}` : undefined
                    }}
                  >
                    <IconComponent
                      className="w-3.5 h-3.5"
                      style={{ color: isSelected ? role.color : undefined }}
                    />
                    <span className="uppercase font-semibold">{role.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Role Feature Card */}
            <div className="w-full max-w-3xl rounded-2xl p-5 sm:p-7 bg-gradient-to-br from-slate-900/95 via-[#0e172e]/95 to-slate-900/98 border border-slate-700/80 shadow-2xl backdrop-blur-2xl relative overflow-hidden text-left">
              {/* Role Glow Flare in Background */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[90px] pointer-events-none opacity-40 transition-colors duration-700"
                style={{ backgroundColor: activeRole.color }}
              />

              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10">
                {/* Hero Avatar Portrait */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <div
                    className="w-28 sm:w-36 h-28 sm:h-36 rounded-2xl overflow-hidden border-2 shadow-2xl relative bg-slate-950 flex items-center justify-center"
                    style={{ borderColor: activeRole.color }}
                  >
                    <img
                      src={activeRole.image}
                      alt={activeRole.heroName}
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-110"
                    />
                  </div>
                  {/* Floating Role Badge */}
                  <div
                    className="absolute -bottom-2.5 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase border bg-slate-900 shadow-md text-white"
                    style={{ borderColor: activeRole.color }}
                  >
                    {activeRole.name}
                  </div>
                </div>

                {/* Role & Hero Overview */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#f3d288] uppercase block">
                        REPRESENTATIVE CHAMPION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold uppercase text-white tracking-wider flex items-center gap-2">
                        {activeRole.heroName}
                        <span className="text-xs font-sans text-zinc-400 font-normal">
                          — {activeRole.heroTitle}
                        </span>
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-300">
                        WIN RATE: <strong className="text-[#f3d288]">{activeRole.winRate}</strong>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono text-cyan-300">
                        {activeRole.lane}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans mb-4">
                    {activeRole.desc}
                  </p>

                  {/* Attribute Bars */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { lbl: 'DURABILITY', val: activeRole.stats.durability, color: '#38bdf8' },
                      { lbl: 'OFFENSE', val: activeRole.stats.offense, color: '#ef4444' },
                      { lbl: 'CONTROL', val: activeRole.stats.control, color: '#f59e0b' }
                    ].map((stat, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <div className="flex justify-between text-[8px] font-mono text-zinc-400">
                          <span>{stat.lbl}</span>
                          <span className="text-white font-bold">{stat.val}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${stat.val}%`,
                              backgroundColor: stat.color
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions for this hero */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleInspectActiveHero}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/60 text-amber-200 text-xs font-mono font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-300" />
                      <span>INSPECT PROFILE</span>
                    </button>
                    <button
                      onClick={handleChamberActiveHero}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-zinc-200 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <Box className="w-3.5 h-3.5 text-cyan-400" />
                      <span>3D CHAMBER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ACT 3: BATTLEFIELD CONVERGENCE & COMMAND (0.72 – 1.00 Scroll Progress) */}
          <div
            className={`transition-all duration-700 w-full max-w-5xl flex flex-col items-center ${
              activeAct === 2
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none absolute'
            }`}
          >
            {/* Act Subtitle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/85 border border-slate-700/80 text-[10px] font-mono tracking-[0.25em] text-[#f3d288] uppercase mb-2 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>SANCTUM ARENA DEPLOYMENT // ALL LANES ENGAGED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-[0.16em] text-white mb-2 drop-shadow-xl">
              COMMAND YOUR DESTINY
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed mb-6 font-sans">
              133 Legends. 3 Contested Corridors. Select your destination below or deploy directly into the roster codex.
            </p>

            {/* 4 Interactive Portal Gateways */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-6">
              {[
                {
                  id: '#heroes',
                  title: 'HERO ARCHIVE',
                  tag: '133 CHAMPIONS',
                  desc: 'Comprehensive database with abilities, equipment builds, and lore.',
                  icon: Swords,
                  color: '#f59e0b'
                },
                {
                  id: '#skills-lab',
                  title: 'SKILLS LAB',
                  tag: 'COMBAT SIMULATOR',
                  desc: 'Interactive cooldowns, mana costs, and tactical spell chaining.',
                  icon: Sparkles,
                  color: '#38bdf8'
                },
                {
                  id: '#chamber',
                  title: '3D HERO CHAMBER',
                  tag: '360° INSPECTOR',
                  desc: 'Inspect heroes in high-poly 3D with celestial lighting and skin vaults.',
                  icon: Box,
                  color: '#a855f7'
                },
                {
                  id: '#esports',
                  title: 'ESPORTS ARENA',
                  tag: 'M-SERIES & MPL',
                  desc: 'World championship fixtures, tournament standings, and pro meta.',
                  icon: Activity,
                  color: '#10b981'
                }
              ].map((gate) => {
                const GateIcon = gate.icon;
                return (
                  <button
                    key={gate.id}
                    onClick={() => scrollToSection(gate.id)}
                    onMouseEnter={() => audioManager.playHover()}
                    className="p-4 rounded-xl bg-slate-900/85 hover:bg-slate-800/95 border border-slate-700/80 hover:border-[#f3d288] text-left transition-all duration-300 shadow-xl backdrop-blur-xl group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border bg-slate-950/80 group-hover:scale-110 transition-transform"
                        style={{ borderColor: `${gate.color}55` }}
                      >
                        <GateIcon className="w-4 h-4" style={{ color: gate.color }} />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#f3d288] transition-colors" />
                    </div>

                    <span className="text-[9px] font-mono tracking-widest text-[#f3d288] uppercase block">
                      {gate.tag}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-1">
                      {gate.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-normal font-sans">
                      {gate.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Launch CTA Button */}
            <button
              onClick={() => scrollToSection('#heroes')}
              onMouseEnter={() => audioManager.playHover()}
              className="btn-mlbb-battle btn-mlbb-battle-animated-border game-btn-chamfer relative overflow-hidden group cursor-pointer"
            >
              <div className="btn-mlbb-battle-core game-btn-chamfer-inner">
                <div className="btn-mlbb-sheen" />
                <Swords className="w-4 h-4 text-amber-300 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)] group-hover:rotate-12 transition-transform shrink-0" />
                <span className="font-game-btn text-xs sm:text-sm tracking-[0.22em] uppercase text-game-gold select-none whitespace-nowrap">
                  ENTER THE ARENA
                </span>
                <ChevronRight className="w-4 h-4 text-amber-300/80 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </button>
          </div>

        </div>

        {/* ====================================================================
            BOTTOM NAVIGATION & SCRUBBER DOCK
            ==================================================================== */}
        <footer className="relative z-30 pb-4 sm:pb-6 px-6 sm:px-10 pointer-events-none">
          
          {/* Subtle Ambient Scroll Cue (Active during Act 0) */}
          <div
            className={`flex flex-col items-center gap-1.5 mb-3 transition-all duration-500 ${
              scrollProgress < 0.08 ? 'opacity-90' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/85 border border-slate-700/80 text-[8.5px] font-mono tracking-[0.25em] text-[#f3d288] uppercase shadow-2xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>SCROLL TO GLIDE THROUGH THE CHRONICLES</span>
            </div>
          </div>

          {/* Interactive Laser Progress Scrubber */}
          <div className="w-[94%] max-w-lg mx-auto mb-3 pointer-events-auto">
            <div className="flex items-center justify-between text-[8.5px] font-mono text-zinc-400 mb-1 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288]" />
                <span className="text-white font-medium tracking-widest uppercase">
                  ACT {SCROLL_ACTS[activeAct]?.roman} // {SCROLL_ACTS[activeAct]?.label}
                </span>
              </span>
              <span className="text-[#f3d288] font-bold">
                {Math.round(scrollProgress * 100)}% JOURNEY
              </span>
            </div>
            {/* Laser Track */}
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-visible">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f3d288] via-[#38bdf8] to-[#a855f7] rounded-full transition-all duration-150"
                style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
              />
              {/* Glowing Diamond Playhead */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#f3d288] rotate-45 shadow-[0_0_12px_#f3d288] -ml-1 transition-all duration-150"
                style={{ left: `${Math.max(0, Math.min(100, scrollProgress * 100))}%` }}
              />
            </div>
          </div>

          {/* Master Control Deck: Roman Act Selector & Quick Jump */}
          <div className="w-[94%] max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 relative z-20 pointer-events-auto">
            
            {/* Left: Quick Archive Jump */}
            <div>
              <button
                onClick={() => scrollToSection('#heroes')}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 hover:border-[#f3d288]/80 bg-slate-900/85 hover:bg-slate-900 text-white transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#f3d288] group-hover:rotate-45 transition-transform duration-300" />
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-semibold">
                  ROSTER [ 133 ]
                </span>
              </button>
            </div>

            {/* Center: Roman Act Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
              {SCROLL_ACTS.map((act, idx) => (
                <button
                  key={act.id}
                  onClick={() => handleGlideToAct(idx)}
                  className={`px-3.5 py-1 rounded-full text-[9px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                    activeAct === idx
                      ? 'bg-[#f3d288] text-slate-950 font-bold shadow-[0_0_14px_rgba(243,210,136,0.4)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {act.roman} • {act.label}
                </button>
              ))}
            </div>

            {/* Right: Drag to Rotate 3D Hint */}
            <div className="hidden sm:flex items-center gap-2 text-[9px] font-mono text-zinc-400">
              <Orbit className="w-3 h-3 text-[#38bdf8]" />
              <span>DRAG CANVAS TO ROTATE 3D SHRINE</span>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
}
