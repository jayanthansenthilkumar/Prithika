import { Helmet } from "react-helmet-async";
import { Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>About Prithika Kannan | Background & Education</title>
      </Helmet>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
        <Terminal size={18} />
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>prithika/about</span>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2rem', fontFamily: 'var(--font-sans)' }}>
        Background & Philosophy
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)' }}>
          I am a product-focused Software Engineer based in India, crafting data-driven experiences grounded in proven engineering traditions. 
          My technical journey began with an intense curiosity about how scalable systems could be built from the ground up to support thousands of concurrent operations seamlessly.
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)' }}>
          My approach bridges analytical precision with creative problem-solving. Whether I am architecting a distributed backend system in Python and Flask, or designing an intuitive, modern frontend interface using React and modern CSS, I aim to build scalable, client-centric applications that align seamlessly with complex AI-driven transformation goals.
          I firmly believe that excellent code is not just functional, but highly readable, maintainable, and heavily tested. 
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, fontFamily: 'var(--font-serif)' }}>
          Over the past few years, I have actively expanded my expertise into Machine Learning, recognizing that the future of software lies at the intersection of robust web infrastructure and intelligent data processing. I build systems that don't just store data, but learn from it.
        </p>
      </div>

      <div style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid var(--border-subtle)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2rem', fontFamily: 'var(--font-sans)' }}>Experience & Education</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
          <div className="conversational-block" style={{ border: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>RSUN Technologies</h3>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Software Engineer Intern • Present</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
              Contributing directly to core full-stack application development. 
              My primary responsibilities include optimizing existing backend data pipelines, minimizing database query latency, and actively participating in high-level architectural decisions to enhance overall system scalability. 
              I work closely with senior engineers to implement robust RESTful APIs and transition legacy components into modern, maintainable codebases.
            </p>
          </div>

          <div className="conversational-block" style={{ border: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>M. Kumarasamy College of Engineering</h3>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bachelor of Engineering • Current</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
              Building a rigorous foundation in computer science principles, advanced data structures, complex algorithms, and agile software engineering methodologies. 
              My coursework places heavy emphasis on systems architecture, mathematical logic for machine learning, and hands-on laboratory work where theoretical concepts are applied to real-world hardware and software problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
