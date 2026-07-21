"use client";

import ProjectGallery from "./ProjectGallery";

interface ProjectData {
  title: string;
  category: string;
  overview: string;
  techStack: string[];
  gallery: string[];
  additionalGalleries?: {
    title: string;
    description?: string;
    images: string[];
  }[];
}

interface VisualGalleryLayoutProps {
  project: ProjectData;
}

export default function VisualGalleryLayout({ project }: VisualGalleryLayoutProps) {
  return (
    <div className="max-w-[1600px] mx-auto pb-16 sm:pb-24">
      {/* Visual Header */}
      <div className="px-4 sm:px-12 py-8 sm:py-16 border-b border-gray-200">
        <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-px bg-black"></span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-black">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-black leading-none">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mt-2 sm:mt-4">
            {project.overview}
          </p>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-8">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-black text-[10px] sm:text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Gallery Section */}
      <div className="px-4 sm:px-12 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black">
              Core Brand Assets
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Primary visual identity and posters.</p>
          </div>
          <span className="text-xs font-mono font-bold text-gray-400">
            [{project.gallery.length} ASSETS]
          </span>
        </div>
        <ProjectGallery images={project.gallery} projectTitle={project.title} />
      </div>

      {/* Additional Galleries */}
      {project.additionalGalleries?.map((gallery, idx) => (
        <div key={idx} className="px-4 sm:px-12 py-10 sm:py-16 border-t border-gray-200 bg-gray-50/50">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-black">
                {gallery.title}
              </h2>
              {gallery.description && (
                <p className="text-gray-600 mt-2 max-w-3xl">{gallery.description}</p>
              )}
            </div>
            <span className="text-xs font-mono font-bold text-gray-400">
              [{gallery.images.length} ASSETS]
            </span>
          </div>
          <ProjectGallery images={gallery.images} projectTitle={gallery.title} />
        </div>
      ))}
    </div>
  );
}
