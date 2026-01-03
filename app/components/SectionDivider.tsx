interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative bg-white border-y border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-16 gap-4">
          {/* Left line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
          
          {/* Center accent */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-black"></div>
            <div className="w-12 h-px bg-black"></div>
            <div className="w-1 h-1 bg-black"></div>
          </div>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

