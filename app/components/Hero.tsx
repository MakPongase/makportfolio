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

    const cols = 64;
    const rows = 26;
    const aspect = 2.1;

    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      time += 0.025;

      const buffer: string[] = new Array(cols * rows).fill(" ");
      const zBuffer: number[] = new Array(cols * rows).fill(-Infinity);

      const A = time * 0.8 + mouseRef.current.y * 1.5;
      const B = time * 0.6 + mouseRef.current.x * 2.5;

      const distance = 5.0;
      const R1 = 1.8; // Major radius of torus
      const R2 = 0.75; // Minor radius of torus

      const chars = [".", ",", "-", "~", ":", ";", "=", "+", "*", "#", "%", "@"];

      // 1. Render 3D Wireframe Torus
      for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);

        for (let phi = 0; phi < Math.PI * 2; phi += 0.07) {
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);

          // 3D coordinates before rotation
          const circleX = R1 + R2 * cosTheta;
          const circleY = R2 * sinTheta;
          
          const x = circleX * (cosPhi * Math.cos(B) + sinPhi * Math.sin(A) * Math.sin(B)) - circleY * Math.cos(A) * Math.sin(B);
          const y = circleX * (cosPhi * Math.sin(B) - sinPhi * Math.sin(A) * Math.cos(B)) + circleY * Math.cos(A) * Math.cos(B);
          const z = circleX * (sinPhi * Math.cos(A)) + circleY * Math.sin(A);

          const ooz = 1 / (z + distance);
          const px = Math.floor(cols / 2 + x * aspect * ooz * 14);
          const py = Math.floor(rows / 2 + y * ooz * 14);

          const idx = px + py * cols;
          if (px >= 0 && px < cols && py >= 0 && py < rows) {
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz;
              // Normal calculation for crisp wireframe shading
              const nx = cosTheta * cosPhi;
              const ny = cosTheta * sinPhi;
              const nz = sinTheta;
              const luminance = nx * 0.7 - ny * 0.7 + nz * 0.2;
              
              if (luminance > -0.2) {
                const charIdx = Math.floor(Math.max(0, Math.min(1, (luminance + 0.2) / 1.2)) * (chars.length - 1));
                buffer[idx] = chars[charIdx];
              } else {
                buffer[idx] = "·";
              }
            }
          }
        }
      }

      // 2. Orbiting Gyroscope Particle Ring
      const ringSteps = 48;
      for (let i = 0; i < ringSteps; i++) {
        const angle = (i / ringSteps) * Math.PI * 2 + time * 1.2;
        const rx = Math.cos(angle) * 2.8;
        const ry = Math.sin(angle) * 2.8 * Math.sin(time * 0.5);
        const rz = Math.sin(angle) * 2.8 * Math.cos(time * 0.5);

        // Rotate ring with camera angles
        const y1 = ry * Math.cos(A) - rz * Math.sin(A);
        const z1 = ry * Math.sin(A) + rz * Math.cos(A);
        const x2 = rx * Math.cos(B) + z1 * Math.sin(B);
        const z2 = -rx * Math.sin(B) + z1 * Math.cos(B);

        const ooz = 1 / (z2 + distance);
        const px = Math.floor(cols / 2 + x2 * aspect * ooz * 14);
        const py = Math.floor(rows / 2 + y1 * ooz * 14);
        const idx = px + py * cols;

        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            buffer[idx] = i % 4 === 0 ? "O" : "•";
          }
        }
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

        {/* Right Column: Full-Area Black Edge-to-Edge Canvas with White ASCII Art */}
        <div
          className="lg:col-span-5 relative bg-black flex items-center justify-center p-6 sm:p-8 min-h-[320px] lg:min-h-full cursor-crosshair select-none overflow-hidden group"
          onMouseLeave={() => {
            mouseRef.current.targetX = 0;
            mouseRef.current.targetY = 0;
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle Corner Markers in White */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/40"></div>
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/40"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/40"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/40"></div>

          {/* White ASCII Canvas Utilizing the Entire Column */}
          <pre className="text-white font-mono font-bold text-[10px] sm:text-[11px] leading-[13px] sm:leading-[14px] tracking-tighter text-center">
            {asciiFrame}
          </pre>
        </div>
      </div>
    </section>
  );
}






