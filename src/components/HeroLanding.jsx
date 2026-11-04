import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Swords,
  Box,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Crosshair
} from 'lucide-react';
import { audioManager } from '../utils/audio';
import { HEROES } from '../data/heroesData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// 1. THREE SOVEREIGN CHAMPION ARCHETYPES (TRUE 3D SCULPTED ARTIFACT RELICS)
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
    glowColor: 'rgba(245, 158, 11, 0.55)',
    weaponName: 'Sovereign Demon Greatsword',
    quote: 'Born in light, baptized in darkness.',
    image: '/assets/images/heroes/alucard.png',
    loreSpecs: {
      material: 'Damascus Titanium & Abyssal Horn',
      core: 'Twilight Dragon Core',
      affinity: 'Light & Abyssal Cleave',
      lethality: '99.4%'
    }
  },
  {
    id: 'gusion',
    heroId: 'gusion',
    name: 'Gusion',
    title: 'Holy Blade',
    tag: 'ASSASSIN // SPECTRAL BLADES',
    primaryColor: '#06b6d4',
    secondaryColor: '#38bdf8',
    glowColor: 'rgba(6, 182, 212, 0.55)',
    weaponName: 'Astral Holy Daggers Matrix',
    quote: 'Break the line between shadow and lightning.',
    image: '/assets/images/heroes/gusion.png',
    loreSpecs: {
      material: 'Crystalline Astral Chrome',
      core: 'Starlight Teleportation Nexus',
      affinity: 'Hyper-Kinetic Telekinesis',
      lethality: '99.8%'
    }
  },
  {
    id: 'kagura',
    heroId: 'kagura',
    name: 'Kagura',
    title: 'Onmyouji Master',
    tag: 'MAGE // SEIMEI YIN-YANG',
    primaryColor: '#a855f7',
    secondaryColor: '#ec4899',
    glowColor: 'rgba(168, 85, 247, 0.55)',
    weaponName: 'Seimei Celestial Parasol',
    quote: 'The umbrella spins, and destiny bends.',
    image: '/assets/images/heroes/kagura.png',
    loreSpecs: {
      material: 'Enchanted Spirit Silk & Bamboo',
      core: 'Yin-Yang Taijitu Medallion',
      affinity: 'Spiritual Spatial Warping',
      lethality: '98.9%'
    }
  }
];

// ============================================================================
// PROCEDURAL STUDIO HDR ENVIRONMENT MAP GENERATOR
// ============================================================================
function createProceduralStudioEnv(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep celestial gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 512);
  bgGrad.addColorStop(0.0, '#040816');
  bgGrad.addColorStop(0.46, '#0a1730');
  bgGrad.addColorStop(0.5, '#f59e0b');
  bgGrad.addColorStop(0.54, '#0a1730');
  bgGrad.addColorStop(1.0, '#02040a');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Softbox 1: High-Key Golden Sunburst
  const softbox1 = ctx.createRadialGradient(280, 150, 10, 280, 150, 190);
  softbox1.addColorStop(0.0, 'rgba(254, 240, 138, 1.0)');
  softbox1.addColorStop(0.4, 'rgba(245, 158, 11, 0.85)');
  softbox1.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = softbox1;
  ctx.fillRect(80, 0, 400, 320);

  // Softbox 2: Celestial Sapphire Cyan Rim Light
  const softbox2 = ctx.createRadialGradient(780, 170, 10, 780, 170, 210);
  softbox2.addColorStop(0.0, 'rgba(224, 242, 254, 1.0)');
  softbox2.addColorStop(0.4, 'rgba(56, 189, 248, 0.85)');
  softbox2.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = softbox2;
  ctx.fillRect(580, 0, 400, 340);

  // Overhead Luminous Strip
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillRect(440, 30, 140, 55);

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;

  texture.dispose();
  pmremGenerator.dispose();

  return envMap;
}

