"use client";

import { useEffect, useRef } from "react";
import { subscribeScene } from "../lib/scene-motion";

type Glyph = { element: HTMLSpanElement; x: number; y: number; opacity: number; blur: number; opacityVelocity: number; blurVelocity: number; base: number };
const lines = ["CURIOUS BY NATURE.", "A BUILDER", "BY PRACTICE."];

export default function SceneHeadline() {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const element = heading.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const glyphs: Glyph[] = Array.from(element.querySelectorAll<HTMLSpanElement>(".scene-glyph")).map((glyph, index) => ({element:glyph,x:0,y:0,opacity:0.05,blur:9,opacityVelocity:0,blurVelocity:0,base:index<7?0.66:1}));
    if(!reduced.matches)glyphs.forEach(glyph=>{glyph.element.style.opacity="0.05";glyph.element.style.filter="blur(9px)";});
    let entranceStart:number|null=null;
    let radius = 145;
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      radius = Math.max(90, Math.min(160, element.getBoundingClientRect().height * 0.5));
      glyphs.forEach(glyph => {
        const rect = glyph.element.getBoundingClientRect();
        glyph.x = rect.left + rect.width * 0.5;
        glyph.y = rect.top + window.scrollY + rect.height * 0.55;
      });
    };
    const reset = () => glyphs.forEach(glyph => {glyph.element.style.opacity="1";glyph.element.style.filter="none";glyph.opacity=1;glyph.blur=0;glyph.opacityVelocity=0;glyph.blurVelocity=0;});
    const resize = new ResizeObserver(measure);
    resize.observe(element);
    document.fonts.ready.then(measure);
    window.addEventListener("resize", measure, {passive:true});
    reduced.addEventListener("change", reset);
    measure();
    const unsubscribe = subscribeScene(frame => {
      if (reduced.matches) return;
      const delta = Math.max(0.001, Math.min(frame.delta, 0.04));
      if(entranceStart===null)entranceStart=frame.time;
      const entranceTime=frame.time-entranceStart;
      glyphs.forEach((glyph,index) => {
        const dx = frame.pointerX === null ? 10000 : glyph.x-frame.pointerX;
        const dy = frame.pointerY === null ? 10000 : glyph.y-frame.scrollTop-frame.pointerY;
        const proximity = Math.exp(-(dx*dx+dy*dy)/(radius*radius*0.55));
        const entered=entranceTime>0.12+index*0.026;
        const targetOpacity = entered?Math.max(0.32,glyph.base*(1-proximity*0.68)):0.05;
        const targetBlur = entered?proximity*4.3:9;
        glyph.opacityVelocity += ((targetOpacity-glyph.opacity)*90-glyph.opacityVelocity*19)*delta;
        glyph.blurVelocity += ((targetBlur-glyph.blur)*90-glyph.blurVelocity*19)*delta;
        glyph.opacity += glyph.opacityVelocity*delta;
        glyph.blur += glyph.blurVelocity*delta;
        glyph.element.style.opacity = glyph.opacity.toFixed(3);
        glyph.element.style.filter = glyph.blur>0.025 ? `blur(${glyph.blur.toFixed(2)}px)` : "none";
      });
    });
    return () => {disposed=true;unsubscribe();resize.disconnect();window.removeEventListener("resize",measure);reduced.removeEventListener("change",reset);};
  }, []);

  return <h1 ref={heading} id="hero-title" className="scene-headline" aria-label="Curious by nature. A builder by practice.">
    {lines.map(line => <span className="scene-line" key={line} aria-hidden="true">{Array.from(line).map((letter,index) => letter === " " ? <span className="scene-space" key={index}>{" "}</span> : <span className={`scene-glyph${letter==="." ? " scene-period" : ""}`} key={index}>{letter}</span>)}</span>)}
  </h1>;
}
