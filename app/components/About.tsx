"use client";

import { useState } from "react";
import Link from "next/link";

interface BentoCard {
  size: "small" | "medium" | "large" | "wide";
  frontTitle: string;
  frontSubtitle?: string;
  backTitle: string;
  backDescription: string;
  imageUrl?: string;
  linkUrl?: string;
  linkLabel?: string;
}

interface AboutProps {
  title?: string;
  subtitle?: string;
  cards?: BentoCard[];
  className?: string;
}

export default function About({
  title = "What I Do",
  subtitle = "Explore My Work",
  cards = [
    {
      size: "large",
      frontTitle: "Leadership",
      frontSubtitle: "Captain",
      backTitle: "Building Cloud Communities",
      backDescription: "Led merchandise initiatives and national marketing for AWS Cloud Clubs Philippines. Designed workshops attracting 40+ attendees.",
      linkUrl: "/projects/aws-cloud-leadership",
      linkLabel: "Read More",
    },
    {
      size: "small",
      frontTitle: "Counseling and Tarot",
      frontSubtitle: "Mystical Guidance",
      backTitle: "Wisdom of Cards",
      backDescription: "Delivered 200+ personalized tarot consultations helping clients make informed decisions.",
      linkUrl: "/projects/tarot-consultations",
      linkLabel: "Read More",
    },
    {
      size: "medium",
      frontTitle: "Full-Stack Development",
      frontSubtitle: "Research Projects",
      backTitle: "Enterprise Applications",
      backDescription: "Built comprehensive platforms: Construction PMS with competitive supplier bidding and AI-enhanced reporting, and BizWise—an AI-integrated service marketplace for small businesses.",
      linkUrl: "/projects/construction-pms",
      linkLabel: "Read More",
    },
    {
      size: "small",
      frontTitle: "Game Development",
      frontSubtitle: "Environmental Impact",
      backTitle: "EcoTide Adventures",
      backDescription: "A 2D mobile game where players clean Philippine coastal waters by catching trash while protecting marine life. Built to promote SDG 6 & 14, featuring 3 difficulty levels and an engaging economy system.",
      linkUrl: "/projects/ecotide",
      linkLabel: "Play Story",
    },
    {
      size: "small",
      frontTitle: "Bulldogs Tambayan",
      frontSubtitle: "Roblox Game",
      backTitle: "3K+ Visitors in Week 1",
      backDescription: "3D-modeled NU Baliwag campus and SM Baliwag. An immersive virtual environment for the community.",
      linkUrl: "/projects/bulldogs-tambayan",
      linkLabel: "View Project",
    },
    {
      size: "wide",
      frontTitle: "Speaker & Educator",
      frontSubtitle: "Workshops & Talks",
      backTitle: "Empowering Students",
      backDescription: "Delivered talks at Gordon College AWS Event and led full-stack workshops. Teaching Web Dev, Git/GitHub, and leadership principles.",
      linkUrl: "/projects/speaker-educator",
      linkLabel: "Read More",
    },
    {
      size: "small",
      frontTitle: "Lit Entertainment",
      frontSubtitle: "Chairman",
      backTitle: "Rebranded & Led Organization",
      backDescription: "Rebranded Literates Esports to Lit Entertainment. Organized Kasadyahan 2024, Overclocked (collab with NU Technocrats), and Dress to Impress Roblox tournaments.",
      linkUrl: "/projects/lit-entertainment-leadership",
      linkLabel: "Read More",
    },
    {
      size: "small",
      frontTitle: "Creative Design",
      frontSubtitle: "Under Construction",
      backTitle: "Coming Soon",
      backDescription: "This section is currently under development. I'm collecting and organizing my creative design work, including branding projects, UI/UX designs, and visual storytelling pieces. Check back soon!",
      linkUrl: undefined,
      linkLabel: undefined,
    },
    {
      size: "small",
      frontTitle: "Marketing",
      frontSubtitle: "Under Construction",
      backTitle: "Coming Soon",
      backDescription: "This section is currently under development. I'm gathering my marketing campaigns, community building initiatives, and strategic projects across multiple organizations. Check back soon!",
      linkUrl: undefined,
      linkLabel: undefined,
    },
  ],
  className = "",
}: AboutProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardHover = (index: number, isHovering: boolean) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (isHovering) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      return newSet;
    });
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small":
        return "md:col-span-1 md:row-span-1";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen bg-white py-24 overflow-hidden ${className}`}
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-[30%] left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-6">
              <span className="w-16 h-px bg-gray-400"></span>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                {subtitle}
              </p>
              <span className="w-16 h-px bg-gray-400"></span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              {title}
            </h2>

            <div className="flex justify-center">
              <div className="w-24 h-[2px] bg-gray-900"></div>
            </div>
          </div>

          {/* Bento Grid with Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`perspective-1000 ${getSizeClasses(card.size)}`}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCards.has(index) ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.has(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 backface-hidden bg-white shadow-md hover:shadow-xl transition-shadow group/card ${
                      card.linkUrl ? "cursor-pointer" : "cursor-default"
                    }`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900 z-10 transition-all duration-300 group-hover/card:w-4 group-hover/card:h-4"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-900 z-10 transition-all duration-300 group-hover/card:w-4 group-hover/card:h-4"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-900 z-10 transition-all duration-300 group-hover/card:w-4 group-hover/card:h-4"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900 z-10 transition-all duration-300 group-hover/card:w-4 group-hover/card:h-4"></div>

                    {/* Subtle top border accent */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gray-900"></div>

                    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 text-xs text-gray-400 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        Hover to flip
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {card.frontTitle}
                      </h3>
                      {card.frontSubtitle && (
                        <>
                          <div className="w-16 h-px bg-gray-900 my-3"></div>
                          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">
                            {card.frontSubtitle}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`absolute inset-0 backface-hidden bg-gray-900 text-white shadow-xl ${
                      card.linkUrl ? "cursor-pointer" : "cursor-default"
                    }`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    onClick={() => {
                      if (card.linkUrl) {
                        if (card.linkUrl.startsWith('http')) {
                          window.open(card.linkUrl, "_blank");
                        } else {
                          window.location.href = card.linkUrl;
                        }
                      }
                    }}
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white z-10"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white z-10"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white z-10"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white z-10"></div>

                    {/* Background pattern or image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90"></div>

                    <div className="relative h-full flex flex-col p-6 overflow-hidden">
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{card.backTitle}</h3>
                        <div className="w-16 h-px bg-white/50 mb-3 flex-shrink-0"></div>
                        <p className="text-sm text-gray-300 leading-relaxed line-clamp-4 flex-1">
                          {card.backDescription}
                        </p>
                      </div>

                      {card.linkUrl && (
                        <div className="flex items-center gap-2 text-sm font-medium group/link mt-4 flex-shrink-0">
                          <span>{card.linkLabel || "Learn More"}</span>
                          <svg
                            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

