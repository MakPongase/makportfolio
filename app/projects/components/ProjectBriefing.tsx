interface ProjectBriefingProps {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  achievements: string[];
}

export default function ProjectBriefing({ challenge, solution, results, achievements }: ProjectBriefingProps) {
  return (
    <section className="case-brief site-width" aria-label="Project details">
      <div><p className="eyebrow section-kicker">01 / Scope</p><h2>What I worked on</h2><ul>{achievements.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="case-narrative"><div><h2>The problem</h2><p>{challenge}</p></div><div><h2>The approach</h2><p>{solution}</p></div><div><h2>What was delivered</h2><p>{results}</p></div></div>
    </section>
  );
}
