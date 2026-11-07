import Link from "next/link";

const work = [
  { title: "Bulldogs of the North Tambayan", description: "A recreation of the NU Baliwag campus in Roblox, modeled from architectural photos and maps.", category: "Game development / 3D modeling", slug: "bulldogs-tambayan", image: "/images/gallery/roblox/roblox-main-display.jpg" },
  { title: "Graphic design & branding", description: "Brand identities, merchandise, and marketing materials for student organizations and businesses.", category: "Visual design", slug: "graphic-designing", image: "/images/Graphic Designing/meister_spud-potatobusiness/Meister Spud - POSTER 1.png" },
  { title: "EcoTide Adventures", description: "A 2D mobile game about cleaning coastal waters and protecting marine life, developed with Team Ark.", category: "Game development", slug: "ecotide", image: "/images/gallery/ecotide/ecotide-image1.png" },
  { title: "Blox National Highschool", description: "A virtual Philippine public school campus with classrooms, corridors, and social spaces.", category: "3D environment design", slug: "blox-national-highschool", image: "/images/BloxNationalHighschool/Screenshot (1022).png" },
  { title: "AWS Cloud Leadership", description: "Student workshops, chapter leadership, and Student Community Day North 2025.", category: "Community & leadership", slug: "aws-cloud-leadership", image: "/images/gallery/aws/student-community-day/scd-north-image-main.png" },
  { title: "Lit Entertainment", description: "Organization rebranding and collegiate gaming tournaments at NU Baliwag.", category: "Events & leadership", slug: "lit-entertainment-leadership", image: "/images/esports-tournament/lit-ent-main-display.png" },
  { title: "Speaking & workshops", description: "Student sessions on web development, Git/GitHub, and leadership.", category: "Education", slug: "speaker-educator", image: "/images/gallery/speakership/speakership-main-image.jpg" },
  { title: "Wisdom of Cards", description: "Independent tarot consultations and a student-event reading booth.", category: "Personal work", slug: "tarot-consultations", image: "/images/gallery/tarot-readings/tarot-reading-main-display.png" },
];

export const metadata = { title: "Other work | John Mark Pongase" };

export default function Archive() {
  return <main className="project-page"><header className="project-page-header site-width"><Link href="/#work">← Back to selected work</Link><Link href="/" className="wordmark">mak</Link></header><div className="support-header site-width"><p className="eyebrow">Beyond web & mobile</p><h1>Other sides of my work.</h1><p>Games, visual design, community projects, and a few personal interests.</p></div><div className="archive-grid site-width">{work.map((item) => <Link key={item.slug} href={`/projects/${item.slug}`} className="archive-card"><img src={item.image} alt={item.title} loading="lazy" /><p className="eyebrow">{item.category}</p><h2>{item.title} ↗</h2><p>{item.description}</p></Link>)}</div><footer className="case-end site-width"><Link href="/">← Back to portfolio</Link><a href="mailto:macmacpongs02@gmail.com">Get in touch ↗</a></footer></main>;
}
