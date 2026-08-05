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
  Sun } from
"lucide-react";
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

  const NavItem = ({ to, icon: Icon, label }: {to: string;icon: any;label: string;}) =>
  <NavLink
    to={to}

    onClick={() => isMobile && setIsMobileOpen(false)}>
    
      {({ isActive }) =>
    <>
          <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
          <span>{label}</span>
        </>
    }
    </NavLink>;


  return (
    <>
      {/* Mobile Header / Desktop Floating Toggle */}
      {(isMobile || collapsed) &&
      <div>
          <button
          onClick={() => isMobile ? setIsMobileOpen(true) : setIsDesktopCollapsed(false)}>

          
            <PanelLeft size={24} />
          </button>
        </div>
      }

      {/* Backdrop for mobile */}
      {isMobile && isMobileOpen &&
      <div

        onClick={() => setIsMobileOpen(false)} />

      }

      {/* Sidebar Container */}
      <aside


        style={{
          width: isMobile ? '280px' : collapsed ? '0px' : '280px',
          borderRightWidth: collapsed ? '0px' : '1px',
          transform: isMobile ? isMobileOpen ? 'translateX(0)' : 'translateX(-100%)' : collapsed ? 'translateX(-100%)' : 'translateX(0)',
          position: isMobile ? 'fixed' : 'relative',
          zIndex: isMobile ? 50 : 10
        }}>
        
        <div>
          
          {/* Header */}
          <div>
            <div>
              <div>
                <Sparkles size={16} strokeWidth={2.5} />
              </div>
              Prithika.
            </div>
            <div>
              <button

                onClick={() => isMobile ? setIsMobileOpen(false) : setIsDesktopCollapsed(true)}
                title="Close sidebar">
                
                <PanelLeftClose size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
          
          <nav>
            <div>
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
          <div>
            <div>
              <div>
                PK
              </div>
              <div>
                <div>Prithika K.</div>
                <div>Software Engineer</div>
              </div>
            </div>
            <div>
              <button
                onClick={toggleTheme}

                title="Toggle Theme">
                
                {isDarkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
              </button>
            </div>
          </div>

        </div>
      </aside>
    </>);

}