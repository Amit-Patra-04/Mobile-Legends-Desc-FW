import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  Compass,
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  ChevronDown
} from 'lucide-react';
import { audioManager } from '../utils/audio';

// 5 Cinematic Stages: Aerial Overview + Mid-Lane Flight from Enemy Turret to Allied Base Turret
const TACTICAL_STAGES = [
  {
    id: 'overview',
    code: '01',
    progress: 0.0,
    tag: '5V5 IMPERIAL SANCTUARY // TACTICAL CODEX',
    headline: 'The Living Proving Grounds of Dawn',
    subtitle: 'Three contested lanes, two sovereign nexuses, and five tactical roles converging in high-stakes combat.',
    telemetry: { elev: '5,800M', target: 'AERIAL SCAN • FULL MAP' },
    audioId: 'overview'
  },
  {
    id: 'enemy_turret',
    code: '02',
    progress: 0.25,
    tag: 'ENEMY PERIMETER // RED BASE INHIBITOR',
    headline: 'The Abyssal Vanguard Turrets',
    subtitle: 'Frontline defense of the crimson fortress. Siege the high-ground inhibitors to breach the nexus.',
    telemetry: { elev: '1,420M', target: 'ENEMY BASE TURRET' },
    audioId: 'crucible'
  },
  {
    id: 'river_crucible',
    code: '03',
    progress: 0.60,
    tag: 'THE CRUCIBLE // RIVER CONVERGENCE',
    headline: 'Where Destinies and Teamfights Clash',
    subtitle: 'Flanked by the Lord Sanctuary on the left and Turtle Nest on the right. The ultimate ambush zone.',
    telemetry: { elev: '880M', target: 'RIVER & OBJECTIVE PITS' },
    audioId: 'lord'
  },
  {
    id: 'allied_turret',
    code: '04',
    progress: 1.0,
    tag: 'BASE COMMAND // ALLIED MONIYAN NEXUS',
    headline: 'Defend the Core Crystal at All Costs',
    subtitle: 'Allied sanctuary and base turrets. Shield your divine nexus and rally the final counter-assault.',
    telemetry: { elev: '580M', target: 'ALLIED BASE TURRET' },
    audioId: 'nexus'
  }
];

