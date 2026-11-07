import Link from "next/link";
import Certificates from "../components/Certificates";

export const metadata = { title: "Credentials & experience | John Mark Pongase" };

export default function Credentials() {
  return <main className="project-page"><header className="project-page-header site-width"><Link href="/#experience">← Back to experience</Link><Link href="/" className="wordmark">mak</Link></header><div className="support-header site-width"><p className="eyebrow">Background & learning</p><h1>Credentials & experience.</h1><p>Certificates, professional experience, and organizational roles. Select a certificate or role to see the details.</p></div><div className="credential-content"><Certificates title="Certificates & experience" /></div><footer className="case-end site-width"><Link href="/">← Back to portfolio</Link><a href="mailto:macmacpongs02@gmail.com">Get in touch ↗</a></footer></main>;
}
