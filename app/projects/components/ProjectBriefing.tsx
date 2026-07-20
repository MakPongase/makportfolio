interface ProjectBriefingProps {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  achievements: string[];
}

export default function ProjectBriefing({
  overview,
  challenge,
  solution,
  results,
  achievements,
}: ProjectBriefingProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Executive Summary & Highlights */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              EXECUTIVE SUMMARY
            </h3>
            <p className="text-lg sm:text-xl text-black leading-relaxed">
              {overview}
            </p>
          </div>

          {achievements && achievements.length > 0 && (
            <div>
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                KEY IMPACT & MILESTONES
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4 text-sm text-gray-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Clean Staggered Narrative */}
        <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-gray-200 space-y-12">
          
          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-3">
              <span className="text-black">[01]</span> THE CHALLENGE
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {challenge}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-3">
              <span className="text-black">[02]</span> THE SOLUTION
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {solution}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-3">
              <span className="text-black">[03]</span> THE RESULTS
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {results}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
