"use client";

import { useState } from "react";

interface SkillsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Skills({
  title = "Technical Expertise",
  subtitle = "Skills & Tools",
  className = "",
}: SkillsProps) {
  const [activeTab, setActiveTab] = useState<"skills" | "tools">("skills");

  const skills = {
    "Frontend Development": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
    ],
    "Backend Development": [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "RESTful APIs",
      "JWT Authentication",
      "RBAC",
    ],
    "Database & Cloud": [
      "PostgreSQL",
      "Firebase Firestore",
      "AWS Cloud",
      "Docker",
    ],
    "Game Development": ["Roblox Studio", "Lua", "GameMaker"],
  };

  const tools = {
    "Development Tools": [
      "VS Code",
      "Cursor IDE",
      "Git/GitHub",
      "Chrome DevTools",
      "Figma",
    ],
    "AI-Assisted Development": [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Gemini",
    ],
    "Productivity & Collaboration": [
      "Microsoft Office",
      "Google Workspace",
      "Trello",
      "Slack",
    ],
    "Social Media Management": [
      "Meta Business Suite",
      "Canva",
      "Buffer",
      "Hootsuite",
      "LinkedIn",
    ],
  };

  const displayData = activeTab === "skills" ? skills : tools;

  return (
    <section
      id="skills"
      className={`relative min-h-screen bg-white py-24 overflow-hidden ${className}`}
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-[20%] left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
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

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black tracking-tight">
              {title}
            </h2>

            <div className="flex justify-center">
              <div className="w-24 h-[2px] bg-black"></div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center">
            <div className="inline-flex border border-black">
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === "skills"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-white"
                }`}
              >
                Technical Skills
              </button>
              <div className="w-px bg-gray-900"></div>
              <button
                onClick={() => setActiveTab("tools")}
                className={`px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === "tools"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600 hover:bg-white"
                }`}
              >
                Tools & Platforms
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(displayData).map(([category, items], index) => (
              <div
                key={index}
                className="relative bg-white border border-black p-8"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black"></div>

                {/* Category Title */}
                <div className="mb-6 pb-4 border-b border-black">
                  <h3 className="text-lg font-bold text-black uppercase tracking-[0.15em]">
                    {category}
                  </h3>
                </div>

                {/* Items Grid */}
                <div className="flex flex-wrap gap-3">
                  {items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="relative px-4 py-2 bg-white border border-black text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Item Count */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 text-right">
                    {items.length} {activeTab === "skills" ? "Skills" : "Tools"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
