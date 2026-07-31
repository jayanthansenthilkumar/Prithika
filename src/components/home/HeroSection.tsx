import { ArrowRight, Code, Terminal, Database, Sparkles, BrainCircuit, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', padding: '0 2rem' }}>
      
      {/* AI Assistant Greeting Style */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
        <Sparkles size={18} />
        <span style={{ fontSize: '14px', fontWeight: 500 }}>Hello, I'm</span>
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0, fontFamily: 'var(--font-sans)' }}>
        Prithika Kannan.
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.8, fontFamily: 'var(--font-serif)' }}>
        I'm a Product-focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions. 
        I specialize in distributed systems, full-stack development, and integrating machine learning models into highly scalable web architectures. 
        By blending analytical rigor with creative problem-solving, I design intuitive interfaces that feel human, while engineering robust, performant backends that power them reliably.
        My current focus is on building AI-native applications that augment human capabilities and streamline complex workflows.
      </p>

      {/* Primary Actions */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Link 
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-main)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
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
            borderRadius: 'var(--radius-md)',
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '4rem' }}>
        
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
