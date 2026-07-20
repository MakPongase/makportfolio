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
  description = "I am Mak Pongase, a Full-Stack Developer, Cloud Leader, and Project Manager based in Bulacan, Philippines. I translate vision into scalable systems and empowering communities through modular architecture, cloud engineering, and dynamic leadership.",
  className = "",
}: HeroProps) {
  const [asciiFrame, setAsciiFrame] = useState<string>("");
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let A = 0; // X axis angle
    let B = 0; // Y axis angle
    let C = 0; // Z axis angle

    const cols = 48;
    const rows = 16;

    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      A += 0.025 + mouseRef.current.y * 0.02;
      B += 0.035 + mouseRef.current.x * 0.02;
      C += 0.015;

      const buffer = new Array(cols * rows).fill(" ");
      const zBuffer = new Array(cols * rows).fill(-9999);

      const plot = (x: number, y: number, z: number, char: string) => {
        let y1 = y * Math.cos(A) - z * Math.sin(A);
        let z1 = y * Math.sin(A) + z * Math.cos(A);
        let x2 = x * Math.cos(B) + z1 * Math.sin(B);
        let z2 = -x * Math.sin(B) + z1 * Math.cos(B);
        let x3 = x2 * Math.cos(C) - y1 * Math.sin(C);
        let y3 = x2 * Math.sin(C) + y1 * Math.cos(C);
        let z3 = z2;

        const distance = 3.8;
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

      const drawLine3D = (
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        char: string,
        steps = 14
      ) => {
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          plot(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, z1 + (z2 - z1) * t, char);
        }
      };

      // Outer Cube vertices (-1 to 1)
      const v = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
      ];
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];
      edges.forEach(([i, j]) => drawLine3D(v[i][0], v[i][1], v[i][2], v[j][0], v[j][1], v[j][2], "#", 16));

      // Inner Octahedron core
      const core = [
        [0, -0.65, 0], [0, 0.65, 0],
        [-0.65, 0, 0], [0.65, 0, 0],
        [0, 0, -0.65], [0, 0, 0.65],
      ];
      const coreEdges = [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [4, 3], [3, 5], [5, 2],
      ];
      coreEdges.forEach(([i, j]) => drawLine3D(core[i][0], core[i][1], core[i][2], core[j][0], core[j][1], core[j][2], ".", 10));

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
    <section id="home" className={`relative bg-white text-black border-b border-gray-200 ${className}`}>
      {/* Top Architectural Headline Block */}
      <div className="p-8 sm:p-12 lg:p-20 border-b border-gray-200 flex flex-col justify-between gap-12 pt-16 sm:pt-24 lg:pt-28">
        <div className="flex items-center gap-4">
          <span className="w-2.5 h-2.5 bg-black inline-block"></span>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gray-500 font-medium">
            {greeting} • {name}
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.92] uppercase max-w-6xl">
          TURNING COMPLEX IDEAS <br />
          INTO SCALABLE SYSTEMS.
        </h1>
      </div>

      {/* Lower Split Grid Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Bio paragraph and Scroll Indicator */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 lg:border-r border-b lg:border-b-0 border-gray-200 flex flex-col justify-between gap-12 bg-white">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          <div className="flex items-center gap-4 pt-6 text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
            <span>Scroll to explore</span>
            <span className="w-12 h-px bg-gray-300"></span>
            <span>↓</span>
          </div>
        </div>

        {/* Right Column: Location Badge & Pure 3D ASCII Box */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-12 bg-gray-50/50">
          {/* Top Right: Location Badge Button exactly like Screenshot 1 */}
          <div className="self-start lg:self-end">
            <div className="border border-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-[0.2em] bg-white text-black shadow-xs">
              BASED IN BULACAN, PH
            </div>
          </div>

          {/* Pure 3D ASCII Box with Architectural Corner Accents */}
          <div
            className="relative border border-black bg-white p-6 sm:p-8 flex items-center justify-center min-h-[260px] cursor-crosshair select-none"
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






