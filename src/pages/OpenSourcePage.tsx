import { Helmet } from "react-helmet-async";
import { Terminal, GitPullRequest, GitFork, Star, GitBranch } from "lucide-react";

export default function OpenSourcePage() {
  const contributions = [
    {
      repo: "prithika/machine-learning-toolkit",
      description: "A robust collection of utility scripts and algorithms engineered for preprocessing massive datasets and training standard predictive models quickly. Built to reduce boilerplate in ML workflows.",
      stars: 12,
      forks: 3,
      language: "Python",
      type: "Maintainer"
    },
    {
      repo: "open-source/data-analyzer",
      description: "Contributed directly to optimizing the core SQL querying engine, significantly reducing latency on heavy aggregations, and improving the modularity of the data visualization components.",
      stars: 345,
      forks: 89,
      language: "TypeScript",
      type: "Contributor"
    },
    {
      repo: "prithika/portfolio-v1",
      description: "My legacy open-source portfolio template built with React, Vite, and Tailwind CSS. It serves as a foundational boilerplate for developers looking to establish a web presence quickly. Feel free to fork it!",
      stars: 5,
      forks: 1,
      language: "React",
      type: "Maintainer"
    }
  ];

  const stats = [
    { label: "Public Repositories", value: "24+" },
    { label: "Total Contributions", value: "150+" },
    { label: "Pull Requests Merged", value: "30+" },
    { label: "GitHub Followers", value: "45" }
  ];

  return (
    <div className="fade-in" style={{ padding: '0 2rem' }}>
      <Helmet>
        <title>Open Source & Community | Prithika Kannan</title>
      </Helmet>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
        <Terminal size={18} />
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>prithika/open-source</span>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
        Building in the open
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>
        I strongly believe in the power and philosophy of open-source software. The community has provided me with incredible tools, and giving back is a core part of my engineering ethos.
        Contributing to public repositories helps me continuously learn, share architectural knowledge, undergo rigorous peer review, and ultimately build better software together with developers globally.
      </p>

      <a 
        href="https://github.com/prithikakannan" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          padding: '1rem 2rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          fontWeight: 500,
          fontSize: '15px',
          fontFamily: 'var(--font-sans)',
          textDecoration: 'none',
          transition: 'background-color var(--transition-fast)',
          marginBottom: '4rem'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <GitBranch size={18} /> Follow my work on GitHub
      </a>

      {/* Stats Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sidebar)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>{stat.value}</div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Repositories Section */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2rem', fontFamily: 'var(--font-sans)' }}>
        Highlighted Repositories
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        {contributions.map((repo, idx) => (
          <div key={idx} className="conversational-block" style={{ border: '1px solid var(--border-subtle)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <GitBranch size={20} color="var(--text-secondary)" />
                <a href={`https://github.com/${repo.repo}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
                  {repo.repo.split('/').pop()}
                </a>
              </div>
              <span style={{ fontSize: '13px', padding: '0.35rem 0.75rem', backgroundColor: 'var(--claude-beige)', borderRadius: 'var(--radius-full)', color: 'var(--claude-orange)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                {repo.type}
              </span>
            </div>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, marginBottom: '2rem', lineHeight: 1.7, fontFamily: 'var(--font-serif)', flexGrow: 1 }}>
              {repo.description}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '14px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--claude-orange)' }}></div>
                {repo.language}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={16} /> {repo.stars}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GitFork size={16} /> {repo.forks}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
