import { NavLink } from "react-router-dom";
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Cpu,
  Terminal,
  Mail,
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
  
  // Relying on the 'dark' class on HTML
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light', !isDark);
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

  const NavItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => `nav-item flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-xl text-[var(--text-secondary)] transition-all duration-300 font-medium ${isActive ? "active bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20" : "hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] hover:translate-x-1"}`} 
      onClick={() => isMobile && setIsMobileOpen(false)}
    >
      {({ isActive }) => (
        <>
          <Icon size={18} strokeWidth={isActive ? 2 : 1.5} className={isActive ? 'text-white' : ''} />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <>
      {/* Mobile Header / Desktop Floating Toggle */}
      {(isMobile || collapsed) && (
        <div className={`fixed top-0 left-0 z-40 p-4 flex items-center ${isMobile ? 'bg-[var(--bg-main)] w-full border-b border-[var(--border-subtle)]' : 'bg-transparent w-auto'}`}>
          <button 
            onClick={() => isMobile ? setIsMobileOpen(true) : setIsDesktopCollapsed(false)} 
            className="text-[var(--text-secondary)] p-2 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
          >
            <PanelLeft size={24} />
          </button>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`app-sidebar ${isMobile && !isMobileOpen ? 'collapsed' : isMobile && isMobileOpen ? 'open' : ''} 
          flex flex-col h-screen bg-[var(--bg-sidebar)] transition-all duration-500 ease-in-out border-r border-[var(--border-subtle)]`}
        style={{ 
          width: isMobile ? '280px' : (collapsed ? '0px' : '280px'),
          borderRightWidth: collapsed ? '0px' : '1px',
          transform: isMobile ? (isMobileOpen ? 'translateX(0)' : 'translateX(-100%)') : (collapsed ? 'translateX(-100%)' : 'translateX(0)'),
          position: isMobile ? 'fixed' : 'relative',
          zIndex: isMobile ? 50 : 10,
        }}
      >
        <div className="flex flex-col h-full w-[280px]">
          
          {/* Header */}
          <div className="p-6 pb-4 flex justify-between items-center">
            <div className="font-heading font-bold text-2xl text-[var(--text-primary)] tracking-tight flex items-center gap-3">
              <div className="bg-[var(--accent)] text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md shadow-[var(--accent)]/20">
                <Sparkles size={16} strokeWidth={2.5} />
              </div>
              Prithika.
            </div>
            <div className="flex gap-1">
              <button 
                className="text-[var(--text-secondary)] p-2 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
                onClick={() => isMobile ? setIsMobileOpen(false) : setIsDesktopCollapsed(true)}
                title="Close sidebar"
              >
                <PanelLeftClose size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
          
          <nav className="flex-grow overflow-y-auto overflow-x-hidden pb-4 flex flex-col mt-4">
            <div className="px-2 space-y-1">
              <NavItem to="/" icon={Home} label="Home" />
              <NavItem to="/about" icon={User} label="About" />
              <NavItem to="/skills" icon={Cpu} label="Skills" />
              <NavItem to="/projects" icon={Code} label="Projects" />
              <NavItem to="/resume" icon={Briefcase} label="Experience" />
              <NavItem to="/open-source" icon={Terminal} label="Open Source" />
              <NavItem to="/contact" icon={Mail} label="Contact" />
            </div>
          </nav>

          {/* Bottom User Profile Section */}
          <div className="p-4 m-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-hover)] text-white flex justify-center items-center text-sm font-bold shadow-inner">
                PK
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold text-[var(--text-primary)]">Prithika K.</div>
                <div className="text-xs text-[var(--text-tertiary)] font-medium">Software Engineer</div>
              </div>
            </div>
            <div className="flex">
              <button 
                onClick={toggleTheme} 
                className="text-[var(--text-secondary)] p-2 rounded-xl hover:bg-[var(--bg-hover)] transition-colors hover:text-[var(--text-primary)]" 
                title="Toggle Theme"
              >
                {isDarkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
              </button>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}
