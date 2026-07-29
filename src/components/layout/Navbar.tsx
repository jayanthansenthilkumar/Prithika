
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, Code2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  const handleToggle = () => {
    setResourcesOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200 border-b border-gray-200",
        isScrolled 
          ? "bg-[#f8f9fa]/90 backdrop-blur" 
          : "bg-[#f8f9fa]"
      )}
    >
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors shrink-0">
            <span className="text-lg font-bold font-serif italic">Austral AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-[13px] font-mono text-gray-700">
            
            {/* Product Dropdown (Replacing Resources for layout demo) */}
            <div 
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={handleToggle}
                className={cn(
                  "flex items-center gap-1 hover:text-gray-900 transition-colors",
                  resourcesOpen && "text-gray-900"
                )}
              >
                Platform 
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", resourcesOpen && "rotate-180")} />
              </button>

              {/* Mega Menu Dropdown */}
              <div 
                className={cn(
                  "absolute top-full left-0 mt-4 w-[calc(100vw-2rem)] md:w-[700px] lg:w-[820px] bg-white border border-gray-200 shadow-lg rounded-sm flex flex-col md:flex-row z-50 transition-all duration-200 origin-top-left",
                  resourcesOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                
                {/* PRODUCT */}
                <div className="flex-1 p-6">
                  <h3 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-6">Product</h3>
                  <ul className="space-y-5">
                    <li>
                      <a href="https://aventrea.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block" onClick={() => setResourcesOpen(false)}>
                        <div className="text-[15px] font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Aventrea.me</div>
                        <div className="text-[11px] font-mono text-gray-500 mt-1">The Living Digital Identity Platform</div>
                      </a>
                    </li>
                    <li>
                      <a href="https://aventrea.vercel.app/#features" target="_blank" rel="noopener noreferrer" className="group block" onClick={() => setResourcesOpen(false)}>
                        <div className="text-[15px] font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Features</div>
                        <div className="text-[11px] font-mono text-gray-500 mt-1">Explore platform capabilities</div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-100 hidden md:block" />

                {/* DEVELOPERS */}
                <div className="flex-1 p-6">
                  <h3 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-6">Developers</h3>
                  <ul className="space-y-5">
                    <li>
                      <Link to="/docs" className="group block" onClick={() => setResourcesOpen(false)}>
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Documentation</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group block" onClick={() => setResourcesOpen(false)}>
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">API Reference</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-100 hidden md:block" />

                {/* COMPANY */}
                <div className="flex-1 p-6 bg-gray-50 rounded-r-sm">
                  <h3 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-6">Company</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors block" onClick={() => setResourcesOpen(false)}>About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors block" onClick={() => setResourcesOpen(false)}>Blog</Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors block" onClick={() => setResourcesOpen(false)}>Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors block" onClick={() => setResourcesOpen(false)}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              Solutions <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link to="/developers" className="hover:text-gray-900 transition-colors">Developers</Link>
            <Link to="/security" className="hover:text-gray-900 transition-colors">Security</Link>
            <Link to="/company" className="hover:text-gray-900 transition-colors">Company</Link>
            <Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          
          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 border border-gray-200 rounded text-[11px] font-mono bg-white text-gray-500 shadow-sm">
              Ctrl + Shift + P
            </kbd>
          </button>

          <div className="w-px h-4 bg-gray-300 mx-1"></div>

          <button className="flex items-center gap-1 text-[13px] font-mono text-gray-700 hover:text-gray-900 transition-colors">
            Account <ChevronDown className="w-3.5 h-3.5" />
          </button>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md font-mono text-[13px] px-3 h-8 flex items-center gap-2 shadow-sm">
            Book Demo 
            <kbd className="px-1.5 py-0.5 bg-blue-500/80 rounded text-[11px] font-mono border border-blue-400/30">D</kbd>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 p-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4 font-mono text-sm absolute top-14 left-0 w-full z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto shadow-xl">
          <Link to="/platform" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
          <Link to="/solutions" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link to="/developers" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Developers</Link>
          <Link to="/security" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Security</Link>
          <Link to="/company" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Company</Link>
          <Link to="/pricing" className="block text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
            <Button className="w-full justify-center bg-blue-600 rounded-sm text-white">Book Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
