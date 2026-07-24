"use client";

export interface PositionItem {
  company: string;
  role: string;
  period: string;
  badge?: string;
  summary?: string;
  points: string[];
}

interface ExperienceProps {
  title?: string;
  positions?: PositionItem[];
  className?: string;
}

const defaultPositions: PositionItem[] = [
  {
    company: "Symph",
    role: "Marketing Automation Intern",
    period: "Feb 2026 – May 2026",
    badge: "INTERNSHIP",
    points: [
      "Designed and automated marketing pipelines covering lead capture, validation, scoring, routing, and lifecycle progression.",
      "Partnered with marketing, sales, and technical teams to streamline pipeline workflows, minimize manual operations, and improve campaign execution efficiency.",
    ],
  },
  {
    company: "AWS Cloud Clubs Philippines",
    role: "Director for Marketing",
    period: "Dec 2025 – May 2026",
    badge: "NATIONAL LEADERSHIP",
    points: [
      "Led merchandise initiatives and national marketing efforts for AWS Cloud Clubs Philippines, ensuring consistent branding and student-focused designs across chapters.",
      "Supervised content, creatives, and campaign strategies for nationwide events, ensuring clear messaging and cohesive promotional materials.",
    ],
  },
  {
    company: "Solution Resources",
    role: "Full Stack Developer Intern",
    period: "Nov 2025 – Feb 2026",
    badge: "INTERNSHIP",
    points: [
      "Collaborated closely with backend developers to integrate APIs, troubleshoot issues, and deliver seamless end-to-end functionality.",
      "Participated in Agile/Scrum workflows, attending stand-ups, sprint planning, and retrospectives to ensure timely feature delivery.",
    ],
  },
  {
    company: "AWS Cloud Clubs – NU Baliwag",
    role: "Captain – Diamond Badge",
    period: "Feb 2025 – Feb 2026",
    badge: "CHAPTER CAPTAIN",
    summary:
      "As the Captain of an AWS-focused organization, I mentor members and drive technology education.",
    points: [
      "Designed and led workshops in collaboration with professors, ensuring students gained relevant skills and knowledge attracting 40+ attendees per workshop.",
      "Designed and implemented beginner-friendly learning modules and engagement strategies to effectively introduce non-technical individuals to technology and digital tools.",
    ],
  },
  {
    company: "Lit Entertainment (Formerly Literates Esports) – NU Baliwag",
    role: "Chairman",
    period: "Apr 2024 – Feb 2025",
    badge: "EXECUTIVE LEADERSHIP",
    summary:
      "Managed a growing organization from its roots as an esports club into a broader entertainment group.",
    points: [
      "Organized and facilitated the esports tournament during the university week with 60+ participants, dividing it into three game categories.",
      "Collaborated with skilled individuals to establish a strong and effective team for the newly formed organization.",
    ],
  },
  {
    company: "Google Developer Groups on Campus – NU Baliwag",
    role: "Chief Creatives Officer (CCO)",
    period: "Jul 2023 – Nov 2023",
    badge: "CREATIVE LEADERSHIP",
    summary:
      "As CCO, I oversaw all publication materials and branding efforts for GDGOC NU Baliwag.",
    points: [
      "Successfully planned and organized a proposal to update the organization's mascots. The updated mascots became part of the organization's merchandising, helping to distinguish it from other groups.",
    ],
  },
  {
    company: "Wisdom of Cards",
    role: "Independent Tarot Consultant",
    period: "Freelance",
    badge: "FREELANCE",
    points: [
      "Delivered 200+ personalized tarot consultations, helping clients make informed and mindful decisions.",
    ],
  },
];

export default function Experience({
  title = "EXPERIENCE & POSITIONS",
  positions = defaultPositions,
  className = "",
}: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`relative bg-white text-black border-b border-gray-200 ${className}`}
    >
      {/* Section Header Bar */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black uppercase">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400 self-start sm:self-auto">
          [01.5]
        </span>
      </div>

      {/* Experience List Grid */}
      <div className="divide-y divide-gray-200">
        {positions.map((item, index) => (
          <div
            key={index}
            className="p-8 sm:p-12 lg:p-16 hover:bg-gray-50/60 transition-colors group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              {/* Left Column: Role & Organization */}
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">
                    {item.company}
                  </span>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-mono uppercase tracking-wider shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black group-hover:translate-x-1 transition-transform duration-300">
                  {item.role}
                </h3>
              </div>

              {/* Right Column: Date / Period */}
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-black bg-gray-100 border border-gray-300 px-4 py-2 self-start shrink-0">
                {item.period}
              </div>
            </div>

            {/* Optional Summary */}
            {item.summary && (
              <p className="text-sm sm:text-base text-gray-700 font-medium italic mb-4 max-w-3xl">
                {item.summary}
              </p>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2 max-w-4xl">
              {item.points.map((pt, pIdx) => (
                <li
                  key={pIdx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 leading-relaxed"
                >
                  <span className="text-black font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
