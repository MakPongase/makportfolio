"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  className?: string;
}

export default function Navbar({
  logo = "MAK PONGASE",
  navItems = [
    { label: "Home", href: "#home", icon: "home" },
    { label: "Selected Work", href: "#about", icon: "work" },
    { label: "Certificates", href: "#certificates", icon: "cert" },
    { label: "Skills & Tools", href: "#skills", icon: "skills" },
    { label: "Contact", href: "#contact", icon: "contact" },
  ],
  className = "",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to render clean SVG icons
  const renderIcon = (type: string) => {
    switch (type) {
      case "home":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case "work":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "cert":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case "skills":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "contact":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* DESKTOP FIXED LEFT VERTICAL SIDEBAR STRIP */}
      <aside className={`hidden md:flex flex-col justify-between items-center fixed top-0 left-0 bottom-0 w-20 border-r border-gray-800 bg-black text-white z-50 py-8 select-none ${className}`}>
        {/* Top: Vertical Rotated Logo */}
        <Link
          href="#home"
          className="text-xs font-bold tracking-[0.25em] uppercase text-white hover:text-gray-400 transition-colors py-4"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {logo}
        </Link>

        {/* Center: Navigation Icon Links */}
        <div className="flex flex-col items-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative w-12 h-12 flex items-center justify-center border border-transparent hover:border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900 transition-all duration-300"
              aria-label={item.label}
            >
              {renderIcon(item.icon)}

              {/* Tooltip on Hover */}
              <span className="absolute left-full ml-4 px-3 py-2 bg-white text-black border border-gray-200 text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                <span className="text-gray-500 mr-2">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom: Vertical Rotated EST. 2024 */}
        <div
          className="text-[10px] font-mono tracking-widest text-gray-500 uppercase py-4"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          EST. 2024
        </div>
      </aside>

      {/* MOBILE TOP sticky header bar */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 h-16 border-b border-gray-800 bg-black/95 backdrop-blur-md z-50 px-6 flex items-center justify-between text-white ${className}`}>
        {/* Logo */}
        <Link href="/" className="text-base font-bold tracking-[0.15em] uppercase text-white">
          {logo}
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-px bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`w-6 h-px bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-gray-800 shadow-2xl py-6 px-6 space-y-1 animate-in slide-in-from-top duration-300">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 py-3 border-b border-gray-900 last:border-none text-white hover:text-gray-400 transition-colors"
              >
                <span className="text-xs font-mono text-gray-500">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}


