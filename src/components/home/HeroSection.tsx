import { ArrowRight, Code, Terminal, Database, Sparkles, BrainCircuit, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      
      {/* AI Assistant Greeting Style (Claude-like Serif Header) */}
      <h1 style={{ 
        fontSize: 'clamp(2rem, 6vw, 2.75rem)', 
        fontWeight: 400, 
        color: 'var(--text-primary)', 
        margin: 0, 
        fontFamily: 'var(--font-serif)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
        lineHeight: 1.2
      }}>
        <div style={{ color: 'var(--claude-orange)' }}><Sparkles size={32} strokeWidth={2} /></div>
        Hello, I'm Prithika.
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.8, fontFamily: 'var(--font-sans)' }}>
        I'm a Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. 
        I specialize in distributed systems, full-stack development, and integrating machine learning models into highly scalable web architectures. 
        By blending analytical rigor with creative problem-solving, I design intuitive interfaces that feel human, while engineering robust, performant backends that power them reliably.
        My current focus is on building AI-native applications that augment human capabilities and streamline complex workflows.
      </p>

      {/* Primary Actions (Claude Pill Style) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
        <Link 
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-main)',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px', // Pill shape
            fontWeight: 500,
            fontSize: '14px',
            fontFamily: 'var(--font-sans)',
            transition: 'opacity var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Explore Projects <ArrowRight size={16} />
        </Link>
        <Link 
          to="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px', // Pill shape
            border: '1px solid var(--border-subtle)',
            fontWeight: 500,
            fontSize: '14px',
            fontFamily: 'var(--font-sans)',
            transition: 'background-color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Contact Me
        </Link>
      </div>

      {/* Grid using full width */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '4rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '4rem' }}>
        
        <div className="conversational-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            <Globe size={20} />
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)' }}>Full-Stack Engineering</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
            I build robust, end-to-end web applications using Python, HTML, CSS, JavaScript, and modern frameworks like React and Flask. I emphasize creating seamless user experiences powered by secure and maintainable server-side logic. My architecture prioritizes decoupling, ensuring that frontends remain snappy while backends can scale horizontally.
          </p>
        </div>

        <div className="conversational-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            <Server size={20} />
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)' }}>Data-Driven Systems</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
            Designing scalable backend architectures and optimizing relational databases (SQL, PostgreSQL) to handle complex queries efficiently. I implement intelligent caching layers, ensure high availability, and build RESTful microservices that serve as the reliable backbone for high-traffic applications.
          </p>
        </div>

        <div className="conversational-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            <BrainCircuit size={20} />
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)' }}>Applied Machine Learning</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.7 }}>
            Engineering predictive ML models and integrating them into production environments. From optimizing datasets using Pandas and Scikit-Learn to deploying inference APIs with Flask, I bridge the gap between data science research and tangible user-facing product features.
          </p>
        </div>

      </div>

    </section>
  );
}
