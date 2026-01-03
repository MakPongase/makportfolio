"use client";

import { useState } from "react";
import Image from "next/image";

interface IntroductionProps {
  title?: string;
  subtitle?: string;
  content?: string[];
  className?: string;
}

export default function Introduction({
  title = "Why I Do What I Do",
  subtitle = "My Story",
  content = [
    "I am endlessly curious and deeply driven by a desire to understand the world around me. Challenges excite me rather than intimidate me because I see them as opportunities to learn, adapt, and grow. Whether I am exploring new technologies, developing innovative solutions, or leading a project, I approach every task with initiative and a mindset of continuous improvement.",
    "Beyond skills and achievements, I prioritize people. I believe that real impact comes from understanding the needs of others and creating solutions that make their lives better. This people-first approach guides how I work, whether I am collaborating with teams, mentoring peers, or building experiences for users.",
    "Over the years, I have taken on a variety of roles and projects, from tech and product development to community leadership, because I thrive in environments where learning never stops. I aim to connect ideas, people, and technology in ways that drive meaningful change. Every project I take on, every initiative I lead, and every challenge I embrace is motivated by curiosity, adaptability, and the belief that innovation is most powerful when it improves lives.",
  ],
  className = "",
}: IntroductionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="introduction"
      className={`relative bg-white border-y border-gray-200 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Collapsed View - Clickable */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-7 flex items-center justify-between gap-4 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-black"></div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                {subtitle}
              </p>
              <h2 className="text-lg font-bold text-black tracking-tight group-hover:text-gray-600 transition-colors">
                {title}
              </h2>
            </div>
          </div>
          
          {/* Expand/Collapse Icon */}
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
            <span className="hidden sm:inline">
              {isExpanded ? "Close" : "Read More"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-10 px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Image Section */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-full max-w-[280px] mx-auto md:mx-0 md:w-full">
                  {/* Photo frame with corner accents */}
                  <div className="relative border border-black p-2">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black"></div>
                    
                    <Image
                      src="/images/about-me/mak-pongase-main-picture.png"
                      alt="John Mark Pongase"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  {/* Name label */}
                  <div className="mt-3 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-black font-bold">
                      John Mark Pongase
                    </p>
                    <div className="w-12 h-px bg-black mx-auto mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="md:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-gray-600">
                {content.map((paragraph, index) => (
                  <p key={index} className="wrap-break-word">{paragraph}</p>
                ))}
                
                {/* Quote */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-center text-xs font-medium text-black uppercase tracking-[0.15em] italic">
                    &ldquo;I turn curiosity into stories, and stories into action.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

