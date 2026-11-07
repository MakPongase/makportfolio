"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = selected !== null;
  const isVideo = (url: string) => /\.(mp4|webm)$/i.test(url);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const previous = () => setSelected((value) => value === null ? null : (value + images.length - 1) % images.length);
  const next = () => setSelected((value) => value === null ? null : (value + 1) % images.length);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => <button type="button" className="gallery-trigger" key={`${image}-${index}`} onClick={() => setSelected(index)} aria-label={`Enlarge ${projectTitle}, ${isVideo(image) ? "video" : "image"} ${index + 1}`}>
          {isVideo(image) ? <video src={image} muted preload="metadata" playsInline aria-label={`${projectTitle}, video ${index + 1}`} /> : <img src={image} alt={`${projectTitle}, screen ${index + 1}`} loading="lazy" />}
          <span className="gallery-caption"><span>{isVideo(image) ? "Video" : "Screen"} {String(index + 1).padStart(2, "0")}</span><span>View full {isVideo(image) ? "video" : "image"} ↗</span></span>
        </button>)}
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-labelledby="gallery-dialog-title" onClose={() => setSelected(null)} onCancel={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
        if (event.key === "ArrowRight") { event.preventDefault(); next(); }
      }}>
        <div className="gallery-dialog-top"><h2 id="gallery-dialog-title">{projectTitle}</h2><button type="button" onClick={() => setSelected(null)} autoFocus>Close ×</button></div>
        {selected !== null && (isVideo(images[selected]) ? <video key={images[selected]} src={images[selected]} controls autoPlay /> : <img src={images[selected]} alt={`${projectTitle}, screen ${selected + 1}`} />)}
        <div className="gallery-dialog-bottom"><p aria-live="polite">{selected === null ? 0 : selected + 1} of {images.length}</p><div style={{ display: "flex", gap: 10 }}><button type="button" onClick={previous} disabled={images.length < 2}>← Previous</button><button type="button" onClick={next} disabled={images.length < 2}>Next →</button></div></div>
      </dialog>
    </>
  );
}
