import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Volume2,
  VolumeX,
  Swords,
  Box,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  Flame,
  Shield,
  Eye,
  ArrowRight
} from 'lucide-react';
import { audioManager } from '../utils/audio';
import { HEROES } from '../data/heroesData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// 1. THREE SOVEREIGN CHAMPION ARCHETYPES (AWWWARDS-LEVEL INTERACTIVE RELICS)
// ============================================================================
const FEATURED_ARCHETYPES = [
  {
    id: 'alucard',
    heroId: 'alucard',
    name: 'Alucard',
    title: 'Demon Hunter',
    tag: 'FIGHTER // SOVEREIGN BLADE',
    primaryColor: '#f59e0b',
    secondaryColor: '#ef4444',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    weaponName: 'Sovereign Demon Greatsword',
    quote: 'Born in light, baptized in darkness.',
    image: '/assets/images/heroes/alucard.png'
  },
  {
    id: 'gusion',
    heroId: 'gusion',
    name: 'Gusion',
    title: 'Holy Blade',
    tag: 'ASSASSIN // SPECTRAL BLADES',
    primaryColor: '#06b6d4',
    secondaryColor: '#38bdf8',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    weaponName: 'Astral Holy Daggers',
    quote: 'Break the line between shadow and lightning.',
    image: '/assets/images/heroes/gusion.png'
  },
  {
    id: 'kagura',
    heroId: 'kagura',
    name: 'Kagura',
    title: 'Onmyouji Master',
    tag: 'MAGE // SEIMEI YIN-YANG',
    primaryColor: '#a855f7',
    secondaryColor: '#ec4899',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    weaponName: 'Seimei Astral Astrolabe',
    quote: 'The umbrella spins, and destiny bends.',
    image: '/assets/images/heroes/kagura.png'
  }
];

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // States
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [shockwaveBurstCount, setShockwaveBurstCount] = useState(0);

  // Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const shrineGroupRef = useRef(null);
  const swordGroupRef = useRef(null);
  const bladeCustomMatRef = useRef(null);
  const bladeSpineMatRef = useRef(null);
  const coreLightRef = useRef(null);
  const tipLightRef = useRef(null);
  const gemMeshRef = useRef(null);
  const daggerMatsRef = useRef([]);
  const monolithMatsRef = useRef([]);
  const shockwaveMeshRef = useRef(null);
  const shockwaveStateRef = useRef({ active: false, scale: 0.1, opacity: 0.0 });
  const targetColorRef = useRef(new THREE.Color('#f59e0b'));
  const targetSecondaryColorRef = useRef(new THREE.Color('#ef4444'));

  // Pointer & Dynamic Physics
  const rotTarget = useRef({ x: 0, y: 0 });
  const rotCurrent = useRef({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const targetScrollProg = useRef(0.0);
  const screenShakeRef = useRef(0.0);

  const activeArchetype = FEATURED_ARCHETYPES[activeHeroIndex] || FEATURED_ARCHETYPES[0];

  // ============================================================================
  // 2. THREE.JS MASTER ENGINE: SCULPTED 3D SOVEREIGN WEAPON & SACRED SHRINE
  // ============================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // 1. Scene & Deep Midnight Atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080d1a);
    scene.fog = new THREE.FogExp2(0x080d1a, 0.016);
    sceneRef.current = scene;

    // 2. Perspective Camera (Cinematic Field of View)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 17.0);
    camera.lookAt(0, 0.6, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer with High-Performance Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.32;
    rendererRef.current = renderer;

    // 4. Master Shrine Assembly Group
    const shrineGroup = new THREE.Group();
    scene.add(shrineGroup);
    shrineGroupRef.current = shrineGroup;

    // ========================================================================
    // A. THE MYTHIC SOVEREIGN GREATSWORD (COMPLEX SCULPTED GAME WEAPON)
    // ========================================================================
    const swordGroup = new THREE.Group();
    shrineGroup.add(swordGroup);
    swordGroupRef.current = swordGroup;

    // 1. Custom GLSL Fresnel Blade Material
    const bladeShaderMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color('#0b172a') },
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
          float pulse = 0.88 + 0.12 * sin(uTime * 3.2 - vUv.y * 14.0);
          vec3 finalColor = mix(uColor, uRimColor, fresnel * uIntensity) * pulse;
          gl_FragColor = vec4(finalColor, 0.96);
        }
      `,
      transparent: true
    });
    bladeCustomMatRef.current = bladeShaderMat;

    // Sculpted Diamond Greatsword Blade
    const bladeGeo = new THREE.CylinderGeometry(0.04, 0.65, 8.6, 4, 1);
    bladeGeo.rotateY(Math.PI / 4);
    const bladeMesh = new THREE.Mesh(bladeGeo, bladeShaderMat);
    bladeMesh.scale.set(0.22, 1.0, 1.0);
    bladeMesh.position.set(0, 3.8, 0);
    swordGroup.add(bladeMesh);

    // Glowing Mana Fuller Spine
    const fullerGeo = new THREE.BoxGeometry(0.08, 7.0, 0.15);
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

    // Inlaid Diamond Runic Nodes
    for (let i = 0; i < 5; i++) {
      const rNodeGeo = new THREE.OctahedronGeometry(0.12, 0);
      const rNodeMesh = new THREE.Mesh(rNodeGeo, fullerMat);
      rNodeMesh.position.set(0, 1.1 + i * 1.15, 0);
      swordGroup.add(rNodeMesh);
    }

    // Winged Imperial Crossguard
    const guardGroup = new THREE.Group();
    guardGroup.position.set(0, -0.5, 0);
    swordGroup.add(guardGroup);

    const goldArmorMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.16
    });

    const guardHub = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.58, 0.78), goldArmorMat);
    guardGroup.add(guardHub);

    // Left Wing
    const leftWingGeo = new THREE.ConeGeometry(0.38, 1.8, 4);
    leftWingGeo.rotateY(Math.PI / 4);
    const leftWing = new THREE.Mesh(leftWingGeo, goldArmorMat);
    leftWing.position.set(-1.05, 0.28, 0);
    leftWing.rotation.z = -Math.PI / 2.7;
    guardGroup.add(leftWing);

    // Right Wing
    const rightWing = new THREE.Mesh(leftWingGeo, goldArmorMat);
    rightWing.position.set(1.05, 0.28, 0);
    rightWing.rotation.z = Math.PI / 2.7;
    guardGroup.add(rightWing);

    // Rotating Twilight Gem Socket
    const socketGeo = new THREE.TorusGeometry(0.44, 0.09, 16, 32);
    const socketMesh = new THREE.Mesh(socketGeo, goldArmorMat);
    socketMesh.rotation.x = Math.PI / 2;
    guardGroup.add(socketMesh);

    const gemGeo = new THREE.IcosahedronGeometry(0.32, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xf59e0b,
      emissiveIntensity: 3.8,
      roughness: 0.1
    });
    const gemMesh = new THREE.Mesh(gemGeo, gemMat);
    gemMeshRef.current = gemMesh;
    guardGroup.add(gemMesh);

    // Wrapped Hilt & Pommel
    const gripGeo = new THREE.CylinderGeometry(0.16, 0.18, 2.8, 16);
    const gripMat = new THREE.MeshStandardMaterial({
      color: 0x080f1e,
      roughness: 0.75,
      metalness: 0.25
    });
    const gripMesh = new THREE.Mesh(gripGeo, gripMat);
    gripMesh.position.set(0, -2.05, 0);
    swordGroup.add(gripMesh);

    // Gold Spiral Ribs
    for (let i = 0; i < 5; i++) {
      const ribGeo = new THREE.TorusGeometry(0.19, 0.025, 8, 24);
      const ribMesh = new THREE.Mesh(ribGeo, goldArmorMat);
      ribMesh.position.set(0, -1.3 - i * 0.36, 0);
      swordGroup.add(ribMesh);
    }

    const pommelMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.2, 0.52, 8), goldArmorMat);
    pommelMesh.position.set(0, -3.65, 0);
    swordGroup.add(pommelMesh);

    const finialMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), gemMat);
    finialMesh.position.set(0, -4.1, 0);
    swordGroup.add(finialMesh);

    // ========================================================================
    // B. FOUR SPECTRAL AEGIS DAGGER SATELLITES
    // ========================================================================
    const daggers = [];
    const daggerMats = [];
    const daggerRadius = 3.4;

    for (let i = 0; i < 4; i++) {
      const dGroup = new THREE.Group();
      shrineGroup.add(dGroup);

      const dBladeGeo = new THREE.CylinderGeometry(0.02, 0.22, 2.4, 4);
      dBladeGeo.rotateY(Math.PI / 4);
      const dMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x38bdf8,
        emissiveIntensity: 2.6,
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
        Math.cos(initialAngle) * daggerRadius,
        2.5 + (i % 2 === 0 ? 0.9 : -0.9),
        Math.sin(initialAngle) * daggerRadius
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
    // C. FOUR LEVITATING STONE MONOLITHS (SANCTUM SHRINE PILLARS)
    // ========================================================================
    const monoliths = [];
    const monolithMats = [];
    const monolithRadius = 6.2;

    for (let i = 0; i < 4; i++) {
      const mGroup = new THREE.Group();
      shrineGroup.add(mGroup);

      const stoneMat = new THREE.MeshStandardMaterial({
        color: 0x091122,
        roughness: 0.65,
        metalness: 0.6
      });
      const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.58, 4.4, 0.58), stoneMat);
      mGroup.add(shaft);

      const capGeo = new THREE.ConeGeometry(0.5, 0.85, 4);
      capGeo.rotateY(Math.PI / 4);
      const cap = new THREE.Mesh(capGeo, stoneMat);
      cap.position.y = 2.5;
      mGroup.add(cap);

      const rMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xf59e0b,
        emissiveIntensity: 2.4
      });
      monolithMats.push(rMat);
      const runeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.4, 0.62), rMat);
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
    // D. CONCENTRIC SACRED ARENA GROUND RINGS
    // ========================================================================
    const ringGroup = new THREE.Group();
    ringGroup.position.y = -4.6;
    shrineGroup.add(ringGroup);

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

    // ========================================================================
    // E. 3D SHOCKWAVE EXPANSION RING
    // ========================================================================
    const shockwaveGeo = new THREE.RingGeometry(0.2, 0.9, 48);
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
    // F. 2,500 LIVING SPIRAL STARDUST PARTICLES (DYNAMIC LOGARITHMIC SWIRL)
    // ========================================================================
    const particleCount = 2500;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount);
    const pAngles = new Float32Array(particleCount);
    const pRadii = new Float32Array(particleCount);

    const cColorA = new THREE.Color('#f59e0b');
    const cColorB = new THREE.Color('#38bdf8');
    const cColorC = new THREE.Color('#ffffff');

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.8 + Math.random() * 9.0;
      const angle = Math.random() * Math.PI * 2;
      pRadii[i] = radius;
      pAngles[i] = angle;

      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = -4.6 + Math.random() * 15.0;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;

      pVelocities[i] = 0.02 + Math.random() * 0.04;

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
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(pGeo, pMat);
    shrineGroup.add(particlePoints);

    // ========================================================================
    // G. AWWWARDS CINEMATIC LIGHTING RIG
    // ========================================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xf59e0b, 4.2, 28);
    coreLight.position.set(0, 0, 1.2);
    swordGroup.add(coreLight);
    coreLightRef.current = coreLight;

    const tipLight = new THREE.PointLight(0x38bdf8, 2.8, 22);
    tipLight.position.set(0, 7.8, 0.6);
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

      // Update Custom GLSL Shader Time
      if (bladeCustomMatRef.current) {
        bladeCustomMatRef.current.uniforms.uTime.value = elapsed;
      }

      // Continuous Gem Gyro Rotation
      if (gemMeshRef.current) {
        gemMeshRef.current.rotation.x += delta * 1.6;
        gemMeshRef.current.rotation.y += delta * 2.2;
      }

      // Weightless Sword Breathing Physics
      swordGroup.position.y = Math.sin(elapsed * 1.5) * 0.22;

      // Orbiting Daggers Rotation
      for (let i = 0; i < daggers.length; i++) {
        const d = daggers[i];
        d.angle += delta * d.speed;
        d.group.position.x = Math.cos(d.angle) * daggerRadius;
        d.group.position.z = Math.sin(d.angle) * daggerRadius;
        d.group.position.y = d.heightBase + Math.sin(elapsed * 2.0 + i) * 0.35;
        d.group.rotation.y += delta * 2.8;
      }

      // Levitating Monoliths Float
      for (let i = 0; i < monoliths.length; i++) {
        const m = monoliths[i];
        m.group.position.y = m.baseY + Math.sin(elapsed * 1.4 + m.phase) * 0.28;
      }

      // Ground Rings Parallax Spin
      outerRing.rotation.z += delta * 0.08;
      innerRing.rotation.z -= delta * 0.15;

      // Particle Upward Rise & Dynamic Swirl
      const posArr = pGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pAngles[i] += delta * 0.28;
        posArr[i * 3] = Math.cos(pAngles[i]) * pRadii[i];
        posArr[i * 3 + 2] = Math.sin(pAngles[i]) * pRadii[i];
        posArr[i * 3 + 1] += pVelocities[i] * (1.0 + targetScrollProg.current * 2.0);
        if (posArr[i * 3 + 1] > 10.0) {
          posArr[i * 3 + 1] = -4.6;
        }
      }
      pGeo.attributes.position.needsUpdate = true;

      // Shockwave Expansion Loop
      const sw = shockwaveStateRef.current;
      if (sw.active && shockwaveMeshRef.current) {
        sw.scale += delta * 18.0;
        sw.opacity -= delta * 1.5;
        shockwaveMeshRef.current.scale.set(sw.scale, sw.scale, 1);
        shockwaveMeshRef.current.material.opacity = Math.max(0, sw.opacity);
        if (sw.opacity <= 0) {
          sw.active = false;
        }
      }

      // Smooth Mouse Parallax with Damping (Lerp)
      rotCurrent.current.x += (rotTarget.current.x - rotCurrent.current.x) * 0.055;
      rotCurrent.current.y += (rotTarget.current.y - rotCurrent.current.y) * 0.055;

      shrineGroup.rotation.y = rotCurrent.current.x * 0.65 + dragOffset.current.x;
      shrineGroup.rotation.x = rotCurrent.current.y * 0.45 + dragOffset.current.y;

      // Dynamic Color Interpolation
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

      // Camera Glide driven by GSAP ScrollTrigger
      // Natural, cinematic plunge into the portal without ugly card stacking
      const currentScroll = targetScrollProg.current;
      const targetCamZ = 17.0 - currentScroll * 8.5;
      const targetCamY = 1.2 - currentScroll * 1.4;

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
      leftWingGeo.dispose();
      socketGeo.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      gripGeo.dispose();
      gripMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      shockwaveGeo.dispose();
      shockwaveMat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  // Sync colors when active archetype changes
  useEffect(() => {
    if (activeArchetype) {
      targetColorRef.current = new THREE.Color(activeArchetype.primaryColor);
      targetSecondaryColorRef.current = new THREE.Color(activeArchetype.secondaryColor);
    }
  }, [activeArchetype]);

  // ============================================================================
  // 3. GSAP SCROLLTRIGGER ORCHESTRATION & LENIS SMOOTH SYNC
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
        targetScrollProg.current = prog;
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

  // Interactive 3D Shockwave Strike Action
  const handleTriggerStrike = () => {
    audioManager.playAwakening();
    screenShakeRef.current = 0.55;
    setShockwaveBurstCount((prev) => prev + 1);

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
      if (coreLightRef.current) {
        coreLightRef.current.intensity = 4.2;
      }
      if (bladeSpineMatRef.current) {
        bladeSpineMatRef.current.emissiveIntensity = 3.5;
      }
    }, 1600);
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

  return (
    <section
      ref={trackRef}
      id="overview"
      className="relative w-full h-[140vh] bg-[#080d1a]"
    >
      {/* Sticky Pinned 100dvh Viewport Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className={`sticky top-0 left-0 w-full h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#080d1a] text-white select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* 1. Full-Bleed 3D WebGL Canvas */}
        <canvas
          ref={canvasRef}
          onClick={handleTriggerStrike}
          className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
        />

        {/* 2. Soft Edge Atmospheric Vignettes */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080d1a]/85 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-[#080d1a]/60 pointer-events-none z-10" />

        {/* 3. Luxury Minimalist Top Bar */}
        <header className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
          {/* Left: Official Realm Indicator */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#f3d288] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#f3d288] uppercase font-bold">
                SANCTUM ISLAND // 8K PORTAL
              </span>
              <span className="text-white/20 text-xs hidden sm:inline">|</span>
              <span className="font-mono text-[9px] tracking-wider text-zinc-400 hidden sm:inline uppercase">
                SEASON 36
              </span>
            </div>
          </div>

          {/* Right: Audio Equalizer Button */}
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={handleToggleSound}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                isAudioActive
                  ? 'bg-amber-500/20 border-amber-400/80 text-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                  : 'bg-slate-900/80 border-slate-700/80 text-zinc-400 hover:border-slate-500 hover:text-white'
              }`}
              title={isAudioActive ? 'Mute Spatial Audio' : 'Enable Spatial Audio'}
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

        {/* 4. Center-Stage: Monumental Editorial Typography & Clean Controls */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 my-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pointer-events-none">
          
          {/* Left Column: Monumental Headline & Direct Actions */}
          <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start pointer-events-auto">
            
            {/* Minimalist Sacred Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[10px] font-mono tracking-[0.25em] text-[#f3d288] uppercase mb-4 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>OFFICIAL DIGITAL ARCHIVE</span>
            </div>

            {/* Monumental Liquid Gold Headline */}
            <h1 className="text-land-of-dawn text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.14em] uppercase leading-none mb-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              LAND OF DAWN
            </h1>

            {/* Editorial Italian Roman Subtitle */}
            <p className="font-serif text-base sm:text-xl md:text-2xl tracking-[0.22em] uppercase text-zinc-200 font-medium drop-shadow-md mb-4">
              CHRONICLES OF SANCTUM ISLAND
            </p>

            {/* Crisp 2-Line Editorial Description */}
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed font-sans mb-7 drop-shadow-md">
              Step into the sacred arena where 133 legendary champions clash. Explore verified attributes, 3D chamber models, tactical ability chains, and the world championship circuit.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('#heroes')}
                onMouseEnter={() => audioManager.playHover()}
                className="btn-mlbb-battle btn-mlbb-battle-animated-border game-btn-chamfer relative overflow-hidden group cursor-pointer"
              >
                <div className="btn-mlbb-battle-core game-btn-chamfer-inner">
                  <div className="btn-mlbb-sheen" />
                  <Swords className="w-3.5 h-3.5 text-amber-300 filter drop-shadow-[0_0_6px_rgba(245,158,11,0.8)] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-game-btn text-xs sm:text-[13px] tracking-[0.2em] uppercase text-game-gold select-none whitespace-nowrap">
                    EXPLORE 133 HEROES
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-300/80 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
              </button>

              {/* Secondary 3D Chamber CTA */}
              <button
                onClick={() => scrollToSection('#chamber')}
                onMouseEnter={() => audioManager.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-800/95 border border-slate-700/80 hover:border-cyan-400 text-white transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md group"
              >
                <Box className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="font-game-btn text-xs sm:text-[13px] tracking-[0.16em] uppercase text-cyan-200">
                  3D HERO CHAMBER
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Archetype Switcher (Clean, Spacious, Tactile) */}
          <div className="w-full max-w-sm flex flex-col items-center lg:items-end gap-3 pointer-events-auto">
            
            <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>SELECT SOVEREIGN RELIC</span>
            </div>

            {/* 3 Archetype Selector Cards */}
            <div className="flex flex-col gap-2.5 w-full">
              {FEATURED_ARCHETYPES.map((arch, idx) => {
                const isSelected = activeHeroIndex === idx;
                return (
                  <button
                    key={arch.id}
                    onClick={() => {
                      audioManager.playSkillFlare();
                      setActiveHeroIndex(idx);
                    }}
                    onMouseEnter={() => audioManager.playHover()}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-2xl text-left ${
                      isSelected
                        ? 'bg-slate-900/95 border-2 text-white shadow-2xl scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-700/60 text-zinc-400 hover:text-white hover:border-slate-500'
                    }`}
                    style={{
                      borderColor: isSelected ? arch.primaryColor : undefined,
                      boxShadow: isSelected ? `0 0 25px ${arch.glowColor}` : undefined
                    }}
                  >
                    {/* Hero Thumbnail */}
                    <div
                      className="w-11 h-11 rounded-xl overflow-hidden border shrink-0 bg-slate-950 flex items-center justify-center"
                      style={{ borderColor: arch.primaryColor }}
                    >
                      <img
                        src={arch.image}
                        alt={arch.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm tracking-wide text-white uppercase truncate">
                          {arch.name}
                        </span>
                        <span className="text-[9px] font-mono tracking-wider text-zinc-400">
                          {arch.title}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono tracking-wider text-[#f3d288] block truncate">
                        {arch.weaponName}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-white' : 'text-zinc-600'
                      }`}
                      style={{ color: isSelected ? arch.primaryColor : undefined }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Click to Strike Hint */}
            <div className="mt-2 text-[9px] font-mono text-zinc-400 tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CLICK 3D CANVAS TO STRIKE SHOCKWAVE</span>
            </div>

          </div>

        </div>

        {/* 5. Minimalist Bottom Footer & Scroll Cue */}
        <footer className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
          {/* Left: 3D Inertia Cue */}
          <div className="text-[9.5px] font-mono tracking-wider text-zinc-400 hidden sm:block">
            DRAG CANVAS TO ROTATE 360° SHRINE
          </div>

          {/* Center: Scroll Down Indicator */}
          <div
            onClick={() => scrollToSection('#heroes')}
            className="pointer-events-auto flex flex-col items-center gap-1 cursor-pointer group text-zinc-400 hover:text-[#f3d288] transition-colors"
          >
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase font-semibold">
              SCROLL TO EXPLORE ARCHIVE
            </span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
          </div>

          {/* Right: Total Champions Badge */}
          <div className="text-[9.5px] font-mono tracking-wider text-[#f3d288] hidden sm:block font-bold">
            133 LEGENDS ASSEMBLED
          </div>
        </footer>

      </div>
    </section>
  );
}
