import { NavLink } from "react-router-dom";
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Cpu,
  Terminal,
  Mail,
  Download,
  ChevronsUpDown,
  Search,
  PanelLeftClose,
  PanelLeft,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";
import { useState, useEffect } from "react";

export function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setIsDarkMode(isDark);
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setIsDesktopCollapsed(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const collapsed = !isMobile && isDesktopCollapsed;



  return (
    <>
      {/* Mobile Header / Desktop Floating Toggle */}
      {(isMobile || collapsed) && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 40,
          padding: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: isMobile ? 'var(--bg-main)' : 'transparent',
          width: isMobile ? '100%' : 'auto',
          borderBottom: isMobile ? '1px solid var(--border-subtle)' : 'none'
        }}>
          <button 
            onClick={() => isMobile ? setIsMobileOpen(true) : setIsDesktopCollapsed(false)} 
            style={{ 
              color: 'var(--text-secondary)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: collapsed ? 'transparent' : 'transparent',
              transition: 'background-color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <PanelLeft size={24} />
          </button>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isMobile && isMobileOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 40 }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`app-sidebar ${isMobile && !isMobileOpen ? 'collapsed' : isMobile && isMobileOpen ? 'open' : ''}`}
        style={{ 
          width: isMobile ? '260px' : (collapsed ? '0px' : '260px'),
          borderRight: collapsed ? 'none' : '1px solid var(--border-subtle)',
          transform: isMobile ? (isMobileOpen ? 'translateX(0)' : 'translateX(-100%)') : (collapsed ? 'translateX(-100%)' : 'translateX(0)'),
          position: isMobile ? 'fixed' : 'relative',
          zIndex: isMobile ? 50 : 10,
          height: '100vh',
          backgroundColor: 'var(--bg-sidebar)', // Matching the Claude exact sidebar color
          transition: 'transform var(--transition-normal), width var(--transition-normal)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ width: '260px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          
          {/* Header */}
          <div style={{ padding: '1.25rem 1rem 0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontWeight: 600, 
              fontSize: '22px', 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}>
              <div style={{
                backgroundColor: 'var(--claude-beige)',
                color: 'var(--claude-orange)',
                width: '26px',
                height: '26px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} strokeWidth={2.5} />
              </div>
              Prithika
            </div>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <button style={iconButtonStyle} title="Search">
                <Search size={18} strokeWidth={2} />
              </button>
              <button 
                style={iconButtonStyle} 
                onClick={() => isMobile ? setIsMobileOpen(false) : setIsDesktopCollapsed(true)}
                title="Close sidebar"
              >
                <PanelLeftClose size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
          
          <nav style={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ padding: '0.5rem' }}>
              <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Home size={18} strokeWidth={1.5} /> Home
              </NavLink>
              
              <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <User size={18} strokeWidth={1.5} /> About
              </NavLink>
              
              <NavLink to="/skills" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Cpu size={18} strokeWidth={1.5} /> Skills
              </NavLink>
              
              <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Code size={18} strokeWidth={1.5} /> Projects
              </NavLink>
              
              <NavLink to="/resume" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Briefcase size={18} strokeWidth={1.5} /> Experience
              </NavLink>
              
              <NavLink to="/open-source" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Terminal size={18} strokeWidth={1.5} /> Open Source
              </NavLink>
              
              <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={() => isMobile && setIsMobileOpen(false)}>
                <Mail size={18} strokeWidth={1.5} /> Contact
              </NavLink>
            </div>
          </nav>

          {/* Bottom User Profile Section */}
          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', color: 'var(--bg-main)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', fontWeight: 600 }}>
                PK
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2 }}>Prithika K</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Free plan</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <button onClick={toggleTheme} style={{ ...iconButtonStyle, border: '1px solid var(--border-subtle)', borderRadius: '6px' }} title="Toggle Theme">
                {isDarkMode ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
              </button>
              <button style={{ ...iconButtonStyle, border: '1px solid var(--border-subtle)', borderRadius: '6px' }}>
                <ChevronsUpDown size={14} strokeWidth={1.5} color="var(--text-secondary)" />
              </button>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}

const iconButtonStyle = {
  color: 'var(--text-secondary)',
  padding: '0.35rem',
  borderRadius: 'var(--radius-sm)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color var(--transition-fast)'
};
