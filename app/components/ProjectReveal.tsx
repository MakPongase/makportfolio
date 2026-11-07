"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ProjectReveal({ children, className = "project-grid" }: { children: ReactNode; className?: string }) {
  const grid = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = Array.from(grid.current?.children ?? []) as HTMLElement[];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.surface = "visible";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -3% 0px" });
    cards.forEach((card, index) => {
      card.style.setProperty("--surface-delay", `${index * 0.09}s`);
      card.dataset.surface = "waiting";
      observer.observe(card);
    });
    const showAll = () => {
      cards.forEach(card => { card.dataset.surface = "visible"; });
      observer.disconnect();
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
    };
  }, []);
  return <div className={className} ref={grid}>{children}</div>;
}
