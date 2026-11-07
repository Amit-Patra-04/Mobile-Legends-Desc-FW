import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
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
// PROCEDURAL RADIAL GLOWING EMBER TEXTURE GENERATOR
// ============================================================================
function createEmberTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0.0, 'rgba(255, 235, 160, 0.95)');
  grad.addColorStop(0.25, 'rgba(245, 158, 11, 0.85)');
  grad.addColorStop(0.55, 'rgba(220, 60, 20, 0.5)');
  grad.addColorStop(0.85, 'rgba(120, 20, 10, 0.15)');
  grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// ============================================================================
// PROCEDURAL VOLUMETRIC FLAME SHADERS (C2 CONTINUOUS QUINTIC NOISE & CONVECTION)
// ============================================================================
const volumetricFlameVertexShader = `
uniform float uTime;
uniform float uTurbulence;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec3 displaced = position;

  // Fluid buoyant sway and aerodynamic licking flickers (smooth physical convection)
  float heightFactor = smoothstep(0.05, 0.95, uv.y);
  float swayX = sin(uTime * 1.6 + position.y * 1.2) * 0.06 * heightFactor;
  float swayZ = cos(uTime * 1.3 + position.y * 1.0) * 0.05 * heightFactor;
  float tongueFlicker = sin(uTime * 3.4 + position.y * 2.5) * 0.02 * pow(heightFactor, 1.4);
  displaced.x += (swayX + tongueFlicker) * uTurbulence;
  displaced.z += (swayZ + tongueFlicker * 0.7) * uTurbulence;

  float breath = sin(uTime * 2.2 + position.y * 1.8) * 0.015 * heightFactor;
  displaced += normal * breath;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`;

const volumetricFlameFragmentShader = `
uniform float uTime;
uniform vec3 uColorCore;
uniform vec3 uColorMid;
uniform vec3 uColorOuter;
uniform float uSpeed;
uniform float uIntensity;

varying vec2 vUv;
varying vec3 vNormal;

vec2 flameHash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float flameNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  // Quintic smoothstep polynomial (C2 continuous: zero grid lines or derivative cuts)
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(
    mix(dot(flameHash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
        dot(flameHash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(flameHash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
        dot(flameHash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float flameFbm(vec2 p) {
  float total = 0.0;
  float amp = 0.52;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) {
    total += amp * (flameNoise(p) * 0.5 + 0.5);
    p = rot * p * 1.85;
    amp *= 0.48;
  }
  return total;
}

void main() {
  vec2 uv = vUv;

  // 1. Physical Buoyancy Acceleration:
  // Rising gas accelerates upward (v ~ sqrt(y)), so flow speed increases with height
  float buoyancyAccel = 0.75 + pow(clamp(uv.y, 0.0, 1.0), 0.6) * 1.45;
  float timeFlow = uTime * uSpeed;
  vec2 flowPrimary = vec2(0.0, -timeFlow * buoyancyAccel);
  vec2 flowSecondary = vec2(0.0, -timeFlow * (buoyancyAccel * 0.65) + 1.3);

  // 2. Kelvin-Helmholtz Shear Vorticity (domain warping on flame edges)
  float flankFactor = smoothstep(0.05, 0.45, abs(uv.x - 0.5));
  vec2 warpCoord = uv * vec2(2.6, 1.6) + flowPrimary;
  float eddy = flameNoise(warpCoord) * 0.16 * flankFactor;
  vec2 warpedUv = vec2(uv.x + eddy, uv.y);

  // 3. Multi-octave buoyant turbulent convection
  float n1 = flameFbm(warpedUv * vec2(2.2, 1.4) + flowPrimary);
  float n2 = flameFbm(warpedUv * vec2(4.5, 2.6) + flowSecondary);
  float fluid = n1 * 0.62 + n2 * 0.38;

  // 4. Parabolic Flame Body with Aerodynamic Necking & Licking Tongues
  float centerDist = abs(warpedUv.x - 0.5) * 2.0;
  float waist = 1.0 - 0.22 * sin(clamp(uv.y * 3.14159, 0.0, 3.14159));
  float envelope = 1.0 - pow(centerDist / waist, 1.8);

  // Licking flame tongues that pinch off near top
  float tongues = envelope * (0.42 + fluid * 0.88);

  // Grounding at base (ignition layer) and extinction at tips (soot burnout)
  float baseIgnition = smoothstep(0.0, 0.06, uv.y);
  float tipExtinction = smoothstep(1.0, 0.72, uv.y + (fluid - 0.5) * 0.22);
  float energy = clamp(tongues * baseIgnition * tipExtinction, 0.0, 1.0);

  // 5. Physical Blackbody Thermal Radiance Spectrum
  // Base chemiluminescent radical emission (subtle blue reaction root)
  float blueRoot = smoothstep(0.07, 0.0, uv.y) * smoothstep(0.12, 0.45, energy) * 0.45;
  vec3 colBlueRoot = vec3(0.05, 0.25, 0.85);

  // Thermal heat stages:
  // Heat <= 0.25: Dark cooling soot / smoky mahogany (prevents flat additive blow-out)
  // Heat 0.25 - 0.65: Deep fiery red into rich flame orange
  // Heat 0.65 - 0.90: Incandescent warm golden amber
  // Heat > 0.90: Incandescent core filament (softly luminous, not nuclear white)
  float heat = pow(energy, 1.15);
  vec3 colSoot = vec3(0.18, 0.04, 0.01);
  vec3 colFlame = mix(colSoot, uColorOuter, smoothstep(0.08, 0.32, heat));
  colFlame = mix(colFlame, uColorMid, smoothstep(0.32, 0.72, heat));
  colFlame = mix(colFlame, uColorCore, smoothstep(0.72, 0.96, heat));

  // Blend in subtle chemiluminescent blue radical root
  colFlame = mix(colFlame, colBlueRoot, blueRoot);

  // Radiance multiplier: calibrated in natural HDR range [0.0, 1.25]
  colFlame *= (0.85 + smoothstep(0.75, 1.0, heat) * 0.35) * uIntensity;

  // 6. Natural Soot Dissipation Alpha
  float alpha = smoothstep(0.08, 0.48, energy);
  float smokeDissipation = 1.0 - smoothstep(0.68, 0.98, uv.y) * 0.4;
  alpha *= smokeDissipation;

  gl_FragColor = vec4(colFlame * alpha, alpha);
}
`;

