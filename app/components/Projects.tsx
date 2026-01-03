"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  achievements: string[];
  link?: string;
  linkLabel?: string;
  image?: string;
  year: string;
}

interface ProjectsProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  className?: string;
}

export default function Projects({
  title = "Featured Projects",
  subtitle = "Building Impactful Solutions",
  projects = [
    {
      title: "Construction Project Management System",
      category: "Full-Stack Development",
      description: "Scalable construction management platform with 10 user roles and real-time collaboration.",
      longDescription: "Developed a comprehensive construction management system featuring 10 distinct user roles including Project Managers, Engineers, Quantity Surveyors, and HR. Built with React.js, Node.js, Express, and PostgreSQL using RBAC for secure access control. Integrated Firebase Firestore for document handling and real-time updates.",
      techStack: ["React.js", "React Native", "Node.js", "Express", "PostgreSQL", "Firebase", "Tailwind CSS"],
      achievements: [
        "10 user roles with role-based access control",
        "Real-time collaboration via Firebase",
        "Mobile access through React Native",
        "Integrated BOQ, CPM, cost estimation",
        "Inventory and equipment management modules",
      ],
      year: "2024",
    },
    {
      title: "Bulldogs of the North Tambayan",
      category: "Game Development",
      description: "3D immersive Roblox game featuring NU Baliwag campus with 3K+ visitors in first week.",
      longDescription: "Created an immersive virtual environment of NU Baliwag campus and SM Baliwag exterior using Roblox Studio. The game serves as a virtual hangout space for the campus community, featuring detailed 3D modeling and interactive elements.",
      techStack: ["Roblox Studio", "Lua", "3D Modeling"],
      achievements: [
        "3,000+ visitors in the first week",
        "Detailed 3D models of NU Baliwag campus",
        "SM Baliwag exterior recreation",
        "Interactive community space",
      ],
      link: "https://www.roblox.com/games/your-game-id",
      linkLabel: "Play Game",
      year: "2024",
    },
    {
      title: "AWS Cloud Club Student Community Day",
      category: "Event Organization & Leadership",
      description: "End-to-end planning and execution of one-day AWS student tech conference.",
      longDescription: "Led the complete planning and execution of a one-day AWS student tech conference with the theme 'Trailblaze and Empower Cloud Leaders.' Coordinated program flow, speakers, logistics, promotions, and campus partnerships to deliver a high-impact educational event.",
      techStack: ["Project Management", "Event Planning", "Marketing", "Partnership Development"],
      achievements: [
        "Successful one-day tech conference",
        "Multiple speaker coordination",
        "Campus partnerships established",
        "Inspired creation of new AWS learning club",
        "Spread AWS awareness beyond NU Baliwag",
      ],
      year: "2025",
    },
    {
      title: "Kasidyahan 2024 Esports Tournament",
      category: "Tournament Management",
      description: "University-wide esports tournament with 80+ participants across three game titles.",
      longDescription: "Planned and executed a university-wide esports tournament during University Week featuring MLBB, Valorant, and CODM competitions. Assumed full leadership as newly onboarded organization president, managing volunteers, logistics, and ensuring smooth operations.",
      techStack: ["Event Management", "Team Coordination", "Logistics Planning"],
      achievements: [
        "80+ students participated",
        "Three game categories (MLBB, Valorant, CODM)",
        "Recruited and managed volunteer teams",
        "Oversaw schedules and rules enforcement",
        "Successful University Week contribution",
      ],
      year: "2024",
    },
    {
      title: "GDSC NU Baliwag Mascot Rebranding",
      category: "Creative Design",
      description: "Led mascot rebranding initiative, transforming it into successful merchandise.",
      longDescription: "Proposed and led the mascot rebranding initiative for GDSC NU Baliwag, aligning it with the organization's vision and community identity. Oversaw the transformation of the updated mascot into merchandise, increasing visibility and creating additional funding streams.",
      techStack: ["Graphic Design", "Branding", "Merchandise Design"],
      achievements: [
        "Complete mascot rebranding",
        "Merchandise line launched",
        "Increased organization visibility",
        "Additional funding streams created",
        "Enhanced community engagement",
      ],
      year: "2023",
    },
  ],
  className = "",
}: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className={`relative min-h-screen bg-white py-24 overflow-hidden ${className}`}
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
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

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-900 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-900 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900 transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>

                <div className="p-8 sm:p-10">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-gray-400 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="group/link flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors whitespace-nowrap"
                      >
                        {project.linkLabel || "View Project"}
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
                      </Link>
                    )}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() =>
                      setExpandedProject(expandedProject === index ? null : index)
                    }
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6 font-medium"
                  >
                    <span>{expandedProject === index ? "Show Less" : "Show More Details"}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedProject === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Expanded Content */}
                  {expandedProject === index && (
                    <div className="space-y-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top">
                      {/* Long Description */}
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
                          Project Overview
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-white border border-gray-300 text-sm text-gray-700 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="w-1 h-1 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


