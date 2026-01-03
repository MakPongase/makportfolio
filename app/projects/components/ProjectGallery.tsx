"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video bg-gray-100 cursor-pointer group overflow-hidden"
            onClick={() => setSelectedImage(index)}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-300 z-10 group-hover:border-black transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-300 z-10 group-hover:border-black transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-300 z-10 group-hover:border-black transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-300 z-10 group-hover:border-black transition-colors"></div>

            {/* Gallery Image */}
            <img
              src={image}
              alt={`${projectTitle} - Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            
            {/* Click hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black text-white px-3 py-1 text-xs uppercase tracking-wider">
                View Full
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage !== null && typeof window !== "undefined" &&
        createPortal(
          <div 
            className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            {/* Image Preview Window */}
            <div 
              className="relative bg-white shadow-2xl border-2 border-black w-[95vw] h-[95vh] max-w-[1600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black z-20"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-black z-20"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-black z-20"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black z-20"></div>

              {/* Window Header Bar */}
              <div className="relative flex items-center justify-between px-6 py-3 bg-black text-white">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white"></div>
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-medium">
                    Image Preview
                  </h3>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="group relative px-4 py-1.5 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 text-[10px] uppercase tracking-wider"
                  aria-label="Close preview"
                >
                  Close
                </button>
              </div>

              {/* Image Info Bar */}
              <div className="relative px-6 py-2 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">
                    <span>Image {selectedImage + 1} of {images.length}</span>
                  </div>
                  
                  {/* Navigation arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
                      }}
                      className="px-3 py-1.5 bg-black border border-black text-white text-xs uppercase tracking-wider"
                      disabled={images.length <= 1}
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
                      }}
                      className="px-3 py-1.5 bg-black border border-black text-white text-xs uppercase tracking-wider"
                      disabled={images.length <= 1}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative flex-1 flex items-center justify-center bg-white p-4 overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={`${projectTitle} - Image ${selectedImage + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Window Footer */}
              <div className="relative px-6 py-2 bg-black text-white">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="uppercase tracking-[0.15em] text-white/70">
                    {projectTitle}
                  </span>
                  <div className="flex items-center gap-2 text-white/50 uppercase tracking-wider">
                    <span>Press</span>
                    <kbd className="px-1.5 py-0.5 bg-white/10 border border-white/20 text-[9px]">ESC</kbd>
                    <span>to close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </>
  );
}