// ============================================================================
// DEDICATED BLADE FLAME AURA SHADER (PLASMA FLOW ALONG SHARP FACETS)
// ============================================================================
const bladeFlameVertexShader = `
uniform float uTime;
uniform float uTurbulence;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec3 displaced = position;

  // Aerodynamic edge flutter (anchored at uv.x = 0, fluttering outward at uv.x > 0.15)
  float outerFactor = smoothstep(0.15, 1.0, uv.x);
  float flutter = sin(uTime * 2.4 + position.y * 1.6) * 0.035 * outerFactor;
  displaced.z += flutter * uTurbulence;
  displaced.x += cos(uTime * 2.0 + position.y * 1.4) * 0.025 * outerFactor;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`;

const bladeFlameFragmentShader = `
uniform float uTime;
uniform vec3 uColorCore;
uniform vec3 uColorMid;
uniform vec3 uColorOuter;
uniform float uSpeed;
uniform float uIntensity;

varying vec2 vUv;
varying vec3 vNormal;

vec2 flameHash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float flameNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(
    mix(dot(flameHash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
        dot(flameHash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(flameHash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
        dot(flameHash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float flameFbm(vec2 p) {
  float total = 0.0;
  float amp = 0.52;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) {
    total += amp * (flameNoise(p) * 0.5 + 0.5);
    p = rot * p * 1.85;
    amp *= 0.48;
  }
  return total;
}

void main() {
  vec2 uv = vUv;

  // Blade aerodynamics: flame sweeps upward along blade length with buoyant acceleration
  float accel = 0.8 + pow(clamp(uv.y, 0.0, 1.0), 0.7) * 1.3;
  float flowTime = uTime * uSpeed * 0.9;
  vec2 flow = vec2(0.0, -flowTime * accel);

  // Aerodynamic fluid curl along blade bevel
  float warp = flameNoise(uv * vec2(3.2, 1.8) + flow) * 0.14 * (0.2 + uv.x * 0.8);
  vec2 warpedUv = vec2(uv.x, uv.y + warp);

  float n1 = flameFbm(warpedUv * vec2(2.8, 1.6) + flow);
  float n2 = flameFbm(warpedUv * vec2(5.5, 3.2) + flow * 1.35);
  float fluid = n1 * 0.65 + n2 * 0.35;

  // Blade edge profile: Firmly anchored to cutting edge at uv.x = 0, licking outward to uv.x = 1
  float edgeProfile = 1.0 - smoothstep(0.0, 0.95, uv.x);
  float bladeLicks = edgeProfile * (0.48 + fluid * 0.82);

  // Length bounding (grounding near guard, licking flickers near tip)
  float baseBound = smoothstep(0.0, 0.04, uv.y);
  float tipBound = smoothstep(1.0, 0.80, uv.y + (fluid - 0.5) * 0.18);
  float bladeEnergy = clamp(bladeLicks * baseBound * tipBound, 0.0, 1.0);

  // Thermal blackbody progression along blade aura:
  // Root at steel (uv.x = 0): hottest incandescent core
  // Outer tips (uv.x -> 1): cooling crimson and smoky edge
  float heat = pow(bladeEnergy, 1.15);
  vec3 colSoot = vec3(0.16, 0.03, 0.01);
  vec3 col = mix(colSoot, uColorOuter, smoothstep(0.06, 0.30, heat));
  col = mix(col, uColorMid, smoothstep(0.30, 0.70, heat));
  col = mix(col, uColorCore, smoothstep(0.70, 0.95, heat));

  // Radiance calibrated in natural HDR range [0.0, 1.22]
  col *= (0.85 + smoothstep(0.70, 1.0, heat) * 0.32) * uIntensity;

  // Soft soot dissipation alpha
  float alpha = smoothstep(0.06, 0.42, bladeEnergy);
  float tipDissipation = 1.0 - smoothstep(0.78, 0.98, uv.y) * 0.35;
  alpha *= tipDissipation;

  gl_FragColor = vec4(col * alpha, alpha);
}
`;

function createFlameMaterial({
  uSpeed = 1.05,
  uIntensity = 1.15,
  uTurbulence = 0.9,
  uColorCore = new THREE.Color(0xffecc2),
  uColorMid = new THREE.Color(0xf59e0b),
  uColorOuter = new THREE.Color(0xd9480f)
} = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSpeed: { value: uSpeed },
      uIntensity: { value: uIntensity },
      uTurbulence: { value: uTurbulence },
      uColorCore: { value: uColorCore },
      uColorMid: { value: uColorMid },
      uColorOuter: { value: uColorOuter }
    },
    vertexShader: volumetricFlameVertexShader,
    fragmentShader: volumetricFlameFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
}

