import Image from "next/image";
import Link from "next/link";
import ParticleHalo from "./components/ParticleHalo";
import PortfolioNav from "./components/PortfolioNav";
import SceneHeadline from "./components/SceneHeadline";
import RevealText from "./components/RevealText";
import WorkCarousel from "./components/WorkCarousel";

const projects = [
  { number: "01", title: "DialyLink", category: "Telemedicine & patient monitoring", description: "Patient records, appointments, and a doctor’s portal in one application. Conceptualized and built from scratch in two days.", role: "Full-stack development", tags: ["Next.js", "PostgreSQL", "Gemini"], slug: "dialylink", image: "/images/dialylink/doctors/Screenshot (1080).png", alt: "DialyLink doctor portal showing a patient record, session history, and consultation actions", caption: "Doctor’s portal / Patient record", className: "project-lead" },
  { number: "02", title: "BizWise", category: "Bookings & business management", description: "Connecting service bookings, checkout, and financial records for small businesses.", role: "Lead developer & designer", tags: ["React Native", "Node.js", "Firebase"], slug: "bizwise", image: "/images/gallery/fullstack/bizwise/Screenshot (1056).png", alt: "BizWise appointment management showing booking states, assigned stylists, and payment balances", caption: "Appointment management", className: "project-bizwise" },
  { number: "03", title: "AWS Cloud Clubs", category: "Community & leadership", description: "Chapter leadership, student workshops, and Student Community Day North 2025.", role: "Chapter Captain", tags: [], slug: "aws-cloud-leadership", image: "/images/gallery/aws/awscc-nub-main-logo.jpg", alt: "AWS Cloud Clubs National University Baliwag logo", caption: "", className: "project-community" },
  { number: "04", title: "Graphic design", category: "Branding & visual design", description: "Brand identities, merchandise, and campaigns for businesses and student organizations.", slug: "graphic-designing", image: "/images/Graphic Designing/meister_spud-potatobusiness/Logo MeisterSpud.png", alt: "Meister Spud brand identity", className: "project-design" },
  { number: "05", title: "Roblox worlds", category: "Game development & 3D", description: "Recreating the NU Baliwag campus as a place to explore and hang out in Roblox.", slug: "bulldogs-tambayan", image: "/images/gallery/roblox/roblox-main-display.jpg", alt: "Bulldogs of the North Tambayan in Roblox", className: "project-roblox" },
  { number: "06", title: "Lit Entertainment", category: "Organization & leadership", description: "Rebranding a student organization, leading volunteer teams, and running campus tournaments.", slug: "lit-entertainment-leadership", image: "/images/esports-tournament/lit-ent-main-display.png", alt: "Lit Entertainment identity", className: "project-lit" },
  { number: "07", title: "Speaking & workshops", category: "Teaching & community", description: "Student sessions on web development, Git and GitHub, and leadership.", slug: "speaker-educator", image: "/images/gallery/speakership/ide-workshop/ide-workshop-main.jpg", alt: "IDE and Git workshop artwork", className: "project-speaking" },
];

