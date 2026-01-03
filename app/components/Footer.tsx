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
  name = "Mak Pongase",
  email = "macmacpongs02@gmail.com",
  phone = "+63 962 943 8648",
  location = "San Rafael, Bulacan",
  className = "",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/MakPongase" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-mark-pongase-7732482b1/" },
    { label: "Facebook", href: "https://www.facebook.com/von.mak.2025" },
    { label: "Instagram", href: "https://www.instagram.com/thatonerandommak/" },
  ];

  return (
    <footer className={`relative bg-black text-white ${className}`}>
      {/* Decorative top line */}
      <div className="h-px bg-white/20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase tracking-[0.15em]">
                {name}
              </h3>
              <div className="w-12 h-px bg-white"></div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Full-Stack Developer, Cloud Leader, and Project Manager specializing
              in building scalable web applications and leading tech communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                Quick Links
              </h3>
              <div className="w-12 h-px bg-white/50"></div>
            </div>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                Contact
              </h3>
              <div className="w-12 h-px bg-white/50"></div>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href={`mailto:${email}`}
                className="block hover:text-white transition-colors"
              >
                {email}
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block hover:text-white transition-colors"
              >
                {phone}
              </a>
              <p>{location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
                Follow Me
              </h3>
              <div className="w-12 h-px bg-white/50"></div>
            </div>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p className="uppercase tracking-wider">
              © {currentYear} {name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                Privacy Policy
              </a>
              <span className="w-px h-3 bg-white/20"></span>
              <a
                href="#"
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="h-px bg-white/20"></div>
    </footer>
  );
}


