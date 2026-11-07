import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "../components/ProjectGallery";
import ProjectBriefing from "../components/ProjectBriefing";

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
      "Head Organizer / Project Lead — AWS Cloud Club Student Community Day North 2025",
      "Led end-to-end planning and execution of student tech conference ('Trailblaze and Empower Cloud Leaders')",
      "Coordinated program flow, speakers, logistics, promotions, and campus partnerships",
      "Inspired creation of new AWS learning club by students in Bulacan beyond NU Baliwag",
      "Transformed club from sub-organization to independent entity with 100+ members in first term",
      "Led national marketing initiatives for AWS Cloud Clubs Philippines",
      "Led Amazon Q Workshop introducing generative AI to students",
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
      "Tournament Head — Kasidyahan 2024 University Week Esports Tournament (80+ participants)",
      "Project Co-Head — Overclocked Inter-Organization Esports Tournament (50+ participants)",
      "Rebranded Literates Esports to Lit Entertainment & expanded organization mission",
      "Managed volunteer committee across registration, tech support, and match facilitation",
      "Co-led cross-functional teams with NU Technocrats for joint esports event logistics",
      "Delivered high student engagement impact during University Week",
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
    overview: "A strategic virtual experience recreating the NU Baliwag campus in Roblox. 3D-modeled campus buildings and SM Baliwag exterior, creating an immersive virtual environment that attracted 3,000+ visitors within the first week of release.",
    challenge: "Our organization needed significant awareness and marketing to boost our reputation among students. Traditional marketing methods weren't reaching enough people or creating the impact we needed to showcase our ability to deliver quality experiences.",
    solution: "I decided to create a high-quality virtual environment of our campus in Roblox. By personally photographing the school and studying its architecture via Google Maps, I meticulously recreated the campus buildings and SM Baliwag exterior.",
    results: "The quality of the environment spoke for itself, attracting 3,000+ visitors in week 1 and significantly boosting our organization's reputation.",
    techStack: ["Roblox Studio", "Lua", "3D Modeling"],
    achievements: [
      "Game Developer / 3D Modeler — 3D-modeled NU Baliwag campus and SM Baliwag exterior",
      "Attracted 3,000+ visitors within the first week of release",
      "Created immersive virtual digital twin environment for university students",
      "Built engaging community hangout spot ('tambayan') for online and offline student connection",
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
  "blox-national-highschool": {
    slug: "blox-national-highschool",
    title: "Blox National Highschool",
    category: "3D Digital Twin & Virtual Immersion",
    year: "2024 - 2025",
    role: "3D Environment Artist & World Builder",
    overview: "An authentic 3D digital recreation of a traditional Philippine National High School campus built inside Roblox Studio. Designed to capture the nostalgic architectural identity of public school buildings—from open-air corridors and concrete pavilions to classic classrooms and school grounds—this virtual space serves as a semi-realistic social immersion and digital hangout ('tambayan') where students can connect, relax during online class breaks, and experience campus life together.",
    challenge: "During online learning and remote classes, students often miss the organic social connection and camaraderie of real-world school hallways, benches, and courtyards. Existing virtual spaces either feel generic or lack local cultural resonance. The challenge was to meticulously 3D model and optimize a hyper-localized, authentic Philippine high school environment that felt instantly recognizable and comforting, while maintaining smooth multiplayer performance across both mobile devices and PCs.",
    solution: "Engineered a custom 3D campus inside Roblox Studio by studying authentic Philippine public school architectural patterns and building layouts. Modeled realistic classroom interiors, open-sided corridors, multi-story concrete school buildings, and communal outdoor areas. Implemented ambient lighting and interactive elements to foster organic social gathering spots ('tambayan'), allowing students to hang out, study virtually, and socialize in a culturally familiar and nostalgic digital environment.",
    results: "Delivered an immersive, highly detailed virtual schoolyard that resonated deeply with Filipino students, providing a comforting social hub during and after online classes. The project showcased advanced 3D architectural modeling and world design in Roblox, creating a vibrant community space where local cultural authenticity meets interactive gaming.",
    techStack: [
      "Roblox Studio",
      "Lua Scripting",
      "3D Architectural Modeling",
      "Spatial Lighting",
      "Environment Optimization",
      "Level & World Design",
      "Community Building",
    ],
    achievements: [
      "Meticulously modeled authentic Philippine National High School architecture",
      "Built semi-realistic classrooms, open corridors, and campus pavilions",
      "Created a dedicated social hangout ('tambayan') for students during online classes",
      "Optimized complex 3D geometry for smooth mobile and desktop performance",
      "Fostered a nostalgic and culturally resonant virtual community",
      "Integrated interactive social mechanics and ambient campus environment",
    ],
    gallery: [
      "/images/BloxNationalHighschool/Screenshot (1022).png",
      "/images/BloxNationalHighschool/Screenshot (1023).png",
      "/images/BloxNationalHighschool/Screenshot (1024).png",
      "/images/BloxNationalHighschool/Screenshot (1025).png",
      "/images/BloxNationalHighschool/Screenshot (1027).png",
      "/images/BloxNationalHighschool/Screenshot (1028).png",
      "/images/BloxNationalHighschool/Screenshot (1029).png",
      "/images/BloxNationalHighschool/Screenshot (1030).png",
      "/images/BloxNationalHighschool/Screenshot (1032).png",
      "/images/BloxNationalHighschool/Screenshot (1033).png",
      "/images/BloxNationalHighschool/Screenshot (1034).png",
      "/images/BloxNationalHighschool/Screenshot (1035).png",
    ],
    additionalGalleries: [
      {
        title: "Campus Architecture & Grounds",
        description: "High-fidelity 3D modeling of traditional Philippine public school facades, outdoor pavilions, walkways, and courtyards designed to evoke authentic high school nostalgia.",
        images: [
          "/images/BloxNationalHighschool/Screenshot (1022).png",
          "/images/BloxNationalHighschool/Screenshot (1023).png",
          "/images/BloxNationalHighschool/Screenshot (1024).png",
          "/images/BloxNationalHighschool/Screenshot (1025).png",
        ],
      },
      {
        title: "Classrooms & Interior Immersion",
        description: "Semi-realistic interior spaces equipped with traditional desks, chalkboards, and open windows that recreate the familiar atmosphere of Filipino classrooms during breaks.",
        images: [
          "/images/BloxNationalHighschool/Screenshot (1027).png",
          "/images/BloxNationalHighschool/Screenshot (1028).png",
          "/images/BloxNationalHighschool/Screenshot (1029).png",
          "/images/BloxNationalHighschool/Screenshot (1030).png",
        ],
      },
      {
        title: "Social Hangout Spaces ('Tambayan')",
        description: "Dedicated relaxation zones where students gather after online classes or during downtime to chat, connect, and socialize with friends across mobile and desktop.",
        images: [
          "/images/BloxNationalHighschool/Screenshot (1032).png",
          "/images/BloxNationalHighschool/Screenshot (1033).png",
          "/images/BloxNationalHighschool/Screenshot (1034).png",
          "/images/BloxNationalHighschool/Screenshot (1035).png",
        ],
      },
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
    title: "Construction PMS",
    category: "AI & Business Systems",
    year: "2024",
    role: "Full-Stack Developer / System Architect",
    overview: "A construction management application for supplier bidding, budgeting, and resource tracking across 10 user roles. Built as a capstone research application.",
    challenge: "Project teams need to compare supplier prices, track material spending against estimates, and coordinate equipment and personnel across different roles.",
    solution: "Built supplier bidding and bill-of-quantities workflows, budget comparisons, and resource-management modules. Added role-based access and AI-assisted progress reports from site logs.",
    results: "Delivered a functional capstone application covering procurement, budget tracking, and progress reporting.",
    techStack: ["React.js", "React Native", "Node.js", "Express", "PostgreSQL", "Firebase", "JWT RESTful APIs", "Tailwind CSS"],
    achievements: ["Role-based access for 10 user roles","Supplier bidding and bill-of-quantities pricing","Estimated versus actual budget comparisons","Inventory, equipment, and personnel tracking","AI-assisted report generation from site logs"],
    gallery: [
      "/images/gallery/fullstack/construction-pms/pms-image1.png",
      "/images/gallery/fullstack/construction-pms/pms-image2.png",
      "/images/gallery/fullstack/construction-pms/pms-image3.png",
      "/images/gallery/fullstack/construction-pms/pms-image4.png",
    ],
  },
  "bizwise": {
    slug: "bizwise",
    title: "BizWise",
    category: "AI & Business Systems",
    year: "2024",
    role: "Lead Developer & Designer",
    overview: "A service marketplace and business management application connecting customer bookings with checkout and financial records. Built as a BSIT capstone research project.",
    challenge: "Service businesses need to manage appointments, staff assignments, payments, and financial records without repeatedly entering the same information.",
    solution: "Connected bookings to financial ledger entries and built views for appointment management, walk-in checkout, and business analytics.",
    results: "Delivered a capstone application with booking-to-ledger workflows, cash-flow forecasting, and revenue reports.",
    techStack: ["React Native", "Node.js", "Express", "Firebase Firestore", "JWT", "Cash Flow Analytics"],
    achievements: ["Customer and service-provider workflows","Appointment states and staff assignment","Walk-in checkout and payment recording","Booking-to-ledger transaction recording","Cash-flow and revenue reports"],
    gallery: [
      "/images/gallery/fullstack/bizwise/bizwise-logo.png",
      "/images/gallery/fullstack/bizwise/bizwise-image1.png",
      "/images/gallery/fullstack/bizwise/bizwise-image2.png",
      "/images/gallery/fullstack/bizwise/bizwise-image3.png",
      "/images/gallery/fullstack/bizwise/Screenshot (1056).png",
      "/images/gallery/fullstack/bizwise/Screenshot (1057).png",
      "/images/gallery/fullstack/bizwise/Screenshot (1058).png",
      "/images/gallery/fullstack/bizwise/Screenshot (1059).png",
      "/images/gallery/fullstack/bizwise/Screenshot (1060).png",
    ],
  },
  "tarot-consultations": {
    slug: "tarot-consultations",
    title: "Wisdom of Cards",
    category: "Tarot Reader",
    year: "2021 - Present",
    role: "Booth Lead & Independent Tarot Consultant",
    overview: "Providing personalized tarot consultations to help clients gain clarity and make informed decisions. A unique blend of intuition and strategic guidance.",
    challenge: "Clients often struggle with decisions and at times get lost in complex situations. They need empathetic listening and fresh perspective to navigate life complexities.",
    solution: "Spearheaded the launch and operations of a Tarot Reading booth during Opening Week while delivering 200+ personalized consultations focusing on mindful interpretation and practical clarity.",
    results: "Successfully delivered 80+ individual tarot readings over two days during Opening Week under high demand, and over 200 total consultations with high client return rates.",
    techStack: ["Tarot Reading", "Consultation", "Active Listening", "Intuitive Guidance"],
    achievements: [
      "Booth Lead / Operator — Launched & managed Tarot Reading booth during Opening Week",
      "Delivered 80+ individual tarot readings over 2 days under high demand",
      "200+ total personalized consultations delivered with high client satisfaction",
      "Provided empathetic, mindful guidance helping clients make confident decisions",
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
    challenge: "Introducing complex topics—web development fundamentals, IDE tools, Git/GitHub workflows, and leadership principles—to students with limited prior experience required accessible, engaging course design.",
    solution: "Designed structured course flows breaking down complex tech into digestible segments. Delivered talks on overcoming fear of failure and conducted hands-on coding workshops.",
    results: "Empowered 100+ students across multiple universities with technical skills and leadership mindsets, receiving overwhelmingly positive feedback.",
    techStack: ["Public Speaking", "Workshop Design", "Leadership Training", "Web Development Fundamentals", "Git/GitHub", "IDE Tools"],
    achievements: [
      "Guest Speaker — Gordon College AWS Event (Aug 2025): Talk 'When Does Someday Come?' on leadership, discipline & overcoming fear of failure",
      "Workshop Speaker — NU Literates Community (Aug 2025): Beginner full-stack web dev workshop (40+ student attendees)",
      "Workshop Speaker — AWS Cloud Clubs NU Baliwag (Feb 2024): Hands-on Web Dev & Git/GitHub version control workflows",
      "Empowered students with actionable skills and immediate execution mindset",
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
        description: "Delivered an inspiring talk at Gordon College about leadership, self-discipline, and overcoming fear of failure ('When Does Someday Come?').",
        images: [
          "/images/gallery/speakership/gordon/gordon-speakership-image1.jpg",
          "/images/gallery/speakership/gordon/gordon-speakership-image2.jpg",
        ],
      },
      {
        title: "IDE & Git/GitHub Workshop",
        description: "Led a hands-on workshop introducing students to essential programming tools - IDEs and Git/GitHub. Explored development environment setup and version control workflows.",
        images: [
          "/images/gallery/speakership/ide-workshop/ide-workshop-main.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image1.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image2.jpg",
          "/images/gallery/speakership/ide-workshop/ide-workshop-image3.jpg",
        ],
      },
      {
        title: "WebCamp - Web Development Fundamentals",
        description: "Taught basic web development fundamentals, exploring why HTML, CSS, JavaScript, and backend technologies are essential for websites to function.",
        images: [
          "/images/gallery/speakership/webcamp/webcamp-image1.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image2.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image3.jpg",
          "/images/gallery/speakership/webcamp/webcamp-image4.jpg",
        ],
      },
    ],
  },
  "dialylink": {
    slug: "dialylink",
    title: "DialyLink",
    category: "Full-Stack Development & AI",
    year: "2026",
    role: "Full-Stack Developer",
    overview: "A telemedicine and dialysis monitoring application with separate patient, doctor, and administrator workflows. Conceptualized and built from scratch in two days.",
    challenge: "The application brings records, appointments, and monitoring into one place, with different tasks and access levels for patients, doctors, and administrators.",
    solution: "Built role-based portals connected to a Node.js and Express API. For the AI features, the server retrieves patient records from PostgreSQL and includes them in Gemini requests.",
    results: "Implemented patient and doctor interfaces, appointment workflows, patient-record views, and AI-assisted features in an independent two-day build.",
    techStack: ["Next.js 14", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Neon", "Supabase", "Google Gemini 2.5 Flash"],
    achievements: ["Patient, doctor, and administrator workflows","Patient records with sessions, labs, prescriptions, and notes","Appointment booking and consultation actions","AI-assisted symptom triage and patient-record summaries","PostgreSQL-backed context for AI requests","Administrator-managed doctor verification"],
    gallery: [
      "/images/dialylink/Screenshot (877).png",
      "/images/dialylink/Screenshot (878).png",
      "/images/dialylink/Screenshot (879).png",
      "/images/dialylink/Screenshot (880).png"
    ],
    additionalGalleries: [
      {
        title: "Doctor's Portal & Clinical Advisor",
        description: "Interface walkthrough for doctors and nephrologists, including AI Clinical Advisor patient record summaries, appointment scheduling, and patient triage monitoring.",
        images: [
          "/images/dialylink/doctors/Screenshot (1080).png",
          "/images/dialylink/doctors/Screenshot (1081).png",
          "/images/dialylink/doctors/Screenshot (1082).png",
          "/images/dialylink/doctors/Screenshot (1083).png",
          "/images/dialylink/doctors/Screenshot (1085).png",
          "/images/dialylink/doctors/Screenshot (1086).png",
          "/images/dialylink/doctors/Screenshot (1087).png",
        ],
      },
      {
        title: "Patient Dashboard & Core Platform",
        description: "Patient interface features including AI symptom triage, health companion chat, and appointment booking workflows.",
        images: [
          "/images/dialylink/Screenshot (878).png",
          "/images/dialylink/Screenshot (879).png",
          "/images/dialylink/Screenshot (880).png",
        ],
      },
    ],
  },
  "graphic-designing": {
    slug: "graphic-designing",
    title: "Graphic Design Portfolio",
    category: "Creative & Branding",
    year: "2023 - 2024",
    role: "Chief Creatives Officer / Project Lead",
    overview: "A comprehensive showcase of my graphic design work, encompassing brand identity creation, social media marketing materials, event posters, and merchandise design. Highlights the GDSC NU Baliwag mascot rebranding initiative, Meister Spud brand identity, and LessonPlanner marketing collateral.",
    challenge: "Each design project presented unique challenges—from modernizing a university organization's mascot to developing a cohesive brand identity for a local food business (Meister Spud) and creating marketing assets for SaaS platforms like LessonPlanner.",
    solution: "Proposed and led the mascot rebranding for GDSC NU Baliwag, transforming it into physical merchandise that created new revenue streams. Designed complete brand packages for Meister Spud and LessonPlanner UI assets.",
    results: "Delivered highly effective visual assets that drove audience engagement and created sustainable funding streams through merchandise sales.",
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "Brand Identity", "Social Media Graphics"],
    achievements: [
      "Chief Creatives Officer / Project Lead — Proposed & led mascot rebranding for GDSC NU Baliwag",
      "Transformed updated mascot into merchandise, increasing brand visibility and engagement",
      "Contributed additional funding streams for GDSC through merchandise sales",
      "Designed full brand identity and marketing posters for Meister Spud",
      "Developed comprehensive social media campaign graphics for LessonPlanner",
    ],
    gallery: [
      "/images/Graphic Designing/meister_spud-potatobusiness/Meister Spud - POSTER 1.png",
      "/images/Graphic Designing/meister_spud-potatobusiness/Logo MeisterSpud.png",
      "/images/Graphic Designing/meister_spud-potatobusiness/HOT, BAKED.png",
      "/images/Graphic Designing/meister_spud-potatobusiness/MEISTER PUD - BACKGROUND.png",
      "/images/Graphic Designing/meister_spud-potatobusiness/Meister Spud.png",
    ],
    additionalGalleries: [
      {
        title: "LessonPlanner Marketing & UI Assets",
        description: "Modern, tech-focused marketing materials, engaging UI teasers, and video tutorials designed specifically for LessonPlanner to communicate its AI-powered features.",
        images: [
          "/images/Graphic Designing/LESSON PLAN TUTORIAL.mp4",
          "/images/Graphic Designing/lessonplanner/LessonPlanner_Thumbnail.webp",
          "/images/Graphic Designing/lessonplanner/Generate Lesson Plan in Minutes! (3).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (9).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (10).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (11).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (12).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (13).png",
          "/images/Graphic Designing/lessonplanner/New UI Teaser (14).png",
          "/images/Graphic Designing/lessonplanner/Affiliate Program.png",
          "/images/Graphic Designing/lessonplanner/Weekends Posting  Square Type  Quotes (1).png",
          "/images/Graphic Designing/lessonplanner/Weekends Posting  Square Type  Quotes (2).png",
          "/images/Graphic Designing/lessonplanner/Weekends Posting  Square Type  Quotes (3).png",
        ],
      },
      {
        title: "ARKDEV Graphic Layouts & UI Concepts",
        description: "Layout composition for promotional materials and UI design concepts utilizing the existing ARKDEV brand identity and assets.",
        images: [
          "/images/Graphic Designing/ARKDEV/Apps (ArkDev).png",
          "/images/Graphic Designing/ARKDEV/Apps (ArkDev) (1).png",
          "/images/Graphic Designing/ARKDEV/Apps (ArkDev) (2).png",
          "/images/Graphic Designing/ARKDEV/CARD FRONT.png",
          "/images/Graphic Designing/ARKDEV/Portrait.png",
          "/images/Graphic Designing/ARKDEV/Portrait (2).png",
          "/images/Graphic Designing/ARKDEV/Portrait (3).png",
          "/images/Graphic Designing/ARKDEV/Portrait (4).png",
        ],
      },
      {
        title: "AWS Cloud Clubs PH Marketing & Design",
        description: "Official promotional graphics, event announcements, and community branding assets developed for AWS Cloud Clubs Philippines.",
        images: [
          "/images/Graphic Designing/awsph/1.jpg",
          "/images/Graphic Designing/awsph/2.jpg",
          "/images/Graphic Designing/awsph/3.jpg",
          "/images/Graphic Designing/awsph/4.jpg",
          "/images/Graphic Designing/awsph/5.jpg",
          "/images/Graphic Designing/awsph/6.jpg",
        ],
      },
    ],
  },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  const primary = ["dialylink", "bizwise", "aws-cloud-leadership", "lit-entertainment-leadership", "speaker-educator"];
  const nextSlug = primary[(primary.indexOf(slug) + 1) % primary.length];
  const nextProject = projects[nextSlug];
  const status = slug === "construction-pms" || slug === "bizwise" ? "Capstone research project" : slug === "dialylink" ? "Independent project · two-day build" : project.category;
  const heroImage = slug === "dialylink" ? "/images/dialylink/doctors/Screenshot (1080).png" : slug === "bizwise" ? "/images/gallery/fullstack/bizwise/Screenshot (1056).png" : project.gallery[0];
  const galleries = project.additionalGalleries?.length ? project.additionalGalleries : [{ title: "Interface & project walkthrough", description: "Open an image to inspect it at full size.", images: project.gallery.slice(1) }];
  return (
    <main className="project-page">
      <a href="#project-content" className="skip-link">Skip to project</a>
      <header className="project-page-header site-width"><Link href="/#work">← Back to work</Link><Link href="/" className="wordmark" aria-label="Mak Pongase home">mak</Link></header>
      <section id="project-content" className="project-intro site-width"><p className="eyebrow section-kicker">{project.category}</p><h1>{project.title}</h1><p>{project.overview}</p><dl className="case-metadata"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Project</dt><dd>{status}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div></dl><div className="project-tags" style={{ marginTop: 28 }}>{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.link && <a className="button button-light" style={{ marginTop: 28 }} href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || "View live project"} ↗</a>}</section>
      {heroImage && <figure className="case-hero site-width"><img src={heroImage} alt={`${project.title} — ${["dialylink", "bizwise"].includes(slug) ? "application interface" : "project showcase"}`} /></figure>}
      <ProjectBriefing overview={project.overview} challenge={project.challenge} solution={project.solution} results={project.results} achievements={project.achievements} />
      {galleries.map((gallery, index) => <section className="case-gallery site-width" key={gallery.title}><div className="case-gallery-heading"><p className="eyebrow section-kicker">{String(index + 2).padStart(2, "0")} / Walkthrough</p><h2>{gallery.title}</h2>{gallery.description && <p>{gallery.description}</p>}</div><ProjectGallery images={gallery.images} projectTitle={`${project.title} — ${gallery.title}`} /></section>)}
      {project.marketingGallery && <section className="case-gallery site-width"><div className="case-gallery-heading"><h2>Promotion & community</h2></div><ProjectGallery images={project.marketingGallery} projectTitle={`${project.title} — Promotion`} /></section>}
      <footer className="case-end site-width"><Link href="/#work">← All selected work</Link>{nextProject && <Link href={`/projects/${nextSlug}`}>Next: {nextProject.title} ↗</Link>}</footer>
    </main>
  );
}