// ============================================================================
// PROCEDURAL DAMASCUS STEEL & RUNIC ENGRAVING TEXTURE GENERATOR
// ============================================================================
function createDamascusTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Base metallic deep slate
  const grad = ctx.createLinearGradient(0, 0, 512, 1024);
  grad.addColorStop(0, '#101726');
  grad.addColorStop(0.5, '#1e2d4a');
  grad.addColorStop(1, '#0c121e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 1024);

  // Damascus steel flowing wave ripples
  ctx.lineWidth = 1.5;
  for (let y = 0; y < 1024; y += 8) {
    ctx.beginPath();
    const alpha = 0.12 + Math.sin(y * 0.05) * 0.08;
    ctx.strokeStyle = `rgba(180, 210, 255, ${alpha})`;
    for (let x = 0; x <= 512; x += 12) {
      const wave = Math.sin(x * 0.04 + y * 0.08) * 16 + Math.cos(x * 0.08 - y * 0.03) * 10;
      if (x === 0) ctx.moveTo(x, y + wave);
      else ctx.lineTo(x, y + wave);
    }
    ctx.stroke();
  }

  // Ancient elven runic carvings along center fuller spine
  ctx.fillStyle = 'rgba(255, 230, 160, 0.85)';
  ctx.shadowColor = '#f59e0b';
  ctx.shadowBlur = 12;
  ctx.font = 'bold 22px serif';
  ctx.textAlign = 'center';
  const runes = ['ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᛝ', 'ᛟ', 'ᛞ', 'ᛚ', 'ᛗ', 'ᛊ', 'ᛏ', 'ᛒ'];
  for (let i = 0; i < 15; i++) {
    const ry = 80 + i * 62;
    ctx.fillText(runes[i % runes.length], 256, ry);
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(238, ry - 22, 36, 30);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// ============================================================================
// PROCEDURAL SACRED TRANSMUTATION ARENA FLOOR TEXTURE GENERATOR
// ============================================================================
function createSacredArenaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512;
  const cy = 512;

  ctx.clearRect(0, 0, 1024, 1024);

  // Outer primary ring
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, 480, 0, Math.PI * 2);
  ctx.stroke();

  // Double concentric inner ring
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 460, 0, Math.PI * 2);
  ctx.arc(cx, cy, 410, 0, Math.PI * 2);
  ctx.stroke();

  // 12 Astrological tick marks & radial dividers
  for (let i = 0; i < 72; i++) {
    const angle = (i * Math.PI * 2) / 72;
    const isMajor = i % 6 === 0;
    const r1 = isMajor ? 440 : 452;
    const r2 = 460;
    ctx.lineWidth = isMajor ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
    ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
    ctx.stroke();
  }

  // 12 Sacred Zodiac Arcane Runes in ring channel
  ctx.font = 'bold 24px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  const glyphs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
    const gx = cx + Math.cos(angle) * 435;
    const gy = cy + Math.sin(angle) * 435;
    ctx.save();
    ctx.translate(gx, gy);
    ctx.rotate(angle + Math.PI / 2);
    ctx.fillText(glyphs[i], 0, 0);
    ctx.restore();
  }

  // Inscribed Sacred Dodecagram / Interlaced Triangles
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  for (let t = 0; t < 4; t++) {
    ctx.beginPath();
    for (let p = 0; p < 3; p++) {
      const angle = t * (Math.PI / 6) + p * ((Math.PI * 2) / 3);
      const px = cx + Math.cos(angle) * 400;
      const py = cy + Math.sin(angle) * 400;
      if (p === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Inner Core Ring with Sunburst
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 210, 0, Math.PI * 2);
  ctx.arc(cx, cy, 140, 0, Math.PI * 2);
  ctx.stroke();

  // Core 8-point compass star
  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
  for (let i = 0; i < 8; i++) {
    const a1 = (i * Math.PI * 2) / 8;
    const a2 = a1 + Math.PI / 8;
    const a3 = a1 - Math.PI / 8;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a1) * 190, cy + Math.sin(a1) * 190);
    ctx.lineTo(cx + Math.cos(a2) * 50, cy + Math.sin(a2) * 50);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a3) * 50, cy + Math.sin(a3) * 50);
    ctx.closePath();
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// ============================================================================
// PROCEDURAL YIN-YANG SILK CANOPY TEXTURE FOR KAGURA
// ============================================================================
function createYinYangCanopyTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512;
  const cy = 512;

  // Rich mystical indigo silk background
  const bgGrad = ctx.createRadialGradient(cx, cy, 40, cx, cy, 512);
  bgGrad.addColorStop(0, '#3b0764');
  bgGrad.addColorStop(0.5, '#1e1b4b');
  bgGrad.addColorStop(1, '#09090b');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // 16 Japanese Cloud Filigree Sectors radiating outwards
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI * 2) / 16;
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * 512, cy + Math.sin(angle) * 512);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * 360, cy + Math.sin(angle) * 360, 48, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Central Yin-Yang Taijitu Disc
  const r = 180;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.beginPath();
  ctx.arc(cx, cy, r, -Math.PI / 2, Math.PI / 2, false);
  ctx.arc(cx, cy + r / 2, r / 2, Math.PI / 2, -Math.PI / 2, false);
  ctx.arc(cx, cy - r / 2, r / 2, Math.PI / 2, -Math.PI / 2, true);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#1e1b4b';
  ctx.beginPath();
  ctx.arc(cx, cy, r, Math.PI / 2, -Math.PI / 2, false);
  ctx.arc(cx, cy - r / 2, r / 2, -Math.PI / 2, Math.PI / 2, false);
  ctx.arc(cx, cy + r / 2, r / 2, -Math.PI / 2, Math.PI / 2, true);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#1e1b4b';
  ctx.beginPath();
  ctx.arc(cx, cy + r / 2, r / 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.beginPath();
  ctx.arc(cx, cy - r / 2, r / 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// ============================================================================
// PROCEDURAL TAOIST OFUDA TALISMAN TEXTURE FOR KAGURA
// ============================================================================
function createOfudaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(254, 243, 199, 0.88)';
  ctx.fillRect(0, 0, 256, 512);

  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 8;
  ctx.strokeRect(12, 12, 232, 488);

  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, 216, 472);

  ctx.fillStyle = '#dc2626';
  ctx.font = 'bold 36px serif';
  ctx.textAlign = 'center';
  ctx.fillText('☯', 128, 65);

  ctx.fillStyle = '#6b21a8';
  ctx.font = 'bold 38px serif';
  const talismanSymbols = ['急', '急', '如', '律', '令', '封', '霊'];
  for (let i = 0; i < talismanSymbols.length; i++) {
    ctx.fillText(talismanSymbols[i], 128, 130 + i * 48);
  }

  ctx.fillStyle = '#ec4899';
  ctx.beginPath();
  ctx.moveTo(128, 475);
  ctx.lineTo(100, 445);
  ctx.lineTo(128, 420);
  ctx.lineTo(156, 445);
  ctx.closePath();
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// ============================================================================
// GEOMETRY GENERATOR 1: TRUE DIAMOND-CROSS-SECTION DOUBLE-EDGED BLADE
// ============================================================================
function createDiamondBladeGeometry({
  length = 8.5,
  baseWidth = 0.55,
  spineThickness = 0.12,
  segments = 24
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;

    let w = baseWidth;
    if (t < 0.08) {
      w = baseWidth * (0.7 + (t / 0.08) * 0.3);
    } else if (t < 0.2) {
      const bt = (t - 0.08) / 0.12;
      w = baseWidth * (1.0 + Math.sin(bt * Math.PI) * 0.35);
    } else if (t < 0.35) {
      const bt = (t - 0.2) / 0.15;
      w = baseWidth * (0.9 + Math.sin(bt * Math.PI) * 0.28);
    } else if (t < 0.82) {
      w = baseWidth * 0.95;
    } else {
      const tt = (t - 0.82) / 0.18;
      w = baseWidth * 0.95 * Math.cos(tt * Math.PI * 0.5);
    }

    const th = spineThickness * Math.max(0.005, 1.0 - t * 0.75);

    positions.push(-w, y, 0);
    uvs.push(0.0, t);

    positions.push(0, y, th);
    uvs.push(0.5, t);

    positions.push(w, y, 0);
    uvs.push(1.0, t);

    positions.push(0, y, -th);
    uvs.push(0.5, t);

    if (i < segments) {
      const b = i * 4;
      const nb = (i + 1) * 4;

      indices.push(b, nb, nb + 1);
      indices.push(b, nb + 1, b + 1);

      indices.push(b + 1, nb + 1, nb + 2);
      indices.push(b + 1, nb + 2, b + 2);

      indices.push(b + 2, nb + 2, nb + 3);
      indices.push(b + 2, nb + 3, b + 3);

      indices.push(b + 3, nb + 3, nb);
      indices.push(b + 3, nb, b);
    }
  }

  indices.push(0, 1, 2);
  indices.push(0, 2, 3);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ============================================================================
// GEOMETRY GENERATOR 2: DIAMOND STILETTO BLADE
// ============================================================================
function createStilettoBladeGeometry({
  length = 2.4,
  baseWidth = 0.22,
  thickness = 0.08,
  segments = 14
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;

    let w = baseWidth;
    if (t < 0.15) {
      w = baseWidth * (0.8 + (t / 0.15) * 0.4);
    } else if (t < 0.3) {
      w = baseWidth * 1.2;
    } else {
      w = baseWidth * Math.pow(Math.max(0, 1.0 - (t - 0.3) / 0.7), 0.85);
    }

    const th = thickness * Math.max(0.005, 1.0 - t * 0.8);

    positions.push(-w, y, 0);
    uvs.push(0, t);

    positions.push(0, y, th);
    uvs.push(0.5, t);

    positions.push(w, y, 0);
    uvs.push(1, t);

    positions.push(0, y, -th);
    uvs.push(0.5, t);

    if (i < segments) {
      const b = i * 4;
      const nb = (i + 1) * 4;
      indices.push(b, nb, nb + 1, b, nb + 1, b + 1);
      indices.push(b + 1, nb + 1, nb + 2, b + 1, nb + 2, b + 2);
      indices.push(b + 2, nb + 2, nb + 3, b + 2, nb + 3, b + 3);
      indices.push(b + 3, nb + 3, nb, b + 3, nb, b);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ============================================================================
// GEOMETRY GENERATOR 3: CURVED WAGASA SILK CANOPY
// ============================================================================
function createWagasaCanopyGeometry({
  radius = 3.3,
  height = 0.95,
  radialSegments = 32,
  heightSegments = 16,
  ribCount = 16
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let j = 0; j <= heightSegments; j++) {
    const v = j / heightSegments;
    const y = -Math.pow(v, 1.35) * height;
    const baseR = Math.sin(v * Math.PI * 0.5) * radius + v * 0.1;

    for (let i = 0; i <= radialSegments; i++) {
      const u = i / radialSegments;
      const angle = u * Math.PI * 2;

      const ribPhase = u * ribCount * Math.PI * 2;
      const sag = Math.sin(v * Math.PI) * (1.0 - Math.cos(ribPhase)) * 0.04;
      const r = Math.max(0.01, baseR - sag);

      positions.push(Math.cos(angle) * r, y, Math.sin(angle) * r);
      uvs.push(u, v);
    }
  }

  const stride = radialSegments + 1;
  for (let j = 0; j < heightSegments; j++) {
    for (let i = 0; i < radialSegments; i++) {
      const a = j * stride + i;
      const b = (j + 1) * stride + i;
      const c = (j + 1) * stride + (i + 1);
      const d = j * stride + (i + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ============================================================================
// BUILDER 1: ALUCARD'S SOVEREIGN DEMON GREATSWORD (SCULPTED DIAMOND BEVEL)
// ============================================================================
function buildAlucardRelic(goldArmorMat, damascusBladeMat, gemMat, fullerMat, disposables) {
  const alucardGroup = new THREE.Group();
  alucardGroup.name = 'Alucard_Sovereign_Blade';

  // 1. True Diamond-Cross-Section Blade (Razor cutting edges & raised spine)
  const bladeGeo = createDiamondBladeGeometry({
    length: 8.6,
    baseWidth: 0.58,
    spineThickness: 0.14,
    segments: 28
  });
  disposables.push(bladeGeo);

  const bladeMesh = new THREE.Mesh(bladeGeo, damascusBladeMat);
  bladeMesh.position.set(0, -0.2, 0);
  bladeMesh.castShadow = true;
  bladeMesh.receiveShadow = true;
  alucardGroup.add(bladeMesh);

  // 2. Central Raised Fuller Spine with 7 Runic Diamond Nodes
  const fullerGeo = new THREE.BoxGeometry(0.08, 6.4, 0.26);
  disposables.push(fullerGeo);
  const fullerMesh = new THREE.Mesh(fullerGeo, fullerMat);
  fullerMesh.position.set(0, 3.2, 0);
  alucardGroup.add(fullerMesh);

  for (let i = 0; i < 7; i++) {
    const rNodeGeo = new THREE.OctahedronGeometry(0.13, 0);
    disposables.push(rNodeGeo);
    const rNodeMesh = new THREE.Mesh(rNodeGeo, fullerMat);
    rNodeMesh.position.set(0, 0.8 + i * 0.85, 0);
    alucardGroup.add(rNodeMesh);
  }

  // 3. Swept Dragon-Wing Moniyan Crossguard
  const guardGroup = new THREE.Group();
  guardGroup.position.set(0, -0.4, 0);
  alucardGroup.add(guardGroup);

  const hubGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.75, 6);
  disposables.push(hubGeo);
  const guardHub = new THREE.Mesh(hubGeo, goldArmorMat);
  guardGroup.add(guardHub);

  // Swept Organic Dragon Wing Curve (Left)
  const wingCurveLeft = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.6, 0.25, 0.1),
    new THREE.Vector3(-1.4, 0.65, 0.15),
    new THREE.Vector3(-2.1, 1.25, 0.05),
    new THREE.Vector3(-2.3, 1.85, -0.1)
  ]);
  const wingGeoLeft = new THREE.TubeGeometry(wingCurveLeft, 24, 0.14, 8, false);
  disposables.push(wingGeoLeft);
  const leftWingMesh = new THREE.Mesh(wingGeoLeft, goldArmorMat);
  guardGroup.add(leftWingMesh);

  // 3 Layered dragon barb feathers on Left Wing
  for (let f = 0; f < 3; f++) {
    const featherGeo = new THREE.ConeGeometry(0.18 - f * 0.03, 1.2 - f * 0.25, 4);
    featherGeo.rotateY(Math.PI / 4);
    disposables.push(featherGeo);
    const featherMesh = new THREE.Mesh(featherGeo, goldArmorMat);
    featherMesh.position.set(-0.8 - f * 0.55, 0.45 + f * 0.35, 0);
    featherMesh.rotation.z = Math.PI / 3 + f * 0.15;
    guardGroup.add(featherMesh);
  }

  // Swept Organic Dragon Wing Curve (Right)
  const wingCurveRight = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.6, 0.25, 0.1),
    new THREE.Vector3(1.4, 0.65, 0.15),
    new THREE.Vector3(2.1, 1.25, 0.05),
    new THREE.Vector3(2.3, 1.85, -0.1)
  ]);
  const wingGeoRight = new THREE.TubeGeometry(wingCurveRight, 24, 0.14, 8, false);
  disposables.push(wingGeoRight);
  const rightWingMesh = new THREE.Mesh(wingGeoRight, goldArmorMat);
  guardGroup.add(rightWingMesh);

  // 3 Layered dragon barb feathers on Right Wing
  for (let f = 0; f < 3; f++) {
    const featherGeo = new THREE.ConeGeometry(0.18 - f * 0.03, 1.2 - f * 0.25, 4);
    featherGeo.rotateY(Math.PI / 4);
    disposables.push(featherGeo);
    const featherMesh = new THREE.Mesh(featherGeo, goldArmorMat);
    featherMesh.position.set(0.8 + f * 0.55, 0.45 + f * 0.35, 0);
    featherMesh.rotation.z = -Math.PI / 3 - f * 0.15;
    guardGroup.add(featherMesh);
  }

  // Socket Bezel Ring
  const socketGeo = new THREE.TorusGeometry(0.52, 0.09, 16, 32);
  disposables.push(socketGeo);
  const socketMesh = new THREE.Mesh(socketGeo, goldArmorMat);
  socketMesh.rotation.x = Math.PI / 2;
  guardGroup.add(socketMesh);

  // Refractive Faceted Twilight Dragon Core Gem
  const gemGeo = new THREE.IcosahedronGeometry(0.38, 0);
  disposables.push(gemGeo);
  const gemMesh = new THREE.Mesh(gemGeo, gemMat);
  guardGroup.add(gemMesh);

  // Rotating inner containment gimbal ring
  const innerRingGeo = new THREE.TorusGeometry(0.26, 0.035, 8, 32);
  disposables.push(innerRingGeo);
  const innerRing = new THREE.Mesh(innerRingGeo, goldArmorMat);
  guardGroup.add(innerRing);

  // Glowing inner plasma core sphere
  const plasmaGeo = new THREE.SphereGeometry(0.16, 16, 16);
  disposables.push(plasmaGeo);
  const innerPlasma = new THREE.Mesh(plasmaGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
  guardGroup.add(innerPlasma);

  // 4. Ergonomic Lathed Grip & 3D Helical Gold Wire Wrap
  const gripPoints = [
    new THREE.Vector2(0.18, 0.0),
    new THREE.Vector2(0.17, -0.4),
    new THREE.Vector2(0.14, -1.2),
    new THREE.Vector2(0.15, -1.8),
    new THREE.Vector2(0.18, -2.4),
    new THREE.Vector2(0.22, -2.6)
  ];
  const gripGeo = new THREE.LatheGeometry(gripPoints, 16);
  disposables.push(gripGeo);
  const gripMat = new THREE.MeshStandardMaterial({
    color: 0x080f1e,
    roughness: 0.7,
    metalness: 0.35
  });
  const gripMesh = new THREE.Mesh(gripGeo, gripMat);
  gripMesh.position.set(0, -0.6, 0);
  alucardGroup.add(gripMesh);

  // Continuous 3D Helical Wire Wrap
  const helixPoints = [];
  const turns = 8;
  for (let i = 0; i <= 80; i++) {
    const t = i / 80;
    const angle = t * turns * Math.PI * 2;
    const y = -t * 2.6;
    const r = 0.15 + 0.03 * Math.cos((t - 0.5) * Math.PI);
    helixPoints.push(new THREE.Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r));
  }
  const helixCurve = new THREE.CatmullRomCurve3(helixPoints);
  const wireGeo = new THREE.TubeGeometry(helixCurve, 80, 0.018, 6, false);
  disposables.push(wireGeo);
  const wireMesh = new THREE.Mesh(wireGeo, goldArmorMat);
  wireMesh.position.set(0, -0.6, 0);
  alucardGroup.add(wireMesh);

  // Draconic Crown Pommel & Faceted Ruby Finial
  const pommelGeo = new THREE.CylinderGeometry(0.42, 0.22, 0.65, 8);
  disposables.push(pommelGeo);
  const pommelMesh = new THREE.Mesh(pommelGeo, goldArmorMat);
  pommelMesh.position.set(0, -3.4, 0);
  alucardGroup.add(pommelMesh);

  const finialGeo = new THREE.OctahedronGeometry(0.28, 0);
  disposables.push(finialGeo);
  const finialMesh = new THREE.Mesh(finialGeo, gemMat);
  finialMesh.position.set(0, -3.9, 0);
  alucardGroup.add(finialMesh);

  // 5. Four Levitating Blood Dragon Shards (Orbiting Satellites)
  const shards = [];
  const shardRadius = 3.6;
  for (let i = 0; i < 4; i++) {
    const sGroup = new THREE.Group();
    alucardGroup.add(sGroup);

    const sGeo = new THREE.CylinderGeometry(0.02, 0.24, 2.2, 4);
    sGeo.rotateY(Math.PI / 4);
    disposables.push(sGeo);
    const sMesh = new THREE.Mesh(sGeo, fullerMat);
    sMesh.scale.set(0.22, 1, 1);
    sGroup.add(sMesh);

    const sHiltGeo = new THREE.BoxGeometry(0.36, 0.08, 0.08);
    disposables.push(sHiltGeo);
    const sHilt = new THREE.Mesh(sHiltGeo, goldArmorMat);
    sHilt.position.y = -1.1;
    sGroup.add(sHilt);

    const angle = (i * Math.PI * 2) / 4;
    sGroup.position.set(Math.cos(angle) * shardRadius, 2.5 + (i % 2 === 0 ? 0.9 : -0.9), Math.sin(angle) * shardRadius);
    shards.push({ group: sGroup, angle, speed: 0.55 + (i % 2) * 0.2, heightBase: 2.5 + (i % 2 === 0 ? 0.9 : -0.9) });
  }

  return { group: alucardGroup, gemMesh, innerRing, shards };
}

// ============================================================================
// BUILDER 2: GUSION'S ASTRAL HOLY DAGGERS & STAR CORE (DIAMOND STILETTO)
// ============================================================================
function buildGusionRelic(goldArmorMat, gusionBladeMat, gusionPlasmaMat, gusionCoreMat, disposables) {
  const gusionGroup = new THREE.Group();
  gusionGroup.name = 'Gusion_Astral_Nexus';

  // 1. Central Levitating Astral Hyper-Core
  const coreGroup = new THREE.Group();
  gusionGroup.add(coreGroup);

  const outerCoreGeo = new THREE.IcosahedronGeometry(0.9, 0);
  disposables.push(outerCoreGeo);
  const outerCoreMesh = new THREE.Mesh(outerCoreGeo, gusionCoreMat);
  coreGroup.add(outerCoreMesh);

  const innerCoreGeo = new THREE.OctahedronGeometry(0.48, 0);
  disposables.push(innerCoreGeo);
  const innerCoreStar = new THREE.Mesh(innerCoreGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
  coreGroup.add(innerCoreStar);

  // 3 Gyroscopic Celestial Astrolabe Rings rotating on 3 axes
  const ringXGeo = new THREE.TorusGeometry(1.45, 0.045, 12, 48);
  const ringYGeo = new THREE.TorusGeometry(1.7, 0.045, 12, 48);
  const ringZGeo = new THREE.TorusGeometry(1.95, 0.045, 12, 48);
  disposables.push(ringXGeo, ringYGeo, ringZGeo);

  const ringX = new THREE.Mesh(ringXGeo, goldArmorMat);
  const ringY = new THREE.Mesh(ringYGeo, gusionPlasmaMat);
  const ringZ = new THREE.Mesh(ringZGeo, goldArmorMat);
  ringX.rotation.x = Math.PI / 3;
  ringY.rotation.y = Math.PI / 4;
  ringZ.rotation.z = Math.PI / 6;
  coreGroup.add(ringX, ringY, ringZ);

  // 2. Ten Floating Telekinetic Holy Daggers with Diamond Stiletto Profile
  const daggers = [];
  const daggerRadius = 3.5;

  const dBladeGeo = createStilettoBladeGeometry({
    length: 2.3,
    baseWidth: 0.22,
    thickness: 0.08,
    segments: 14
  });
  disposables.push(dBladeGeo);

  const guardCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.35, 0.08, 0),
    new THREE.Vector3(-0.15, -0.04, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.15, -0.04, 0),
    new THREE.Vector3(0.35, 0.08, 0)
  ]);
  const dGuardGeo = new THREE.TubeGeometry(guardCurve, 12, 0.035, 6, false);
  disposables.push(dGuardGeo);

  const dGripGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.55, 8);
  const dPommelGeo = new THREE.OctahedronGeometry(0.11, 0);
  const pGrooveGeo = new THREE.BoxGeometry(0.035, 1.6, 0.09);
  disposables.push(dGripGeo, dPommelGeo, pGrooveGeo);

  for (let i = 0; i < 10; i++) {
    const dSub = new THREE.Group();
    gusionGroup.add(dSub);

    const blade = new THREE.Mesh(dBladeGeo, gusionBladeMat);
    dSub.add(blade);

    const pGroove = new THREE.Mesh(pGrooveGeo, gusionPlasmaMat);
    pGroove.position.y = 1.0;
    dSub.add(pGroove);

    const dGuard = new THREE.Mesh(dGuardGeo, goldArmorMat);
    dGuard.position.y = 0.0;
    dSub.add(dGuard);

    const dGrip = new THREE.Mesh(dGripGeo, goldArmorMat);
    dGrip.position.y = -0.32;
    dSub.add(dGrip);

    const dPommel = new THREE.Mesh(dPommelGeo, gusionPlasmaMat);
    dPommel.position.y = -0.65;
    dSub.add(dPommel);

    const angle = (i * Math.PI * 2) / 10;
    const isUpper = i % 2 === 0;
    const baseY = isUpper ? 0.9 : -0.9;

    dSub.position.set(Math.cos(angle) * daggerRadius, baseY, Math.sin(angle) * daggerRadius);
    dSub.rotation.z = isUpper ? -0.25 : 0.25;

    daggers.push({
      group: dSub,
      angle,
      speed: 0.45,
      radius: daggerRadius,
      baseY,
      phase: i * 0.6
    });
  }

  return { group: gusionGroup, coreGroup, outerCoreMesh, innerCoreStar, ringX, ringY, ringZ, daggers };
}