function createBladeFlameMaterial({
  uSpeed = 1.15,
  uIntensity = 1.1,
  uTurbulence = 0.85,
  uColorCore = new THREE.Color(0xffecc2),
  uColorMid = new THREE.Color(0xf59e0b),
  uColorOuter = new THREE.Color(0xd9480f)
} = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSpeed: { value: uSpeed },
      uIntensity: { value: uIntensity },
      uTurbulence: { value: uTurbulence },
      uColorCore: { value: uColorCore },
      uColorMid: { value: uColorMid },
      uColorOuter: { value: uColorOuter }
    },
    vertexShader: bladeFlameVertexShader,
    fragmentShader: bladeFlameFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
}

// ============================================================================
// GEOMETRY GENERATOR: VOLUMETRIC 3D FLAME (CURVED SHEETS + CORE CYLINDER)
// ============================================================================
function createVolumetricFlameGeometry({ width = 0.95, height = 2.2, segmentsX = 6, segmentsY = 28 } = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];
  let vertexOffset = 0;

  // 3 intersecting flame sheets rotated at 0, 60, and 120 degrees
  const angles = [0, Math.PI / 3, (Math.PI * 2) / 3];
  for (let a = 0; a < angles.length; a++) {
    const angle = angles[a];
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const startIdx = vertexOffset;

    for (let j = 0; j <= segmentsY; j++) {
      const v = j / segmentsY;
      const y = v * height;
      const w = width * (1.0 - v * 0.35);

      for (let i = 0; i <= segmentsX; i++) {
        const u = i / segmentsX;
        const xLocal = (u - 0.5) * w;
        // Subtle forward-backward curvature for smooth 3D body
        const zLocal = Math.sin(u * Math.PI) * (width * 0.12) * (1.0 - v * 0.5);
        const x = xLocal * cosA - zLocal * sinA;
        const z = xLocal * sinA + zLocal * cosA;

        positions.push(x, y, z);
        uvs.push(u, v);
        vertexOffset++;
      }
    }

    const rowStride = segmentsX + 1;
    for (let j = 0; j < segmentsY; j++) {
      for (let i = 0; i < segmentsX; i++) {
        const p1 = startIdx + j * rowStride + i;
        const p2 = startIdx + (j + 1) * rowStride + i;
        const p3 = startIdx + (j + 1) * rowStride + (i + 1);
        const p4 = startIdx + j * rowStride + (i + 1);

        indices.push(p1, p2, p3);
        indices.push(p1, p3, p4);
      }
    }
  }

  // Inner tapered cylinder core for full 360-degree density
  const radialSegments = 16;
  const cylStartIdx = vertexOffset;
  const cylHeight = height * 0.9;
  for (let j = 0; j <= segmentsY; j++) {
    const v = j / segmentsY;
    const y = v * cylHeight;
    const r = (width * 0.38) * (1.0 - v * 0.65) + 0.05;

    for (let i = 0; i <= radialSegments; i++) {
      const u = i / radialSegments;
      const theta = u * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      positions.push(x, y, z);
      uvs.push(u, v);
      vertexOffset++;
    }
  }

  const cylStride = radialSegments + 1;
  for (let j = 0; j < segmentsY; j++) {
    for (let i = 0; i < radialSegments; i++) {
      const a = cylStartIdx + j * cylStride + i;
      const b = cylStartIdx + (j + 1) * cylStride + i;
      const c = cylStartIdx + (j + 1) * cylStride + (i + 1);
      const d = cylStartIdx + j * cylStride + (i + 1);

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
// GEOMETRY GENERATOR: BLADE FLAME AURA (LICKING FIRE ALONG CUTTING EDGES)
// ============================================================================
function createBladeFlameAuraGeometry({
  length = 8.4,
  baseWidth = 0.58,
  flameWidth = 0.42,
  segmentsX = 3,
  segmentsY = 32
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  let vertexOffset = 0;
  // Left flame ribbon (runs along left cutting edge)
  const leftStartIdx = vertexOffset;
  for (let j = 0; j <= segmentsY; j++) {
    const t = j / segmentsY;
    const y = t * length;
    let w = baseWidth;
    if (t < 0.1) w = baseWidth * 0.8;
    else if (t > 0.8) w = baseWidth * Math.cos(((t - 0.8) / 0.2) * Math.PI * 0.5);

    const fWidth = flameWidth * (0.8 + Math.sin(t * Math.PI) * 0.4);

    for (let i = 0; i <= segmentsX; i++) {
      const u = i / segmentsX;
      const x = -w - u * fWidth;
      const z = Math.sin(u * Math.PI) * 0.05 * (1.0 - t * 0.3);
      positions.push(x, y + u * 0.1, z);
      uvs.push(u, t);
      vertexOffset++;
    }
  }

  const rowStride = segmentsX + 1;
  for (let j = 0; j < segmentsY; j++) {
    for (let i = 0; i < segmentsX; i++) {
      const p1 = leftStartIdx + j * rowStride + i;
      const p2 = leftStartIdx + (j + 1) * rowStride + i;
      const p3 = leftStartIdx + (j + 1) * rowStride + (i + 1);
      const p4 = leftStartIdx + j * rowStride + (i + 1);

      indices.push(p1, p2, p3);
      indices.push(p1, p3, p4);
    }
  }

  // Right flame ribbon (runs along right cutting edge)
  const rightStartIdx = vertexOffset;
  for (let j = 0; j <= segmentsY; j++) {
    const t = j / segmentsY;
    const y = t * length;
    let w = baseWidth;
    if (t < 0.1) w = baseWidth * 0.8;
    else if (t > 0.8) w = baseWidth * Math.cos(((t - 0.8) / 0.2) * Math.PI * 0.5);

    const fWidth = flameWidth * (0.8 + Math.sin(t * Math.PI) * 0.4);

    for (let i = 0; i <= segmentsX; i++) {
      const u = i / segmentsX;
      const x = w + u * fWidth;
      const z = Math.sin(u * Math.PI) * 0.05 * (1.0 - t * 0.3);
      positions.push(x, y + u * 0.1, z);
      uvs.push(u, t);
      vertexOffset++;
    }
  }

  for (let j = 0; j < segmentsY; j++) {
    for (let i = 0; i < segmentsX; i++) {
      const p1 = rightStartIdx + j * rowStride + i;
      const p2 = rightStartIdx + (j + 1) * rowStride + i;
      const p3 = rightStartIdx + (j + 1) * rowStride + (i + 1);
      const p4 = rightStartIdx + j * rowStride + (i + 1);

      indices.push(p1, p2, p3);
      indices.push(p1, p3, p4);
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
// GEOMETRY GENERATOR 1: RAZOR-SHARP FACETED DIAMOND BLADE
// Distinct quad strips ensure independent face normals across the central spine
// ============================================================================
function createSharpFacetedBladeGeometry({
  length = 8.6,
  baseWidth = 0.58,
  spineThickness = 0.14,
  segments = 28
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const verticesPerStrip = (segments + 1) * 2;

  function getProfile(t) {
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
    return { w, th };
  }

  // Strip 0: Front-Left (left edge -> front spine)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(-w, y, 0);       uvs.push(0.0, t);
    positions.push(0, y, th);       uvs.push(0.5, t);
  }

  // Strip 1: Front-Right (front spine -> right edge)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(0, y, th);       uvs.push(0.5, t);
    positions.push(w, y, 0);        uvs.push(1.0, t);
  }

  // Strip 2: Back-Right (right edge -> back spine)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(w, y, 0);        uvs.push(1.0, t);
    positions.push(0, y, -th);      uvs.push(0.5, t);
  }

  // Strip 3: Back-Left (back spine -> left edge)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(0, y, -th);      uvs.push(0.5, t);
    positions.push(-w, y, 0);       uvs.push(0.0, t);
  }

  // Indices for each strip
  for (let s = 0; s < 4; s++) {
    const offset = s * verticesPerStrip;
    for (let i = 0; i < segments; i++) {
      const a = offset + i * 2;
      const b = offset + i * 2 + 1;
      const c = offset + (i + 1) * 2;
      const d = offset + (i + 1) * 2 + 1;
      indices.push(a, c, d);
      indices.push(a, d, b);
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
// GEOMETRY GENERATOR 2: RAZOR-SHARP FACETED STILETTO BLADE
// ============================================================================
function createSharpFacetedStilettoGeometry({
  length = 2.4,
  baseWidth = 0.22,
  thickness = 0.08,
  segments = 14
} = {}) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const verticesPerStrip = (segments + 1) * 2;

  function getProfile(t) {
    let w = baseWidth;
    if (t < 0.15) {
      w = baseWidth * (0.8 + (t / 0.15) * 0.4);
    } else if (t < 0.3) {
      w = baseWidth * 1.2;
    } else {
      w = baseWidth * Math.pow(Math.max(0, 1.0 - (t - 0.3) / 0.7), 0.85);
    }
    const th = thickness * Math.max(0.005, 1.0 - t * 0.8);
    return { w, th };
  }

  // Strip 0: Front-Left (left edge -> front spine)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(-w, y, 0);       uvs.push(0.0, t);
    positions.push(0, y, th);       uvs.push(0.5, t);
  }

  // Strip 1: Front-Right (front spine -> right edge)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(0, y, th);       uvs.push(0.5, t);
    positions.push(w, y, 0);        uvs.push(1.0, t);
  }

  // Strip 2: Back-Right (right edge -> back spine)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(w, y, 0);        uvs.push(1.0, t);
    positions.push(0, y, -th);      uvs.push(0.5, t);
  }

  // Strip 3: Back-Left (back spine -> left edge)
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * length;
    const { w, th } = getProfile(t);
    positions.push(0, y, -th);      uvs.push(0.5, t);
    positions.push(-w, y, 0);       uvs.push(0.0, t);
  }

  // Indices for each strip
  for (let s = 0; s < 4; s++) {
    const offset = s * verticesPerStrip;
    for (let i = 0; i < segments; i++) {
      const a = offset + i * 2;
      const b = offset + i * 2 + 1;
      const c = offset + (i + 1) * 2;
      const d = offset + (i + 1) * 2 + 1;
      indices.push(a, c, d);
      indices.push(a, d, b);
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
// BUILDER 1: ALUCARD'S SOVEREIGN DEMON GREATSWORD
// ============================================================================
function buildAlucardRelic(goldArmorMat, damascusBladeMat, gemMat, fullerMat, bladeFlameMat, disposables) {
  const alucardGroup = new THREE.Group();
  alucardGroup.name = 'Alucard_Sovereign_Blade';

  // 1. Sharp Faceted Diamond Blade
  const bladeGeo = createSharpFacetedBladeGeometry({
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

  // 1b. Living Blade Flame Aura (dynamic roaring fire hugging the cutting edges)
  const bladeFlameGeo = createBladeFlameAuraGeometry({
    length: 8.4,
    baseWidth: 0.58,
    flameWidth: 0.42,
    segmentsX: 3,
    segmentsY: 32
  });
  disposables.push(bladeFlameGeo);
  const bladeFlameMesh = new THREE.Mesh(bladeFlameGeo, bladeFlameMat);
  bladeFlameMesh.position.set(0, -0.2, 0);
  alucardGroup.add(bladeFlameMesh);

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
  guardHub.castShadow = true;
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
  leftWingMesh.castShadow = true;
  guardGroup.add(leftWingMesh);

  for (let f = 0; f < 3; f++) {
    const featherGeo = new THREE.ConeGeometry(0.18 - f * 0.03, 1.2 - f * 0.25, 4);
    featherGeo.rotateY(Math.PI / 4);
    disposables.push(featherGeo);
    const featherMesh = new THREE.Mesh(featherGeo, goldArmorMat);
    featherMesh.position.set(-0.8 - f * 0.55, 0.45 + f * 0.35, 0);
    featherMesh.rotation.z = Math.PI / 3 + f * 0.15;
    featherMesh.castShadow = true;
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
  rightWingMesh.castShadow = true;
  guardGroup.add(rightWingMesh);

  for (let f = 0; f < 3; f++) {
    const featherGeo = new THREE.ConeGeometry(0.18 - f * 0.03, 1.2 - f * 0.25, 4);
    featherGeo.rotateY(Math.PI / 4);
    disposables.push(featherGeo);
    const featherMesh = new THREE.Mesh(featherGeo, goldArmorMat);
    featherMesh.position.set(0.8 + f * 0.55, 0.45 + f * 0.35, 0);
    featherMesh.rotation.z = -Math.PI / 3 - f * 0.15;
    featherMesh.castShadow = true;
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

  return { group: alucardGroup, gemMesh, innerRing, shards, bladeFlameMesh };
}

// ============================================================================
// BUILDER 2: GUSION'S ASTRAL HOLY DAGGERS & STAR CORE
// ============================================================================
function buildGusionRelic(goldArmorMat, gusionBladeMat, gusionPlasmaMat, gusionCoreMat, flameMat, disposables) {
  const gusionGroup = new THREE.Group();
  gusionGroup.name = 'Gusion_Astral_Nexus';

  // 1. Central Levitating Astral Hyper-Core
  const coreGroup = new THREE.Group();
  gusionGroup.add(coreGroup);

  const outerCoreGeo = new THREE.IcosahedronGeometry(0.9, 0);
  disposables.push(outerCoreGeo);
  const outerCoreMesh = new THREE.Mesh(outerCoreGeo, gusionCoreMat);
  coreGroup.add(outerCoreMesh);

  // Volumetric Astral Plasma Flame inside core
  const gusionFlameGeo = createVolumetricFlameGeometry({ width: 1.3, height: 1.6, segmentsY: 12 });
  disposables.push(gusionFlameGeo);
  const gusionFlameMesh = new THREE.Mesh(gusionFlameGeo, flameMat);
  gusionFlameMesh.position.set(0, -0.8, 0);
  coreGroup.add(gusionFlameMesh);

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

  // 2. Ten Floating Telekinetic Holy Daggers with Sharp Faceted Diamond Profile
  const daggers = [];
  const daggerRadius = 3.5;

  const dBladeGeo = createSharpFacetedStilettoGeometry({
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
    blade.castShadow = true;
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

  return { group: gusionGroup, coreGroup, outerCoreMesh, innerCoreStar, ringX, ringY, ringZ, daggers, gusionFlameMesh };
}

// ============================================================================
// BUILDER 3: KAGURA'S SEIMEI YIN-YANG CELESTIAL PARASOL & ASTROLABE
// ============================================================================
function buildKaguraRelic(goldArmorMat, kaguraSilkMat, kaguraOfudaMat, kaguraGemMat, flameMat, disposables) {
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
  canopyMesh.castShadow = true;
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

  // Spiritual Yin-Yang Foxfire Flame Plume at the umbrella crown
  const crownFlameGeo = createVolumetricFlameGeometry({ width: 0.85, height: 1.35, segmentsY: 12 });
  disposables.push(crownFlameGeo);
  const crownFlameMesh = new THREE.Mesh(crownFlameGeo, flameMat);
  crownFlameMesh.position.set(0, 0.95, 0);
  umbrellaHead.add(crownFlameMesh);

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

  return { group: kaguraGroup, umbrellaHead, canopyMesh, crownGem, astroRing1, astroRing2, talismans, crownFlameMesh };
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
  const composerRef = useRef(null);
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
    camera.position.set(0, 1.5, 24.0);
    camera.lookAt(0, 0.8, 0);
    cameraRef.current = camera;

    const updateCameraProjection = (w, h) => {
      const aspect = w / h;
      camera.aspect = aspect;
      // Dynamic responsive FOV: expand FOV for mobile/tablet so the entire scene fits
      if (aspect < 0.8) {
        camera.fov = 36 / Math.max(0.55, aspect * 1.05);
      } else if (aspect < 1.3) {
        camera.fov = 36 / (aspect * 0.9);
      } else {
        camera.fov = 36;
      }
      camera.updateProjectionMatrix();
    };

    updateCameraProjection(width, height);

    // 3. High-Performance WebGL Renderer with ACES Tone Mapping & Shadow Support
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 4. Post-Processing EffectComposer (UnrealBloomPass HDR Glow & FXAA)
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.32, // Refined radiance bloom strength (subtle, filmic glow)
      0.65, // Refined bloom radius (broad, smooth dispersion)
      0.88  // Refined bloom threshold (only incandescent core filaments bloom)
    );
    composer.addPass(bloomPass);

    const fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms['resolution'].value.x = 1 / (width * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (height * pixelRatio);
    composer.addPass(fxaaPass);
    composerRef.current = composer;

    // 5. Procedural Studio HDR Environment Map for Metallic Reflections
    const studioEnvMap = createProceduralStudioEnv(renderer);
    scene.environment = studioEnvMap;

    // 6. Procedural Dynamic Textures
    const damascusTexture = createDamascusTexture();
    const arenaFloorTexture = createSacredArenaTexture();
    const yinYangTexture = createYinYangCanopyTexture();
    const ofudaTexture = createOfudaTexture();
    const emberTexture = createEmberTexture();

    // 6b. Procedural Master Flame Shader Materials (C2 quintic noise convection)
    const flameMat = createFlameMaterial({
      uSpeed: 1.05,
      uIntensity: 1.15,
      uTurbulence: 0.9,
      uColorCore: new THREE.Color(0xffecc2),
      uColorMid: new THREE.Color(0xf59e0b),
      uColorOuter: new THREE.Color(0xd9480f)
    });
    disposables.push(flameMat);

    const bladeFlameMat = createBladeFlameMaterial({
      uSpeed: 1.15,
      uIntensity: 1.1,
      uTurbulence: 0.85,
      uColorCore: new THREE.Color(0xffecc2),
      uColorMid: new THREE.Color(0xf59e0b),
      uColorOuter: new THREE.Color(0xd9480f)
    });
    disposables.push(bladeFlameMat);

    // 7. Master Shrine Assembly Group
    const shrineGroup = new THREE.Group();
    scene.add(shrineGroup);
    shrineGroupRef.current = shrineGroup;

    // 8. Relics Parent Container (Heroic dynamic presentation cant)
    const relicsParentGroup = new THREE.Group();
    relicsParentGroup.rotation.x = 0.08;
    relicsParentGroup.rotation.z = -0.05;
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
      emissiveIntensity: 1.5,
      roughness: 0.03,
      metalness: 0.05,
      transmission: 0.85,
      ior: 2.417
    });

    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.8,
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
      emissiveIntensity: 2.0,
      roughness: 0.1
    });

    const gusionCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x06b6d4,
      emissiveIntensity: 1.8,
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
      emissiveIntensity: 1.6,
      roughness: 0.04,
      transmission: 0.78,
      ior: 2.2
    });

    // ========================================================================
    // B. INSTANTIATE THE 3 SCULPTED SOVEREIGN WEAPONS
    // ========================================================================
    const alucardRelic = buildAlucardRelic(goldArmorMat, damascusBladeMat, alucardGemMat, fullerMat, bladeFlameMat, disposables);
    const gusionRelic = buildGusionRelic(goldArmorMat, gusionBladeMat, gusionPlasmaMat, gusionCoreMat, flameMat, disposables);
    const kaguraRelic = buildKaguraRelic(goldArmorMat, kaguraSilkMat, kaguraOfudaMat, kaguraGemMat, flameMat, disposables);

    relicsParentGroup.add(alucardRelic.group);
    relicsParentGroup.add(gusionRelic.group);
    relicsParentGroup.add(kaguraRelic.group);

    alucardRelic.group.position.set(0, -0.2, 0);
    gusionRelic.group.position.set(0, 0.5, 0);
    kaguraRelic.group.position.set(0, 0.1, 0);

    alucardRelic.group.scale.set(0.62, 0.62, 0.62);
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
    arenaFloorMesh.receiveShadow = true;
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
    // D. 4 LEVITATING STONE MONOLITHS WITH ROARING SACRED FIRE BRAZIERS
    // ========================================================================
    const volumetricFlameGeo = createVolumetricFlameGeometry({
      width: 0.95,
      height: 2.1,
      segmentsY: 16
    });
    disposables.push(volumetricFlameGeo);

    const coalsMat = new THREE.MeshStandardMaterial({
      color: 0x140502,
      emissive: 0xd9480f,
      emissiveIntensity: 1.3,
      roughness: 0.85
    });
    disposables.push(coalsMat);

    const braziers = [];
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
      shaft.castShadow = true;
      mGroup.add(shaft);

      // 1. Pedestal top collar on monolith
      const collarGeo = new THREE.CylinderGeometry(0.54, 0.44, 0.32, 8);
      disposables.push(collarGeo);
      const collar = new THREE.Mesh(collarGeo, stoneMat);
      collar.position.y = 2.26;
      collar.castShadow = true;
      mGroup.add(collar);

      // 2. Ceremonial Bronze/Gold Brazier Bowl
      const brazierGroup = new THREE.Group();
      brazierGroup.position.y = 2.52;
      mGroup.add(brazierGroup);

      const bowlGeo = new THREE.CylinderGeometry(0.72, 0.36, 0.46, 16, 1, false);
      disposables.push(bowlGeo);
      const bowl = new THREE.Mesh(bowlGeo, goldArmorMat);
      bowl.castShadow = true;
      brazierGroup.add(bowl);

      const rimGeo = new THREE.TorusGeometry(0.72, 0.065, 8, 24);
      disposables.push(rimGeo);
      const rim = new THREE.Mesh(rimGeo, goldArmorMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.23;
      brazierGroup.add(rim);

      // 3. Glowing Hot Charcoal Bed
      const coalsGeo = new THREE.CylinderGeometry(0.66, 0.66, 0.08, 16);
      disposables.push(coalsGeo);
      const coals = new THREE.Mesh(coalsGeo, coalsMat);
      coals.position.y = 0.18;
      brazierGroup.add(coals);

      // 4. Volumetric Licking 3D Flame Mesh
      const bFlameMesh = new THREE.Mesh(volumetricFlameGeo, flameMat);
      bFlameMesh.scale.set(1.15, 1.45, 1.15);
      bFlameMesh.position.y = 0.22;
      brazierGroup.add(bFlameMesh);

      // 5. Dynamic Flickering Sacred Fire Point Light
      const bLight = new THREE.PointLight(0xf59e0b, 1.4, 12);
      bLight.position.set(0, 0.7, 0);
      brazierGroup.add(bLight);

      braziers.push({ group: brazierGroup, flameMesh: bFlameMesh, light: bLight });

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
    // F. 3,000 LIVING SPIRAL STARDUST PARTICLES (WITH RADIAL EMBER MAP)
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
      size: 0.12,
      map: emberTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    disposables.push(pMat);
    const particlePoints = new THREE.Points(pGeo, pMat);
    shrineGroup.add(particlePoints);

    // ========================================================================
    // F2. 1,000 INCANDESCENT SACRED FIRE EMBERS & SPARKS (CONVECTIVE CHIMNEY)
    // ========================================================================
    const emberCount = 1000;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberColors = new Float32Array(emberCount * 3);
    const emberLifes = new Float32Array(emberCount);
    const emberMaxLifes = new Float32Array(emberCount);
    const emberVelocities = new Float32Array(emberCount * 3);
    const emberBrazierIndices = new Int8Array(emberCount);

    const colorEmberCore = new THREE.Color(0xffd580);
    const colorEmberMid = new THREE.Color(0xf97316);
    const colorEmberCool = new THREE.Color(0xd9480f);

    const resetEmber = (i) => {
      const bIdx = Math.floor(Math.random() * 5);
      emberBrazierIndices[i] = bIdx;
      let spawnX = 0;
      let spawnY = 0;
      let spawnZ = 0;
      if (bIdx < 4) {
        const angle = (bIdx * Math.PI * 2) / 4 + Math.PI / 4;
        const rad = 6.4 + (Math.random() - 0.5) * 0.45;
        spawnX = Math.cos(angle) * rad;
        spawnY = 2.8 + Math.random() * 0.35;
        spawnZ = Math.sin(angle) * rad;
      } else {
        const rad = Math.random() * 1.2;
        const theta = Math.random() * Math.PI * 2;
        spawnX = Math.cos(theta) * rad;
        spawnY = -0.5 + Math.random() * 3.5;
        spawnZ = Math.sin(theta) * rad;
      }

      emberPositions[i * 3] = spawnX;
      emberPositions[i * 3 + 1] = spawnY;
      emberPositions[i * 3 + 2] = spawnZ;

      emberVelocities[i * 3] = (Math.random() - 0.5) * 0.012;
      emberVelocities[i * 3 + 1] = 0.02 + Math.random() * 0.032;
      emberVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;

      emberLifes[i] = 0.0;
      emberMaxLifes[i] = 1.8 + Math.random() * 2.2;
    };

    for (let i = 0; i < emberCount; i++) {
      resetEmber(i);
      emberLifes[i] = Math.random() * emberMaxLifes[i];
    }

    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    emberGeo.setAttribute('color', new THREE.BufferAttribute(emberColors, 3));
    disposables.push(emberGeo);

    const emberMat = new THREE.PointsMaterial({
      size: 0.11,
      map: emberTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    disposables.push(emberMat);

    const emberPoints = new THREE.Points(emberGeo, emberMat);
    shrineGroup.add(emberPoints);

    // ========================================================================
    // G. CINEMATIC DIRECTIONAL & DYNAMIC POINT LIGHT RIG
    // ========================================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.72);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0xf59e0b, 1.8, 25);
    coreLight.position.set(0, -0.2, 1.2);
    relicsParentGroup.add(coreLight);
    coreLightRef.current = coreLight;

    const tipLight = new THREE.PointLight(0x38bdf8, 1.2, 20);
    tipLight.position.set(0, 5.0, 0.6);
    relicsParentGroup.add(tipLight);
    tipLightRef.current = tipLight;

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    sunLight.position.set(16, 26, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 60;
    sunLight.shadow.bias = -0.0002;
    scene.add(sunLight);

    const cyanRim = new THREE.DirectionalLight(0x38bdf8, 1.3);
    cyanRim.position.set(-18, 18, -12);
    scene.add(cyanRim);

    // ========================================================================
    // H. INTERACTIVE 3D RAYCASTING SETUP
    // ========================================================================
    const raycaster = new THREE.Raycaster();
    const tempProjVec = new THREE.Vector3();

    // ========================================================================
    // I. 60/120FPS HIGH-PERFORMANCE RENDER LOOP WITH EFFECTCOMPOSER BLOOM
    // ========================================================================
    let animId;
    const clock = new THREE.Clock();

    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const currentHeroIdx = activeHeroIndexRef.current;

      // 1. Relics Smooth Morphing Lerp
      const tAlucard = currentHeroIdx === 0 ? 0.62 : 0.001;
      const tGusion = currentHeroIdx === 1 ? 0.72 : 0.001;
      const tKagura = currentHeroIdx === 2 ? 0.70 : 0.001;

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

      // 10. Dynamic Theme Color Lerp & Procedural Flame Simulation
      flameMat.uniforms.uTime.value = elapsed;
      bladeFlameMat.uniforms.uTime.value = elapsed;
      if (targetColorRef.current) {
        flameMat.uniforms.uColorMid.value.lerp(targetColorRef.current, 0.08);
        bladeFlameMat.uniforms.uColorMid.value.lerp(targetColorRef.current, 0.08);
        colorEmberMid.lerp(targetColorRef.current, 0.08);
        coalsMat.emissive.lerp(targetColorRef.current, 0.08);
      }
      if (targetSecondaryColorRef.current) {
        flameMat.uniforms.uColorOuter.value.lerp(targetSecondaryColorRef.current, 0.08);
        bladeFlameMat.uniforms.uColorOuter.value.lerp(targetSecondaryColorRef.current, 0.08);
        colorEmberCool.lerp(targetSecondaryColorRef.current, 0.08);
      }

      // 10b. Sacred Braziers Multi-Harmonic Fire Flicker & Volumetric Sway
      for (let i = 0; i < braziers.length; i++) {
        const b = braziers[i];
        const flicker = 1.35 + Math.sin(elapsed * 8.0 + i * 2.1) * 0.18 + Math.cos(elapsed * 17.0 + i * 3.4) * 0.1;
        b.light.intensity = flicker;
        if (targetColorRef.current) {
          b.light.color.lerp(targetColorRef.current, 0.08);
        }
        b.flameMesh.rotation.y = elapsed * 0.35 + i * 1.2;
      }

      // 10c. 1,000 Incandescent Sacred Fire Embers & Sparks (Thermal Buoyancy & Cooling)
      const emberPos = emberGeo.attributes.position.array;
      const emberCol = emberGeo.attributes.color.array;
      const tempEmberCol = new THREE.Color();
      for (let i = 0; i < emberCount; i++) {
        emberLifes[i] += delta;
        if (emberLifes[i] >= emberMaxLifes[i]) {
          resetEmber(i);
        }
        const lifeRatio = emberLifes[i] / emberMaxLifes[i];

        // Buoyant ascent + silky thermal swirling eddies
        emberPos[i * 3] += emberVelocities[i * 3] + Math.sin(elapsed * 1.5 + i) * 0.003;
        emberPos[i * 3 + 1] += emberVelocities[i * 3 + 1];
        emberPos[i * 3 + 2] += emberVelocities[i * 3 + 2] + Math.cos(elapsed * 1.3 + i) * 0.003;

        // Thermal cooling gradient: Core (White/Yellow) -> Mid (Amber) -> Cool (Crimson) -> Vanish
        if (lifeRatio < 0.25) {
          tempEmberCol.copy(colorEmberCore).lerp(colorEmberMid, lifeRatio / 0.25);
        } else if (lifeRatio < 0.75) {
          tempEmberCol.copy(colorEmberMid).lerp(colorEmberCool, (lifeRatio - 0.25) / 0.5);
        } else {
          tempEmberCol.copy(colorEmberCool).multiplyScalar(Math.max(0, 1.0 - (lifeRatio - 0.75) / 0.25));
        }

        emberCol[i * 3] = tempEmberCol.r;
        emberCol[i * 3 + 1] = tempEmberCol.g;
        emberCol[i * 3 + 2] = tempEmberCol.b;
      }
      emberGeo.attributes.position.needsUpdate = true;
      emberGeo.attributes.color.needsUpdate = true;

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
      const targetCamZ = 24.0 - currentScroll * 5.0;
      const targetCamY = 1.5 - currentScroll * 0.7;

      if (screenShakeRef.current > 0.001) {
        camera.position.x = (Math.random() - 0.5) * screenShakeRef.current;
        camera.position.y = targetCamY + (Math.random() - 0.5) * screenShakeRef.current;
        screenShakeRef.current *= 0.88;
      } else {
        camera.position.x = 0;
        camera.position.y += (targetCamY - camera.position.y) * 0.08;
      }
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;

      // 13. Render via Post-Processing Composer (HDR Bloom + FXAA)
      composer.render();
      animId = requestAnimationFrame(render);
    };

    render();

    // Window Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      updateCameraProjection(w, h);
      renderer.setSize(w, h);
      composer.setSize(w, h);
      const pr = renderer.getPixelRatio();
      fxaaPass.material.uniforms['resolution'].value.x = 1 / (w * pr);
      fxaaPass.material.uniforms['resolution'].value.y = 1 / (h * pr);
      bloomPass.resolution.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      composer.dispose();
      renderer.dispose();
      studioEnvMap.dispose();
      damascusTexture.dispose();
      arenaFloorTexture.dispose();
      yinYangTexture.dispose();
      ofudaTexture.dispose();
      emberTexture.dispose();
      flameMat.dispose();
      bladeFlameMat.dispose();
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
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080d1a]/50 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/70 via-transparent to-[#080d1a]/20 pointer-events-none z-10" />

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
