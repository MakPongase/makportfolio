"use client";

import Link from "next/link";
import Image from "next/image";

interface WorkItem {
  number: string;
  category: string;
  title: string;
  description: string;
  badges: string[];
  slug: string;
  imageUrl: string;
}

interface AboutProps {
  title?: string;
  subtitle?: string;
  works?: WorkItem[];
  className?: string;
}

export default function About({
  title = "SELECTED WORK",
  works = [
    {
      number: "01",
      category: "CLOUD LEADERSHIP",
      title: "AWS CLOUD CLUBS",
      description:
        "Elevated AWS Cloud Clubs – NU Baliwag into an independent entity. Reorganized operations, introduced new leadership, and drove national marketing campaigns across Philippine chapters.",
      badges: ["AWS CLOUD", "PROJECT MANAGEMENT", "LEADERSHIP"],
      slug: "aws-cloud-leadership",
      imageUrl: "/images/gallery/aws/student-community-day/scd-north-image-main.png",
    },
    {
      number: "02",
      category: "TELEMEDICINE & AI",
      title: "DIALYLINK",
      description:
        "A telemedicine and patient monitoring platform delivering hallucination-free AI triage by dynamically contextualizing real medical records for Nephrologists and patients.",
      badges: ["NEXT.JS", "TAILWIND CSS", "POSTGRESQL", "GEMINI AI"],
      slug: "dialylink",
      imageUrl: "/images/dialylink/Screenshot (877).png",
    },
    {
      number: "03",
      category: "AI & BUSINESS SYSTEMS",
      title: "CONSTRUCTION PMS",
      description:
        "An AI-enhanced Construction Project Management System featuring competitive supplier bidding, real-time BOQ pricing, generative AI report generation, and equipment location tracking.",
      badges: ["REACT", "NODE.JS", "POSTGRESQL", "FIREBASE"],
      slug: "construction-pms",
      imageUrl: "/images/gallery/fullstack/construction-pms/pms-image1.png",
    },
    {
      number: "04",
      category: "AI & BUSINESS SYSTEMS",
      title: "BIZWISE",
      description:
        "An AI-integrated service marketplace and business management platform for MSMEs. Automates booking-to-ledger workflows with predictive cash flow analytics and revenue insights.",
      badges: ["REACT NATIVE", "NODE.JS", "FIREBASE", "AI ANALYTICS"],
      slug: "bizwise",
      imageUrl: "/images/gallery/fullstack/bizwise/bizwise-logo.png",
    },
    {
      number: "05",
      category: "ORGANIZATIONAL LEADERSHIP",
      title: "LIT ENTERTAINMENT",
      description:
        "Spearheaded the rebranding of Literates Esports to Lit Entertainment. Orchestrated major collegiate gaming tournaments, fostering a vibrant community for competitive and casual gamers.",
      badges: ["EVENT MANAGEMENT", "PARTNERSHIPS", "ESPORTS"],
      slug: "lit-entertainment-leadership",
      imageUrl: "/images/esports-tournament/lit-ent-main-display.png",
    },
    {
      number: "06",
      category: "GAME DEVELOPMENT",
      title: "ECOTIDE ADVENTURES",
      description:
        "A 2D mobile game promoting UN Sustainable Development Goals 6 & 14. Players clean Philippine coastal waters and protect marine life across progressive difficulty tiers.",
      badges: ["GAME DEV", "2D ANIMATION", "MOBILE", "SDGS"],
      slug: "ecotide",
      imageUrl: "/images/gallery/ecotide/ecotide-image1.png",
    },
    {
      number: "07",
      category: "ROBLOX EXPERIENCE",
      title: "BULLDOGS TAMBAYAN",
      description:
        "An immersive 3D recreation of the NU Baliwag campus in Roblox Studio. Served as a high-impact digital twin and student hangout, attracting 3,000+ visitors in week one.",
      badges: ["ROBLOX STUDIO", "LUA", "3D MODELING"],
      slug: "bulldogs-tambayan",
      imageUrl: "/images/gallery/roblox/roblox-main-display.jpg",
    },
    {
      number: "08",
      category: "ROBLOX EXPERIENCE",
      title: "BLOX NATIONAL HIGHSCHOOL",
      description:
        "An authentic 3D digital recreation of a Philippine National High School campus in Roblox Studio. Designed as a nostalgic, semi-realistic immersion and social hangout ('tambayan') where students connect during and after online classes.",
      badges: ["ROBLOX STUDIO", "LUA", "3D MODELING", "DIGITAL TWIN"],
      slug: "blox-national-highschool",
      imageUrl: "/images/BloxNationalHighschool/Screenshot (1022).png",
    },
    {
      number: "09",
      category: "PUBLIC SPEAKING",
      title: "SPEAKER & EDUCATOR",
      description:
        "Delivered keynote talks and technical bootcamps at events like the Gordon College AWS gathering and WebCamp—empowering students with Web Dev, IDE tools, and Git/GitHub workflows.",
      badges: ["PUBLIC SPEAKING", "WORKSHOPS", "GIT/GITHUB", "WEB DEV"],
      slug: "speaker-educator",
      imageUrl: "/images/gallery/speakership/speakership-main-image.jpg",
    },
    {
      number: "10",
      category: "INTUITIVE GUIDANCE",
      title: "WISDOM OF CARDS",
      description:
        "Over 200 personalized tarot consultations, offering empathetic guidance and strategic clarity to help clients navigate life complexities and make confident decisions.",
      badges: ["CONSULTATION", "ACTIVE LISTENING", "GUIDANCE"],
      slug: "tarot-consultations",
      imageUrl: "/images/gallery/tarot-readings/tarot-reading-main-display.png",
    },
    {
      number: "11",
      category: "VISUAL DESIGN",
      title: "GRAPHIC DESIGN PORTFOLIO",
      description:
        "Brand identity packages, marketing materials for LessonPlanner, and mascot rebranding initiatives—a curated showcase of visual design across multiple industries.",
      badges: ["ILLUSTRATOR", "PHOTOSHOP", "BRAND IDENTITY", "SOCIAL MEDIA"],
      slug: "graphic-designing",
      imageUrl: "/images/Graphic Designing/meister_spud-potatobusiness/Meister Spud - POSTER 1.png",
    },
  ],
  className = "",
}: AboutProps) {
  return (
    <section id="about" className={`relative bg-white text-black border-b border-gray-200 ${className}`}>
      {/* Section Header Bar exactly matching Screenshot 2 */}
      <div className="border-b border-gray-200 px-8 sm:px-12 lg:px-16 py-10 flex items-center justify-between bg-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
          {title}
        </h2>
        <span className="text-xl sm:text-2xl font-mono font-bold text-gray-400">
          [02]
        </span>
      </div>

      {/* Stacked Project List Grid matching Screenshot 2 */}
      <div className="divide-y divide-gray-200">
        {works.map((work, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 transition-colors hover:bg-gray-50/40 group"
          >
            {/* Left Column: Details, Badges, and View Details Button */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 lg:border-r border-b lg:border-b-0 border-gray-200 flex flex-col justify-between gap-10">
              <div className="space-y-6">
                {/* Number / Category */}
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 flex items-center gap-3">
                  <span className="font-bold text-black">{work.number}</span>
                  <span>/</span>
                  <span>{work.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black group-hover:translate-x-1.5 transition-transform duration-300">
                  <Link href={`/projects/${work.slug}`} className="hover:text-gray-700 transition-colors">
                    {work.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {work.description}
                </p>
              </div>

              {/* Bottom Row: Tech Badges and View Details Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                {/* Boxed Badges */}
                <div className="flex flex-wrap gap-2">
                  {work.badges.map((badge, bIndex) => (
                    <span
                      key={bIndex}
                      className="px-3 py-1.5 bg-white border border-gray-300 text-[11px] font-mono font-medium text-gray-800 uppercase tracking-wider"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* VIEW DETAILS Link */}
                <Link
                  href={`/projects/${work.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-black hover:text-gray-600 transition-colors whitespace-nowrap self-start sm:self-auto group/btn"
                >
                  <span>VIEW DETAILS</span>
                  <span className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">
                    ↗
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Preview Mockup Card */}
            <div className="lg:col-span-5 bg-gray-50/60 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative min-h-[300px] lg:min-h-full overflow-hidden">
              <Link
                href={`/projects/${work.slug}`}
                className="block w-full h-full relative group/img cursor-pointer"
              >
                {/* Frame border */}
                <div className="relative w-full aspect-[16/10] bg-white border border-gray-300 shadow-xs overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300"></div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


