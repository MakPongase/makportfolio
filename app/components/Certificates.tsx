"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export interface CertificateItem {
  title: string;
  issuer: string;
  imageUrl: string;
  badge?: string;
  category?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  badge: string;
}

interface CertificatesProps {
  title?: string;
  certificates?: CertificateItem[];
  achievements?: AchievementItem[];
  className?: string;
}

const defaultCertificates: CertificateItem[] = [
  {
    title: "Claude 101 Certificate",
    issuer: "Anthropic",
    imageUrl: "/images/certificates/anthropic-claude-101.png",
    badge: "AI Certification",
    category: "AI & Tech",
  },
  {
    title: "TOPCIT Level 3 Competency Certificate",
    issuer: "IITP / ICT Competency Assessment",
    imageUrl: "/images/certificates/topcit-level-3.png",
    badge: "Level 3 High Proficiency",
    category: "Competency & Language",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-ux-design.png",
    badge: "UX / UI Design",
    category: "Data & UX",
  },
  {
    title: "AWS Cloud Club Captain — Diamond Tier",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain-diamond.png",
    badge: "Diamond Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Platinum Tier",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain-platinum.png",
    badge: "Platinum Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Gold Tier",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain-gold.png",
    badge: "Gold Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Silver Tier",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain-silver.png",
    badge: "Silver Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Bronze Tier",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain-bronze.png",
    badge: "Bronze Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain Designation",
    issuer: "Amazon Web Services (AWS)",
    imageUrl: "/images/certificates/aws-captain.png",
    badge: "Leadership",
    category: "Cloud & AWS",
  },
  {
    title: "Google Project Management Specialization",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-project-management.jpg",
    badge: "Specialization",
    category: "Project Management",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/foundations.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Initiation: Starting a Successful Project",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-pm-initiation.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Planning: Putting It All Together",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-pm-planning.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Execution: Running the Project",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-pm-execution.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Agile Project Management",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/agile-project-management.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/data-analyst-foundational.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/data-analyst-ask-questions.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Google / Coursera",
    imageUrl: "/images/certificates/google-data-prepare-data.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "EF SET English Certificate (C2 Proficient)",
    issuer: "EF Standard English Test",
    imageUrl: "/images/certificates/ef-set-certificate.jpg",
    badge: "C2 Proficient",
    category: "Competency & Language",
  },
  {
    title: "Front-End Web Development Bootcamp",
    issuer: "TechEdu / Udemy",
    imageUrl: "/images/certificates/web-developer-bootcamp.jpg",
    badge: "Web Dev",
    category: "AI & Tech",
  },
];

const defaultAchievements: AchievementItem[] = [
  {
    title: "AWS Cloud Club NU Baliwag",
    issuer: "Amazon Web Services",
    badge: "Captain",
  },
  {
    title: "AWS Student Community Day North — Head Organizer",
    issuer: "AWS User Group Philippines",
    badge: "Head Organizer",
  },
  {
    title: "Volunteer Marketing Director",
    issuer: "AWS Cloud Clubs Philippines",
    badge: "Volunteer",
  },
  {
    title: "Kasadyahan 2024 Esports Tournament — Lead Organizer",
    issuer: "Lit Entertainment",
    badge: "Lead Organizer",
  },
];

export default function Certificates({
  title = "CERTIFICATIONS & ACHIEVEMENTS",
  certificates = defaultCertificates,
  achievements = defaultAchievements,
  className = "",
}: CertificatesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Cloud & AWS",
    "Project Management",
    "Data & UX",
    "AI & Tech",
    "Competency & Language",
  ];

  const filteredCertificates =
    activeCategory === "ALL"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className={`relative bg-white text-black border-b border-gray-200 ${className}`}>
      {/* Section Header Bar */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black uppercase">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400 self-start sm:self-auto">
          [03]
        </span>
      </div>

      {/* ─── CERTIFICATIONS HEADER & TABS ─── */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-6 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gray-500">
            Certifications
          </span>
          <span className="text-xs font-mono text-gray-400 font-bold">
            [{filteredCertificates.length} OF {certificates.length}]
          </span>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat === "ALL"
                ? certificates.length
                : certificates.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── CERTIFICATIONS GRID ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-b border-gray-200">
        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            className="border-r border-b border-gray-200 p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:bg-gray-50/60 transition-colors"
          >
            <div className="space-y-4">
              {/* Image Preview Box */}
              <div
                onClick={() => setSelectedImage(cert.imageUrl)}
                className="relative aspect-[16/11] w-full border border-gray-300 bg-gray-100 overflow-hidden cursor-pointer group/img"
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {cert.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-black text-white text-[10px] font-mono uppercase tracking-wider z-10 shadow-xs">
                    {cert.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-mono uppercase tracking-widest bg-black px-4 py-2 border border-white/40">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Title and Issuer */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-black group-hover:text-gray-700 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                  {cert.issuer}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                {cert.category}
              </span>
              <button
                onClick={() => setSelectedImage(cert.imageUrl)}
                className="text-xs font-mono font-bold uppercase tracking-widest text-black hover:underline flex items-center gap-1"
              >
                <span>VIEW</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ─── LEADERSHIP & ACHIEVEMENTS SECTION ─── */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-4 bg-gray-50/50">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-gray-500">
          Leadership & Achievements
        </span>
      </div>
      <div className="divide-y divide-gray-200">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="px-8 sm:px-12 lg:px-16 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-gray-50/40 transition-colors"
          >
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              {/* Number */}
              <span className="text-xs font-mono font-bold text-gray-400 mt-1 sm:mt-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Title & Issuer */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-black group-hover:translate-x-1 transition-transform duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-mono uppercase tracking-wider text-gray-500 mt-1">
                  {item.issuer}
                </p>
              </div>
            </div>
            {/* Badge */}
            <span className="px-3 py-1.5 bg-black text-white text-[10px] font-mono uppercase tracking-wider self-start sm:self-auto shrink-0">
              {item.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white font-mono text-sm uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                Close [X]
              </button>
              <div className="relative w-full max-h-[85vh] aspect-[16/11] border border-white bg-black">
                <Image
                  src={selectedImage}
                  alt="Certificate Preview"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

