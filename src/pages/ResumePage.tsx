import { Helmet } from 'react-helmet-async';
import { Terminal, Download, ExternalLink, Briefcase } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/Resume_Prithika.pdf";

  return (
    <div className="fade-in" style={{ padding: '0 2rem' }}>
      <Helmet>
        <title>Resume - Prithika Kannan</title>
      </Helmet>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
        <Terminal size={18} />
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>prithika/resume</span>
      </div>

      <h1 style={{ fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)' }}>
        Resume & Experience
      </h1>
      
      <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>
        A detailed overview of my professional engineering experience, academic qualifications, and the core competencies that define my work.
        Below you can view my full resume. For a quick reference of my skills and tech stack, please visit the Skills section, or explore the Case Studies to see how I apply these concepts in production.
      </p>
        
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '4rem', width: '100%' }}>
        <a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            gap: '0.5rem',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-main)',
            padding: '0.875rem 0.5rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 500,
            fontSize: '14px',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
            transition: 'opacity var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <ExternalLink size={18} /> Open in New Tab
        </a>
        <a 
          href={resumeUrl} 
          download="Resume_Prithika.pdf"
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            gap: '0.5rem',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            padding: '0.875rem 0.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            fontWeight: 500,
            fontSize: '14px',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
            transition: 'background-color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Download size={18} /> Download PDF
        </a>
      </div>

      <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--bg-sidebar)', height: '700px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <object
          data={resumeUrl}
          type="application/pdf"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <div style={{ padding: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>
              It appears your browser doesn't support embedded PDFs.
            </p>
            <a 
              href={resumeUrl} 
              download="Resume_Prithika.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px'
              }}
            >
              <Download size={18} /> Download PDF Instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