// ============================================================================
// BUILDER 3: KAGURA'S SEIMEI YIN-YANG CELESTIAL PARASOL & ASTROLABE
// ============================================================================
function buildKaguraRelic(goldArmorMat, kaguraSilkMat, kaguraOfudaMat, kaguraGemMat, disposables) {
  const kaguraGroup = new THREE.Group();
  kaguraGroup.name = 'Kagura_Seimei_Umbrella';

  // 1. The Celestial Wagasa Parasol Assembly
  const umbrellaHead = new THREE.Group();
  umbrellaHead.position.set(0, 1.9, 0);
  kaguraGroup.add(umbrellaHead);

  const canopyGeo = createWagasaCanopyGeometry({
    radius: 3.4,
    height: 1.05,
    radialSegments: 32,
    heightSegments: 16,
    ribCount: 16
  });
  disposables.push(canopyGeo);

  const canopyMesh = new THREE.Mesh(canopyGeo, kaguraSilkMat);
  umbrellaHead.add(canopyMesh);

  // 16 Golden Bamboo Primary Ribs radiating along canopy curve
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI * 2) / 16;
    const ribGeo = new THREE.CylinderGeometry(0.02, 0.022, 3.2, 6);
    disposables.push(ribGeo);
    const ribMesh = new THREE.Mesh(ribGeo, goldArmorMat);
    ribMesh.position.set(Math.cos(angle) * 1.55, -0.45, Math.sin(angle) * 1.55);
    ribMesh.rotation.y = -angle;
    ribMesh.rotation.z = Math.PI / 2.5;
    umbrellaHead.add(ribMesh);

    // 16 Diagonal Secondary Bamboo Struts connecting to slider runner
    const strutGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.6, 6);
    disposables.push(strutGeo);
    const strutMesh = new THREE.Mesh(strutGeo, goldArmorMat);
    strutMesh.position.set(Math.cos(angle) * 0.9, -1.0, Math.sin(angle) * 0.9);
    strutMesh.rotation.y = -angle;
    strutMesh.rotation.z = Math.PI / 3.4;
    umbrellaHead.add(strutMesh);
  }

  // Dual Astrolabe Star Rings beneath canopy
  const astroRing1Geo = new THREE.TorusGeometry(1.65, 0.035, 8, 36);
  const astroRing2Geo = new THREE.TorusGeometry(2.45, 0.03, 8, 36);
  disposables.push(astroRing1Geo, astroRing2Geo);

  const astroRing1 = new THREE.Mesh(astroRing1Geo, goldArmorMat);
  astroRing1.rotation.x = Math.PI / 2;
  astroRing1.position.y = -0.55;
  umbrellaHead.add(astroRing1);

  const astroRing2 = new THREE.Mesh(astroRing2Geo, goldArmorMat);
  astroRing2.rotation.x = Math.PI / 2;
  astroRing2.position.y = -0.75;
  umbrellaHead.add(astroRing2);

  // Turned Wooden Rosette (Rokuro) Hub
  const rokuroGeo = new THREE.CylinderGeometry(0.24, 0.18, 0.35, 16);
  disposables.push(rokuroGeo);
  const rokuroMesh = new THREE.Mesh(rokuroGeo, goldArmorMat);
  rokuroMesh.position.y = -1.45;
  umbrellaHead.add(rokuroMesh);

  // Crown Finial Peak & Faceted Amethyst Gem with Lotus Petals
  const finialGeo = new THREE.CylinderGeometry(0.18, 0.32, 0.65, 8);
  disposables.push(finialGeo);
  const finialPeak = new THREE.Mesh(finialGeo, goldArmorMat);
  finialPeak.position.y = 0.35;
  umbrellaHead.add(finialPeak);

  const crownGemGeo = new THREE.IcosahedronGeometry(0.38, 0);
  disposables.push(crownGemGeo);
  const crownGem = new THREE.Mesh(crownGemGeo, kaguraGemMat);
  crownGem.position.y = 0.95;
  umbrellaHead.add(crownGem);

  // 2. Polished Ebony Bamboo Shaft
  const shaftGeo = new THREE.CylinderGeometry(0.08, 0.08, 6.2, 12);
  disposables.push(shaftGeo);
  const shaftMat = new THREE.MeshStandardMaterial({
    color: 0x0c0a14,
    roughness: 0.5,
    metalness: 0.4
  });
  const shaftMesh = new THREE.Mesh(shaftGeo, shaftMat);
  shaftMesh.position.set(0, -1.2, 0);
  kaguraGroup.add(shaftMesh);

  for (let i = 0; i < 6; i++) {
    const ringGeo = new THREE.TorusGeometry(0.09, 0.015, 8, 16);
    disposables.push(ringGeo);
    const ring = new THREE.Mesh(ringGeo, goldArmorMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, -0.4 - i * 0.7, 0);
    kaguraGroup.add(ring);
  }

  // 3. Eight Levitating Sacred Ofuda Talismans orbiting in a spiral vortex
  const talismans = [];
  const ofudaGeo = new THREE.PlaneGeometry(0.42, 1.15, 3, 8);
  disposables.push(ofudaGeo);
  const vortexRadius = 2.5;

  for (let i = 0; i < 8; i++) {
    const tMesh = new THREE.Mesh(ofudaGeo, kaguraOfudaMat);
    kaguraGroup.add(tMesh);

    const angle = (i * Math.PI * 2) / 8;
    const initialY = -2.2 + i * 0.55;
    tMesh.position.set(Math.cos(angle) * vortexRadius, initialY, Math.sin(angle) * vortexRadius);

    talismans.push({
      mesh: tMesh,
      angle,
      speed: 0.75,
      radius: vortexRadius,
      baseY: initialY,
      phase: i * 0.8
    });
  }

  return { group: kaguraGroup, umbrellaHead, canopyMesh, crownGem, astroRing1, astroRing2, talismans };
}

