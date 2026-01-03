"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  status: "completed" | "in-progress";
  category: string;
  image?: string;
}

interface CertificatesProps {
  title?: string;
  subtitle?: string;
  certificates?: Certificate[];
  className?: string;
}

export default function Certificates({
  title = "Certifications & Achievements",
  subtitle = "Continuous Learning Journey",
  certificates = [
    {
      title: "Google Project Management",
      issuer: "Google",
      date: "January 2025",
      credential: "KT6763G13JCZ",
      status: "completed",
      category: "Management",
      image: "/images/certificates/google-project-management.jpg",
    },
    {
      title: "Agile Project Management",
      issuer: "Google",
      date: "January 2025",
      credential: "Course Certificate",
      status: "completed",
      category: "Management",
      image: "/images/certificates/agile-project-management.jpg",
    },
    {
      title: "The Web Developer Bootcamp",
      issuer: "Colt Steele - Udemy",
      date: "April 2025",
      credential: "UC-5c0f61d6-a64f-4736-96da-2ac14f4efcbb",
      status: "completed",
      category: "Development",
      image: "/images/certificates/web-developer-bootcamp.jpg",
    },
    {
      title: "Google Data Analytics - Foundations",
      issuer: "Google",
      date: "March 2025",
      credential: "Course Certificate",
      status: "completed",
      category: "Data Analytics",
      image: "/images/certificates/data-analyst-foundational.jpg",
    },
    {
      title: "Google Data Analytics - Ask Questions",
      issuer: "Google",
      date: "March 2025",
      credential: "Course Certificate",
      status: "completed",
      category: "Data Analytics",
      image: "/images/certificates/data-analyst-ask-questions.jpg",
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "January 2025",
      credential: "Course Certificate",
      status: "completed",
      category: "Management",
      image: "/images/certificates/foundations.jpg",
    },
    {
      title: "EF SET English Certificate",
      issuer: "EF Standard English Test",
      date: "2024",
      credential: "English Proficiency",
      status: "completed",
      category: "Language",
      image: "/images/certificates/ef-set-certificate.jpg",
    },
    {
      title: "Meta Social Media Marketing",
      issuer: "Meta",
      date: "Expected: January 2026",
      status: "in-progress",
      category: "Marketing",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Expected: January 2026",
      status: "in-progress",
      category: "Cloud",
    },
  ],
  className = "",
}: CertificatesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // Show 6 certificates per page

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const categories = ["all", ...Array.from(new Set(certificates.map((cert) => cert.category)))];

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCertificates = filteredCertificates.slice(startIndex, endIndex);

  return (
    <>
      <section
        id="certificates"
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

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black tracking-tight">
                {title}
              </h2>

              <div className="flex justify-center">
                <div className="w-24 h-[2px] bg-black"></div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-black hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCertificates.map((cert, index) => {
                const actualIndex = filteredCertificates.indexOf(cert);
                return (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedCert(actualIndex)}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black transition-all duration-300 group-hover:w-4 group-hover:h-4 z-10"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black transition-all duration-300 group-hover:w-4 group-hover:h-4 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black transition-all duration-300 group-hover:w-4 group-hover:h-4 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black transition-all duration-300 group-hover:w-4 group-hover:h-4 z-10"></div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                      {cert.category}
                    </span>
                    {cert.status === "in-progress" && (
                      <span className="px-2 py-1 bg-black text-white text-[10px] uppercase tracking-wider font-medium">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="w-12 h-px bg-black mb-4"></div>

                  {/* Issuer */}
                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>

                  {/* Date */}
                  <p className="text-xs text-gray-500 mb-4">{cert.date}</p>

                  {/* Credential ID */}
                  {cert.credential && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                        Credential ID
                      </p>
                      <p className="text-xs font-mono text-gray-700 break-all">
                        {cert.credential}
                      </p>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to preview
                  </div>
                </div>
              );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 pt-8">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-3 bg-black text-white border border-black text-sm font-medium uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 border border-black text-sm font-medium ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-3 bg-black text-white border border-black text-sm font-medium uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}

            {/* Showing X of Y */}
            <div className="text-center pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredCertificates.length)} of{" "}
                {filteredCertificates.length} Certificates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview Overlay - Rendered via Portal */}
      {selectedCert !== null && typeof window !== "undefined" &&
        createPortal(
          <div 
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            {/* Certificate Preview Window - Standard Certificate Size (11:8.5 ratio) */}
            <div 
              className="relative bg-white shadow-2xl border-2 border-black w-[1100px] h-[850px] max-w-[95vw] max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black z-20"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black z-20"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black z-20"></div>

              {/* Window Header Bar */}
              <div className="relative flex items-center justify-between px-8 py-5 bg-black text-white">
                {/* Decorative line on top edge */}
                <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white"></div>
                    <div className="w-12 h-px bg-white"></div>
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-medium">
                    Certificate Preview
                  </h3>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="group relative px-6 py-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 text-xs uppercase tracking-wider"
                  aria-label="Close preview"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-px bg-white/50 group-hover:bg-black"></span>
                  <span className="absolute right-0 top-0 bottom-0 w-px bg-white/50 group-hover:bg-black"></span>
                  Close
                </button>

                {/* Decorative line on bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
              </div>

              {/* Certificate Info Bar */}
              <div className="relative px-8 py-4 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-black tracking-tight">
                      {filteredCertificates[selectedCert]?.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{filteredCertificates[selectedCert]?.issuer}</span>
                      <span className="w-1 h-1 bg-gray-400"></span>
                      <span>{filteredCertificates[selectedCert]?.date}</span>
                    </div>
                  </div>
                  {filteredCertificates[selectedCert]?.status === "in-progress" && (
                    <div className="relative px-4 py-2 bg-black text-white text-xs uppercase tracking-[0.2em] font-medium">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
                      In Progress
                    </div>
                  )}
                </div>
              </div>

              {/* Certificate Image Content */}
              <div className="relative flex-1 flex items-center justify-center bg-white p-12 overflow-auto">
                {/* Decorative corner lines inside */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gray-200"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-200"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gray-200"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gray-200"></div>

                {filteredCertificates[selectedCert]?.image ? (
                  <img
                    src={filteredCertificates[selectedCert].image}
                    alt={filteredCertificates[selectedCert].title}
                    className="max-w-full max-h-full object-contain shadow-lg"
                  />
                ) : (
                  <div className="text-center space-y-6">
                    <div className="relative inline-block">
                      <svg className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-px bg-gray-300"></div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                        Certificate Image
                      </p>
                      <p className="text-xs text-gray-500">
                        Preview not available
                      </p>
                    </div>
                    {filteredCertificates[selectedCert]?.credential && (
                      <div className="pt-6 mt-6 border-t border-gray-200">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                          Credential ID
                        </p>
                        <p className="text-xs font-mono text-gray-700">
                          {filteredCertificates[selectedCert]?.credential}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Window Footer */}
              <div className="relative px-8 py-4 bg-black text-white border-t-2 border-black">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-white"></span>
                      <span className="uppercase tracking-[0.2em] text-white/70">
                        {filteredCertificates[selectedCert]?.category}
                      </span>
                    </div>
                    {filteredCertificates[selectedCert]?.credential && (
                      <>
                        <span className="w-px h-3 bg-white/20"></span>
                        <span className="font-mono text-white/70">
                          {filteredCertificates[selectedCert]?.credential}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-wider">
                    <span>Press</span>
                    <kbd className="px-2 py-1 bg-white/10 border border-white/20">ESC</kbd>
                    <span>to close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </>
  );
}

