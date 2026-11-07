"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className={`portfolio-nav${scrolled ? " portfolio-nav--scrolled" : ""}`}>
      <div className="portfolio-nav-inner site-width">
      <Link href="/" aria-label="Mak Pongase home" className="wordmark">mak</Link>
      <nav aria-label="Main navigation" className="desktop-navigation">
        <a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a>
      </nav>
      <button ref={menuButton} className="mobile-menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>{open ? "Close −" : "Menu +"}</button>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } }}>
        {["Work", "Experience", "About", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}<span aria-hidden="true">↗</span></a>)}
      </nav>}
      </div>
    </header>
  );
}