// Exact MLBB 16:9 Map Coordinates for Key Tactical Objectives
const TACTICAL_MARKERS = [
  {
    id: 'lord_pit',
    code: 'OBJ-01',
    name: "The Lord's Pit",
    role: 'Top-Left River Alcove (8:00 / 12:00)',
    pos: [-36, 22, 2.5],
    color: '#a855f7',
    progress: 0.60
  },
  {
    id: 'turtle_nest',
    code: 'OBJ-02',
    name: "The Turtle's Nest",
    role: 'Bottom-Right River Alcove',
    pos: [34, -18, 2.0],
    color: '#06b6d4',
    progress: 0.60
  },
  {
    id: 'enemy_turret',
    code: 'TURRET-RED',
    name: 'Enemy Mid Turret',
    role: 'Abyssal Inhibitor',
    pos: [36, 16, 2.2],
    color: '#ef4444',
    progress: 0.25
  },
  {
    id: 'mid_crucible',
    code: 'RIVER-01',
    name: 'Mid-Lane Bridge',
    role: 'Central Clash Point',
    pos: [0, 0, 1.6],
    color: '#f59e0b',
    progress: 0.60
  },
  {
    id: 'allied_turret',
    code: 'TURRET-BLUE',
    name: 'Allied Mid Turret',
    role: 'Moniyan Inhibitor',
    pos: [-34, -14, 2.2],
    color: '#38bdf8',
    progress: 1.0
  },
  {
    id: 'blue_nexus',
    code: 'BASE-BLUE',
    name: 'Moniyan Crystal Nexus',
    role: 'Allied Fountain Core',
    pos: [-44, -22, 3.0],
    color: '#38bdf8',
    progress: 1.0
  },
  {
    id: 'red_nexus',
    code: 'BASE-RED',
    name: 'Abyssal Volcanic Core',
    role: 'Enemy Fortress Nexus',
    pos: [44, 22, 3.0],
    color: '#ef4444',
    progress: 0.25
  }
];

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const markerRefs = useRef({});
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStageRef = useRef(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Animation & Camera Spline References
  const currentProgress = useRef(0.0);
  const targetProgress = useRef(0.0);
  const dragStart = useRef({ x: 0, y: 0 });
  const rotTarget = useRef({ x: 0, y: 0 });
  const rotCurrent = useRef({ x: 0, y: 0 });

  // 3D Scene References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const beaconGroupRef = useRef(null);
  const pulsesRef = useRef([]);

  // 3D Smooth Spline Trajectories: Overview -> Enemy Turret -> Mid Lane -> Allied Base Turret
  const camSpline = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -36, 52),     // 0.0: Majestic Aerial Overview of the whole 16:9 map
      new THREE.Vector3(38, 14, 15.0),   // 0.25: Enemy Base & Inhibitor Turret
      new THREE.Vector3(20, 6, 13.0),    // 0.45: Down Enemy Mid Lane
      new THREE.Vector3(0, -4, 11.5),    // 0.60: Floating over Mid River Crossing (Lord on left, Turtle on right)
      new THREE.Vector3(-18, -10, 12.0), // 0.80: Over Allied Outer Mid Turret
      new THREE.Vector3(-36, -14, 14.0)  // 1.0: Hovering before Allied Base Turret & Nexus
    ]);
  }, []);

  const lookSpline = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),        // 0.0: Looking at the center of the battlefield
      new THREE.Vector3(28, 8, 2.0),     // 0.25: Looking down Mid Lane toward center
      new THREE.Vector3(12, 3, 1.2),     // 0.45: Looking along cobblestone road
      new THREE.Vector3(0, 0, 0.8),      // 0.60: Looking at river bridge
      new THREE.Vector3(-16, -8, 1.5),   // 0.80: Looking toward allied base
      new THREE.Vector3(-44, -22, 2.5)   // 1.0: Looking at Allied Nexus Core
    ]);
  }, []);

  const activeStage = TACTICAL_STAGES[activeStageIndex] || TACTICAL_STAGES[0];

  // Glide smoothly to a specific stage
  const handleGlideToStage = useCallback((stageIdx) => {
    const safeIdx = Math.max(0, Math.min(TACTICAL_STAGES.length - 1, stageIdx));
    activeStageRef.current = safeIdx;
    setActiveStageIndex(safeIdx);
    targetProgress.current = TACTICAL_STAGES[safeIdx].progress;
    audioManager.playBattlefieldSwell(TACTICAL_STAGES[safeIdx].audioId);
  }, []);

  // Marker click handler
  const handleMarkerClick = (marker) => {
    targetProgress.current = marker.progress;
    audioManager.playBattlefieldSwell(marker.id === 'lord_pit' ? 'lord' : marker.id.includes('nexus') ? 'nexus' : 'crucible');
  };

  // Audio toggle
  const handleToggleSound = () => {
    const isPlaying = audioManager.toggleMusic();
    setIsAudioActive(isPlaying);
    if (isPlaying) {
      audioManager.playBattlefieldSwell(activeStage.audioId);
    }
  };

  // Scroll to page sections
  const scrollToSection = (id) => {
    audioManager.playClick();
    const el = document.querySelector(id);
    if (el) {
      const navOffset = 70;
      const elementPos = el.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    }
  };

  // Wheel listener: Glides camera from Overview -> Enemy Turret -> Mid Lane -> Allied Base
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // If at allied base (progress ~ 1.0) and scrolling down, let the page scroll naturally to heroes
      if (currentProgress.current >= 0.96 && e.deltaY > 0) {
        return;
      }
      // If at overview (progress ~ 0.0) and scrolling up at top of page, let it be natural
      if (currentProgress.current <= 0.04 && e.deltaY < 0 && window.scrollY === 0) {
        return;
      }

      // If user is within the hero section, wheel glides through midlane
      if (window.scrollY < window.innerHeight * 0.4) {
        e.preventDefault();
        const sensitivity = 0.0014;
        targetProgress.current = Math.max(0, Math.min(1.0, targetProgress.current + e.deltaY * sensitivity));
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  // Three.js 3D Battlefield Engine Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // 1. Scene & Deep Overworld Atmosphere (#13151f)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x13151f);
    scene.fog = new THREE.FogExp2(0x13151f, 0.005);
    sceneRef.current = scene;

    // 2. Camera: Wide-angle perspective sized to fill widescreen monitors edge-to-edge
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.5, 1200);
    const startCamPos = camSpline.getPointAt(0);
    const startLook = lookSpline.getPointAt(0);
    camera.position.copy(startCamPos);
    camera.lookAt(startLook);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;

    // 4. Lighting Rig (Bright, Lush, High-Contrast Game Arena Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffaea, 3.0);
    sunLight.position.set(25, -25, 55);
    scene.add(sunLight);

    const riverCyanLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    riverCyanLight.position.set(-45, 35, 30);
    scene.add(riverCyanLight);

    // 5. Authentic 16:9 MLBB Imperial Sanctuary Match Map Plane
    const textureLoader = new THREE.TextureLoader();
    const mapTexture = textureLoader.load('/assets/images/mlbb_match_map.jpg', () => {
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    });

    // Texture settings for razor sharpness
    mapTexture.colorSpace = THREE.SRGBColorSpace;
    mapTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    mapTexture.generateMipmaps = true;
    mapTexture.minFilter = THREE.LinearMipmapLinearFilter;
    mapTexture.magFilter = THREE.LinearFilter;
    mapTexture.wrapS = THREE.ClampToEdgeWrapping;
    mapTexture.wrapT = THREE.ClampToEdgeWrapping;

    // Sized 16:9 (128 x 72) with fallback emerald-slate color so it never flashes black
    const planeGeo = new THREE.PlaneGeometry(128, 72, 1, 1);
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: mapTexture,
      roughness: 0.45,
      metalness: 0.1
    });
    const mapMesh = new THREE.Mesh(planeGeo, planeMat);
    scene.add(mapMesh);

    // Surrounding Extended Fantasy Terrain Plane (Eliminates ANY black borders on ultra-wides)
    const extendedGeo = new THREE.PlaneGeometry(260, 160, 1, 1);
    const extendedMat = new THREE.MeshStandardMaterial({
      color: 0x09141c,
      roughness: 0.95,
      metalness: 0.2
    });
    const extendedMesh = new THREE.Mesh(extendedGeo, extendedMat);
    extendedMesh.position.z = -1.2;
    scene.add(extendedMesh);

    // Celestial bedrock block under the arena
    const slabGeo = new THREE.BoxGeometry(130, 74, 3.5);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x090c14,
      roughness: 0.88,
      metalness: 0.35
    });
    const slabMesh = new THREE.Mesh(slabGeo, slabMat);
    slabMesh.position.z = -1.8;
    scene.add(slabMesh);

    // 6. Interactive 3D Tactical Beacons & Key Arena Relics
    const beaconGroup = new THREE.Group();
    beaconGroupRef.current = beaconGroup;
    scene.add(beaconGroup);

    TACTICAL_MARKERS.forEach((m) => {
      const bColor = new THREE.Color(m.color);

      // Core Floating Crystal Jewel
      const jewelGeo = new THREE.OctahedronGeometry(1.25, 0);
      const jewelMat = new THREE.MeshStandardMaterial({
        color: bColor,
        emissive: bColor,
        emissiveIntensity: 1.2,
        roughness: 0.1,
        metalness: 0.9
      });
      const jewel = new THREE.Mesh(jewelGeo, jewelMat);
      jewel.position.set(m.pos[0], m.pos[1], m.pos[2]);
      jewel.userData = { id: m.id, baseZ: m.pos[2] };
      beaconGroup.add(jewel);

      // Spinning Concentric Orbital Ring
      const ringGeo = new THREE.TorusGeometry(2.1, 0.08, 8, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: bColor,
        transparent: true,
        opacity: 0.75
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(m.pos[0], m.pos[1], m.pos[2]);
      ring.rotation.x = Math.PI / 3;
      ring.userData = { isRing: true };
      beaconGroup.add(ring);

      // Holographic Light Beam rising upward
      const beamGeo = new THREE.CylinderGeometry(0.3, 0.75, 28, 16, 1, true);
      const beamMat = new THREE.MeshBasicMaterial({
        color: bColor,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(m.pos[0], m.pos[1], m.pos[2] + 14);
      beam.rotation.x = Math.PI / 2;
      beaconGroup.add(beam);

      // Ground Shockwave Radar Wave
      const waveGeo = new THREE.RingGeometry(0.8, 1.3, 32);
      const waveMat = new THREE.MeshBasicMaterial({
        color: bColor,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide
      });
      const wave = new THREE.Mesh(waveGeo, waveMat);
      wave.position.set(m.pos[0], m.pos[1], m.pos[2] - 0.9);
      wave.userData = { scale: 1.0, maxScale: 4.8, speed: 0.035 };
      beaconGroup.add(wave);
      pulsesRef.current.push(wave);

      // PointLight casting colored illumination onto the lane & river
      const light = new THREE.PointLight(m.color, 4.5, 28);
      light.position.set(m.pos[0], m.pos[1], m.pos[2] + 1.2);
      beaconGroup.add(light);
    });

    // 7. Volumetric Cosmic Starfield
    const starCount = 1200;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 350;
      starPos[i + 1] = (Math.random() - 0.5) * 350;
      starPos[i + 2] = Math.random() * 80 + 10;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xaab9c7,
      size: 0.8,
      transparent: true,
      opacity: 0.65
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Drifting mana embers over the arena
    const emberCount = 300;
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPos[i] = (Math.random() - 0.5) * 100;
      emberPos[i + 1] = (Math.random() - 0.5) * 60;
      emberPos[i + 2] = Math.random() * 16 + 1;
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const emberMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.65,
      transparent: true,
      opacity: 0.55
    });
    const emberField = new THREE.Points(emberGeo, emberMat);
    scene.add(emberField);

    // 8. Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop (60-120fps Steadicam Glide - Zero React State Churn)
    let animationFrameId;
    let clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();
    const curLookAt = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous Buttery Smooth Camera Interpolation along Mid-Lane Spline
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.065;
      const clampedProg = Math.max(0, Math.min(1.0, currentProgress.current));

      // Compute current stage index based on progress (updates ref first to avoid setState loops)
      let stageIdx = 0;
      if (clampedProg < 0.15) stageIdx = 0;
      else if (clampedProg < 0.45) stageIdx = 1;
      else if (clampedProg < 0.80) stageIdx = 2;
      else stageIdx = 3;

      if (stageIdx !== activeStageRef.current) {
        activeStageRef.current = stageIdx;
        setActiveStageIndex(stageIdx);
      }

      // Sample camera positions from 3D spline
      const camPos = camSpline.getPointAt(clampedProg);
      const lookAtPos = lookSpline.getPointAt(clampedProg);

      // Subtle Drag/Parallax tilt offset
      rotCurrent.current.x += (rotTarget.current.x - rotCurrent.current.x) * 0.06;
      rotCurrent.current.y += (rotTarget.current.y - rotCurrent.current.y) * 0.06;

      camera.position.set(
        camPos.x + rotCurrent.current.x * 2.5,
        camPos.y + rotCurrent.current.y * 2.5,
        camPos.z
      );

      curLookAt.lerp(lookAtPos, 0.07);
      camera.lookAt(curLookAt);

      // Animate beacon crystals & rings
      beaconGroup.children.forEach((child) => {
        if (child.isMesh && child.geometry.type === 'OctahedronGeometry') {
          child.rotation.y += delta * 1.5;
          child.rotation.x += delta * 0.7;
          child.position.z = child.userData.baseZ + Math.sin(time * 2.5) * 0.4;
        } else if (child.isMesh && child.userData.isRing) {
          child.rotation.z += delta * 1.8;
        }
      });

      // Expand shockwaves
      pulsesRef.current.forEach((wave) => {
        wave.userData.scale += wave.userData.speed;
        if (wave.userData.scale > wave.userData.maxScale) {
          wave.userData.scale = 1.0;
        }
        wave.scale.set(wave.userData.scale, wave.userData.scale, 1.0);
        wave.material.opacity = Math.max(
          0,
          1.0 - wave.userData.scale / wave.userData.maxScale
        ) * 0.85;
      });

      // Twinkle & drift stars/embers
      starField.rotation.z = time * 0.005;
      emberField.rotation.z = -time * 0.008;

      // Direct DOM Update for 2D HTML Screen Coordinates (Zero React State Re-renders)
      TACTICAL_MARKERS.forEach((m) => {
        const el = markerRefs.current[m.id];
        if (!el) return;

        tempVec.set(m.pos[0], m.pos[1], m.pos[2]);
        tempVec.applyMatrix4(scene.matrixWorld);
        tempVec.project(camera);

        const x = (tempVec.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
        const y = (-tempVec.y * 0.5 + 0.5) * renderer.domElement.clientHeight;
        const isVisible = tempVec.z < 1.0 && x > 20 && x < renderer.domElement.clientWidth - 20;

        if (isVisible) {
          el.style.display = 'block';
          el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -100%)`;
        } else {
          el.style.display = 'none';
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      mapTexture.dispose();
    };
  }, [camSpline, lookSpline]);

  // Pointer Drag Interaction for Parallax Tilt
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - dragStart.current.x) * 0.003;
    const deltaY = (e.clientY - dragStart.current.y) * 0.003;

    rotTarget.current.x = Math.max(-0.6, Math.min(0.6, rotTarget.current.x + deltaX));
    rotTarget.current.y = Math.max(-0.4, Math.min(0.4, rotTarget.current.y + deltaY));

    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#13151f] text-[#e9ecee] select-none is-scene-pannable ${
        isDragging ? 'is-scene-grabbing' : ''
      }`}
    >
      {/* 1. Full-Bleed 16:9 3D WebGL MLBB Match Map Canvas (Zero Empty Space) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-auto" />

      {/* 2. Soft Edge Atmospheric Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#13151f]/10 to-[#13151f]/75 pointer-events-none z-10" />

      {/* 3. Top Atmospheric Gradient Shield */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#13151f]/90 via-[#13151f]/40 to-transparent pointer-events-none z-15" />

      {/* 4. Overworld Fixed Hero Anchor & Minimal Editorial Headline (.hero-anchor) */}
      <div className="absolute top-[max(18vh,5rem)] left-1/2 -translate-x-1/2 w-[95%] max-w-[95vw] grid grid-cols-12 gap-4 pointer-events-none z-20">
        <div className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 pl-2 sm:pl-4 transition-all duration-500">
          {/* Minimal Stage Tag */}
          <div className="ts-b text-[#6e8799] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{activeStage.tag}</span>
          </div>

          {/* Editorial Serif Headline (Minimal, Refined, Transitions Smoothly as you Glide) */}
          <h1 className="h1-overworld text-[#e9ecee] font-serif max-w-[22rem] sm:max-w-[26rem] drop-shadow-xl font-medium transition-all duration-300">
            {activeStage.headline}
          </h1>

          {/* Minimal Editorial Subtitle */}
          <p className="mt-2 text-xs sm:text-[13px] text-[#aab9c7] font-sans leading-relaxed max-w-md hidden sm:block">
            {activeStage.subtitle}
          </p>
        </div>
      </div>

      {/* 5. Projected 2D Floating Hotspot Badges on 3D Match Map (Direct GPU Transform, Zero State Churn) */}
      <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
        {TACTICAL_MARKERS.map((marker) => {
          return (
            <div
              key={marker.id}
              ref={(el) => (markerRefs.current[marker.id] = el)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'none',
                willChange: 'transform'
              }}
              className="pointer-events-auto cursor-pointer group"
              onClick={() => handleMarkerClick(marker)}
            >
              {/* Radar Pulse Wave */}
              <div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full border border-white/30 pointer-events-none group-hover:border-amber-400 group-hover:animate-ping"
              />

              {/* Overworld-Style Minimalist Hotspot Badge */}
              <div
                className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border bg-[#13151f]/85 border-white/20 text-[#e9ecee] hover:border-amber-400/80 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: marker.color }}
                />
                <span className="ts-a font-semibold whitespace-nowrap">
                  {marker.name}
                </span>
                <span className="text-[9px] font-mono text-[#6e8799] hidden group-hover:inline-block">
                  [{marker.code}]
                </span>
              </div>

              {/* Hotspot Stem */}
              <div className="w-[1.5px] h-3 bg-gradient-to-b from-amber-400 to-transparent mx-auto opacity-70" />
            </div>
          );
        })}
      </div>

      {/* 6. Overworld Fixed Bottom Chrome (.page-bottom) */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none pb-[var(--chrome-bottom,2.6rem)]">
        {/* Soft Radial Dark Blob behind bottom text (.project-blob) */}
        <div className="project-blob" />

        {/* Bottom Chrome Elements Grid */}
        <div className="w-[95%] max-w-[95vw] mx-auto flex items-end justify-between relative z-20">
          
          {/* Bottom-Left CTA Button (.cta) */}
          <div className="pointer-events-auto">
            <button
              onClick={() => scrollToSection('#heroes')}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-[0.25rem] border border-white/15 bg-[#13151f]/85 hover:bg-[#13151f] text-[#e9ecee] hover:border-white/35 transition-all duration-300 shadow-xl cursor-pointer"
              title="Explore all 133 heroes in the archive"
            >
              {/* 3-Bar Bullet Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                fill="none"
                viewBox="0 0 9 7"
                className="text-[#6e8799] group-hover:text-amber-400 transition-colors"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.059 5c.584 0 1.059.449 1.059 1s-.475 1-1.06 1C.476 7 0 6.551 0 6s.475-1 1.059-1M9 5.5v1H3.176v-1zm-7.941-3c.584 0 1.059.449 1.059 1s-.475 1-1.06 1C.476 4.5 0 4.051 0 3.5s.475-1 1.059-1M9 3v1H3.176V3zM1.059 0c.584 0 1.059.448 1.059 1s-.475 1-1.06 1C.476 2 0 1.552 0 1s.475-1 1.059-1M9 .5v1H3.176v-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ts-b tracking-[0.25em] text-[#e9ecee]">
                Explore Archive (133)
              </span>
            </button>
          </div>

          {/* Bottom-Center Mid-Lane Flight Navigation (.project-bar) */}
          <div className="flex flex-col items-center text-center pointer-events-auto max-w-lg px-2">
            <div className="ts-a text-[#6e8799] mb-1 tracking-widest uppercase">
              MID-LANE FLIGHT // {activeStage.code} • {activeStage.telemetry.target}
            </div>

            <div className="mb-2">
              <h2 className="h2-overworld text-[#e9ecee] drop-shadow-md">
                {activeStage.headline}
              </h2>
            </div>

            {/* Overworld Stage Switcher Dots & Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleGlideToStage(activeStageIndex - 1)}
                className="p-1.5 rounded-full border border-white/10 hover:border-white/30 text-[#6e8799] hover:text-[#e9ecee] transition-colors cursor-pointer"
                title="Glide Backward"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {/* 4 Interactive Mid-Lane Stage Dots */}
              <div className="flex items-center gap-1.5">
                {TACTICAL_STAGES.map((s, idx) => {
                  const isSelected = activeStageIndex === idx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleGlideToStage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isSelected ? 'w-6 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      title={`Glide to ${s.tag}`}
                    />
                  );
                })}
              </div>

              <button
                onClick={() => handleGlideToStage(activeStageIndex + 1)}
                className="p-1.5 rounded-full border border-white/10 hover:border-white/30 text-[#6e8799] hover:text-[#e9ecee] transition-colors cursor-pointer"
                title="Glide Forward"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[#4c5e6b]">•</span>

              <button
                onClick={() => handleGlideToStage(0)}
                className="ts-b text-[#6e8799] hover:text-[#e9ecee] cursor-pointer"
                title="Reset to Full Aerial Overview"
              >
                OVERVIEW
              </button>

              <span className="text-[#4c5e6b]">•</span>

              <button
                onClick={() => handleGlideToStage(1)}
                className="ts-b text-[#6e8799] hover:text-rose-400 cursor-pointer"
                title="Glide to Enemy Turret"
              >
                ENEMY
              </button>

              <span className="text-[#4c5e6b]">•</span>

              <button
                onClick={() => handleGlideToStage(3)}
                className="ts-b text-amber-400 hover:text-amber-300 cursor-pointer"
                title="Glide to Allied Base"
              >
                MY BASE
              </button>
            </div>
          </div>

          {/* Bottom-Right Scene Hint (.scene-hint) */}
          <div className="pointer-events-none text-right hidden sm:block">
            <p className="ts-a text-[#6e8799] leading-relaxed">
              Scroll or drag to navigate.
              <br />
              Enemy turret → Mid-lane → Base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
