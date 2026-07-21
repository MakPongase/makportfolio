"use client";

import { useState } from "react";

interface SkillsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Skills({
  title = "TECHNICAL EXPERTISE",
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
    "Interactive Development": ["Roblox Studio", "Lua", "GameMaker", "3D Modeling"],
  };

  const tools = {
    "Development & IDEs": [
      "VS Code",
      "Cursor IDE",
      "Git/GitHub",
      "Chrome DevTools",
      "Figma",
    ],
    "AI Tools": [
      "Claude",
      "Gemini",
      "ChatGPT",
      "Cursor IDE",
      "ElevenLabs",
      "Leonardo AI",
      "Higgsfield",
    ],
    "Productivity & Agile": [
      "Microsoft Office",
      "Google Workspace",
      "Trello",
      "Slack",
      "Jira",
    ],
    "Marketing & Community": [
      "Meta Business Suite",
      "Canva",
      "Buffer",
      "Hootsuite",
      "LinkedIn",
    ],
  };

  const displayData = activeTab === "skills" ? skills : tools;

  return (
    <section id="skills" className={`relative bg-white text-black border-b border-gray-200 ${className}`}>
      {/* Section Header Bar */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black uppercase">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400 self-start sm:self-auto">
          [04]
        </span>
      </div>

      {/* Tab Switcher Bar */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-4 flex flex-wrap gap-2 bg-gray-50/50">
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest border transition-all duration-300 ${
            activeTab === "skills"
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 border-gray-300 hover:border-black"
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-widest border transition-all duration-300 ${
            activeTab === "tools"
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 border-gray-300 hover:border-black"
          }`}
        >
          Tools & Platforms
        </button>
      </div>

      {/* Grid of Category Cells */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {Object.entries(displayData).map(([category, items], index) => (
          <div
            key={index}
            className="border-r border-b border-gray-200 p-8 sm:p-12 flex flex-col justify-between gap-8 group hover:bg-gray-50/40 transition-colors"
          >
            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-gray-400">/</span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black uppercase">
                    {category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-gray-400">
                  [{items.length}]
                </span>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {items.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className="px-4 py-2 bg-white border border-gray-300 text-xs font-mono font-medium text-gray-800 uppercase tracking-wider group-hover:border-black transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Cell Footer */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest">
              <span>PROFICIENCY VERIFIED</span>
              <span>•</span>
              <span>MAK PONGASE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
