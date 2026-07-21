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

    const cols = 50;
    const rows = 16;

    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      time += 0.016;

      const A = time * 0.7 + mouseRef.current.y * 0.5;
      const B = time * 0.5 + mouseRef.current.x * 0.5;
      const C = time * 0.3;

      const buffer: string[] = new Array(cols * rows).fill(" ");
      const zBuffer: number[] = new Array(cols * rows).fill(-Infinity);

      const project = (x: number, y: number, z: number, char: string) => {
        // Rotate X
        let y1 = y * Math.cos(A) - z * Math.sin(A);
        let z1 = y * Math.sin(A) + z * Math.cos(A);
        // Rotate Y
        let x2 = x * Math.cos(B) + z1 * Math.sin(B);
        let z2 = -x * Math.sin(B) + z1 * Math.cos(B);
        // Rotate Z
        let x3 = x2 * Math.cos(C) - y1 * Math.sin(C);
        let y3 = x2 * Math.sin(C) + y1 * Math.cos(C);
        const z3 = z2;

        const distance = 4.5;
        const ooz = 1 / (z3 + distance);
        const px = Math.floor(cols / 2 + x3 * ooz * 38);
        const py = Math.floor(rows / 2 + y3 * ooz * 16);

        const idx = px + py * cols;
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            buffer[idx] = char;
          }
        }
      };

      const drawLine = (
        x1: number, y1: number, z1: number,
        x2: number, y2: number, z2: number,
        char: string, steps = 20
      ) => {
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          project(
            x1 + (x2 - x1) * t,
            y1 + (y2 - y1) * t,
            z1 + (z2 - z1) * t,
            char
          );
        }
      };

      // ─── ICOSAHEDRON (Golden Ratio Polyhedron) ───
      const phi = (1 + Math.sqrt(5)) / 2;
      const sc = 0.82;
      const iv: number[][] = [
        [0, sc, sc*phi], [0, -sc, sc*phi], [0, sc, -sc*phi], [0, -sc, -sc*phi],
        [sc, sc*phi, 0], [-sc, sc*phi, 0], [sc, -sc*phi, 0], [-sc, -sc*phi, 0],
        [sc*phi, 0, sc], [-sc*phi, 0, sc], [sc*phi, 0, -sc], [-sc*phi, 0, -sc],
      ];
      const ie: number[][] = [
        [0,1],[0,4],[0,5],[0,8],[0,9],
        [1,6],[1,7],[1,8],[1,9],
        [2,3],[2,4],[2,5],[2,10],[2,11],
        [3,6],[3,7],[3,10],[3,11],
        [4,5],[4,8],[4,10],
        [5,9],[5,11],
        [6,7],[6,8],[6,10],
        [7,9],[7,11],
        [8,10],[9,11],
      ];
      ie.forEach(([a, b]) =>
        drawLine(iv[a][0], iv[a][1], iv[a][2], iv[b][0], iv[b][1], iv[b][2], "#", 22)
      );
      // Vertex markers
      iv.forEach(([vx, vy, vz]) => project(vx, vy, vz, "@"));

      // ─── DUAL ORBITING PARTICLE RINGS ───
      const ringN = 40;
      const ringR = 1.9 + Math.sin(time * 0.8) * 0.25;
      for (let i = 0; i < ringN; i++) {
        const a = (i / ringN) * Math.PI * 2 + time * 1.2;
        project(Math.cos(a) * ringR, Math.sin(a) * 0.12, Math.sin(a) * ringR, "·");
      }
      for (let i = 0; i < ringN; i++) {
        const a = (i / ringN) * Math.PI * 2 - time * 0.9;
        project(Math.sin(a) * 0.12, Math.cos(a) * ringR, Math.sin(a) * ringR, ":");
      }

      // ─── FLOATING ORBITAL PARTICLES ───
      for (let i = 0; i < 18; i++) {
        const t2 = time * 0.4 + i * 2.39996;
        const oR = 2.3 + Math.sin(t2 * 1.3 + i) * 0.5;
        const px = Math.cos(t2 + i * 0.5) * oR * Math.cos(i + time * 0.2);
        const py = Math.sin(t2 * 0.7 + i) * oR * 0.6;
        const pz = Math.sin(t2 + i * 0.5) * oR * Math.sin(i + time * 0.2);
        const chars = ["+", "*", "°", "•"];
        project(px, py, pz, chars[i % 4]);
      }

      // ─── PULSING INNER CORE ───
      const coreR = 0.28 + Math.sin(time * 2.5) * 0.12;
      for (let i = 0; i < 10; i++) {
        const theta = (i / 10) * Math.PI * 2;
        for (let j = 1; j < 8; j++) {
          const phi2 = (j / 8) * Math.PI;
          project(
            Math.sin(phi2) * Math.cos(theta) * coreR,
            Math.cos(phi2) * coreR,
            Math.sin(phi2) * Math.sin(theta) * coreR,
            "█"
          );
        }
      }

      // ─── CONNECTING TENDRILS (icosahedron → ring) ───
      const tendrilCount = 6;
      for (let i = 0; i < tendrilCount; i++) {
        const tAngle = (i / tendrilCount) * Math.PI * 2 + time * 0.6;
        const pulse = 0.7 + Math.sin(time * 1.5 + i * 1.2) * 0.3;
        const endX = Math.cos(tAngle) * ringR * pulse;
        const endY = Math.sin(tAngle) * 0.4 * pulse;
        const endZ = Math.sin(tAngle) * ringR * pulse;
        // Connect from nearest icosahedron vertex
        const vi = i % iv.length;
        drawLine(iv[vi][0] * 0.8, iv[vi][1] * 0.8, iv[vi][2] * 0.8, endX, endY, endZ, ".", 12);
      }

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
        </div>
      </div>
    </section>
  );
}






