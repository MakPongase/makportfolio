"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export interface CertificateItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  description: string;
  imageUrl: string;
  badge?: string;
  category: string;
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
    title: "AWS Cloud Club Captain — Diamond Tier",
    issuer: "AWS Community",
    date: "Jan 9, 2026",
    credentialId: "c0c4a271-dbaf-4e04-b27a-028ed665ed85",
    description:
      "The highest Captain milestone awarded by AWS Community after earning all tier levels and successfully hosting Student Community Day North 2025.",
    imageUrl: "/images/certificates/aws-captain-diamond.png",
    badge: "Diamond Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Platinum Tier",
    issuer: "AWS Community",
    date: "Jan 9, 2026",
    credentialId: "24cf8f75-0e12-4622-96b4-97bd8d1382b4",
    description:
      "Awarded for hosting a wide variety of technical workshops, guest speaker sessions, and community bootcamps for student developers.",
    imageUrl: "/images/certificates/aws-captain-platinum.png",
    badge: "Platinum Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Gold Tier",
    issuer: "AWS Community",
    date: "Oct 17, 2025",
    credentialId: "fe5dfc65-ee96-42f5-9e6c-fa1707ad9b29",
    description:
      "Earned through consistent efforts in running hands-on cloud labs and interactive workshops for the university community.",
    imageUrl: "/images/certificates/aws-captain-gold.png",
    badge: "Gold Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Silver Tier",
    issuer: "AWS Community",
    date: "Oct 2, 2025",
    credentialId: "e543aeb9-87ee-4c99-99f1-8b7f1c9f283f",
    description:
      "Recognized for active community building, regular meetups, and expanding student participation in AWS cloud learning.",
    imageUrl: "/images/certificates/aws-captain-silver.png",
    badge: "Silver Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain — Bronze Tier",
    issuer: "AWS Community",
    date: "Oct 2, 2025",
    credentialId: "570a4c28-4d42-447b-8064-e0f0478afe98",
    description:
      "Initial leadership milestone awarded for successfully launching and structuring the AWS Cloud Club chapter at NU Baliwag.",
    imageUrl: "/images/certificates/aws-captain-bronze.png",
    badge: "Bronze Tier",
    category: "Cloud & AWS",
  },
  {
    title: "AWS Cloud Club Captain Designation",
    issuer: "AWS Community",
    date: "Mar 19, 2025",
    credentialId: "50b5e08f-2a9b-41f9-a91a-00baf2da5320",
    description:
      "Official appointment and leadership recognition from AWS Community as Captain for the local AWS Cloud Club chapter.",
    imageUrl: "/images/certificates/aws-captain.png",
    badge: "Captain",
    category: "Cloud & AWS",
  },
  {
    title: "AWS SBG Leader Badge",
    issuer: "AWS Community",
    date: "Jul 15, 2026",
    credentialId: "4bc9719f-b6b3-4366-9571-926e997363ba",
    description:
      "Official recognition as a Student Builder Group Leader, guiding peers in cloud exploration and student tech community initiatives.",
    imageUrl: "/images/certificates/aws-captain.png",
    badge: "SBG Leader",
    category: "Cloud & AWS",
  },
  {
    title: "Claude 101 Certificate",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Certified by Anthropic on core LLM prompt engineering, model steering, system instructions, and practical AI application patterns.",
    imageUrl: "/images/certificates/anthropic-claude-101.png",
    badge: "AI Certification",
    category: "AI & Tech",
  },
  {
    title: "TOPCIT Level 3 Competency Certificate",
    issuer: "IITP / ICT Competency Assessment",
    date: "2025",
    description:
      "National ICT competency exam assessing practical software development, database design, system architecture, and IT management.",
    imageUrl: "/images/certificates/topcit-level-3.png",
    badge: "Level 3 High Proficiency",
    category: "Competency & Language",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Covered user research, low to high-fidelity wireframing in Figma, interactive prototyping, and usability testing workflows.",
    imageUrl: "/images/certificates/google-ux-design.png",
    badge: "UX / UI Design",
    category: "Data & UX",
  },
  {
    title: "Google Project Management Specialization",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Comprehensive 6-course series covering project initiation, planning, risk management, team leadership, and Agile frameworks.",
    imageUrl: "/images/certificates/google-project-management.jpg",
    badge: "Specialization",
    category: "Project Management",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Covers fundamental project management terms, organizational structures, lifecycle phases, and documentation standards.",
    imageUrl: "/images/certificates/foundations.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Initiation: Starting a Successful Project",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Focuses on drafting project charters, identifying key stakeholders, setting boundaries, and establishing measurable success metrics.",
    imageUrl: "/images/certificates/google-pm-initiation.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Planning: Putting It All Together",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Practical experience building Work Breakdown Structures (WBS), risk management matrices, project budgets, and timelines.",
    imageUrl: "/images/certificates/google-pm-planning.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Project Execution: Running the Project",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Managing daily project workflows, tracking key performance indicators, handling scope changes, and quality assurance.",
    imageUrl: "/images/certificates/google-pm-execution.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Agile Project Management",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Deep dive into Scrum frameworks, sprint planning, product backlogs, retrospective meetings, and iterative delivery.",
    imageUrl: "/images/certificates/agile-project-management.jpg",
    badge: "Google Cert",
    category: "Project Management",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Analytical thinking fundamentals, data ecosystem overview, spreadsheet modeling, and data ethics principles.",
    imageUrl: "/images/certificates/data-analyst-foundational.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Formulating effective business questions, organizing query structures, and connecting analysis directly to decision-making.",
    imageUrl: "/images/certificates/data-analyst-ask-questions.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Google / Coursera",
    date: "2025",
    description:
      "Data extraction, cleaning techniques, verifying data integrity, and preparing structured datasets for analysis.",
    imageUrl: "/images/certificates/google-data-prepare-data.jpg",
    badge: "Data Analytics",
    category: "Data & UX",
  },
  {
    title: "EF SET English Certificate (C2 Proficient)",
    issuer: "EF Standard English Test",
    date: "2025",
    description:
      "Scored C2 Proficient—the highest EF SET level, demonstrating fluent native-level English communication in technical and professional settings.",
    imageUrl: "/images/certificates/ef-set-certificate.jpg",
    badge: "C2 Proficient",
    category: "Competency & Language",
  },
  {
    title: "Front-End Web Development Bootcamp",
    issuer: "TechEdu / Udemy",
    date: "2024",
    description:
      "Hands-on web development bootcamp building responsive web applications using semantic HTML5, modern CSS, and JavaScript ES6+.",
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
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 6;

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

  const totalPages = Math.ceil(filteredCertificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCertificates = filteredCertificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("certificates");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            [{filteredCertificates.length} TOTAL]
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
                onClick={() => handleCategoryChange(cat)}
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

      {/* ─── CERTIFICATIONS GRID (COMPACT WITH HUMAN DESCRIPTIONS) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 border-b border-gray-200">
        {paginatedCertificates.map((cert, index) => (
          <div
            key={index}
            className="border-r border-b border-gray-200 p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:bg-gray-50/60 transition-colors"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-medium">
                  {cert.category}
                </span>
                {cert.badge && (
                  <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-mono uppercase tracking-wider shadow-xs">
                    {cert.badge}
                  </span>
                )}
              </div>

              {/* Title, Issuer & Date */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-black group-hover:text-gray-700 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-gray-500">
                  <span className="font-semibold text-gray-700">{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Human Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {cert.description}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="text-[10px] font-mono text-gray-400 truncate pt-1">
                  ID: <span className="text-gray-600">{cert.credentialId}</span>
                </div>
              )}
            </div>

            {/* Action Footer with Image Preview Trigger */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedImage(cert.imageUrl)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors group/btn"
              >
                <span>VIEW CERTIFICATE</span>
                <span className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  ↗
                </span>
              </button>

              {/* Mini Preview Thumbnail Trigger */}
              <div
                onClick={() => setSelectedImage(cert.imageUrl)}
                className="relative w-10 h-7 border border-gray-300 bg-gray-100 overflow-hidden cursor-pointer shrink-0 hover:border-black transition-colors"
                title="Click to expand certificate"
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-contain p-0.5 grayscale hover:grayscale-0 transition-all"
                  sizes="40px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── PAGINATION BAR ─── */}
      {totalPages > 1 && (
        <div className="px-8 sm:px-12 lg:px-16 py-6 border-b border-gray-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            Showing Page <span className="font-bold text-black">{currentPage}</span> of{" "}
            <span className="font-bold text-black">{totalPages}</span> ({filteredCertificates.length} items)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
            >
              ← PREV
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-8 h-8 text-xs font-mono font-bold border transition-colors ${
                  currentPage === pageNum
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
            >
              NEXT →
            </button>
          </div>
        </div>
      )}

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
                  className="object-contain p-2"
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

