import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// GLSL Vertex Shader: Fullscreen quad pass
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// GLSL Fragment Shader: Inspired by ruucm/shadergradient (Organic FBM Domain-Warped Fluid Gradients)
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColorBg;

  varying vec2 vUv;

  // 2D Simplex Noise implementation
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // 4-octave Fractional Brownian Motion (FBM)
  float fbm(vec2 p) {
    float f = 0.0;
    float w = 0.5;
    for (int i = 0; i < 4; i++) {
      f += w * snoise(p);
      p *= 2.04;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 st = vUv;
    vec2 mouse = (uMouse - 0.5) * 0.25;

    // Organic Domain Warping: FBM deforms coordinate space over time
    vec2 q = vec2(
      fbm(st * 1.5 + 0.06 * uTime + mouse),
      fbm(st * 1.5 + vec2(1.0) + 0.05 * uTime - mouse)
    );

    vec2 r = vec2(
      fbm(st * 1.8 + 1.2 * q + vec2(1.7, 9.2) + 0.08 * uTime),
      fbm(st * 1.8 + 1.2 * q + vec2(8.3, 2.8) + 0.07 * uTime)
    );

    float f = fbm(st * 2.0 + r);

    // Dynamic color synthesis between hero theme and cosmic twilight
    vec3 col = mix(uColorBg, uColor1, clamp(f * f * 3.2, 0.0, 1.0));
    col = mix(col, uColor2, clamp(length(q) * 1.1, 0.0, 1.0));
    col = mix(col, uColor3, clamp(length(r.x) * 0.8, 0.0, 1.0));

    // Subtle radial falloff for natural cinematic focus
    float dist = length(st - vec2(0.5, 0.45));
    float vignette = smoothstep(1.3, 0.25, dist);
    col *= vignette;

    gl_FragColor = vec4(col, 0.72);
  }
`;

// Inner Mesh with Shader Material
function FluidGradientPlane({ themeColor }) {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  // Convert hex color to THREE.Color
  const parsedColors = useMemo(() => {
    const base = new THREE.Color(themeColor || '#06b6d4');
    
    // Complementary and deep accents
    const hsl = { h: 0, s: 0, l: 0 };
    base.getHSL(hsl);

    const c1 = base.clone();
    const c2 = new THREE.Color().setHSL((hsl.h + 0.15) % 1, Math.min(1, hsl.s * 1.1), Math.max(0.2, hsl.l * 0.7));
    const c3 = new THREE.Color().setHSL((hsl.h + 0.5) % 1, 0.9, 0.25);
    const cBg = new THREE.Color('#030509');

    return { c1, c2, c3, cBg };
  }, [themeColor]);

  // Uniforms dictionary
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColor1: { value: parsedColors.c1 },
    uColor2: { value: parsedColors.c2 },
    uColor3: { value: parsedColors.c3 },
    uColorBg: { value: parsedColors.cBg },
  }), []);

  // Update target colors on theme change
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uColor1.value.copy(parsedColors.c1);
      meshRef.current.material.uniforms.uColor2.value.copy(parsedColors.c2);
      meshRef.current.material.uniforms.uColor3.value.copy(parsedColors.c3);
    }
  }, [parsedColors]);

  // Mouse move listener
  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = 1.0 - (e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Frame Loop (60 FPS fluid progression)
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material;
    mat.uniforms.uTime.value = state.clock.getElapsedTime();

    // Smooth lerp mouse position
    const m = mouseRef.current;
    m.x += (m.targetX - m.x) * 0.05;
    m.y += (m.targetY - m.y) * 0.05;
    mat.uniforms.uMouse.value.set(m.x, m.y);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        transparent={true}
      />
    </mesh>
  );
}

// Floating Arcane Mana Dust Particles (pmndrs/react-three-fiber particle enhancement)
function ArcaneDustField({ color }) {
  const count = 35;
  const meshRef = useRef();

  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
      speeds[i] = 0.2 + Math.random() * 0.4;
    }
    return { positions, speeds };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const pos = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += particleData.speeds[i] * delta * 0.5;
      if (pos[i * 3 + 1] > 2.5) {
        pos[i * 3 + 1] = -2.5;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color || '#38bdf8'}
        transparent={true}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Master Export: ShaderGradient Canvas Background
export default function ShaderGradientBg({ themeColor = '#06b6d4', className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <FluidGradientPlane themeColor={themeColor} />
        <ArcaneDustField color={themeColor} />
      </Canvas>
    </div>
  );
}
