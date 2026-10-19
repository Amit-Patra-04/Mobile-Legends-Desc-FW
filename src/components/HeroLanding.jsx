import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  Volume2,
  VolumeX,
  ChevronRight,
  ChevronLeft,
  Shield,
  Swords,
  AlertTriangle,
  Flame,
  Zap,
  Crosshair,
  MapPin,
  Sparkles,
  Compass
} from 'lucide-react';
import { audioManager } from '../utils/audio';

// 4 Curated Mid-Lane Cinematic Stages from Enemy Turret to Allied Base Turret
const TACTICAL_STAGES = [
  {
    id: 'overview',
    code: '01',
    roman: 'I',
    progress: 0.0,
    tag: 'SANCTUARY // FULL SECTOR',
    titlePrefix: 'The Sovereign',
    titleMain: 'PROVING GROUNDS',
    subtitle: 'Three contested corridors carved through primordial stone, where celestial magic and abyssal sorcery converge under the eternal gaze of the Land of Dawn.',
    telemetry: { elev: '5,400M', coord: "LAT 04°21'N • 114°55'E", sector: 'IMPERIAL SCAN' },
    audioId: 'overview'
  },
  {
    id: 'enemy_turret',
    code: '02',
    roman: 'II',
    progress: 0.30,
    tag: 'ABYSSAL PERIMETER // RED INHIBITOR',
    titlePrefix: 'The Obsidian',
    titleMain: 'CRIMSON BASTION',
    subtitle: 'Formidable outer defense bastions bristling with void fire. Breaching the tier-three inhibitors requires decisive tactical coordination and siege command.',
    telemetry: { elev: '1,420M', coord: "LAT 06°12'N • 116°08'E", sector: 'RED T3 INHIBITOR' },
    audioId: 'crucible'
  },
  {
    id: 'river_crucible',
    code: '03',
    roman: 'III',
    progress: 0.65,
    tag: 'THE CRUCIBLE // RIVER CROSSING',
    titlePrefix: 'Where Destinies',
    titleMain: 'CLASH IN THE MIST',
    subtitle: "The strategic pivot of the Land of Dawn. Flanked by the Lord's ancient sanctum to the north and the slumbering Turtle grotto to the south.",
    telemetry: { elev: '920M', coord: "LAT 05°00'N • 115°30'E", sector: 'RIVER & ANCIENT BOSS PITS' },
    audioId: 'lord'
  },
  {
    id: 'allied_turret',
    code: '04',
    roman: 'IV',
    progress: 1.0,
    tag: 'MONIYAN CITADEL // BLUE CORE',
    titlePrefix: 'Shield the Divine',
    titleMain: 'CORE NEXUS',
    subtitle: 'The pulsing crystalline heart of the Moniyan Empire. Radiant defensive pylons stand vigil against the encroaching darkness.',
    telemetry: { elev: '620M', coord: "LAT 03°45'N • 114°10'E", sector: 'ALLIED DIVINE NEXUS' },
    audioId: 'nexus'
  }
];

// Exact MLBB Official Reference Map Coordinates on the Horizontal X-Z Plane
const TACTICAL_MARKERS = [
  {
    id: 'blue_nexus',
    code: 'NEXUS-01',
    name: 'Moniyan Core Nexus',
    tier: 'SOVEREIGN CORE',
    status: 'ACTIVE',
    worldPos: [-38.2, 2.2, 17.8],
    color: '#38bdf8',
    progress: 1.0
  },
  {
    id: 'allied_turret',
    code: 'TURRET-01',
    name: 'Allied Mid Inhibitor',
    tier: 'T3 INHIBITOR',
    status: 'ACTIVE',
    worldPos: [-28.2, 2.2, 12.2],
    color: '#38bdf8',
    progress: 1.0
  },
  {
    id: 'mid_crucible',
    code: 'CHOKE-01',
    name: 'Mid Stone Bridge',
    tier: 'CONVERGENCE',
    status: 'CONTESTED',
    worldPos: [0, 0.8, 0],
    color: '#f3d288',
    progress: 0.65
  },
  {
    id: 'lord_pit',
    code: 'BOSS-01',
    name: "The Lord's Grotto",
    tier: 'SANCTUARY LORD',
    status: 'READY',
    worldPos: [-18, 1.0, -11],
    color: '#c084fc',
    progress: 0.65
  },
  {
    id: 'turtle_nest',
    code: 'OBJ-02',
    name: "The Turtle Grotto",
    tier: 'CELESTIAL TURTLE',
    status: 'SHIELD BUFF',
    worldPos: [18, 1.0, 11],
    color: '#38bdf8',
    progress: 0.65
  },
  {
    id: 'enemy_turret',
    code: 'TURRET-02',
    name: 'Enemy Mid Inhibitor',
    tier: 'T3 INHIBITOR',
    status: 'ACTIVE',
    worldPos: [28.2, 2.2, -12.2],
    color: '#f43f5e',
    progress: 0.30
  },
  {
    id: 'red_nexus',
    code: 'NEXUS-02',
    name: 'Abyssal Fortress Core',
    tier: 'SOVEREIGN CORE',
    status: 'FORTIFIED',
    worldPos: [38.2, 2.2, -17.8],
    color: '#f43f5e',
    progress: 0.30
  }
];