export default function Home() {
  return (
    <div className="portfolio portfolio-v2" id="top">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="portfolio-scene" aria-hidden="true"><ParticleHalo /></div>
      <PortfolioNav />
      <main id="main">
        <section className="portfolio-hero site-width" aria-labelledby="hero-title">
          <div className="hero-topline eyebrow"><span>John Mark Pongase</span><span>Design · Code · Community</span></div>
          <div className="hero-composition">
            <SceneHeadline />
            <div className="hero-description">
              <RevealText text="I explore the intersection of technology, creativity, and business. I build software, shape visual experiences, experiment with emerging technologies, and bring people together around ideas." />

            </div>
          </div>
        </section>

        <section id="work" className="work-section work-glass" aria-labelledby="work-title">
          <div className="site-width work-content">

          <WorkCarousel heading={<RevealText as="h2" id="work-title" text={"Design, development,\nand community."} />}>
            {projects.map((project) => <Link className={`project-card ${project.className}`} href={`/projects/${project.slug}`} key={project.slug} aria-label={`View ${project.title} case study`}>
              <div className="project-visual project-brand-stage"><div className="project-brand"><Image src={project.slug === "dialylink" ? "/images/dialylink/logo.svg" : project.slug === "bizwise" ? "/images/gallery/fullstack/bizwise/bizwise-logo.png" : project.image} alt={project.slug === "dialylink" || project.slug === "bizwise" ? `${project.title} logo` : project.alt} width={400} height={400} sizes="200px" className="project-logo" /></div></div>
              <div className="project-copy"><RevealText as="h3" text={project.title} /><RevealText text={project.description} /></div>
            </Link>)}
          </WorkCarousel>
          </div>
        </section>

<section id="experience" className="experience-section site-width" aria-labelledby="experience-title">
          <div className="section-heading"><div><RevealText as="h2" id="experience-title" text="Experience." /></div></div>
          <div className="experience-list">
            <article className="experience-row"><div className="experience-company"><h3>Symph</h3><span>Marketing Automation Intern</span></div><p>Built marketing workflows for lead capture, validation, scoring, and routing.</p><span className="experience-period">Feb — May 2026</span></article>
            <article className="experience-row"><div className="experience-company"><h3>Solution Resources</h3><span>Full-stack Developer Intern</span></div><p>Worked with backend developers on API integration and troubleshooting in an Agile team.</p><span className="experience-period">Nov 2025 — Feb 2026</span></article>
            <article className="experience-row"><div className="experience-company"><h3>AWS Cloud Clubs</h3><span>Chapter Captain · NU Baliwag</span></div><p>Led student workshops and organized Student Community Day North 2025.</p><span className="experience-period">Feb 2025 — Feb 2026</span></article>
          </div>
        </section>

        <section id="about" className="about-section site-width" aria-labelledby="about-title">
          <div className="about-portrait"><Image src="/images/about-me/mak-pongase-main-picture.png" alt="John Mark Pongase" width={560} height={700} sizes="(max-width: 700px) 75vw, 28vw" /><span className="portrait-label eyebrow">Mak / Bulacan, PH</span></div>
          <div className="about-copy">
            <RevealText as="h2" id="about-title" text="Hi, I’m Mak." />
            <RevealText text="I'm a BSIT graduate working at the intersection of technology, design, and business." />
            <RevealText text="My experience spans software development, digital design, marketing, and community leadership. I've built web applications and game experiences, explored AI-powered solutions, developed visual identities, and helped organize communities." />
            <RevealText text="I'm particularly interested in how businesses operate, how systems can be improved, and how technology can turn ideas into practical solutions." />
            <div className="about-details"><h3>Areas of Interest</h3><p>Software Development · Business &amp; Strategy · Systems Architecture · AI &amp; Automation · Digital Marketing · UI/UX Design · Leadership</p></div>
            <div className="about-details"><h3>Tools &amp; Technologies</h3><p>React · Next.js · TypeScript · Node.js · PostgreSQL · Supabase · AI Tools</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section site-width" aria-labelledby="contact-title">
          <div className="contact-top"><span className="contact-location eyebrow">Bulacan, Philippines</span></div>
          <RevealText as="h2" id="contact-title" text={"Have something\nin mind?"} /><div className="contact-bottom"><RevealText text={"For a role, a project,\nor a conversation about your next idea."} /><a href="mailto:macmacpongs02@gmail.com" className="contact-email">macmacpongs02@gmail.com <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
      <footer className="portfolio-footer site-width"><span>© {new Date().getFullYear()} John Mark Pongase</span><nav aria-label="Social links"><a href="https://github.com/MakPongase" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/john-mark-pongase-7732482b1/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></nav></footer>
    </div>
  );
}
