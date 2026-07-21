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

    const cols = 64;
    const rows = 26;
    const aspect = 2.1;
    const radius = 1.8;

    let dayTexture: string[][] | null = null;
    let nightTexture: string[][] | null = null;
    const palette = [
      ' ', '.', ':', ';', '\'', ',', 'w', 'i', 'o', 'g', 'O', 'L', 'X', 'H', 'W', 'Y', 'V', '@'
    ];

    // Load exact texture maps from adamsky/globe (DinoZ1729)
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
      const camZ = 4.5;

      // Axial tilt + mouse Y rotation
      const rotX = 0.41 + mouseRef.current.y * 1.0;
      // Continuous background spin + mouse X panning
      const angle = time * 0.4 + mouseRef.current.x * 2.5;

      // Light source vector
      const lx = 0.2, ly = 0.8, lz = 0.6;
      const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
      const nlx = lx / lLen, nly = ly / lLen, nlz = lz / lLen;

      for (let yi = 0; yi < rows; yi++) {
        for (let xi = 0; xi < cols; xi++) {
          const idx = xi + yi * cols;

          // Ray direction passing through character cell
          let ux = ((xi - cols / 2) + 0.5) / (cols / 2);
          let uy = -((yi - rows / 2) + 0.5) / (rows / 2) * aspect;
          let uz = -1.0;
          const uLen = Math.sqrt(ux * ux + uy * uy + uz * uz);
          ux /= uLen; uy /= uLen; uz /= uLen;

          // Intersection quadratic discriminant with sphere at origin [0,0,0]
          const dot_uo = uz * camZ;
          const discriminant = dot_uo * dot_uo - (camZ * camZ) + radius * radius;

          if (discriminant < 0) continue;

          const distance = -Math.sqrt(discriminant) - dot_uo;
          const ix = distance * ux;
          const iy = distance * uy;
          const iz = camZ + distance * uz;

          // Surface normal at intersection
          const nx = ix / radius;
          const ny = iy / radius;
          const nz = iz / radius;

          // Rotate point by axial tilt (rotX) and spin (angle)
          const y1 = iy * Math.cos(rotX) - iz * Math.sin(rotX);
          const z1 = iy * Math.sin(rotX) + iz * Math.cos(rotX);
          const x2 = ix * Math.cos(angle) + z1 * Math.sin(angle);

          // DinoZ1729 spherical coordinates [0, 1]
          const phi = Math.max(0, Math.min(0.999, -y1 / radius / 2.0 + 0.5));
          let theta = Math.atan2(y1, x2) / Math.PI + 0.5 + angle / (2 * Math.PI);
          theta = theta - Math.floor(theta);

          // Luminance based on light dot product
          const dot_nl = nx * nlx + ny * nly + nz * nlz;
          const luminance = Math.max(0, Math.min(1, 2.5 * dot_nl + 0.4));

          if (dayTexture && nightTexture && dayTexture.length > 0) {
            const texY = Math.min(dayTexture.length - 1, Math.floor(phi * dayTexture.length));
            const texRow = dayTexture[texY] || [];
            const texX = Math.min(texRow.length - 1, Math.floor(theta * texRow.length));

            const dayChar = texRow[texX] || ' ';
            const nightChar = nightTexture[texY]?.[texX] || ' ';
            const dayIdx = palette.indexOf(dayChar);
            const nightIdx = palette.indexOf(nightChar);

            if (dayIdx !== -1 && nightIdx !== -1) {
              let blendIdx = Math.floor((1.0 - luminance) * nightIdx + luminance * dayIdx);
              blendIdx = Math.max(0, Math.min(palette.length - 1, blendIdx));
              buffer[idx] = palette[blendIdx];
            } else {
              buffer[idx] = luminance > 0.2 ? dayChar : '·';
            }
          } else {
            // Fallback before texture loads
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






