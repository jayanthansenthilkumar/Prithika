import { Helmet } from "react-helmet-async";
import { Terminal, GitBranch } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="fade-in" style={{ padding: '0 2rem' }}>
      <Helmet>
        <title>Portfolio Projects | Prithika Kannan - Software Engineer</title>
      </Helmet>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
        <Terminal size={18} />
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>prithika/projects</span>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>
        Projects & Case Studies
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>
        Here is a comprehensive overview of my recent software engineering and machine learning projects. 
        Each case study demonstrates my ability to identify complex problems, architect scalable solutions, and deliver tangible performance improvements. 
        I prioritize maintainable code, robust database design, and intelligent algorithm integration in every system I build.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projects.map((project) => (
          <div key={project.id} className="conversational-block" style={{ border: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-sans)' }}>
                {project.title}
              </h2>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--claude-orange)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
                title="View Source on GitHub"
              >
                <GitBranch size={24} />
              </a>
            </div>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '2rem', margin: 0, fontFamily: 'var(--font-serif)' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>The Problem context:</strong>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
                  {project.problem} 
                  This structural inefficiency caused downstream delays, frustrated end-users, and made it difficult for administrators to act on real-time data efficiently.
                </p>
              </div>
              
              <div>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>The Engineered Solution:</strong>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
                  {project.solution}
                  By rigorously testing the new implementation and adhering to CI/CD best practices, I ensured the deployment was stable, fault-tolerant, and ready for scaling.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ width: '100%', fontSize: '14px', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Technologies Used</div>
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '0.35rem 1rem',
                    backgroundColor: 'var(--claude-beige)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    color: 'var(--claude-orange)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
