"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function WorkCarousel({ children, heading }: { children: ReactNode; heading: ReactNode }) {
  const runway = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const driven = useRef(false);
  useEffect(() => {
    const node = track.current, host = runway.current, panel = stage.current;
    if (!node || !host || !panel) return;
    let frame = 0;
    const mode = window.matchMedia("(min-width: 760px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)");
    const sync = () => {
      if (driven.current) {
        const distance = Math.max(0, node.scrollWidth - node.clientWidth);
        const top = Number.parseFloat(getComputedStyle(panel).top);
        node.scrollLeft = Math.max(0, Math.min(distance, top - host.getBoundingClientRect().top));
      }

    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); };
    const measure = () => {
      driven.current = mode.matches;
      host.dataset.driven = String(driven.current);
      host.style.setProperty("--rail-distance", `${Math.max(0, node.scrollWidth - node.clientWidth)}px`);
      host.style.setProperty("--rail-stage-height", `${panel.offsetHeight}px`);
      schedule();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(node); resize.observe(panel);
    window.addEventListener("scroll", schedule, { passive: true });

    mode.addEventListener("change", measure);
    measure();
    return () => { resize.disconnect(); window.removeEventListener("scroll", schedule); mode.removeEventListener("change", measure); cancelAnimationFrame(frame); };
  }, []);

  const seek = (left: number) => {
    const node = track.current, host = runway.current, panel = stage.current;
    if (!node || !host || !panel) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    if (driven.current) {
      const top = Number.parseFloat(getComputedStyle(panel).top);
      const target = Math.min(node.scrollWidth - node.clientWidth, Math.max(0, left));
      window.scrollTo({ top: host.getBoundingClientRect().top + window.scrollY - top + target, behavior });
    } else node.scrollTo({ left, behavior });
  };
  const move = (direction: number) => {
    const node = track.current;
    if (!node) return;
    const cards = Array.from(node.children) as HTMLElement[];
    const origin = cards[0]?.offsetLeft ?? 0;
    const nearest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - origin - node.scrollLeft) < Math.abs(cards[best].offsetLeft - origin - node.scrollLeft) ? index : best, 0);
    const target = cards[Math.max(0, Math.min(cards.length - 1, nearest + direction))];
    if (target) seek(target.offsetLeft - origin);
  };
  return <div ref={runway} className="work-carousel-runway"><div ref={stage} className="work-carousel" role="region" aria-roledescription="carousel" aria-labelledby="work-title">
    <div className="work-rail-heading">{heading}</div>
    <div ref={track} id="work-slider" className="project-grid work-carousel-track" tabIndex={0} aria-label="Portfolio work" onFocusCapture={event => {
      if (!driven.current || event.target === event.currentTarget) return;
      const card = (event.target as HTMLElement).closest<HTMLElement>(".project-card");
      const node = track.current;
      if (card && node) {
        const bounds = node.getBoundingClientRect(), box = card.getBoundingClientRect();
        if (box.left < bounds.left || box.right > bounds.right) seek(card.offsetLeft - (node.firstElementChild as HTMLElement).offsetLeft);
      }
    }} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        event.preventDefault(); move(event.key === "Home" ? -100 : event.key === "End" ? 100 : event.key === "ArrowLeft" ? -1 : 1);
      }
    }}>{children}</div>
  </div></div>;
}
