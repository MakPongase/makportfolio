"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  className?: string;
}

export default function Navbar({ 
  logo = "Mak Pongase", 
  navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  className = ""
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 ${className}`}>
      {/* Thin top accent line */}
      <div className="h-px bg-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-4 text-xl font-bold text-gray-900 tracking-tight transition-all duration-300"
          >
            <span className="relative">
              {logo}
              {/* Subtle underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-900 group-hover:w-full transition-all duration-500 ease-out"></span>
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                {/* Box frame lines - only visible on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 opacity-0 group-hover:opacity-100 group-hover:bg-gray-900 transition-all duration-300"></span>
                <span className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 opacity-0 group-hover:opacity-100 group-hover:bg-gray-900 transition-all duration-300"></span>
                <span className="absolute top-0 left-0 right-0 h-px bg-gray-200 opacity-0 group-hover:opacity-100 group-hover:bg-gray-900 transition-all duration-300"></span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500 ease-out"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  {/* Number badge */}
                  <span className="text-[10px] text-gray-400 font-mono group-hover:text-gray-600 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`w-full h-px bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-px bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-px bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="h-px bg-gray-100"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-4 py-4 text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <span className="text-xs text-gray-400 font-mono group-hover:text-gray-600 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-medium">{item.label}</span>
                
                {/* Arrow indicator */}
                <svg 
                  className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