// ============================================================================
// COMPONENT MAIN EXPORT
// ============================================================================
export default function HeroLanding({ onSelectHeroForDetail, onSelectHeroForChamber }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // States
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // 3D Interactive Raycasting Reticle State
  const [reticleState, setReticleState] = useState({
    visible: false,
    x: 0,
    y: 0,
    relicName: '',
    lethality: ''
  });

  // Three.js References
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const shrineGroupRef = useRef(null);
  const relicsParentGroupRef = useRef(null);
  const alucardRelicRef = useRef(null);
  const gusionRelicRef = useRef(null);
  const kaguraRelicRef = useRef(null);
  const coreLightRef = useRef(null);
  const tipLightRef = useRef(null);
  const shockwaveMeshRef = useRef(null);
  const shockwaveStateRef = useRef({ active: false, scale: 0.1, opacity: 0.0 });
  const arenaFloorMeshRef = useRef(null);
  const godRaysGroupRef = useRef(null);
  const activeHeroIndexRef = useRef(0);
  const targetColorRef = useRef(new THREE.Color('#f59e0b'));
  const targetSecondaryColorRef = useRef(new THREE.Color('#ef4444'));

  // Pointer & Physics
  const rotTarget = useRef({ x: 0, y: 0 });
  const rotCurrent = useRef({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const targetScrollProg = useRef(0.0);
  const screenShakeRef = useRef(0.0);
  const mouseNormRef = useRef(new THREE.Vector2(-999, -999));

  const activeArchetype = FEATURED_ARCHETYPES[activeHeroIndex] || FEATURED_ARCHETYPES[0];

  useEffect(() => {
    activeHeroIndexRef.current = activeHeroIndex;
  }, [activeHeroIndex]);

  // ============================================================================
  // THREE.JS MASTER ENGINE: 3 ICONIC AWWWARDS-CALIBRE SCULPTED WEAPON RELICS
  // ============================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    const disposables = [];

    // 1. Scene & Deep Atmosphere Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080d1a);
    scene.fog = new THREE.FogExp2(0x080d1a, 0.015);
    sceneRef.current = scene;

    // 2. Cinematic Perspective Camera
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 17.5);
    camera.lookAt(0, 0.6, 0);
    cameraRef.current = camera;

    // 3. High-Performance WebGL Renderer with ACES Tone Mapping
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

    // 4. Procedural Studio HDR Environment Map for Metallic Reflections
    const studioEnvMap = createProceduralStudioEnv(renderer);
    scene.environment = studioEnvMap;

    // 5. Procedural Dynamic Textures
    const damascusTexture = createDamascusTexture();
    const arenaFloorTexture = createSacredArenaTexture();
    const yinYangTexture = createYinYangCanopyTexture();
    const ofudaTexture = createOfudaTexture();

    // 6. Master Shrine Assembly Group
    const shrineGroup = new THREE.Group();
    scene.add(shrineGroup);
    shrineGroupRef.current = shrineGroup;

    // 7. Relics Parent Container (Holds all 3 iconic hero weapons)
    const relicsParentGroup = new THREE.Group();
    shrineGroup.add(relicsParentGroup);
    relicsParentGroupRef.current = relicsParentGroup;

    // ========================================================================
    // A. LUXURY MASTER MATERIALS
    // ========================================================================
    const goldArmorMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 0.9,
      clearcoatRoughness: 0.04,
      envMapIntensity: 3.2
    });

    const damascusBladeMat = new THREE.MeshPhysicalMaterial({
      color: 0x142036,
      metalness: 0.98,
      roughness: 0.08,
      bumpMap: damascusTexture,
      bumpScale: 0.035,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      iridescence: 0.92,
      iridescenceIOR: 1.65,
      envMapIntensity: 3.5
    });

    const alucardGemMat = new THREE.MeshPhysicalMaterial({
      color: 0xfef08a,
      emissive: 0xf59e0b,
      emissiveIntensity: 2.8,
      roughness: 0.03,
      metalness: 0.05,
      transmission: 0.82,
      ior: 2.417
    });

    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf59e0b,
      emissiveIntensity: 4.2,
      roughness: 0.15
    });

    const gusionBladeMat = new THREE.MeshPhysicalMaterial({
      color: 0xdbeafe,
      metalness: 0.98,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      iridescence: 0.95,
      iridescenceIOR: 1.8,
      envMapIntensity: 3.8
    });

    const gusionPlasmaMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x06b6d4,
      emissiveIntensity: 4.8,
      roughness: 0.1
    });

    const gusionCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x06b6d4,
      emissiveIntensity: 3.2,
      transmission: 0.85,
      roughness: 0.04,
      ior: 2.1
    });

    const kaguraSilkMat = new THREE.MeshPhysicalMaterial({
      map: yinYangTexture,
      color: 0xffffff,
      emissive: 0xa855f7,
      emissiveIntensity: 0.45,
      roughness: 0.22,
      transmission: 0.55,
      clearcoat: 0.7,
      side: THREE.DoubleSide
    });

    const kaguraOfudaMat = new THREE.MeshStandardMaterial({
      map: ofudaTexture,
      transparent: true,
      opacity: 0.92,
      emissive: 0xa855f7,
      emissiveIntensity: 0.9,
      side: THREE.DoubleSide
    });

    const kaguraGemMat = new THREE.MeshPhysicalMaterial({
      color: 0xf5d0fe,
      emissive: 0xa855f7,
      emissiveIntensity: 3.0,
      roughness: 0.04,
      transmission: 0.78,
      ior: 2.2
    });

    // ========================================================================
    // B. INSTANTIATE THE 3 SCULPTED SOVEREIGN WEAPONS
    // ========================================================================
    const alucardRelic = buildAlucardRelic(goldArmorMat, damascusBladeMat, alucardGemMat, fullerMat, disposables);
    const gusionRelic = buildGusionRelic(goldArmorMat, gusionBladeMat, gusionPlasmaMat, gusionCoreMat, disposables);
    const kaguraRelic = buildKaguraRelic(goldArmorMat, kaguraSilkMat, kaguraOfudaMat, kaguraGemMat, disposables);

    relicsParentGroup.add(alucardRelic.group);
    relicsParentGroup.add(gusionRelic.group);
    relicsParentGroup.add(kaguraRelic.group);

    alucardRelic.group.scale.set(1, 1, 1);
    gusionRelic.group.scale.set(0.001, 0.001, 0.001);
    kaguraRelic.group.scale.set(0.001, 0.001, 0.001);

    alucardRelicRef.current = alucardRelic;
    gusionRelicRef.current = gusionRelic;
    kaguraRelicRef.current = kaguraRelic;

    // ========================================================================
    // C. SACRED TRANSMUTATION ARENA GROUND & SHOCKWAVE
    // ========================================================================
    const arenaGroup = new THREE.Group();
    arenaGroup.position.y = -4.6;
    shrineGroup.add(arenaGroup);

    const arenaFloorGeo = new THREE.CircleGeometry(9.2, 64);
    disposables.push(arenaFloorGeo);
    const arenaFloorMat = new THREE.MeshBasicMaterial({
      map: arenaFloorTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const arenaFloorMesh = new THREE.Mesh(arenaFloorGeo, arenaFloorMat);
    arenaFloorMesh.rotation.x = -Math.PI / 2;
    arenaGroup.add(arenaFloorMesh);
    arenaFloorMeshRef.current = arenaFloorMesh;

    // Concentric Orbiting Wireframe Rings
    const outerRingGeo = new THREE.RingGeometry(5.4, 8.2, 64);
    disposables.push(outerRingGeo);
    const outerRing = new THREE.Mesh(
      outerRingGeo,
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide
      })
    );
    outerRing.rotation.x = -Math.PI / 2;
    arenaGroup.add(outerRing);

    // Physical 3D Shockwave Ring
    const shockwaveGeo = new THREE.RingGeometry(0.2, 1.1, 64);
    disposables.push(shockwaveGeo);
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide
    });
    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.rotation.x = -Math.PI / 2;
    shockwaveMesh.position.y = 0.05;
    arenaGroup.add(shockwaveMesh);
    shockwaveMeshRef.current = shockwaveMesh;

    // ========================================================================
    // D. 4 LEVITATING STONE MONOLITHS (SACRED SHRINE PILLARS)
    // ========================================================================
    const monoliths = [];
    const monolithRadius = 6.4;
    for (let i = 0; i < 4; i++) {
      const mGroup = new THREE.Group();
      shrineGroup.add(mGroup);

      const stoneMat = new THREE.MeshStandardMaterial({
        color: 0x091122,
        roughness: 0.65,
        metalness: 0.6
      });
      const shaftGeo = new THREE.BoxGeometry(0.58, 4.4, 0.58);
      disposables.push(shaftGeo);
      const shaft = new THREE.Mesh(shaftGeo, stoneMat);
      mGroup.add(shaft);

      const capGeo = new THREE.ConeGeometry(0.5, 0.85, 4);
      capGeo.rotateY(Math.PI / 4);
      disposables.push(capGeo);
      const cap = new THREE.Mesh(capGeo, stoneMat);
      cap.position.y = 2.5;
      mGroup.add(cap);

      const runeGeo = new THREE.BoxGeometry(0.08, 3.4, 0.62);
      disposables.push(runeGeo);
      const runeMesh = new THREE.Mesh(runeGeo, fullerMat);
      mGroup.add(runeMesh);

      const mAngle = (i * Math.PI * 2) / 4 + Math.PI / 4;
      mGroup.position.set(Math.cos(mAngle) * monolithRadius, 0.5, Math.sin(mAngle) * monolithRadius);
      monoliths.push({ group: mGroup, angle: mAngle, baseY: 0.5, phase: i * 1.5 });
    }

    // ========================================================================
    // E. VOLUMETRIC DIVINE LIGHT SHAFTS (CINEMATIC GOD RAYS)
    // ========================================================================
    const godRaysGroup = new THREE.Group();
    const rayGeo = new THREE.CylinderGeometry(0.4, 3.2, 18, 16, 1, true);
    disposables.push(rayGeo);
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const rayOffsets = [-0.3, 0.25, -0.15, 0.3];
    for (let i = 0; i < 4; i++) {
      const ray = new THREE.Mesh(rayGeo, rayMat);
      ray.position.set(rayOffsets[i] * 9.0, 3.5, (i - 1.5) * 2.8);
      ray.rotation.z = rayOffsets[i] * 0.35;
      ray.rotation.x = 0.12 * (i % 2 === 0 ? 1 : -1);
      godRaysGroup.add(ray);
    }
    shrineGroup.add(godRaysGroup);
    godRaysGroupRef.current = godRaysGroup;

    // ========================================================================
    // F. 3,000 LIVING SPIRAL STARDUST PARTICLES (LOGARITHMIC SWIRL)
    // ========================================================================
    const particleCount = 3000;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount);
    const pAngles = new Float32Array(particleCount);
    const pRadii = new Float32Array(particleCount);

    const cColorA = new THREE.Color('#f59e0b');
    const cColorB = new THREE.Color('#38bdf8');
    const cColorC = new THREE.Color('#a855f7');

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.8 + Math.random() * 9.5;
      const angle = Math.random() * Math.PI * 2;
      pRadii[i] = radius;
      pAngles[i] = angle;

      pPositions[i * 3] = Math.cos(angle) * radius;
      pPositions[i * 3 + 1] = -4.6 + Math.random() * 15.0;
      pPositions[i * 3 + 2] = Math.sin(angle) * radius;
      pVelocities[i] = 0.02 + Math.random() * 0.045;

      const dice = Math.random();
      const pColor = dice < 0.45 ? cColorA : dice < 0.75 ? cColorB : cColorC;
      pColors[i * 3] = pColor.r;
      pColors[i * 3 + 1] = pColor.g;
      pColors[i * 3 + 2] = pColor.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    disposables.push(pGeo);

    const pMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending
    });
    disposables.push(pMat);
    const particlePoints = new THREE.Points(pGeo, pMat);
    shrineGroup.add(particlePoints);

    // ========================================================================
    // G. CINEMATIC DIRECTIONAL & DYNAMIC POINT LIGHT RIG
    // ========================================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xf59e0b, 4.5, 28);
    coreLight.position.set(0, 0, 1.2);
    relicsParentGroup.add(coreLight);
    coreLightRef.current = coreLight;

    const tipLight = new THREE.PointLight(0x38bdf8, 3.0, 22);
    tipLight.position.set(0, 7.8, 0.6);
    relicsParentGroup.add(tipLight);
    tipLightRef.current = tipLight;

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 2.2);
    sunLight.position.set(16, 26, 20);
    scene.add(sunLight);

    const cyanRim = new THREE.DirectionalLight(0x38bdf8, 1.8);
    cyanRim.position.set(-18, 18, -12);
    scene.add(cyanRim);

    // ========================================================================
    // H. INTERACTIVE 3D RAYCASTING SETUP
    // ========================================================================
    const raycaster = new THREE.Raycaster();
    const tempProjVec = new THREE.Vector3();

    // ========================================================================
    // I. 60/120FPS HIGH-PERFORMANCE RENDER LOOP
    // ========================================================================
    let animId;
    const clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const currentHeroIdx = activeHeroIndexRef.current;

      // 1. Relics Smooth Morphing Lerp
      const tAlucard = currentHeroIdx === 0 ? 1.0 : 0.001;
      const tGusion = currentHeroIdx === 1 ? 1.0 : 0.001;
      const tKagura = currentHeroIdx === 2 ? 1.0 : 0.001;

      alucardRelic.group.scale.lerp(new THREE.Vector3(tAlucard, tAlucard, tAlucard), 0.08);
      gusionRelic.group.scale.lerp(new THREE.Vector3(tGusion, tGusion, tGusion), 0.08);
      kaguraRelic.group.scale.lerp(new THREE.Vector3(tKagura, tKagura, tKagura), 0.08);

      // 2. Continuous Weightless Hover Physics
      relicsParentGroup.position.y = Math.sin(elapsed * 1.5) * 0.22;

      // 3. Alucard Relic Animations (Gem Spin, Gimbal Rings, Orbiting Shards)
      if (alucardRelic.gemMesh) {
        alucardRelic.gemMesh.rotation.x += delta * 1.6;
        alucardRelic.gemMesh.rotation.y += delta * 2.2;
        alucardRelic.innerRing.rotation.y += delta * 3.0;
        alucardRelic.innerRing.rotation.x += delta * 1.8;
      }
      for (let i = 0; i < alucardRelic.shards.length; i++) {
        const s = alucardRelic.shards[i];
        s.angle += delta * s.speed;
        s.group.position.x = Math.cos(s.angle) * 3.6;
        s.group.position.z = Math.sin(s.angle) * 3.6;
        s.group.position.y = s.heightBase + Math.sin(elapsed * 2.0 + i) * 0.35;
        s.group.rotation.y += delta * 2.5;
        s.group.rotation.z = Math.sin(elapsed * 2.0 + i) * 0.2;
      }

      // 4. Gusion Astral Daggers (Telekinetic Wave + Dynamic Cursor Tilt)
      if (gusionRelic.outerCoreMesh) {
        gusionRelic.outerCoreMesh.rotation.x += delta * 1.2;
        gusionRelic.outerCoreMesh.rotation.y += delta * 1.8;
        gusionRelic.innerCoreStar.rotation.z -= delta * 2.5;
        gusionRelic.ringX.rotation.x += delta * 1.8;
        gusionRelic.ringY.rotation.y += delta * 2.2;
        gusionRelic.ringZ.rotation.z += delta * 1.4;
      }
      for (let i = 0; i < gusionRelic.daggers.length; i++) {
        const d = gusionRelic.daggers[i];
        d.angle += delta * d.speed;
        d.group.position.x = Math.cos(d.angle) * d.radius;
        d.group.position.z = Math.sin(d.angle) * d.radius;
        d.group.position.y = d.baseY + Math.sin(elapsed * 2.5 + d.phase) * 0.3;
        d.group.rotation.y = -d.angle + Math.PI / 2;
        // Reactive cursor telekinesis pitch & roll
        d.group.rotation.x = rotCurrent.current.y * 0.65 + Math.sin(elapsed * 2.0 + i) * 0.15;
        d.group.rotation.z = (i % 2 === 0 ? -0.25 : 0.25) + rotCurrent.current.x * 0.45;
      }

      // 5. Kagura Seimei Umbrella (Parasol Spin, Astrolabe Rings, Fluttering Ofuda)
      if (kaguraRelic.umbrellaHead) {
        kaguraRelic.umbrellaHead.rotation.y += delta * 0.45;
        kaguraRelic.astroRing1.rotation.z += delta * 0.8;
        kaguraRelic.astroRing2.rotation.z -= delta * 0.6;
        kaguraRelic.crownGem.rotation.y += delta * 2.0;
      }
      for (let i = 0; i < kaguraRelic.talismans.length; i++) {
        const t = kaguraRelic.talismans[i];
        t.angle += delta * t.speed;
        t.mesh.position.x = Math.cos(t.angle) * t.radius;
        t.mesh.position.z = Math.sin(t.angle) * t.radius;
        t.mesh.position.y = t.baseY + Math.sin(elapsed * 2.0 + t.phase) * 0.25;
        t.mesh.rotation.y = t.angle;
        t.mesh.rotation.z = Math.sin(elapsed * 3.0 + i) * 0.25;
        t.mesh.rotation.x = Math.cos(elapsed * 2.5 + i) * 0.15;
      }

      // 6. Arena Floor Parallax Spin & Smooth Color Lerp
      arenaFloorMesh.rotation.z += delta * 0.05;
      outerRing.rotation.z -= delta * 0.08;
      for (let i = 0; i < monoliths.length; i++) {
        const m = monoliths[i];
        m.group.position.y = m.baseY + Math.sin(elapsed * 1.4 + m.phase) * 0.28;
      }

      // 7. Particle Swirl
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

      // 8. Shockwave Expansion Loop
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

      // 9. Mouse Parallax & Drag Inertia
      rotCurrent.current.x += (rotTarget.current.x - rotCurrent.current.x) * 0.055;
      rotCurrent.current.y += (rotTarget.current.y - rotCurrent.current.y) * 0.055;

      shrineGroup.rotation.y = rotCurrent.current.x * 0.65 + dragOffset.current.x;
      shrineGroup.rotation.x = rotCurrent.current.y * 0.45 + dragOffset.current.y;

      // 10. Dynamic Theme Color Lerp
      if (coreLightRef.current && targetColorRef.current) {
        coreLightRef.current.color.lerp(targetColorRef.current, 0.08);
      }
      if (tipLightRef.current && targetSecondaryColorRef.current) {
        tipLightRef.current.color.lerp(targetSecondaryColorRef.current, 0.08);
      }
      if (arenaFloorMeshRef.current && targetColorRef.current) {
        arenaFloorMeshRef.current.material.color.lerp(targetColorRef.current, 0.08);
      }
      if (godRaysGroupRef.current && targetColorRef.current) {
        for (let ray of godRaysGroupRef.current.children) {
          ray.material.color.lerp(targetColorRef.current, 0.08);
        }
      }

      // 11. Raycasting & Holographic 3D Reticle Tracking
      if (mouseNormRef.current.x > -2) {
        raycaster.setFromCamera(mouseNormRef.current, camera);
        const activeRelicObj =
          currentHeroIdx === 0
            ? alucardRelic.group
            : currentHeroIdx === 1
            ? gusionRelic.group
            : kaguraRelic.group;

        const intersects = raycaster.intersectObjects(activeRelicObj.children, true);
        if (intersects.length > 0) {
          const hit = intersects[0];
          tempProjVec.copy(hit.point).project(camera);
          const screenX = ((tempProjVec.x + 1) * width) / 2;
          const screenY = ((-tempProjVec.y + 1) * height) / 2;

          const arch = FEATURED_ARCHETYPES[currentHeroIdx];
          setReticleState({
            visible: true,
            x: screenX,
            y: screenY,
            relicName: arch.weaponName,
            lethality: arch.loreSpecs.lethality
          });
        } else {
          setReticleState((prev) => (prev.visible ? { ...prev, visible: false } : prev));
        }
      }

      // 12. Camera Glide driven by GSAP ScrollTrigger
      const currentScroll = targetScrollProg.current;
      const targetCamZ = 17.5 - currentScroll * 8.5;
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
      studioEnvMap.dispose();
      damascusTexture.dispose();
      arenaFloorTexture.dispose();
      yinYangTexture.dispose();
      ofudaTexture.dispose();
      disposables.forEach((d) => d.dispose());
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
  // GSAP SCROLLTRIGGER ORCHESTRATION & LENIS SMOOTH SYNC
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
        targetScrollProg.current = self.progress;
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

      mouseNormRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNormRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

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

    shockwaveStateRef.current = {
      active: true,
      scale: 0.1,
      opacity: 0.95
    };

    if (coreLightRef.current) {
      coreLightRef.current.intensity = 8.5;
    }

    setTimeout(() => {
      if (coreLightRef.current) {
        coreLightRef.current.intensity = 4.5;
      }
    }, 1600);
  };

  // Section Scroll & Hero Selection Handlers
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

  const handleExploreHeroes = () => {
    audioManager.playClick();
    scrollToSection('#heroes');
  };

  const handleOpenChamber = () => {
    audioManager.playClick();
    const hero = HEROES.find((h) => h.id === activeArchetype.heroId) || HEROES[0];
    if (onSelectHeroForChamber) {
      onSelectHeroForChamber(hero);
    } else {
      scrollToSection('#chamber');
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

        {/* 3. Floating Holographic 3D Reticle (Active on Weapon Raycast Intersection) */}
        {reticleState.visible && (
          <div
            className="fixed pointer-events-none z-30 transition-transform duration-75"
            style={{
              left: `${reticleState.x}px`,
              top: `${reticleState.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="w-16 h-16 rounded-full border border-dashed animate-spin-slow"
                style={{ borderColor: activeArchetype.primaryColor }}
              />
              <div
                className="absolute w-8 h-8 rounded-full border animate-ping"
                style={{ borderColor: activeArchetype.secondaryColor }}
              />
              <Crosshair
                className="absolute w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              />

              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: activeArchetype.primaryColor }}
                />
                <span className="font-mono text-[9px] tracking-widest uppercase text-white font-bold">
                  {reticleState.relicName}
                </span>
                <span className="text-white/30 text-xs">|</span>
                <span className="font-mono text-[9px] text-[#f3d288] font-bold">
                  LETHALITY: {reticleState.lethality}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Luxury Minimalist Top Bar */}
        <header className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
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

        {/* 5. Center-Stage: Monumental Editorial Typography & Clean Controls */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 my-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pointer-events-none">
          
          {/* Left Column: Monumental Headline & Direct Actions */}
          <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start pointer-events-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[10px] font-mono tracking-[0.25em] text-[#f3d288] uppercase mb-4 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-ping" />
              <span>OFFICIAL DIGITAL ARCHIVE</span>
            </div>

            <h1 className="text-land-of-dawn text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.14em] uppercase leading-none mb-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              LAND OF DAWN
            </h1>

            <p className="font-serif text-base sm:text-xl md:text-2xl tracking-[0.22em] uppercase text-zinc-200 font-medium drop-shadow-md mb-4">
              CHRONICLES OF SANCTUM ISLAND
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed font-sans mb-7 drop-shadow-md">
              Step into the sacred arena where 133 legendary champions clash. Explore verified attributes, 3D chamber models, tactical ability chains, and the world championship circuit.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleExploreHeroes}
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

              <button
                onClick={handleOpenChamber}
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

          {/* Right Column: Interactive 3D Archetype Switcher */}
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

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isSelected && onSelectHeroForDetail && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            const h = HEROES.find((item) => item.id === arch.heroId);
                            if (h) onSelectHeroForDetail(h);
                          }}
                          className="text-[8.5px] font-mono tracking-widest text-amber-300 hover:text-white uppercase px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 shrink-0 cursor-pointer"
                        >
                          DOSSIER
                        </span>
                      )}
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? 'translate-x-0.5 text-white' : 'text-zinc-600'
                        }`}
                        style={{ color: isSelected ? arch.primaryColor : undefined }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-2 text-[9px] font-mono text-zinc-400 tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>HOVER WEAPON TO SCAN // CLICK TO AWAKEN</span>
            </div>

          </div>

        </div>

        {/* 6. Minimalist Bottom Footer & Scroll Cue */}
        <footer className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between pointer-events-none">
          <div className="text-[9.5px] font-mono tracking-wider text-zinc-400 hidden sm:block">
            DRAG CANVAS TO ROTATE 360° SHRINE
          </div>

          <div
            onClick={() => scrollToSection('#heroes')}
            className="pointer-events-auto flex flex-col items-center gap-1 cursor-pointer group text-zinc-400 hover:text-[#f3d288] transition-colors"
          >
            <span className="text-[9px] font-mono tracking-[0.25em] uppercase font-semibold">
              SCROLL TO EXPLORE ARCHIVE
            </span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
          </div>

          <div className="text-[9.5px] font-mono tracking-wider text-[#f3d288] hidden sm:block font-bold">
            133 LEGENDS ASSEMBLED
          </div>
        </footer>

      </div>
    </section>
  );
}
