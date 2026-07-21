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
    let isMounted = true;

    const cols = 56;
    const rows = 28;

    let dayTexture: string[][] | null = null;
    let nightTexture: string[][] | null = null;
    const palette = [
      ' ', '.', ':', ';', '\'', ',', 'w', 'i', 'o', 'g', 'O', 'L', 'X', 'H', 'W', 'Y', 'V', '@'
    ];

    Promise.all([
      fetch("/images/texture/earth.txt").then((res) => res.text()),
      fetch("/images/texture/earth_night.txt").then((res) => res.text()),
    ])
      .then(([dayText, nightText]) => {
        if (!isMounted) return;
        dayTexture = dayText.split("\n").map((line) => line.split("").reverse());
        nightTexture = nightText.split("\n").map((line) => line.split("").reverse());
      })
      .catch((err) => console.error("Could not load earth textures:", err));

    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      time += 0.02;

      const buffer: string[] = new Array(cols * rows).fill(" ");

      // Globe fills the canvas — scale so the sphere nearly reaches the edges
      // scaleX/scaleY map [-1,1] world coords to screen cell coords
      const scaleX = cols / 2.1;   // horizontal: sphere edge at cols/2 ± scaleX
      const scaleY = rows / 2.1;   // vertical: sphere edge at rows/2 ± scaleY

      const angle = time * 0.4 + mouseRef.current.x * 2.5;
      const rotX  = 0.41 + mouseRef.current.y * 1.0;

      // Light from upper-left
      const nlx = -0.5, nly = -0.8, nlz = -0.3;
      const llen = Math.sqrt(nlx*nlx + nly*nly + nlz*nlz);
      const lx = nlx/llen, ly = nly/llen, lz = nlz/llen;

      for (let yi = 0; yi < rows; yi++) {
        for (let xi = 0; xi < cols; xi++) {
          const idx = xi + yi * cols;

          // Normalised screen coords [-1, 1]
          const sx = (xi - cols / 2 + 0.5) / scaleX;
          const sy = (yi - rows / 2 + 0.5) / scaleY;

          // Ray-sphere intersection (orthographic projection, camera at z = -∞)
          const r2 = sx * sx + sy * sy;
          if (r2 > 1.0) continue;  // outside the globe disk

          const sz = Math.sqrt(1.0 - r2);  // front hemisphere z on the unit sphere

          // Surface point on sphere of radius 1 (we use unit sphere, texture maps directly)
          let px = sx, py = sy, pz = sz;

          // Rotate X (axial tilt + mouse)
          const py1 = py * Math.cos(rotX) - pz * Math.sin(rotX);
          const pz1 = py * Math.sin(rotX) + pz * Math.cos(rotX);

          // Rotate Y (spin + mouse)
          const px2 =  px * Math.cos(angle) + pz1 * Math.sin(angle);
          const py2 = py1;
          const pz2 = -px * Math.sin(angle) + pz1 * Math.cos(angle);

          // Spherical coordinates → texture UV
          const phi   = Math.max(0, Math.min(0.999, -py2 / 2.0 + 0.5));
          let   theta = Math.atan2(py2, px2) / Math.PI + 0.5 + angle / (2 * Math.PI);
          theta = theta - Math.floor(theta);

          // Surface normal (same as unit sphere point before rotation for lighting)
          // Use the un-rotated normal for consistent lighting
          const dot_nl = -(sx * lx + sy * ly + sz * lz);
          const luminance = Math.max(0, Math.min(1, 2.5 * dot_nl + 0.4));

          if (dayTexture && nightTexture && dayTexture.length > 0) {
            const texY = Math.min(dayTexture.length - 1, Math.floor(phi * dayTexture.length));
            const texRow = dayTexture[texY] || [];
            const texX = Math.min(texRow.length - 1, Math.floor(theta * texRow.length));

            const dayChar   = texRow[texX] || ' ';
            const nightChar = nightTexture[texY]?.[texX] || ' ';
            const dayIdx    = palette.indexOf(dayChar);
            const nightIdx  = palette.indexOf(nightChar);

            if (dayIdx !== -1 && nightIdx !== -1) {
              let blendIdx = Math.floor((1.0 - luminance) * nightIdx + luminance * dayIdx);
              blendIdx = Math.max(0, Math.min(palette.length - 1, blendIdx));
              buffer[idx] = palette[blendIdx];
            } else {
              buffer[idx] = luminance > 0.2 ? dayChar : '·';
            }
          } else {
            const fallbackChars = [".", ":", ";", "=", "+", "*", "#", "%", "@"];
            if (luminance > 0.1) {
              const charIdx = Math.floor(luminance * (fallbackChars.length - 1));
              buffer[idx] = fallbackChars[charIdx];
            } else {
              buffer[idx] = "·";
            }
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
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
    };
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






