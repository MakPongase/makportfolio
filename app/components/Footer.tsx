"use client";

import Link from "next/link";

interface FooterProps {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  className?: string;
}

export default function Footer({
  name = "John Mark Pongase",
  email = "macmacpongs02@gmail.com",
  phone = "+63 962 943 8648",
  location = "San Rafael, Bulacan",
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Selected Work", href: "#about" },
    { label: "Philosophy", href: "#introduction" },
    { label: "Certificates", href: "#certificates" },
    { label: "Expertise", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub ↗", href: "https://github.com/MakPongase" },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/john-mark-pongase-7732482b1/" },
    { label: "Facebook ↗", href: "https://www.facebook.com/von.mak.2025" },
    { label: "Instagram ↗", href: "https://www.instagram.com/thatonerandommak/" },
  ];

  return (
    <footer className={`relative bg-black text-white border-t border-gray-800 ${className}`}>
      {/* Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:border-b border-gray-800">
        {/* Col 1: Identity */}
        <div className="p-8 sm:p-12 md:border-r border-gray-800 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
              Identity
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
              {name}
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 leading-relaxed">
              Full-Stack Software Engineer, Cloud Club Captain, and Architectural Thinker.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-600 uppercase">
            [SYS_VER: 2026.1]
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="p-8 sm:p-12 lg:border-r border-gray-800 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
              Directory
            </div>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-xs font-mono text-gray-600 uppercase">
            [INDEX]
          </div>
        </div>

        {/* Col 3: Direct Contact */}
        <div className="p-8 sm:p-12 md:border-r border-gray-800 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
              Coordinates
            </div>
            <div className="space-y-3 text-sm font-mono text-gray-300">
              <div>
                <span className="block text-[10px] text-gray-500 uppercase">Email</span>
                <a href={`mailto:${email}`} className="font-bold hover:text-white transition-colors break-all">
                  {email}
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 uppercase">Phone</span>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-bold hover:text-white transition-colors">
                  {phone}
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-gray-500 uppercase">Location</span>
                <span className="font-bold">{location}</span>
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-gray-600 uppercase">
            [PH_TIME]
          </div>
        </div>

        {/* Col 4: Network */}
        <div className="p-8 sm:p-12 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500">
              Network
            </div>
            <div className="space-y-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-xs font-mono text-gray-600 uppercase">
            [SOCIALS]
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-8 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest border-t border-gray-900">
        <p>
          © {currentYear} {name}. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-6">
          <span>ARCHITECTURAL GRID DESIGN</span>
          <span>•</span>
          <a href="#home" className="hover:text-white transition-colors">
            TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
