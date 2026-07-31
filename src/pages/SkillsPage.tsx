import { Helmet } from "react-helmet-async";
import { Terminal, BrainCircuit, Server, Globe, Database } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit size={24} />,
      skills: ["Scikit-Learn", "Pandas & NumPy", "TensorFlow / PyTorch", "NLP (NLTK, SpaCy)", "Data Visualization", "Predictive Modeling", "Feature Engineering"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["Python", "Flask & Django", "RESTful APIs", "PHP", "Node.js", "Express", "Microservices Architecture"]
    },
    {
      title: "Frontend Development",
      icon: <Globe size={24} />,
      skills: ["React.js", "TypeScript / JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design", "Web Accessibility (a11y)"]
    },
    {
      title: "Databases & DevOps Tools",
      icon: <Database size={24} />,
      skills: ["MySQL / PostgreSQL", "MongoDB", "Git & GitHub Actions", "Docker / Containerization", "Linux / Bash Scripting", "CI/CD Pipelines", "AWS Basics"]
    }
  ];

  return (
    <div className="fade-in" style={{ padding: '0 2rem' }}>
      <Helmet>
        <title>Technical Skills | Prithika Kannan</title>
      </Helmet>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
        <Terminal size={18} />
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>prithika/skills</span>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
        Technical Arsenal
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>
        A comprehensive breakdown of the languages, frameworks, methodologies, and infrastructure tools I use to build intelligent applications and scalable backend systems. 
        I continuously expand this toolkit, prioritizing technologies that offer strong typing, excellent community support, and predictable performance at scale. 
        Rather than just learning syntax, I focus on understanding the underlying paradigms of these tools to utilize them most effectively.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="conversational-block" style={{ border: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
              {category.icon}
              <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)' }}>{category.title}</span>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--bg-main)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-main)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
