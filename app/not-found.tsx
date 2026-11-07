import Link from "next/link";

export default function NotFound() {
  return <main className="project-page"><header className="project-page-header site-width"><Link href="/" className="wordmark">mak</Link></header><div className="project-intro site-width"><p className="eyebrow">404 / Page not found</p><h1>This page isn’t here.</h1><p>The link may have changed. You can find my projects on the homepage.</p><Link className="button button-light" href="/#work">Back to work ↗</Link></div></main>;
}
