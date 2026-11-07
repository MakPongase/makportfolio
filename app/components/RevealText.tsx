"use client";

import { createElement, useEffect, useRef, type CSSProperties } from "react";

type Props = { as?: "h2" | "h3" | "p" | "div"; text: string; className?: string; id?: string };

export default function RevealText({as="p",text,className="",id}:Props) {
  const element = useRef<HTMLElement>(null);
  useEffect(() => {
    const node=element.current;
    if(!node)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
    if(reduced.matches||typeof IntersectionObserver==="undefined")return;
    let firstFrame=0,secondFrame=0;
    node.dataset.reveal="waiting";
    const show=()=>{firstFrame=requestAnimationFrame(()=>{secondFrame=requestAnimationFrame(()=>{node.dataset.reveal="visible";});});};
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){show();observer.disconnect();}
    },{threshold:0.12,rootMargin:"0px 0px -6% 0px"});
    observer.observe(node);
    const onPreference=()=>{node.dataset.reveal="visible";observer.disconnect();};
    reduced.addEventListener("change",onPreference);
    return()=>{observer.disconnect();cancelAnimationFrame(firstFrame);cancelAnimationFrame(secondFrame);reduced.removeEventListener("change",onPreference);};
  },[]);

  let word=0;
  return createElement(as,{ref:element,id,className:`reveal-text ${className}`.trim()},
    createElement("span",{className:"sr-only"},text.replaceAll("\n"," ")),
    createElement("span",{"aria-hidden":true,className:"reveal-visual"},text.split("\n").map((line,lineIndex)=>createElement("span",{className:"reveal-line",key:lineIndex},
      lineIndex>0?createElement("br"):null,
      line.split(" ").map((value,index)=>{
        const style={"--word-delay":`${Math.min(word++*0.035,0.34)}s`} as CSSProperties;
        return createElement("span",{className:"reveal-unit",key:index},createElement("span",{className:"reveal-word",style},value),index<line.split(" ").length-1?" ":null);
      })
    )))
  );
}
