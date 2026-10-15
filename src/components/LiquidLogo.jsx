import React, { useRef, useEffect, useState, useCallback } from 'react';

/**
 * LiquidLogo: Interactive Living Liquid Metal & Chrome Logo Shader
 * Inspired by collidingScopes/liquid-logo
 * 
 * Features:
 * - Real-time WebGL liquid mercury / molten chrome displacement
 * - Interactive mouse ripple physics
 * - Normal mapped specular gleams & Fresnel chromatic reflections
 * - Preserves exact alpha silhouette of the logo
 */
export default function LiquidLogo({
  src = '/assets/images/mlbb_official_logo.png',
  alt = 'Mobile Legends: Bang Bang',
  className = '',
  aspectRatio = 2.4, // Width to height ratio
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isSupported, setIsSupported] = useState(true);
  const mouseRef = useRef({ x: 0.5, y: 0.5, speed: 0, targetX: 0.5, targetY: 0.5 });
  const animFrameRef = useRef(null);

  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) {
      setIsSupported(false);
      return;
    }

    // Vertex Shader
    const vsSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        vUv.y = 1.0 - vUv.y; // Correct UV flip
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Liquid Metal Mercury Shader
    const fsSource = `
      precision mediump float;
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMouseActive;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;

        // Base logo texture sample
        vec4 baseTex = texture2D(uTexture, uv);
        if (baseTex.a < 0.02) {
          discard;
        }

        // 1. Multi-octave organic liquid ripple waves
        float wave1 = sin(uv.x * 14.0 + uTime * 2.2 + uv.y * 8.0);
        float wave2 = cos(uv.y * 16.0 - uTime * 1.8 + uv.x * 10.0);
        float wave3 = sin((uv.x + uv.y) * 12.0 + uTime * 1.5);
        vec2 liquidOffset = vec2(wave1 + wave3, wave2 - wave3) * 0.012;

        // 2. Interactive mouse wave perturbation
        float distToMouse = distance(uv, uMouse);
        float mouseWave = sin(distToMouse * 35.0 - uTime * 6.0) * exp(-distToMouse * 5.0) * uMouseActive * 0.035;
        vec2 mouseOffset = normalize(uv - uMouse + 0.0001) * mouseWave;

        vec2 perturbedUv = clamp(uv + liquidOffset + mouseOffset, 0.0, 1.0);
        vec4 sampleColor = texture2D(uTexture, perturbedUv);

        // 3. Normal estimation from height difference for specular metal lighting
        float hL = sin((perturbedUv.x - 0.01) * 14.0 + uTime * 2.0);
        float hR = sin((perturbedUv.x + 0.01) * 14.0 + uTime * 2.0);
        float hD = cos((perturbedUv.y - 0.01) * 16.0 - uTime * 1.8);
        float hU = cos((perturbedUv.y + 0.01) * 16.0 - uTime * 1.8);
        vec3 normal = normalize(vec3(hL - hR, hD - hU, 0.45));

        // 4. Liquid Chrome & Solar Gold Specular Reflections
        vec3 lightDir = normalize(vec3(sin(uTime * 0.8), cos(uTime * 0.6), 0.8));
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 24.0);

        // 5. Chromatic Twilight Gradient (Molten Gold, Arcane Cyan & Liquid Platinum)
        vec3 goldColor = vec3(1.0, 0.78, 0.28);
        vec3 cyanColor = vec3(0.22, 0.74, 0.98);
        vec3 chromeColor = vec3(1.0, 1.0, 1.0);

        float metalBlend = sin(perturbedUv.x * 4.0 + perturbedUv.y * 3.0 + uTime) * 0.5 + 0.5;
        vec3 metalColor = mix(cyanColor, goldColor, metalBlend);
        vec3 finalRgb = mix(sampleColor.rgb * 1.1, metalColor, 0.25) + chromeColor * spec * 0.85;

        // Maintain alpha silhouette with subtle edge glow
        float alpha = sampleColor.a * baseTex.a;
        gl_FragColor = vec4(finalRgb, alpha);
      }
    `;

    // Compile Shader helper
    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) {
      setIsSupported(false);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setIsSupported(false);
      return;
    }
    gl.useProgram(program);

    // Fullscreen Quad Buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Uniform Locations
    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');
    const uMouseActiveLoc = gl.getUniformLocation(program, 'uMouseActive');
    const uTextureLoc = gl.getUniformLocation(program, 'uTexture');

    // Load Texture
    const texture = gl.createTexture();
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.uniform1i(uTextureLoc, 0);
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let startTime = performance.now();
    let mouseActiveTarget = 0.0;
    let mouseActive = 0.0;

    const render = (time) => {
      const elapsed = (time - startTime) * 0.001;

      // Lerp mouse
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.08;
      m.y += (m.targetY - m.y) * 0.08;
      mouseActive += (mouseActiveTarget - mouseActive) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform2f(uMouseLoc, m.x, m.y);
      gl.uniform1f(uMouseActiveLoc, mouseActive);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    // Resize Observer
    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
    };
  }, [src]);

  useEffect(() => {
    const cleanup = initWebGL();
    return () => {
      if (cleanup) cleanup();
    };
  }, [initWebGL]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current.targetX = Math.max(0, Math.min(1, x));
    mouseRef.current.targetY = Math.max(0, Math.min(1, y));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative inline-block select-none group cursor-pointer ${className}`}
    >
      {/* Background Specular Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/25 via-amber-400/25 to-blue-500/25 rounded-2xl blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

      {isSupported ? (
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:scale-103 transition-transform duration-300"
          style={{ display: 'block', maxHeight: '100%' }}
        />
      ) : (
        /* Graceful Fallback if WebGL unavailable */
        <img
          src={src}
          alt={alt}
          className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
        />
      )}
    </div>
  );
}
