"use client";
import { useEffect, useRef } from "react";
import { createParticleField, type ParticleField } from "../lib/particle-field";

export default function ParticleHalo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ParticleField | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    renderer.current = createParticleField(canvasRef.current);
    return () => { renderer.current?.dispose(); renderer.current = null; };
  }, []);
  return <canvas ref={canvasRef} className="particle-halo" aria-hidden="true" />;
}
