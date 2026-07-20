"use client";

import Image from "next/image";

interface IntroductionProps {
  title?: string;
  quote?: string;
  story?: string[];
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export default function Introduction({
  title = "WHY I DO WHAT I DO",
  quote = "Versatility isn't doing everything—it's having the depth to lead, the skill to build, and the wisdom to connect diverse domains.",
  story = [
    "I am a full-stack engineer and community leader driven by the challenge of turning complex ideas into impactful systems. From architecting scalable web platforms and leading a team of 100+ cloud builders, to conducting holistic counseling—my core mission is empowering people through thoughtful technology and high empathy.",
  ],
  imageUrl = "/images/about-me/mak-pongase-main-picture.png",
  imageAlt = "John Mark Pongase",
  className = "",
}: IntroductionProps) {
  return (
    <section id="introduction" className={`relative bg-white text-black border-b border-gray-200 ${className}`}>
      {/* Section Header Bar matching architectural layout */}
      <div className="border-b border-gray-200 px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400">
          [01]
        </span>
      </div>

      {/* Split Grid Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Framed Portrait */}
        <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 lg:border-r border-b lg:border-b-0 border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[280px] border border-black bg-white p-3 shadow-xs">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black translate-x-1 translate-y-1"></div>

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>

            <div className="mt-3 pt-2 border-t border-gray-200 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-gray-600">
              <span>JOHN MARK PONGASE</span>
              <span>• BULACAN, PH</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quote & Story */}
        <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8">
          {/* Quote Block */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-400">
              Core Philosophy
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-black leading-snug">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>

          {/* Story Paragraphs */}
          <div className="border-t border-gray-200 pt-6 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            {story.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Bottom stats/indicators row */}
          <div className="grid grid-cols-3 border-t border-gray-200 pt-6 gap-4 text-center sm:text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-black">100+</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 mt-1">Cloud Builders</div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="text-xl sm:text-2xl font-bold font-mono text-black">200+</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 mt-1">Clients Guided</div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="text-xl sm:text-2xl font-bold font-mono text-black">3K+</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-500 mt-1">Roblox Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
