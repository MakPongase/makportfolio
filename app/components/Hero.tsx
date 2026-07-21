"use client";

import { useState, useEffect, useRef } from "react";

interface HeroProps {
  greeting?: string;
  name?: string;
  description?: string;
  className?: string;
}

export default function Hero({
  greeting = "JOHN MARK PONGASE",
  name = "PORTFOLIO 2026",
  description = "I build software, games, and digital experiences that solve real problems. My work spans AI, cloud computing, web development, game development, and community leadership, combining technical expertise with creative thinking to turn ideas into reality.",
  className = "",
}: HeroProps) {
  const [asciiFrame, setAsciiFrame] = useState<string>("");
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let time = 0;

    const cols = 56;
    const rows = 20;
    const aspect = 2.1; // Adjust for monospace char height vs width

    const render = () => {
      // Smooth interpolation towards mouse position
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      time += 0.02;

      const buffer: string[] = new Array(cols * rows).fill(" ");
      const zBuffer: number[] = new Array(cols * rows).fill(-Infinity);

      const R = 1.6; // Sphere radius
      const distance = 4.2;

      // Axial tilt (~23.5 deg = 0.41 rad) + mouse Y rotation
      const rotX = 0.41 + mouseRef.current.y * 1.2;
      // Continuous background spin (screensaver mode) + mouse X panning (interactive mode)
      const rotY = time * 0.6 + mouseRef.current.x * 2.5;

      // Light vector coming from top-left-front
      const lx = -0.577;
      const ly = -0.577;
      const lz = -0.577;

      const chars = ["·", ".", ",", "-", "~", ":", ";", "=", "+", "*", "#", "%", "@"];

      const project = (x: number, y: number, z: number, char: string) => {
        // Rotate X (axial tilt)
        const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
        const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
        // Rotate Y (globe spin)
        const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
        const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);

        const x3 = x2;
        const y3 = y1;
        const z3 = z2;

        // Only draw points facing camera (or slightly around edge for rim light)
        if (z3 < 0.2) {
          const ooz = 1 / (z3 + distance);
          const px = Math.floor(cols / 2 + x3 * aspect * ooz * 16);
          const py = Math.floor(rows / 2 + y3 * ooz * 16);

          const idx = px + py * cols;
          if (px >= 0 && px < cols && py >= 0 && py < rows) {
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz;
              buffer[idx] = char;
            }
          }
        }
      };

      // 1. Render dense sphere surface with illumination shading (like adamsky/globe volumetric mode)
      for (let lat = -85; lat <= 85; lat += 5) {
        const radLat = (lat * Math.PI) / 180;
        const cosLat = Math.cos(radLat);
        const sinLat = Math.sin(radLat);

        // Adjust longitude step based on latitude so poles aren't overly dense
        const lonStep = Math.max(4, Math.floor(6 / Math.max(0.2, cosLat)));
        for (let lon = 0; lon < 360; lon += lonStep) {
          const radLon = (lon * Math.PI) / 180;
          const x = cosLat * Math.sin(radLon) * R;
          const y = sinLat * R;
          const z = cosLat * Math.cos(radLon) * R;

          // Compute rotated normal to calculate dot product with light source
          const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
          const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
          const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
          const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);

          const nx = x2 / R;
          const ny = y1 / R;
          const nz = z2 / R;

          // Illumination dot product
          const dot = -(nx * lx + ny * ly + nz * lz);
          
          let charToDraw = " ";
          if (dot > -0.2) {
            const charIdx = Math.floor(Math.max(0, Math.min(1, (dot + 0.2) / 1.2)) * (chars.length - 1));
            charToDraw = chars[charIdx];
          } else {
            charToDraw = "·"; // Night side faint outline
          }

          // Highlight Parallels (every 30 deg) and Meridians (every 30 deg)
          const isParallel = Math.abs(lat % 30) < 3;
          const isMeridian = Math.abs(lon % 30) < 3;
          if (isParallel && isMeridian) {
            charToDraw = "+";
          } else if (isParallel || isMeridian) {
            if (dot > 0.2) charToDraw = "*";
            else if (dot > -0.1) charToDraw = ":";
          }

          // Equator highlight
          if (Math.abs(lat) < 2) {
            charToDraw = "=";
          }

          project(x, y, z, charToDraw);
        }
      }

      // 2. Orbiting Satellite / Camera Target (inspired by globe -sc2)
      const satAngles = [time * 1.5, -time * 1.2 + 2.0];
      satAngles.forEach((a, i) => {
        const satR = R * 1.35;
        const sx = Math.cos(a) * satR;
        const sy = Math.sin(a * (i === 0 ? 0.5 : -0.7)) * satR * 0.4;
        const sz = Math.sin(a) * satR;
        project(sx, sy, sz, i === 0 ? "O" : "∅");
      });

      let frameStr = "";
      for (let r = 0; r < rows; r++) {
        frameStr += buffer.slice(r * cols, (r + 1) * cols).join("") + "\n";
      }
      setAsciiFrame(frameStr);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
  };

  return (
    <section id="home" className={`relative bg-white text-black border-b border-gray-200 flex flex-col min-h-screen ${className}`}>
      {/* Top Architectural Headline Block */}
      <div className="px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 border-b border-gray-200 flex flex-col justify-between gap-6 sm:gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 bg-black inline-block"></span>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gray-500 font-medium">
              {greeting} • {name}
            </p>
          </div>
          <div className="self-start sm:self-auto border border-black px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-white text-black shadow-xs">
            BASED IN BULACAN, PH
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[0.92] uppercase max-w-6xl">
          BUILDING IDEAS <br />
          ACROSS DISCIPLINES.
        </h1>
      </div>

      {/* Lower Split Grid Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Left Column: Bio paragraph and Scroll Indicator */}
        <div className="lg:col-span-7 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 lg:border-r border-b lg:border-b-0 border-gray-200 flex flex-col justify-between gap-8 bg-white">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-4 text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
            <span>Scroll to explore</span>
            <span className="w-12 h-px bg-gray-300"></span>
            <span>↓</span>
          </div>
        </div>

        {/* Right Column: Pure 3D ASCII Box */}
        <div className="lg:col-span-5 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 flex flex-col justify-center items-center bg-gray-50/50">
          {/* Pure 3D ASCII Box with Architectural Corner Accents */}
          <div
            className="relative border border-black bg-white p-4 sm:p-6 flex items-center justify-center min-h-[240px] cursor-crosshair select-none overflow-hidden"
            onMouseLeave={() => {
              mouseRef.current.targetX = 0;
              mouseRef.current.targetY = 0;
            }}
            onMouseMove={handleMouseMove}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

            {/* Pure 3D ASCII Canvas */}
            <pre className="text-black font-mono font-bold text-[10px] sm:text-[11px] leading-[13px] sm:leading-[14px] tracking-tighter text-center">
              {asciiFrame}
            </pre>
          </div>

          {/* Terminal Mode Status Bar */}
          <div className="mt-3 flex items-center justify-between w-full max-w-sm text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            <span>[GLOBE-CLI // v0.2]</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>INTERACTIVE MODE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}