export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const markerRefs = useRef({});
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStageRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activePing, setActivePing] = useState(null);

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

  // MATHEMATICALLY STABLE CAMERA FLIGHT:
  // Viewing direction vector is 100% LOCKED to a constant orientation along the Mid-Lane!
  // CameraPos(progress) = TargetPos(progress) + VIEW_DIR * Distance(progress)
  // Because the viewing ray is strictly constant, pitch and yaw never twist or wobble:
  // ZERO uneven tilt, ZERO sideways roll, buttery-smooth cinematic track!
  const VIEW_DIR = useMemo(() => {
    return new THREE.Vector3(7.0, 19.5, 23.5).normalize();
  }, []);

  // Mid-Lane Target Spline: Smoothly guides focus along the Mid-Lane from Enemy Base to Allied Base
  const targetSpline = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),          // 0.0: Center of Battlefield (Overview)
      new THREE.Vector3(28.2, 0.2, -12.2), // 0.30: Enemy Base Inhibitor Turret
      new THREE.Vector3(14.0, 0.1, -6.0),  // 0.48: Enemy Outer Mid Turret
      new THREE.Vector3(0, 0.05, 0),        // 0.65: Mid-Lane River Crossing (Lord left, Turtle right)
      new THREE.Vector3(-14.0, 0.1, 6.0),  // 0.82: Allied Outer Mid Turret
      new THREE.Vector3(-28.2, 0.2, 12.2)  // 1.0: Allied Base Inhibitor Turret & Nexus
    ]);
  }, []);

  // Distance curve: Controls camera zoom level at each stage (optimal MOBA viewing distance)
  const getCameraDistance = (prog) => {
    if (prog <= 0.30) {
      const t = prog / 0.30;
      const smooth = t * t * (3 - 2 * t);
      return 52 - smooth * 24; // Overview: 52 -> Enemy Base Turret: 28
    } else if (prog <= 0.65) {
      const t = (prog - 0.30) / 0.35;
      const smooth = t * t * (3 - 2 * t);
      return 28 - smooth * 4;  // Enemy Base: 28 -> River Crucible: 24
    } else {
      const t = (prog - 0.65) / 0.35;
      const smooth = t * t * (3 - 2 * t);
      return 24 + smooth * 4;  // River: 24 -> Allied Base Turret: 28
    }
  };

  const activeStage = TACTICAL_STAGES[activeStageIndex] || TACTICAL_STAGES[0];

  // Glide smoothly to a specific stage by scrolling the window track
  const handleGlideToStage = useCallback((stageIdx) => {
    const safeIdx = Math.max(0, Math.min(TACTICAL_STAGES.length - 1, stageIdx));
    activeStageRef.current = safeIdx;
    setActiveStageIndex(safeIdx);
    const targetProg = TACTICAL_STAGES[safeIdx].progress;
    targetProgress.current = targetProg;

    const track = trackRef.current;
    if (track) {
      const trackTop = track.getBoundingClientRect().top + window.pageYOffset;
      const totalScrollable = track.offsetHeight - window.innerHeight;
      const targetScrollY = trackTop + targetProg * totalScrollable;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
    audioManager.playBattlefieldSwell(TACTICAL_STAGES[safeIdx].audioId);
  }, []);

  // Marker click handler: smoothly glides directly to that marker's lane location
  const handleMarkerClick = (marker) => {
    targetProgress.current = marker.progress;
    const track = trackRef.current;
    if (track) {
      const trackTop = track.getBoundingClientRect().top + window.pageYOffset;
      const totalScrollable = track.offsetHeight - window.innerHeight;
      const targetScrollY = trackTop + marker.progress * totalScrollable;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
    audioManager.playBattlefieldSwell(
      marker.id === 'lord_pit' ? 'lord' : marker.id.includes('nexus') ? 'nexus' : 'crucible'
    );
  };

  // Ping button trigger (Attack / Defend / Retreat)
  const handleTriggerPing = (type) => {
    audioManager.playClick();
    setActivePing(type);
    setTimeout(() => setActivePing(null), 2500);
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

  // Passive window scroll listener: tracks position along 380vh runway without hijacking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const track = trackRef.current;
          if (track) {
            const rect = track.getBoundingClientRect();
            const totalScrollable = rect.height - window.innerHeight;
            if (totalScrollable > 0) {
              const progress = Math.max(0, Math.min(1.0, -rect.top / totalScrollable));
              targetProgress.current = progress;
              setScrollProgress(progress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle natural mouse parallax (ambient 3D gyro tilt)
  useEffect(() => {
    const handlePointerMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.45;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.35;
      rotTarget.current.x = x;
      rotTarget.current.y = y;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Three.js 3D Battlefield Engine Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    // 1. Scene & Authentic MLBB Map Atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060a14); // Deep celestial space
    scene.fog = new THREE.FogExp2(0x0a101f, 0.0028);
    sceneRef.current = scene;

    // 2. Camera Setup (Strictly perpendicular up vector ensures ZERO roll tilt!)
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.5, 2500);
    camera.up.set(0, 1, 0); // World Up is strictly Y-axis!
    
    // Initial camera position from mathematical formula
    const initTarget = targetSpline.getPointAt(0);
    const initDist = getCameraDistance(0);
    camera.position.copy(initTarget).addScaledVector(VIEW_DIR, initDist);
    camera.lookAt(initTarget);
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
    renderer.toneMappingExposure = 1.05;
    rendererRef.current = renderer;

    // 4. Lighting Rig (High-End MOBA Arena Game Lighting - Rich Contrast, True Colors)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.92);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.25);
    sunLight.position.set(35, 70, 30);
    scene.add(sunLight);

    const moniyanFill = new THREE.DirectionalLight(0x38bdf8, 0.45);
    moniyanFill.position.set(-50, 30, 40);
    scene.add(moniyanFill);

    const abyssalFill = new THREE.DirectionalLight(0xf43f5e, 0.45);
    abyssalFill.position.set(50, 30, -40);
    scene.add(abyssalFill);

    // 5. Official MLBB Reference Map Texture (4K Ultra-Definition with Anisotropic Filtering)
    const textureLoader = new THREE.TextureLoader();
    const mapTexture = textureLoader.load('/assets/images/mlbb_official_map_reference_4k.jpg', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 16);
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.needsUpdate = true;
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
    });

    mapTexture.colorSpace = THREE.SRGBColorSpace;
    mapTexture.anisotropy = 16;
    mapTexture.generateMipmaps = true;
    mapTexture.minFilter = THREE.LinearMipmapLinearFilter;
    mapTexture.magFilter = THREE.LinearFilter;
    mapTexture.wrapS = THREE.ClampToEdgeWrapping;
    mapTexture.wrapT = THREE.ClampToEdgeWrapping;

    // 6. 3D TERRAIN SURFACE (Pristine 4K MLBB Official Reference Map)
    // Smooth planar surface ensures zero UV stretching, zero jagged normal creases,
    // and displays the official 4K artwork with 100% pixel-perfect clarity.
    const terrainGeo = new THREE.PlaneGeometry(120, 66.182, 32, 18);
    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: mapTexture,
      roughness: 0.94,
      metalness: 0.0
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.rotation.x = -Math.PI / 2; // Horizontal X-Z plane!
    scene.add(terrainMesh);

    // 7. SIDES OF THE MAP (Vertical Bedrock Bastion Foundation)
    const foundationGeo = new THREE.BoxGeometry(124, 32.0, 70.0);
    const foundationMat = new THREE.MeshStandardMaterial({
      color: 0x121924,
      roughness: 0.9,
      metalness: 0.2
    });
    const foundationMesh = new THREE.Mesh(foundationGeo, foundationMat);
    foundationMesh.position.y = -16.0;
    scene.add(foundationMesh);

    // Cascading Edge Waterfalls
    const waterfallMat = new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      roughness: 0.1,
      transparent: true,
      opacity: 0.75
    });
    const wfGeo = new THREE.PlaneGeometry(8.0, 30.0);
    const wfLeft = new THREE.Mesh(wfGeo, waterfallMat);
    wfLeft.position.set(-52, -14, -28);
    wfLeft.rotation.y = Math.PI / 4;
    scene.add(wfLeft);

    const wfRight = new THREE.Mesh(wfGeo, waterfallMat);
    wfRight.position.set(52, -14, 28);
    wfRight.rotation.y = -Math.PI / 4;
    scene.add(wfRight);

    // 10. ICONIC CORNER ATMOSPHERIC AURAS (Exact match to official MLBB Reference!)
    // A. Abyssal Crimson Plasma Cloud (Top-Right / North-East Corner)
    const abyssalAuraCanvas = document.createElement('canvas');
    abyssalAuraCanvas.width = 512;
    abyssalAuraCanvas.height = 512;
    const aCtx = abyssalAuraCanvas.getContext('2d');
    const aGrad = aCtx.createRadialGradient(256, 256, 30, 256, 256, 256);
    aGrad.addColorStop(0.0, 'rgba(239, 68, 68, 0.85)');
    aGrad.addColorStop(0.35, 'rgba(220, 38, 38, 0.65)');
    aGrad.addColorStop(0.70, 'rgba(153, 27, 27, 0.35)');
    aGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    aCtx.fillStyle = aGrad;
    aCtx.fillRect(0, 0, 512, 512);

    const abyssalAuraTex = new THREE.CanvasTexture(abyssalAuraCanvas);
    const abyssalAuraGeo = new THREE.PlaneGeometry(90, 75);
    const abyssalAuraMat = new THREE.MeshBasicMaterial({
      map: abyssalAuraTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const abyssalAura = new THREE.Mesh(abyssalAuraGeo, abyssalAuraMat);
    abyssalAura.position.set(55, 12, -32);
    abyssalAura.rotation.y = -Math.PI / 4;
    scene.add(abyssalAura);

    // B. Moniyan Celestial Cyan Light Beam (Bottom-Left / South-West Corner)
    const moniyanAuraCanvas = document.createElement('canvas');
    moniyanAuraCanvas.width = 512;
    moniyanAuraCanvas.height = 512;
    const mCtx = moniyanAuraCanvas.getContext('2d');
    const mGrad = mCtx.createRadialGradient(256, 256, 30, 256, 256, 256);
    mGrad.addColorStop(0.0, 'rgba(56, 189, 248, 0.85)');
    mGrad.addColorStop(0.35, 'rgba(2, 132, 199, 0.65)');
    mGrad.addColorStop(0.70, 'rgba(12, 74, 110, 0.35)');
    mGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    mCtx.fillStyle = mGrad;
    mCtx.fillRect(0, 0, 512, 512);

    const moniyanAuraTex = new THREE.CanvasTexture(moniyanAuraCanvas);
    const moniyanAuraGeo = new THREE.PlaneGeometry(90, 75);
    const moniyanAuraMat = new THREE.MeshBasicMaterial({
      map: moniyanAuraTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const moniyanAura = new THREE.Mesh(moniyanAuraGeo, moniyanAuraMat);
    moniyanAura.position.set(-55, 12, 32);
    moniyanAura.rotation.y = -Math.PI / 4;
    scene.add(moniyanAura);

    // 11. 360-DEGREE ATMOSPHERIC SKYDOME
    const skydomeGeo = new THREE.SphereGeometry(950, 32, 16);
    skydomeGeo.scale(-1, 1, 1);
    
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1024;
    skyCanvas.height = 512;
    const skyCtx = skyCanvas.getContext('2d');
    const skyGrad = skyCtx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0.0, '#060a14'); // Deep Space Zenith
    skyGrad.addColorStop(0.40, '#0f172a'); // Celestial Slate
    skyGrad.addColorStop(0.70, '#1e293b'); // Horizon Dust
    skyGrad.addColorStop(1.0, '#090d16'); // Abyss Base
    skyCtx.fillStyle = skyGrad;
    skyCtx.fillRect(0, 0, 1024, 512);

    const skyTex = new THREE.CanvasTexture(skyCanvas);
    const skydomeMat = new THREE.MeshBasicMaterial({ map: skyTex });
    const skydome = new THREE.Mesh(skydomeGeo, skydomeMat);
    scene.add(skydome);

    // Vast Cloud Sea Beneath the Celestial Sanctuary
    const cloudSeaGeo = new THREE.PlaneGeometry(1200, 800);
    const cloudSeaMat = new THREE.MeshBasicMaterial({
      color: 0x111827,
      transparent: true,
      opacity: 0.75
    });
    const cloudSea = new THREE.Mesh(cloudSeaGeo, cloudSeaMat);
    cloudSea.rotation.x = -Math.PI / 2;
    cloudSea.position.y = -28.0;
    scene.add(cloudSea);

    // 12. AUTHENTIC MLBB DEFENSE TURRETS ACROSS ALL 3 LANES
    // Scaled precisely to the original Mobile Legends game proportions:
    // Base fits within the painted 1.8-unit stone foundation pad.
    // Sleek octagonal spire, golden eagle wings (Moniyan) or dragon claws (Abyssal),
    // levitating glowing power crystal, orbiting halo ring, and in-game defense attack range ground circle!
    const turretGroup = new THREE.Group();
    scene.add(turretGroup);

    const animatedTurrets = [];

    const ALL_TURRETS = [
      // MID LANE (Primary Clash Corridor)
      { id: 'mid_blue_t1', pos: [-10.2, 0.04, 4.4], color: 0x38bdf8, isRed: false, isOuter: true },
      { id: 'mid_blue_t2', pos: [-19.2, 0.04, 8.2], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'mid_blue_t3', pos: [-28.2, 0.04, 12.2], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'mid_red_t1',  pos: [10.2, 0.04, -4.4], color: 0xef4444, isRed: true, isOuter: true },
      { id: 'mid_red_t2',  pos: [19.2, 0.04, -8.2], color: 0xef4444, isRed: true, isOuter: false },
      { id: 'mid_red_t3',  pos: [28.2, 0.04, -12.2], color: 0xef4444, isRed: true, isOuter: false },

      // TOP LANE
      { id: 'top_blue_t1', pos: [-6.0, 0.04, -18.5], color: 0x38bdf8, isRed: false, isOuter: true },
      { id: 'top_blue_t2', pos: [-18.5, 0.04, -18.5], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'top_blue_t3', pos: [-31.0, 0.04, -13.5], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'top_red_t1',  pos: [6.0, 0.04, -18.5], color: 0xef4444, isRed: true, isOuter: true },
      { id: 'top_red_t2',  pos: [18.5, 0.04, -18.5], color: 0xef4444, isRed: true, isOuter: false },
      { id: 'top_red_t3',  pos: [31.0, 0.04, -18.5], color: 0xef4444, isRed: true, isOuter: false },

      // BOTTOM LANE
      { id: 'bot_blue_t1', pos: [-6.0, 0.04, 18.5], color: 0x38bdf8, isRed: false, isOuter: true },
      { id: 'bot_blue_t2', pos: [-18.5, 0.04, 18.5], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'bot_blue_t3', pos: [-31.0, 0.04, 18.5], color: 0x38bdf8, isRed: false, isOuter: false },
      { id: 'bot_red_t1',  pos: [6.0, 0.04, 18.5], color: 0xef4444, isRed: true, isOuter: true },
      { id: 'bot_red_t2',  pos: [18.5, 0.04, 18.5], color: 0xef4444, isRed: true, isOuter: false },
      { id: 'bot_red_t3',  pos: [31.0, 0.04, 13.5], color: 0xef4444, isRed: true, isOuter: false }
    ];

    // Shared Geometries & Materials scaled exactly to MLBB game proportions
    const tBaseT1Geo = new THREE.CylinderGeometry(0.72, 0.88, 0.18, 8);
    const tTrimGeo = new THREE.CylinderGeometry(0.74, 0.74, 0.04, 8);
    const tBaseT2Geo = new THREE.CylinderGeometry(0.52, 0.68, 0.18, 8);
    const tButtressGeo = new THREE.BoxGeometry(0.14, 0.32, 0.28);
    const tColGeo = new THREE.CylinderGeometry(0.32, 0.46, 1.35, 8);
    const tCapitalGeo = new THREE.CylinderGeometry(0.48, 0.35, 0.18, 8);
    const tWingGeo = new THREE.BoxGeometry(0.08, 0.75, 0.18);
    const tWingTipGeo = new THREE.ConeGeometry(0.06, 0.28, 4);
    const tCrystalGeo = new THREE.OctahedronGeometry(0.36, 0);
    const tHaloGeo = new THREE.TorusGeometry(0.55, 0.03, 8, 24);
    const tGroundRuneGeo = new THREE.RingGeometry(0.75, 0.92, 32);
    const tRangeCircleGeo = new THREE.RingGeometry(2.76, 2.84, 48);
    const tRangeInnerGeo = new THREE.RingGeometry(0.1, 2.76, 32);
    const tShieldGeo = new THREE.BoxGeometry(0.32, 0.52, 0.08);
    const tShieldEmblemGeo = new THREE.BoxGeometry(0.12, 0.12, 0.1);
    const tConduitGeo = new THREE.BoxGeometry(0.04, 1.25, 0.04);

    const blueStoneMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.65, metalness: 0.25 });
    const blueGoldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.85 });
    const redStoneMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.75, metalness: 0.3 });
    const redMetalMat = new THREE.MeshStandardMaterial({ color: 0x7f1d1d, roughness: 0.3, metalness: 0.8 });

    ALL_TURRETS.forEach((t, idx) => {
      const tower = new THREE.Group();
      const isRed = t.isRed;
      const tColor = new THREE.Color(t.color);
      const stoneMat = isRed ? redStoneMat : blueStoneMat;
      const trimMat = isRed ? redMetalMat : blueGoldMat;

      // 1. In-Game Turret Attack Range Circle on Ground
      const rangeMat = new THREE.MeshBasicMaterial({
        color: tColor,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide
      });
      const rangeCircle = new THREE.Mesh(tRangeCircleGeo, rangeMat);
      rangeCircle.rotation.x = -Math.PI / 2;
      rangeCircle.position.y = 0.02;
      tower.add(rangeCircle);

      const rangeInnerMat = new THREE.MeshBasicMaterial({
        color: tColor,
        transparent: true,
        opacity: 0.04,
        side: THREE.DoubleSide
      });
      const rangeInner = new THREE.Mesh(tRangeInnerGeo, rangeInnerMat);
      rangeInner.rotation.x = -Math.PI / 2;
      rangeInner.position.y = 0.015;
      tower.add(rangeInner);

      // 2. Base Pedestal Ground Runic Ring
      const groundRuneMat = new THREE.MeshBasicMaterial({
        color: tColor,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide
      });
      const groundRune = new THREE.Mesh(tGroundRuneGeo, groundRuneMat);
      groundRune.rotation.x = -Math.PI / 2;
      groundRune.position.y = 0.03;
      tower.add(groundRune);

      // 3. Stepped Plinths
      const base1 = new THREE.Mesh(tBaseT1Geo, stoneMat);
      base1.position.y = 0.09;
      tower.add(base1);

      const trim1 = new THREE.Mesh(tTrimGeo, trimMat);
      trim1.position.y = 0.19;
      tower.add(trim1);

      const base2 = new THREE.Mesh(tBaseT2Geo, stoneMat);
      base2.position.y = 0.28;
      tower.add(base2);

      for (let b = 0; b < 4; b++) {
        const ang = (b * Math.PI) / 2 + Math.PI / 4;
        const buttress = new THREE.Mesh(tButtressGeo, stoneMat);
        buttress.position.set(Math.cos(ang) * 0.58, 0.24, Math.sin(ang) * 0.58);
        buttress.rotation.y = -ang;
        tower.add(buttress);
      }

      // 4. Main Column Shaft & Power Conduits
      const col = new THREE.Mesh(tColGeo, stoneMat);
      col.position.y = 0.95;
      tower.add(col);

      const conduitMat = new THREE.MeshStandardMaterial({
        color: tColor,
        emissive: tColor,
        emissiveIntensity: 1.4
      });
      for (let c = 0; c < 4; c++) {
        const ang = (c * Math.PI) / 2;
        const conduit = new THREE.Mesh(tConduitGeo, conduitMat);
        conduit.position.set(Math.cos(ang) * 0.35, 0.95, Math.sin(ang) * 0.35);
        conduit.rotation.y = -ang;
        tower.add(conduit);
      }

      // 5. Capital Platform
      const capital = new THREE.Mesh(tCapitalGeo, stoneMat);
      capital.position.y = 1.7;
      tower.add(capital);

      // 6. Eagle Wings (Moniyan) / Dragon Claws (Abyssal)
      for (let w = 0; w < 4; w++) {
        const ang = (w * Math.PI) / 2;
        const wingPivot = new THREE.Group();
        wingPivot.position.set(0, 1.7, 0);
        wingPivot.rotation.y = ang;

        const wingArm = new THREE.Mesh(tWingGeo, trimMat);
        wingArm.position.set(0.42, 0.35, 0);
        wingArm.rotation.z = -0.22;

        const wingTip = new THREE.Mesh(tWingTipGeo, trimMat);
        wingTip.position.set(0.49, 0.78, 0);
        wingTip.rotation.z = 0.15;

        wingPivot.add(wingArm);
        wingPivot.add(wingTip);
        tower.add(wingPivot);
      }

      // 7. Levitating Power Crystal Core
      const crystalMat = new THREE.MeshStandardMaterial({
        color: tColor,
        emissive: tColor,
        emissiveIntensity: 2.2,
        roughness: 0.1,
        metalness: 0.95
      });
      const crystal = new THREE.Mesh(tCrystalGeo, crystalMat);
      crystal.position.y = 2.15;
      tower.add(crystal);

      // 8. Orbiting Runic Energy Halo Ring
      const haloMat = new THREE.MeshBasicMaterial({
        color: tColor,
        transparent: true,
        opacity: 0.85
      });
      const halo = new THREE.Mesh(tHaloGeo, haloMat);
      halo.position.y = 2.15;
      halo.rotation.x = Math.PI / 4;
      tower.add(halo);

      // 9. Outer Turret Heraldic Shield Crest
      if (t.isOuter) {
        const shieldGroup = new THREE.Group();
        const shieldPlate = new THREE.Mesh(tShieldGeo, stoneMat);
        const shieldEmblem = new THREE.Mesh(tShieldEmblemGeo, trimMat);
        shieldPlate.position.set(0, 0, 0.4);
        shieldEmblem.position.set(0, 0, 0.44);
        shieldGroup.add(shieldPlate);
        shieldGroup.add(shieldEmblem);
        shieldGroup.position.y = 1.0;
        shieldGroup.rotation.y = isRed ? Math.PI / 4 : -3 * Math.PI / 4;
        tower.add(shieldGroup);
      }

      // 10. Balanced Dynamic Point Light
      const tLight = new THREE.PointLight(t.color, 1.1, 8, 2.0);
      tLight.position.y = 2.2;
      tower.add(tLight);

      tower.position.set(t.pos[0], t.pos[1], t.pos[2]);
      turretGroup.add(tower);

      animatedTurrets.push({
        crystal,
        halo,
        groundRune,
        baseY: 2.15,
        offset: idx * 0.5
      });
    });

    // 13. PROPORTIONAL 3D NEXUS BASES
    // Moniyan Blue Nexus at (-38.2, 0.05, 17.8)
    const blueNexusGroup = new THREE.Group();
    const fountainGeo = new THREE.CylinderGeometry(1.8, 2.3, 0.6, 16);
    const fountainMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.6 });
    const fountain = new THREE.Mesh(fountainGeo, fountainMat);
    fountain.position.y = 0.3;

    const fountainTrimGeo = new THREE.CylinderGeometry(1.9, 1.9, 0.08, 16);
    const fountainTrim = new THREE.Mesh(fountainTrimGeo, blueGoldMat);
    fountainTrim.position.y = 0.6;

    for (let w = 0; w < 4; w++) {
      const ang = (w * Math.PI) / 2 + Math.PI / 4;
      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.5, 0.5), blueGoldMat);
      wing.position.set(Math.cos(ang) * 1.6, 0.9, Math.sin(ang) * 1.6);
      wing.rotation.y = -ang;
      wing.rotation.z = 0.15;
      blueNexusGroup.add(wing);
    }

    const blueCrystalGeo = new THREE.OctahedronGeometry(1.0, 0);
    const blueCrystalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.2,
      roughness: 0.08,
      metalness: 0.95
    });
    const blueCrystal = new THREE.Mesh(blueCrystalGeo, blueCrystalMat);
    blueCrystal.position.y = 1.8;

    const blueRingGeo = new THREE.TorusGeometry(1.4, 0.06, 8, 32);
    const blueRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    const blueRing = new THREE.Mesh(blueRingGeo, blueRingMat);
    blueRing.position.y = 1.8;

    const blueRingOuterGeo = new THREE.TorusGeometry(1.8, 0.05, 8, 32);
    const blueRingOuter = new THREE.Mesh(blueRingOuterGeo, blueRingMat);
    blueRingOuter.position.y = 1.8;
    blueRingOuter.rotation.x = Math.PI / 3;

    const shieldGeo = new THREE.SphereGeometry(1.9, 16, 16);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const shieldDome = new THREE.Mesh(shieldGeo, shieldMat);
    shieldDome.position.y = 1.4;

    const blueBeamGeo = new THREE.CylinderGeometry(0.25, 0.6, 35, 16, 1, true);
    const blueBeamMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide
    });
    const blueBeam = new THREE.Mesh(blueBeamGeo, blueBeamMat);
    blueBeam.position.y = 17.5;

    const blueLight = new THREE.PointLight(0x38bdf8, 2.5, 16, 2.0);
    blueLight.position.y = 2.0;

    blueNexusGroup.add(fountain);
    blueNexusGroup.add(fountainTrim);
    blueNexusGroup.add(blueCrystal);
    blueNexusGroup.add(blueRing);
    blueNexusGroup.add(blueRingOuter);
    blueNexusGroup.add(shieldDome);
    blueNexusGroup.add(blueBeam);
    blueNexusGroup.add(blueLight);
    blueNexusGroup.position.set(-38.2, 0.05, 17.8);
    scene.add(blueNexusGroup);

    // Abyssal Red Nexus at (38.2, 0.05, -17.8)
    const redNexusGroup = new THREE.Group();
    const altarGeo = new THREE.CylinderGeometry(1.8, 2.3, 0.6, 16);
    const altarMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });
    const altar = new THREE.Mesh(altarGeo, altarMat);
    altar.position.y = 0.3;

    const altarTrimGeo = new THREE.CylinderGeometry(1.9, 1.9, 0.08, 16);
    const altarTrim = new THREE.Mesh(altarTrimGeo, redMetalMat);
    altarTrim.position.y = 0.6;

    for (let w = 0; w < 4; w++) {
      const ang = (w * Math.PI) / 2 + Math.PI / 4;
      const horn = new THREE.Mesh(new THREE.BoxGeometry(0.24, 1.6, 0.5), redMetalMat);
      horn.position.set(Math.cos(ang) * 1.6, 1.0, Math.sin(ang) * 1.6);
      horn.rotation.y = -ang;
      horn.rotation.z = -0.18;
      redNexusGroup.add(horn);
    }

    const redCrystalGeo = new THREE.OctahedronGeometry(1.0, 0);
    const redCrystalMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 2.2,
      roughness: 0.08,
      metalness: 0.95
    });
    const redCrystal = new THREE.Mesh(redCrystalGeo, redCrystalMat);
    redCrystal.position.y = 1.8;

    const redRingGeo = new THREE.TorusGeometry(1.4, 0.06, 8, 32);
    const redRingMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.85 });
    const redRing = new THREE.Mesh(redRingGeo, redRingMat);
    redRing.position.y = 1.8;

    const redRingOuterGeo = new THREE.TorusGeometry(1.8, 0.05, 8, 32);
    const redRingOuter = new THREE.Mesh(redRingOuterGeo, redRingMat);
    redRingOuter.position.y = 1.8;
    redRingOuter.rotation.x = -Math.PI / 3;

    const redBeamGeo = new THREE.CylinderGeometry(0.25, 0.6, 35, 16, 1, true);
    const redBeamMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide
    });
    const redBeam = new THREE.Mesh(redBeamGeo, redBeamMat);
    redBeam.position.y = 17.5;

    const redLight = new THREE.PointLight(0xef4444, 2.5, 16, 2.0);
    redLight.position.y = 2.0;

    redNexusGroup.add(altar);
    redNexusGroup.add(altarTrim);
    redNexusGroup.add(redCrystal);
    redNexusGroup.add(redRing);
    redNexusGroup.add(redRingOuter);
    redNexusGroup.add(redBeam);
    redNexusGroup.add(redLight);
    redNexusGroup.position.set(38.2, 0.05, -17.8);
    scene.add(redNexusGroup);

    // 14. 3D LORD SUMMONING RUNE RING & TURTLE BASIN
    // Lord Pit at (-18, 1.8, -11)
    const lordRuneGeo = new THREE.TorusGeometry(3.6, 0.18, 8, 32);
    const lordRuneMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.9 });
    const lordRune = new THREE.Mesh(lordRuneGeo, lordRuneMat);
    lordRune.rotation.x = Math.PI / 2;
    lordRune.position.set(-18, 1.8, -11);
    scene.add(lordRune);

    const lordBeamGeo = new THREE.CylinderGeometry(0.5, 1.2, 40, 16, 1, true);
    const lordBeamMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
    const lordBeam = new THREE.Mesh(lordBeamGeo, lordBeamMat);
    lordBeam.position.set(-18, 20, -11);
    scene.add(lordBeam);

    // Turtle Pool at (18, 0.6, 11)
    const turtleRuneGeo = new THREE.TorusGeometry(3.0, 0.15, 8, 32);
    const turtleRuneMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.9 });
    const turtleRune = new THREE.Mesh(turtleRuneGeo, turtleRuneMat);
    turtleRune.rotation.x = Math.PI / 2;
    turtleRune.position.set(18, 0.6, 11);
    scene.add(turtleRune);

    // 15. Interactive 3D Tactical Beacons & Indicators
    const beaconGroup = new THREE.Group();
    beaconGroupRef.current = beaconGroup;
    scene.add(beaconGroup);

    TACTICAL_MARKERS.forEach((m) => {
      const bColor = new THREE.Color(m.color);

      const jewelGeo = new THREE.OctahedronGeometry(1.2, 0);
      const jewelMat = new THREE.MeshStandardMaterial({
        color: bColor,
        emissive: bColor,
        emissiveIntensity: 1.3,
        roughness: 0.1,
        metalness: 0.9
      });
      const jewel = new THREE.Mesh(jewelGeo, jewelMat);
      jewel.position.set(m.worldPos[0], m.worldPos[1] + 1.4, m.worldPos[2]);
      jewel.userData = { id: m.id, baseY: m.worldPos[1] + 1.4 };
      beaconGroup.add(jewel);

      const ringGeo = new THREE.TorusGeometry(2.0, 0.08, 8, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: bColor, transparent: true, opacity: 0.8 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(m.worldPos[0], m.worldPos[1] + 1.4, m.worldPos[2]);
      ring.userData = { isRing: true };
      beaconGroup.add(ring);

      const waveGeo = new THREE.RingGeometry(0.8, 1.4, 32);
      const waveMat = new THREE.MeshBasicMaterial({ color: bColor, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
      const wave = new THREE.Mesh(waveGeo, waveMat);
      wave.rotation.x = Math.PI / 2;
      wave.position.set(m.worldPos[0], m.worldPos[1] + 0.15, m.worldPos[2]);
      wave.userData = { scale: 1.0, maxScale: 4.8, speed: 0.035 };
      beaconGroup.add(wave);
      pulsesRef.current.push(wave);
    });

    // 16. Volumetric Cosmic Starfield & Embers
    const starCount = 1400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 450;
      starPos[i + 1] = Math.random() * 120 + 20;
      starPos[i + 2] = (Math.random() - 0.5) * 450;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xdbeafe, size: 0.85, transparent: true, opacity: 0.75 });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Drifting golden mana embers
    const emberCount = 320;
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPos[i] = (Math.random() - 0.5) * 120;
      emberPos[i + 1] = Math.random() * 22 + 1;
      emberPos[i + 2] = (Math.random() - 0.5) * 80;
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const emberMat = new THREE.PointsMaterial({ color: 0xfef08a, size: 0.75, transparent: true, opacity: 0.65 });
    const emberField = new THREE.Points(emberGeo, emberMat);
    scene.add(emberField);

    // 17. Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 18. Animation Loop (60-120fps Steadicam Glide - Mathematically ZERO Tilt Wobble)
    let animationFrameId;
    let clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();
    const targetVec = new THREE.Vector3();
    const camTargetPos = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Camera Interpolation along Mid-Lane Spline with buttery exponential damping
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.08;
      const clampedProg = Math.max(0, Math.min(1.0, currentProgress.current));

      let stageIdx = 0;
      if (clampedProg < 0.16) stageIdx = 0;
      else if (clampedProg < 0.50) stageIdx = 1;
      else if (clampedProg < 0.84) stageIdx = 2;
      else stageIdx = 3;

      if (stageIdx !== activeStageRef.current) {
        activeStageRef.current = stageIdx;
        setActiveStageIndex(stageIdx);
      }

      targetSpline.getPoint(clampedProg, targetVec);
      const camDist = getCameraDistance(clampedProg);

      rotCurrent.current.x += (rotTarget.current.x - rotCurrent.current.x) * 0.06;
      rotCurrent.current.y += (rotTarget.current.y - rotCurrent.current.y) * 0.06;

      camTargetPos.copy(targetVec).addScaledVector(VIEW_DIR, camDist);
      camera.position.set(
        camTargetPos.x + rotCurrent.current.x * 2.5,
        camTargetPos.y,
        camTargetPos.z + rotCurrent.current.y * 2.0
      );

      camera.up.set(0, 1, 0);
      camera.lookAt(targetVec.x, targetVec.y, targetVec.z);

      // Animate turret hovering crystals, orbiting halos, and rotating ground runes
      animatedTurrets.forEach((turret) => {
        turret.crystal.rotation.y += delta * 1.5;
        turret.crystal.position.y = turret.baseY + Math.sin(time * 2.2 + turret.offset) * 0.08;
        turret.halo.rotation.x += delta * 1.2;
        turret.halo.rotation.z += delta * 0.9;
        turret.groundRune.rotation.z += delta * 0.35;
      });

      // Animate crystal nexuses and auras
      blueCrystal.rotation.y += delta * 1.2;
      blueRing.rotation.z += delta * 0.9;
      blueRingOuter.rotation.y -= delta * 0.7;
      redCrystal.rotation.y += delta * 1.2;
      redRing.rotation.z += delta * 0.9;
      redRingOuter.rotation.y -= delta * 0.7;
      lordRune.rotation.z += delta * 0.8;
      turtleRune.rotation.z += delta * 0.6;

      beaconGroup.children.forEach((child) => {
        if (child.isMesh && child.geometry.type === 'OctahedronGeometry') {
          child.rotation.y += delta * 1.5;
          child.position.y = child.userData.baseY + Math.sin(time * 2.5) * 0.4;
        } else if (child.isMesh && child.userData.isRing) {
          child.rotation.x += delta * 1.6;
          child.rotation.y += delta * 1.2;
        }
      });

      pulsesRef.current.forEach((wave) => {
        wave.userData.scale += wave.userData.speed;
        if (wave.userData.scale > wave.userData.maxScale) {
          wave.userData.scale = 1.0;
        }
        wave.scale.set(wave.userData.scale, wave.userData.scale, 1.0);
        wave.material.opacity = Math.max(0, 1.0 - wave.userData.scale / wave.userData.maxScale) * 0.85;
      });

      starField.rotation.y = time * 0.004;
      emberField.rotation.y = -time * 0.007;

      // Direct DOM Update for 2D HTML Screen Coordinates (Zero React State Churn)
      TACTICAL_MARKERS.forEach((m) => {
        const el = markerRefs.current[m.id];
        if (!el) return;

        tempVec.set(m.worldPos[0], m.worldPos[1] + 1.4, m.worldPos[2]);
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
      terrainGeo.dispose();
      terrainMat.dispose();
      foundationGeo.dispose();
      foundationMat.dispose();
      abyssalAuraGeo.dispose();
      abyssalAuraMat.dispose();
      moniyanAuraGeo.dispose();
      moniyanAuraMat.dispose();
      skydomeGeo.dispose();
      skydomeMat.dispose();
      cloudSeaGeo.dispose();
      cloudSeaMat.dispose();
      mapTexture.dispose();
      tBaseT1Geo.dispose();
      tTrimGeo.dispose();
      tBaseT2Geo.dispose();
      tButtressGeo.dispose();
      tColGeo.dispose();
      tCapitalGeo.dispose();
      tWingGeo.dispose();
      tWingTipGeo.dispose();
      tCrystalGeo.dispose();
      tHaloGeo.dispose();
      tGroundRuneGeo.dispose();
      tRangeCircleGeo.dispose();
      tRangeInnerGeo.dispose();
      tShieldGeo.dispose();
      tShieldEmblemGeo.dispose();
      tConduitGeo.dispose();
      blueStoneMat.dispose();
      blueGoldMat.dispose();
      redStoneMat.dispose();
      redMetalMat.dispose();
      fountainGeo.dispose();
      fountainMat.dispose();
      fountainTrimGeo.dispose();
      blueCrystalGeo.dispose();
      blueCrystalMat.dispose();
      blueRingGeo.dispose();
      blueRingOuterGeo.dispose();
      shieldGeo.dispose();
      shieldMat.dispose();
      blueBeamGeo.dispose();
      blueBeamMat.dispose();
      altarGeo.dispose();
      altarMat.dispose();
      altarTrimGeo.dispose();
      redCrystalGeo.dispose();
      redCrystalMat.dispose();
      redRingGeo.dispose();
      redRingOuterGeo.dispose();
      redBeamGeo.dispose();
      redBeamMat.dispose();
    };
  }, [VIEW_DIR, targetSpline]);

  // Pointer Drag Interaction for Parallax Pan
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
      ref={trackRef}
      id="battlefield-track"
      className="relative w-full h-[380vh] bg-[#060a14]"
    >
      {/* Sticky Pinned Viewport Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`sticky top-0 left-0 w-full h-[100dvh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#060a14] text-[#e9ecee] select-none is-scene-pannable ${
          isDragging ? 'is-scene-grabbing' : ''
        }`}
      >
      {/* 1. Full-Bleed 16:9 3D WebGL MLBB Reference Match Map Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-auto" />

      {/* 2. Soft Edge Atmospheric Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#060a14]/40 pointer-events-none z-10" />

      {/* 3. AUTHENTIC MLBB IN-GAME MATCH HEADER HUD (Top Bar) */}
      {/* 3. AWWWARDS LUXURY TELEMETRY BAR (Top Header) */}
      <header className="absolute top-0 left-0 w-full z-30 pointer-events-none px-4 sm:px-8 py-3.5 flex items-center justify-between bg-gradient-to-b from-[#060a14]/90 via-[#060a14]/40 to-transparent">
        {/* Left: Architectural Registry */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/[0.08] backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#f3d288] uppercase font-semibold">
              MLBB // CARTOGRAPHY
            </span>
            <span className="text-white/20 text-xs">|</span>
            <span className="font-mono text-[9px] tracking-wider text-[#aab9c7]/80 hidden sm:inline uppercase">
              SECTOR 01 : SANCTUARY
            </span>
          </div>
        </div>

        {/* Center: Live Spatial Coordinate Telemetry */}
        <div className="hidden md:flex items-center gap-4 px-4 py-1.5 rounded-full bg-black/40 border border-white/[0.08] backdrop-blur-xl pointer-events-auto">
          <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#aab9c7]">
            <span className="text-[#f3d288] font-bold">{activeStage.telemetry.elev}</span>
            <span className="text-white/20">•</span>
            <span>{activeStage.telemetry.coord}</span>
            <span className="text-white/20">•</span>
            <span className="text-white font-medium">{activeStage.telemetry.sector}</span>
          </div>
        </div>

        {/* Right: Sound Equalizer & Battle Audio Trigger */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 cursor-pointer ${
              isAudioActive
                ? 'bg-[#f3d288]/15 border-[#f3d288]/60 text-[#f3d288] shadow-[0_0_20px_rgba(243,210,136,0.2)]'
                : 'bg-black/40 border-white/[0.08] text-[#aab9c7] hover:border-white/20 hover:text-white'
            }`}
            title={isAudioActive ? 'Mute Spatial Battle Soundtrack' : 'Enable Spatial Battle Soundtrack'}
          >
            <div className="flex items-end gap-[2px] h-3">
              <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-1' : 'h-1.5'}`} />
              <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-2' : 'h-2.5'}`} />
              <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-3' : 'h-1'}`} />
              <span className={`w-[2px] bg-current rounded-full transition-all duration-200 ${isAudioActive ? 'animate-eq-4' : 'h-2'}`} />
            </div>
            <span className="text-[9px] font-mono tracking-widest uppercase">
              {isAudioActive ? 'AUDIO ON' : 'AUDIO OFF'}
            </span>
          </button>
        </div>
      </header>

      {/* 4. CELESTIAL HOLOGRAPHIC COMPASS & FLIGHT RADAR (Top-Left HUD) */}
      <div className="absolute top-16 left-4 sm:left-8 z-25 pointer-events-none">
        <div className="pointer-events-auto relative p-3 rounded-2xl card-awwwards w-40 sm:w-44 shadow-2xl overflow-hidden group">
          {/* Subtle Corner Registration Crosshairs */}
          <div className="crosshair-tl" />
          <div className="crosshair-tr" />
          <div className="crosshair-bl" />
          <div className="crosshair-br" />

          {/* Radar Header */}
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/[0.06] text-[8.5px] font-mono tracking-widest text-[#aab9c7]">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-[#f3d288] animate-spin" style={{ animationDuration: '24s' }} />
              <span className="text-white font-semibold">HORIZON RADAR</span>
            </div>
            <span className="text-[#f3d288]">{activeStage.roman} // IV</span>
          </div>

          {/* Circular Hologram Reticle Display */}
          <div className="relative w-full aspect-square bg-[#040711]/90 rounded-full border border-white/[0.08] overflow-hidden flex items-center justify-center">
            {/* Concentric Sonar Rings */}
            <div className="absolute inset-2 rounded-full border border-white/[0.05]" />
            <div className="absolute inset-5 rounded-full border border-white/[0.04]" />
            <div className="absolute inset-8 rounded-full border border-white/[0.03]" />

            {/* Cardinal Axes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-white/[0.06]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-[1px] bg-white/[0.06]" />
            </div>

            {/* Rotating Dashed Compass Bezel */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(243, 210, 136, 0.25)"
                strokeWidth="0.8"
                strokeDasharray="2 6"
              />
              {/* Mid-lane tactical trajectory guide */}
              <line
                x1="20"
                y1="80"
                x2="80"
                y2="20"
                stroke="rgba(243, 210, 136, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              {/* River channel perpendicular line */}
              <line
                x1="24"
                y1="24"
                x2="76"
                y2="76"
                stroke="rgba(56, 189, 248, 0.25)"
                strokeWidth="1.8"
              />
            </svg>

            {/* Live Camera Focal Position (interpolated across diagonal 20,80 to 80,20 based on scrollProgress) */}
            <div
              className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f3d288] bg-[#f3d288]/40 shadow-[0_0_10px_#f3d288] transition-all duration-300 pointer-events-none"
              style={{
                left: `${20 + scrollProgress * 60}%`,
                top: `${80 - scrollProgress * 60}%`
              }}
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-[#f3d288]/60" />
            </div>

            {/* Stage Waypoint Pips */}
            {TACTICAL_STAGES.map((stg, i) => (
              <button
                key={stg.id}
                onClick={() => handleGlideToStage(i)}
                style={{
                  left: `${20 + stg.progress * 60}%`,
                  top: `${80 - stg.progress * 60}%`
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center text-[7.5px] font-mono transition-transform hover:scale-125 cursor-pointer ${
                  activeStageIndex === i
                    ? 'bg-[#f3d288] text-black font-bold shadow-lg ring-2 ring-[#f3d288]/50'
                    : 'bg-black/80 text-white/70 border border-white/20 hover:border-[#f3d288]'
                }`}
                title={`Glide to ${stg.titlePrefix} ${stg.titleMain}`}
              >
                {stg.roman}
              </button>
            ))}
          </div>

          {/* Sector Readout */}
          <div className="mt-2 text-center">
            <span className="text-[8px] font-mono tracking-widest text-[#aab9c7]/80 block">
              AZIMUTH 312° // ELEV {activeStage.telemetry.elev}
            </span>
          </div>
        </div>
      </div>

      {/* 5. MONUMENTAL EDITORIAL STAGING (Right Side) */}
      <div className="absolute top-[max(18vh,5rem)] right-4 sm:right-12 max-w-sm sm:max-w-lg pointer-events-none z-20 text-right">
        <div key={activeStage.id} className="transition-all duration-700 ease-out">
          {/* Section Micro Tag */}
          <div className="ts-b text-[#f3d288] mb-2 flex items-center justify-end gap-2.5">
            <span className="tracking-[0.3em] font-medium">[ {activeStage.code} // IV ] • {activeStage.tag}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
          </div>

          {/* Refined Font Pairing: Newsreader Italic + Monumental Roman Serif */}
          <h1 className="h1-overworld drop-shadow-2xl">
            <span className="editorial-italic text-[#f3d288] font-normal block leading-tight">
              {activeStage.titlePrefix}
            </span>
            <span className="font-serif tracking-tight font-bold text-white block mt-0.5 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              {activeStage.titleMain}
            </span>
          </h1>

          {/* Elegant Editorial Prose */}
          <p className="mt-3 text-xs sm:text-[13px] text-[#c8d2dc] font-sans leading-relaxed hidden sm:block max-w-md ml-auto drop-shadow-md">
            {activeStage.subtitle}
          </p>
        </div>
      </div>

      {/* 6. MINIMALIST ARCHITECTURAL RETICLES (Projected on 3D Landmarks) */}
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
              <div className="flex flex-col items-center">
                {/* Haute Horlogerie Frosted Glass Pill */}
                <div className="px-3 py-1.5 rounded-full bg-[#060a14]/85 border border-white/[0.12] group-hover:border-[#f3d288] backdrop-blur-xl text-[#e9ecee] shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: marker.color }}
                  />
                  <span className="text-[9px] font-mono tracking-wider font-semibold text-white whitespace-nowrap">
                    {marker.name}
                  </span>
                  <span className="text-[7.5px] font-mono tracking-widest text-[#f3d288] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] uppercase">
                    {marker.tier}
                  </span>
                </div>

                {/* Vertical Hairline Connector */}
                <div
                  className="w-[1px] h-4 mx-auto"
                  style={{
                    background: `linear-gradient(to bottom, ${marker.color}, transparent)`
                  }}
                />
                
                {/* 1px Rotating Diamond Target */}
                <div
                  className="w-2 h-2 rotate-45 border transition-transform duration-300 group-hover:rotate-90 group-hover:scale-125"
                  style={{ borderColor: marker.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 7. AWWWARDS CHRONICLES SCRUBBER & RUNWAY NAVIGATION */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none pb-4 sm:pb-6">
        
        {/* Subtle Ambient Scroll Cue (Fades once user scrolls) */}
        <div
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-1.5 transition-all duration-700 ${
            scrollProgress > 0.04 ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-90 animate-pulse'
          }`}
        >
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-white/[0.1] text-[8.5px] font-mono tracking-[0.25em] text-[#f3d288] uppercase shadow-2xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
            <span>SCROLL TO GLIDE MID-LANE</span>
          </div>
        </div>

        {/* Real-time Cinematic Flight Progress Rail */}
        <div className="w-[94%] max-w-lg mx-auto mb-3 pointer-events-auto">
          <div className="flex items-center justify-between text-[8.5px] font-mono text-[#aab9c7] mb-1.5 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288]" />
              <span className="text-white font-medium tracking-widest uppercase">{activeStage.telemetry.sector}</span>
            </span>
            <span className="text-[#f3d288] font-bold">{Math.round(scrollProgress * 100)}% FLIGHT PROGRESS</span>
            <span className="text-[#38bdf8] font-mono">{activeStage.telemetry.elev}</span>
          </div>
          {/* Laser Track */}
          <div className="relative w-full h-[2px] bg-white/[0.08] rounded-full overflow-visible">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f3d288] via-[#38bdf8] to-[#f43f5e] rounded-full transition-all duration-150"
              style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
            />
            {/* Glowing Diamond Playhead */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#f3d288] rotate-45 shadow-[0_0_10px_#f3d288] -ml-1 transition-all duration-150"
              style={{ left: `${Math.max(0, Math.min(100, scrollProgress * 100))}%` }}
            />
          </div>
        </div>

        {/* Master Control Deck */}
        <div className="w-[94%] max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 relative z-20">
          
          {/* Left: Explore Archive Button */}
          <div className="pointer-events-auto">
            <button
              onClick={() => scrollToSection('#heroes')}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/[0.12] hover:border-[#f3d288]/80 bg-[#060a14]/85 hover:bg-[#060a14] text-white transition-all duration-300 shadow-2xl cursor-pointer backdrop-blur-xl"
              title="Explore all 133 champions in the archive"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f3d288] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-semibold">
                ROSTER ARCHIVE [ 133 ]
              </span>
            </button>
          </div>

          {/* Center: Stage Roman Selector */}
          <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-full bg-[#060a14]/80 border border-white/[0.1] backdrop-blur-xl shadow-2xl">
            {TACTICAL_STAGES.map((stg, idx) => (
              <button
                key={stg.id}
                onClick={() => handleGlideToStage(idx)}
                className={`px-3 py-1.5 rounded-full text-[9px] font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  activeStageIndex === idx
                    ? 'bg-[#f3d288] text-black font-bold shadow-[0_0_15px_rgba(243,210,136,0.35)]'
                    : 'text-[#aab9c7] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {stg.roman} • {stg.code}
              </button>
            ))}
          </div>

          {/* Right: Stage Stepper */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="text-[9px] font-mono text-[#aab9c7] mr-1 hidden sm:inline">
              [ 0{activeStageIndex + 1} / 04 ]
            </span>
            <button
              onClick={() => handleGlideToStage(activeStageIndex - 1)}
              disabled={activeStageIndex === 0}
              className={`p-2 rounded-full border backdrop-blur-xl transition-all cursor-pointer ${
                activeStageIndex === 0
                  ? 'border-white/[0.05] text-white/20 cursor-not-allowed'
                  : 'border-white/[0.12] bg-[#060a14]/80 hover:border-[#f3d288] text-[#aab9c7] hover:text-white'
              }`}
              title="Previous Sector"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleGlideToStage(activeStageIndex + 1)}
              disabled={activeStageIndex === TACTICAL_STAGES.length - 1}
              className={`p-2 rounded-full border backdrop-blur-xl transition-all cursor-pointer ${
                activeStageIndex === TACTICAL_STAGES.length - 1
                  ? 'border-white/[0.05] text-white/20 cursor-not-allowed'
                  : 'border-white/[0.12] bg-[#060a14]/80 hover:border-[#f3d288] text-[#aab9c7] hover:text-white'
              }`}
              title="Next Sector"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}
