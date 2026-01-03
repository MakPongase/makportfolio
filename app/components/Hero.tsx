"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  greeting?: string;
  name?: string;
  roles?: string[];
  description?: string;
  className?: string;
}

export default function Hero({
  greeting = "The Jack of All Trades",
  name = "Hello there, I am your",
  roles = [
    "Full-Stack Developer",
    "Cloud Club Captain",
    "Speaker & Educator",
    "Project Manager",
    "Tarot Consultant",
    "Marketing Director",
  ],
  description = "Building communities, leading initiatives, and creating meaningful digital experiences.",
  className = "",
}: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center bg-white overflow-hidden ${className}`}
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute top-[30%] left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="flex items-center justify-center gap-6">
            <span className="w-16 h-px bg-gray-300"></span>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              {greeting}
            </p>
            <span className="w-16 h-px bg-gray-300"></span>
          </div>

          {/* Greeting message */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              {name}
            </h1>
            
            {/* Elegant accent line */}
            <div className="flex justify-center">
              <div className="w-24 h-[2px] bg-gray-900"></div>
            </div>
          </div>

          {/* Rotating roles with box frame */}
          <div className="flex justify-center">
            <div className="relative inline-block w-[340px] sm:w-[400px]">
              {/* Box frame around the role */}
              <div className="absolute inset-0 border border-gray-300"></div>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-900"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-900"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900"></div>
              
              {/* Role text */}
              <div className="px-8 py-4">
                <p
                  className={`text-xl sm:text-2xl font-semibold text-gray-700 transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  {roles[currentRoleIndex]}
                </p>
              </div>
            </div>
          </div>

          {/* Role indicators */}
          <div className="flex justify-center gap-2">
            {roles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentRoleIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`transition-all duration-300 ${
                  index === currentRoleIndex
                    ? "w-9 h-1 bg-gray-900"
                    : "w-1 h-1 bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`View role: ${roles[index]}`}
              />
            ))}
          </div>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Scroll indicator */}
          <div className="pt-12">
            <div className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Scroll</span>
              <div className="w-px h-12 bg-gray-300 animate-scroll-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

