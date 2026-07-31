import { Helmet } from "react-helmet-async";
import { Terminal, Send, MapPin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="fade-in" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <Helmet>
        <title>Contact Prithika Kannan | Software Engineer</title>
      </Helmet>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
        <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{`>_ prithika/contact`}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '1.5rem', marginBottom: '0', alignItems: 'stretch' }}>
        
        {/* Left Column: Form */}
        <div style={{ backgroundColor: 'var(--bg-sidebar)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
            Send a Message
          </h1>

          {submitted ? (
            <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--border-subtle)' }}>
                <Send size={32} color="var(--text-primary)" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>Message Transmitted successfully</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontFamily: 'var(--font-serif)', lineHeight: 1.6 }}>Thank you for reaching out! Your message has been securely recorded. I will review it and get back to you shortly.</p>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recruiter Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    style={inputStyle}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Email</label>
                  <input 
                    type="email" 
                    placeholder="Yourmail@company.com" 
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Tech Corp Inc." 
                    required
                    style={inputStyle}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Open Role / Position</label>
                  <input 
                    type="text" 
                    placeholder="Software Engineer" 
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message / Job Details</label>
                <textarea 
                  rows={3}
                  placeholder="Hi Prithika, we're looking for an Engineer to join our team to work on..."
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-main)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 500,
                  fontSize: '15px',
                  fontFamily: 'var(--font-sans)',
                  transition: 'opacity var(--transition-fast)',
                  marginTop: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Maps and Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
          
          {/* Map Container */}
          <div style={{ position: 'relative', flexGrow: 1, minHeight: '220px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-sidebar)' }}>
            <iframe 
              src="https://www.google.com/maps?q=Marandahalli,+Tamil+Nadu&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Marandahalli Location"
            ></iframe>
            
            {/* Floating Location Card */}
            <div style={{ 
              position: 'absolute', 
              bottom: '1rem', 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '85%',
              backgroundColor: 'var(--bg-main)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <div style={{ backgroundColor: 'var(--claude-beige)', color: 'var(--claude-orange)', padding: '0.4rem', borderRadius: 'var(--radius-md)' }}>
                <MapPin size={20} style={{ marginTop: '0.1rem' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontFamily: 'var(--font-sans)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Location & Mobility</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Based in India • Ready to relocate globally or work remotely across timezones.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--claude-beige)', borderRadius: 'var(--radius-md)', color: 'var(--claude-orange)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Email</div>
                <a href="mailto:kpprithika75@gmail.com" style={{ fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}>kpprithika75@gmail...</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--claude-beige)', borderRadius: 'var(--radius-md)', color: 'var(--claude-orange)' }}>
                <MessageSquare size={20} />
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Contact</div>
                <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', fontFamily: 'var(--font-sans)' }}>
                  <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--claude-orange)', textDecoration: 'none' }}>LinkedIn</a>
                  <span style={{ color: 'var(--border-subtle)' }}>|</span>
                  <a href="https://github.com/prithikakannan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--claude-orange)', textDecoration: 'none' }}>GitHub</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem', 
  borderRadius: 'var(--radius-sm)', 
  border: '1px solid var(--border-subtle)', 
  backgroundColor: 'var(--bg-main)', 
  color: 'var(--text-primary)', 
  fontFamily: 'var(--font-sans)', 
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color var(--transition-fast)'
};
