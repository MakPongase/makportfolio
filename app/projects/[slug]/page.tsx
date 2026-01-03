import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "../components/ProjectGallery";

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  achievements: string[];
  gallery: string[];
  marketingGallery?: string[];
  additionalGalleries?: {
    title: string;
    description?: string;
    images: string[];
  }[];
  link?: string;
  linkLabel?: string;
}

// Project data
const projects: Record<string, ProjectData> = {
  "aws-cloud-leadership": {
    slug: "aws-cloud-leadership",
    title: "AWS Cloud Leadership",
    category: "Community Building & Marketing",
    year: "2024 - Present",
    role: "Captain of AWS Cloud Clubs - NU Baliwag",
    overview: "As the newly appointed Captain of AWS Cloud Clubs - NU Baliwag, I transformed the organization from a sub-organization into an independent entity. Reorganized the entire system, implemented new organizational structures, introduced a new set of officers, and spearheaded national marketing efforts for AWS Cloud Clubs Philippines. Successfully grew the club to 100+ memberships in the first term while ensuring consistent branding and student-focused designs across all chapters.",
    challenge: "As a newly appointed Captain, I inherited an AWS Cloud Club that operated as a sub-organization with limited autonomy and reach. The club needed a complete restructuring - from its organizational framework and leadership team to its identity as an independent organization. Additionally, it required effective marketing strategies to engage students nationwide and establish a strong presence in cloud computing education.",
    solution: "Executed a comprehensive organizational transformation by restructuring the club's framework, introducing a new set of officers with defined roles, and establishing AWS Cloud Clubs - NU Baliwag as an independent organization. Developed marketing campaigns, supervised content creation, organized the AWS Cloud Club Student Community Day - North 2025, led Amazon Q workshops, and managed the AWSCC NU Baliwag booth to attract and engage students.",
    results: "Successfully transformed AWS Cloud Clubs - NU Baliwag into an independent organization with 100+ memberships gained in the first term. Organized a one-day tech conference that inspired the creation of new AWS learning clubs and spread awareness beyond NU Baliwag, establishing the club as a recognized leader in cloud education.",
    techStack: ["Project Management", "Marketing Strategy", "Event Planning", "Branding", "Community Management", "Cloud Computing"],
    achievements: [
      "Captain of AWS Cloud Clubs - NU Baliwag (2024 - Present)",
      "Transformed club from sub-organization to independent organization",
      "Reorganized system and implemented new organizational structure",
      "Introduced new set of officers with defined roles and responsibilities",
      "Gained 100+ memberships in first term",
      "Led national marketing for AWS Cloud Clubs Philippines",
      "Organized AWS Cloud Club Student Community Day - North 2025",
      "Led Amazon Q Workshop introducing generative AI to students",
      "Managed AWSCC NU Baliwag booth at university events",
      "Inspired creation of new AWS learning clubs beyond NU Baliwag",
      "Established consistent branding across AWS chapters nationwide",
    ],
    gallery: [
      "/images/gallery/aws/awscc-nub-main-logo.jpg",
      "/images/gallery/aws/amazon-q/amazon-q-main-logo.png",
      "/images/gallery/aws/booth/booth-main-logo.png",
      "/images/gallery/aws/student-community-day/scd-north-image-main.png",
    ],
    additionalGalleries: [
      {
        title: "Amazon Q Workshop",
        description: "Led hands-on workshop introducing students to Amazon Q, AWS's generative AI-powered assistant. Demonstrated practical applications and use cases for students to leverage AI in their learning and development workflows.",
        images: [
          "/images/gallery/aws/amazon-q/amazon-q-main-logo.png",
          "/images/gallery/aws/amazon-q/amazon-q-image1.png",
          "/images/gallery/aws/amazon-q/amazon-q-image2.png",
          "/images/gallery/aws/amazon-q/amazon-q-image3.png",
        ],
      },
      {
        title: "AWSCC NU Baliwag Booth",
        description: "Organized and managed the AWS Cloud Clubs NU Baliwag booth, engaging with students, promoting cloud computing education, and building awareness for AWS technologies and programs on campus.",
        images: [
          "/images/gallery/aws/booth/booth-main-logo.png",
          "/images/gallery/aws/booth/booth-image1.jpeg",
          "/images/gallery/aws/booth/booth-image2.jpeg",
          "/images/gallery/aws/booth/booth-image3.png",
        ],
      },
      {
        title: "AWS Student Community Day - North 2025",
        description: "Spearheaded the planning and execution of AWS Student Community Day - North 2025, a one-day tech conference that brought together students from multiple universities. Featured talks and networking opportunities that inspired the creation of new AWS learning clubs.",
        images: [
          "/images/gallery/aws/student-community-day/scd-north-image-main.png",
          "/images/gallery/aws/student-community-day/scd-north-image1.png",
          "/images/gallery/aws/student-community-day/scd-north-image2.JPG",
          "/images/gallery/aws/student-community-day/scd-north-image3.jpeg",
        ],
      },
    ],
  },
  "lit-entertainment-leadership": {
    slug: "lit-entertainment-leadership",
    title: "Lit Entertainment Leadership",
    category: "Organizational Leadership & Event Management",
    year: "2024 - Present",
    role: "Chairman",
    overview: "As Chairman of Lit Entertainment, I led the rebranding of Literates Esports into Lit Entertainment, transforming it into a comprehensive esports and entertainment-focused student organization at NU Baliwag. Redefined the organization's identity, recruited new members, and executed large-scale gaming tournaments and entertainment events that engaged hundreds of students.",
    challenge: "The organization needed a fresh identity and stronger presence on campus. As the newly appointed Chairman, I had to rebrand Literates Esports, establish credibility under the new name, recruit dedicated members, secure resources, and create impactful events that would establish Lit Entertainment as a premier esports and entertainment organization.",
    solution: "Successfully rebranded the organization from Literates Esports to Lit Entertainment, developed a comprehensive organizational structure, recruited passionate volunteers, established partnerships with other organizations (NU Technocrats), and executed a series of successful tournaments ranging from competitive esports (MLBB, Valorant, CODM) to innovative casual gaming events (Roblox DTI), demonstrating versatility and commitment to inclusive gaming culture.",
    results: "Successfully rebranded and established Lit Entertainment as a recognized organization at NU Baliwag. Executed 3 major tournament series with 150+ total participants, built strong inter-organization partnerships, and created an inclusive gaming community that welcomes both competitive and casual gamers.",
    techStack: ["Event Planning", "Team Leadership", "Tournament Organization", "Partnership Development", "Community Building", "Marketing"],
    achievements: [
      "Chairman of Lit Entertainment (2024 - Present)",
      "Successfully rebranded Literates Esports to Lit Entertainment",
      "Redefined organization's identity and expanded mission",
      "Executed 3 major tournament series (Kasadyahan, Overclocked, DTI)",
      "Engaged 150+ student participants across all events",
      "Built partnership with NU Technocrats for Overclocked Tournament",
      "Successfully managed both in-person and online tournament formats",
      "Created inclusive community for competitive and casual gamers",
      "Innovative Roblox casual gaming tournament reaching new audiences",
    ],
    gallery: [
      "/images/esports-tournament/lit-ent-main-display.png",
      "/images/gallery/esports/esports-1.jpg",
      "/images/gallery/esports/esports-2.jpg",
      "/images/gallery/esports/esports-3.jpg",
      "/images/gallery/esports/esports-4.jpg",
    ],
    additionalGalleries: [
      {
        title: "Kasadyahan 2024 Tournament",
        description: "University Week in-person esports competition featuring MLBB, Valorant, and CODM with 80+ participants. Our flagship event during the university's biggest celebration.",
        images: [
          "/images/esports-tournament/kasadyahan/kasadyahan-main-logo.jpg",
          "/images/esports-tournament/kasadyahan/kasadyahan-image-1.jpg",
          "/images/esports-tournament/kasadyahan/kasadyahan-image-2.jpg",
          "/images/esports-tournament/kasadyahan/kasadyahan-image-3.jpg",
        ],
      },
      {
        title: "Overclocked Tournament (Online)",
        description: "Online inter-organization collaboration between Lit Entertainment and NU Technocrats. Successfully brought together gaming communities from different organizations.",
        images: [
          "/images/esports-tournament/overclocked/overclocked-main-logo.jpg",
          "/images/esports-tournament/overclocked/overclocked-image-1.png",
          "/images/esports-tournament/overclocked/overclocked-image-2.png",
        ],
      },
      {
        title: "Dress to Impress Tournament (Online)",
        description: "Innovative online Roblox casual gaming competition reaching beyond traditional competitive esports. A creative fashion-focused event that welcomed a diverse audience.",
        images: [
          "/images/esports-tournament/dress-to-impress/dti-main-logo.png",
          "/images/esports-tournament/dress-to-impress/dti-image-1.png",
          "/images/esports-tournament/dress-to-impress/dti-image-2.png",
          "/images/esports-tournament/dress-to-impress/dti-image-3.png",
        ],
      },
    ],
  },
  "bulldogs-tambayan": {
    slug: "bulldogs-tambayan",
    title: "Bulldogs of the North Tambayan",
    category: "Game Development",
    year: "2024",
    role: "Game Developer & 3D Modeler",
    overview: "A strategic marketing initiative disguised as a virtual hangout space. I developed a detailed Roblox recreation of NU Baliwag campus by taking real-life photographs and studying the architecture through Google Maps, creating an immersive environment that organically promoted our organization.",
    challenge: "Our organization needed significant awareness and marketing to boost our reputation among students. Traditional marketing methods weren't reaching enough people or creating the impact we needed to showcase our ability to deliver quality experiences.",
    solution: "I decided to create a high-quality virtual environment of our campus in Roblox. By personally photographing the school and studying its architecture via Google Maps, I meticulously recreated the campus buildings and SM Baliwag exterior. This demonstrated our organization's commitment to quality while providing students with an engaging virtual space.",
    results: "The quality of the environment spoke for itself, significantly boosting our organization's reputation and proving our capability to deliver exceptional experiences. Students could explore a detailed digital twin of their campus, creating a unique connection between our organization and the university community.",
    techStack: ["Roblox Studio", "Lua", "3D Modeling", "Photography", "Google Maps", "Game Design"],
    achievements: [
      "Successfully boosted organization reputation",
      "Detailed campus recreation from real-life photography",
      "Meticulously studied architecture via Google Maps",
      "Created immersive virtual environment for students",
      "Demonstrated organization's quality standards",
      "Built engaging community hangout space",
    ],
    link: "https://www.roblox.com/games/109560373081315/Bulldogs-of-the-North-Tambayan",
    linkLabel: "Play on Roblox",
    gallery: [
      "/images/gallery/roblox/roblox-main-display.jpg",
      "/images/gallery/roblox/roblox-image1.png",
      "/images/gallery/roblox/roblox-image2.png",
      "/images/gallery/roblox/roblox-image3.png",
      "/images/gallery/roblox/roblox-image4.png",
      "/images/gallery/roblox/roblox-image5.png",
      "/images/gallery/roblox/roblox-image6.png",
    ],
    marketingGallery: [
      "/images/gallery/roblox/roblox-self-marketing-image1.png",
      "/images/gallery/roblox/roblox-self-marketing-image2.png",
      "/images/gallery/roblox/roblox-self-marketing-image3.png",
      "/images/gallery/roblox/roblox-self-marketing-image4.png",
      "/images/gallery/roblox/roblox-self-marketing-image5.png",
      "/images/gallery/roblox/roblox-self-marketing-image6.png",
      "/images/gallery/roblox/roblox-self-marketing-image7.png",
    ],
  },
  "ecotide": {
    slug: "ecotide",
    title: "EcoTide Adventures",
    category: "Game Development & Environmental Education",
    year: "2024",
    role: "Full-Stack Developer",
    overview: "EcoTide Adventures is a 2D mobile whack-a-mole style game where players clean Philippine coastal waters by tapping floating trash while avoiding fish and hazards. Developed by Team Ark to promote environmental awareness and stewardship, directly supporting UN Sustainable Development Goals 6 (Clean Water and Sanitation) and 14 (Life Below Water). The game combines engaging gameplay with educational impact, grounding the experience in the Philippine archipelago to emphasize local coastal community responsibility.",
    challenge: "Creating an educational game that effectively balances entertainment value with meaningful environmental messaging, while implementing a progressive difficulty system that keeps players engaged. The challenge was to design spawn mechanics, economy systems, and quota-based progression that felt rewarding yet challenging across three difficulty tiers, all within a mobile-optimized 2D environment.",
    solution: "Developed a quota-based reward system where players must meet trash collection targets before earning coins, creating meaningful progression. Implemented dynamic spawn logic with difficulty-specific parameters (spawn rates, concurrent items, trash/fish/bomb ratios). Built a three-tier difficulty system (Easy, Medium, Hard) with unlockable content via in-game currency, and designed the game with Philippine coastal aesthetics to strengthen the local environmental connection.",
    results: "Delivered a fully functional MVP with three playable difficulty levels, functioning economy system, and stable spawn/collection mechanics. The quota-based progression ensures players engage meaningfully with the environmental objective rather than mindlessly tapping, while the Philippine setting creates cultural relevance and local awareness for marine conservation.",
    techStack: ["Game Development", "2D Animation", "Mobile Optimization", "Game Economy Design", "Spawn Logic Systems", "UI/UX Design", "Environmental Education"],
    achievements: [
      "Fully playable 3-difficulty tier game (Easy, Medium, Hard)",
      "Quota-based progression system with coin rewards",
      "Dynamic spawn logic: 0.4-1.8s intervals, 4-8 concurrent items",
      "Progressive difficulty: 65% → 55% trash spawn rates",
      "Economy system with unlockable content via Gold Tickets",
      "Philippine coastal water theming with archipelago backdrop",
      "Supports UN SDG 6 (Clean Water) and SDG 14 (Life Below Water)",
      "Educational impact: Promotes marine conservation awareness",
      "Stable performance optimized for mobile devices",
      "Team Ark collaborative development project",
    ],
    gallery: [
      "/images/gallery/ecotide/ecotide-image1.png",
      "/images/gallery/ecotide/ecotide-image2.png",
      "/images/gallery/ecotide/ecotide-image3.png",
      "/images/gallery/ecotide/ecotide-image4.png",
    ],
  },
  "construction-pms": {
    slug: "construction-pms",
    title: "Full-Stack Development",
    category: "Full-Stack Development",
    year: "2024",
    role: "Lead Developer & Designer",
    overview: "Developed two comprehensive full-stack research projects addressing critical business needs: BizWise, an AI-integrated service marketplace and business management platform for small service-oriented businesses, and a Construction Project Management System with competitive supplier bidding and AI-enhanced reporting. Both projects demonstrate expertise in scalable architecture, AI integration, and solving real-world operational inefficiencies.",
    challenge: "Building enterprise-level applications that solve complex real-world problems: (1) Service-oriented MSMEs lack a unified platform for client acquisition and financial management, forcing them to rely on manual bookings and pen-and-paper logbooks that lead to operational chaos and poor financial visibility. (2) Construction firms struggle with static material pricing, inefficient resource allocation, and lack of competitive supplier bidding, resulting in cost overruns and project delays.",
    solution: "Developed two distinct full-stack research solutions: (1) BizWise - a dual-sided marketplace where clients browse and book services while the system automatically records transactions and provides AI-driven analytics for cash flow prediction and business insights. (2) Construction PMS - a competitive supplier-based bidding system with real-time BOQ pricing updates, AI-enhanced report generation for foremen and managers, and location tracking for equipment optimization.",
    results: "Successfully delivered two production-ready research applications. BizWise bridges the digital divide for service providers with automated booking-to-financial-ledger workflows and predictive AI analytics. Construction PMS achieves superior cost efficiency through competitive supplier bidding, transparent resource allocation, and AI-powered progress reporting that transforms raw data into professional reports.",
    techStack: ["React.js", "React Native", "Node.js", "Express", "PostgreSQL", "Firebase Firestore", "JWT", "Tailwind CSS", "AI Integration", "Generative AI", "Competitive Bidding System"],
    achievements: [
      "BizWise: Dual-sided marketplace for service providers and clients",
      "BizWise: Automated booking-to-financial-ledger workflow",
      "BizWise: AI-driven cash flow prediction and business analytics",
      "BizWise: Eliminates manual data entry with automated transaction recording",
      "Construction PMS: Competitive supplier bidding system",
      "Construction PMS: Real-time BOQ pricing based on supplier bids",
      "Construction PMS: AI-enhanced report generation (Generative AI)",
      "Construction PMS: Equipment location tracking and optimization",
      "Two production-ready research applications (BSIT Capstone Projects)",
      "Bridging the digital divide for MSMEs and construction firms",
    ],
    gallery: [
      "/images/gallery/fullstack/construction-pms/pms-image1.png",
      "/images/gallery/fullstack/bizwise/bizwise-logo.png",
    ],
    additionalGalleries: [
      {
        title: "Construction Project Management System",
        description: "A comprehensive research project focused on addressing static material pricing and inefficient resource allocation in the construction industry. Features a competitive supplier-based bidding system where BOQ pricing updates dynamically based on accepted bids. Includes AI-enhanced report generation using Generative AI to compile raw data into professional progress reports, and equipment location tracking for optimal utilization. Built with React.js, React Native, Node.js, Express, PostgreSQL, and Firebase Firestore.",
        images: [
          "/images/gallery/fullstack/construction-pms/pms-image1.png",
          "/images/gallery/fullstack/construction-pms/pms-image2.png",
          "/images/gallery/fullstack/construction-pms/pms-image3.png",
          "/images/gallery/fullstack/construction-pms/pms-image4.png",
        ],
      },
      {
        title: "BizWise - AI-Integrated Service Marketplace",
        description: "A research project bridging the digital divide for service-oriented MSMEs (salons, repair technicians, event planners). Functions as both a service marketplace where clients browse, book, and rate providers, and a business management tool that automatically converts bookings into financial records. Features AI-driven analytics for cash flow prediction, peak service hours analysis, and revenue trend visualization. Eliminates manual pen-and-paper logbooks by automating the entire booking-to-ledger workflow.",
        images: [
          "/images/gallery/fullstack/bizwise/bizwise-logo.png",
          "/images/gallery/fullstack/bizwise/bizwise-image1.png",
          "/images/gallery/fullstack/bizwise/bizwise-image2.png",
          "/images/gallery/fullstack/bizwise/bizwise-image3.png",
        ],
      },
    ],
  },
  "tarot-consultations": {
    slug: "tarot-consultations",
    title: "Wisdom of Cards",
    category: "Tarot Reader",
    year: "2021 - Present",
    role: "Tarot Reader & Spiritual Guide",
    overview: "Providing personalized tarot consultations to help clients gain clarity and make informed decisions. A unique blend of intuition and strategic guidance.",
    challenge: "Clients often struggle with decisions and at times they get lost in their own life. They need a fresh perspective to navigate their own complexities.",
    solution: "Delivered 200+ tarot readings with a focus on mindful interpretation, helping clients explore their situations from new angles and make confident decisions.",
    results: "Successfully delivered over 200 consultations with positive feedback and return clients. Built a reputation for insightful and practical readings.",
    techStack: ["Tarot Reading", "Consultation", "Active Listening", "Intuitive Guidance"],
    achievements: [
      "200+ personalized consultations delivered",
      "Helped clients make informed decisions",
      "80+ readings during booth opening week",
      "Positive client feedback and return visits",
      "Built reputation for insightful readings",
    ],
    gallery: [
      "/images/gallery/tarot-readings/tarot-reading-main-display.png",
      "/images/gallery/tarot-readings/tarot-reading-image.jpg",
      "/images/gallery/tarot-readings/tarot-reading-image2.jpg",
      "/images/gallery/tarot-readings/tarot-reading-image3.png",
    ],
  },
  "speaker-educator": {
    slug: "speaker-educator",
    title: "Speaker & Educator",
    category: "Workshops & Public Speaking",
    year: "2023 - Present",
    role: "Lead Speaker & Workshop Facilitator",
    overview: "Delivering impactful talks and workshops on leadership, web development fundamentals, and essential developer tools. Empowering students through hands-on learning experiences that focus on practical skills and actionable mindsets.",
    challenge: "The real challenge was introducing complex topics - web development fundamentals, IDE tools, Git/GitHub workflows, and leadership principles - to students who had barely any prior knowledge or experience. These students needed to grasp foundational concepts without feeling overwhelmed or disconnected from the material.",
    solution: "Approached each workshop and speaking engagement with a focus on relatability and accessibility. Designed structured course flows that broke down complex topics into digestible, beginner-friendly segments. Created content that resonated with students' experiences and learning levels, ensuring they could connect with the material and see immediate practical applications in their own journey.",
    results: "Successfully empowered students with both technical skills and leadership mindsets. Delivered engaging workshops with 40+ attendees, receiving overwhelmingly positive feedback. Students gained practical understanding of essential developer tools and web fundamentals while being inspired to take immediate action on their learning journey.",
    techStack: ["Public Speaking", "Workshop Design", "Leadership Training", "Web Development Fundamentals", "Git/GitHub", "IDE Tools"],
    achievements: [
      "Gordon College Leadership Talk: Inspiring action over waiting",
      "IDE & Git/GitHub Workshop: Teaching programming essentials",
      "WebCamp: Foundational web development (HTML, CSS, JS, Backend)",
      "Engaged 40+ students per workshop session",
      "Received overwhelmingly positive student feedback",
      "Empowered students with practical, actionable skills",
    ],
    gallery: [
      "/images/gallery/speakership/speakership-main-image.jpg",
      "/images/gallery/speakership/gordon/gordon-speakership-image1.jpg",
      "/images/gallery/speakership/ide-workshop/ide-workshop-main.jpg",
      "/images/gallery/speakership/webcamp/webcamp-image1.jpg",
    ],
    additionalGalleries: [
      {
        title: "Gordon College Leadership Talk",
        description: "Delivered an inspiring talk at Gordon College about leadership and the power of taking action NOW rather than waiting for 'someday.' Emphasized the importance of starting today and building momentum through immediate action on goals and aspirations.",
        images: [
          "/images/gallery/speakership/gordon/gordon-speakership-image1.jpg",
          "/images/gallery/speakership/gordon/gordon-speakership-image2.jpg",
        ],
      },
      {
        title: "IDE & Git/GitHub Workshop",
        description: "Led a hands-on workshop introducing students to essential programming tools - IDEs and Git/GitHub. Rather than focusing on coding itself, we explored one of the biggest fundamentals that every developer needs: understanding their development environment and version control workflows.",
        images: [
          "/images/gallery/speakership/ide-workshop/ide-workshop-main.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image1.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image2.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image3.jpg",
        ],
      },
      {
        title: "WebCamp - Web Development Fundamentals",
        description: "Taught basic web development fundamentals, exploring why HTML, CSS, JavaScript, and backend technologies are essential for websites to function. Focused on building foundational understanding of how different web technologies work together to create functional websites.",
        images: [
          "/images/gallery/speakership/webcamp/webcamp-image1.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image2.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image3.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image4.jpg",
        ],
      },
    ],
  },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Navbar Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back button */}
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Info */}
            <div>
              {/* Category & Year */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
                {project.title}
              </h1>

              <div className="w-24 h-[2px] bg-black mb-6"></div>

              {/* Overview */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.overview}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-xs text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  {project.linkLabel || "View Project"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              )}
            </div>

            {/* Right: Featured Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] bg-gray-100 group overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black z-10"></div>

                {/* Featured Image */}
                {project.gallery && project.gallery.length > 0 ? (
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Featured Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <div className="bg-white p-8 sm:p-10 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>
                <div className="w-16 h-px bg-black mb-6"></div>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="bg-white p-8 sm:p-10 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>
                <div className="w-16 h-px bg-black mb-6"></div>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="bg-white p-8 sm:p-10 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                <h2 className="text-2xl font-bold text-black mb-4">The Results</h2>
                <div className="w-16 h-px bg-black mb-6"></div>
                <p className="text-gray-700 leading-relaxed mb-6">{project.results}</p>

                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketing Impact Section - Conditional */}
              {project.marketingGallery && project.marketingGallery.length > 0 && (
                <div className="bg-white p-8 sm:p-10 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                  <h2 className="text-2xl font-bold text-black mb-4">Marketing Impact</h2>
                  <div className="w-16 h-px bg-black mb-6"></div>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    The game became a self-marketing powerhouse, reaching thousands of students organically without aggressive promotional efforts. 
                    These analytics showcase how quality content naturally attracts and engages audiences.
                  </p>

                  {/* Marketing Gallery Grid with Modal */}
                  <ProjectGallery images={project.marketingGallery} projectTitle={`${project.title} - Marketing`} />
                </div>
              )}

              {/* Additional Galleries Section - Tournament Specific */}
              {project.additionalGalleries && project.additionalGalleries.length > 0 && (
                <>
                  {project.additionalGalleries.map((gallery, galleryIndex) => (
                    <div key={galleryIndex} className="bg-white p-8 sm:p-10 relative">
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                      <h2 className="text-2xl font-bold text-black mb-4">{gallery.title}</h2>
                      <div className="w-16 h-px bg-black mb-6"></div>
                      
                      {gallery.description && (
                        <p className="text-gray-700 leading-relaxed mb-8">
                          {gallery.description}
                        </p>
                      )}

                      {/* Tournament Gallery Grid with Modal */}
                      <ProjectGallery images={gallery.images} projectTitle={gallery.title} />
                    </div>
                  ))}
                </>
              )}

              {/* Gallery Section - Only show if no additional galleries (hide for Lit Entertainment) */}
              {!project.additionalGalleries && project.gallery && project.gallery.length > 0 && (
                <div className="bg-white p-8 sm:p-10 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                  <h2 className="text-2xl font-bold text-black mb-4">Project Gallery</h2>
                  <div className="w-16 h-px bg-black mb-8"></div>

                  {/* Gallery Grid with Modal */}
                  <ProjectGallery images={project.gallery} projectTitle={project.title} />
                </div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white p-6 relative sticky top-24">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>

                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-6">
                  Project Info
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500 block mb-1">Category</span>
                    <p className="text-black font-medium">{project.category}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-gray-500 block mb-1">Timeline</span>
                    <p className="text-black font-medium">{project.year}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-gray-500 block mb-1">My Role</span>
                    <p className="text-black font-medium">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

