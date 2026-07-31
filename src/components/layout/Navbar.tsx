import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-200 border-b-[3px] border-foreground bg-background"
      )}
    >
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center text-foreground hover:bg-primary px-2 py-1 border-[3px] border-transparent hover:border-foreground rounded-md transition-colors shrink-0">
            <span className="text-xl font-black font-heading uppercase tracking-tighter">Prithika Kannan</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-sm font-bold font-mono text-foreground uppercase">
            <Link to="/" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/') ? "bg-primary border-foreground shadow-brutal" : "")}>Home</Link>
            <Link to="/about" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/about') ? "bg-primary border-foreground shadow-brutal" : "")}>About</Link>
            <Link to="/skills" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/skills') ? "bg-primary border-foreground shadow-brutal" : "")}>Skills</Link>
            <Link to="/projects" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/projects') ? "bg-primary border-foreground shadow-brutal" : "")}>Projects</Link>
            <Link to="/resume" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/resume') ? "bg-primary border-foreground shadow-brutal" : "")}>Resume</Link>
            <Link to="/open-source" className={cn("transition-all px-3 py-1 border-[3px] border-transparent hover:border-foreground rounded-md hover:bg-primary hover:-translate-y-1 hover:shadow-brutal", isActive('/open-source') ? "bg-primary border-foreground shadow-brutal" : "")}>Open Source</Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button size="default" className="font-mono text-sm px-4">
              Contact Me 
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:bg-primary border-[3px] border-transparent hover:border-foreground rounded-md p-2 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b-[3px] border-foreground px-4 py-4 space-y-4 font-mono font-bold uppercase text-base absolute top-16 left-0 w-full z-40 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-brutal-lg">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/') ? "bg-primary border-foreground" : "text-foreground")}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/about') ? "bg-primary border-foreground" : "text-foreground")}>About</Link>
          <Link to="/skills" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/skills') ? "bg-primary border-foreground" : "text-foreground")}>Skills</Link>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/projects') ? "bg-primary border-foreground" : "text-foreground")}>Projects</Link>
          <Link to="/resume" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/resume') ? "bg-primary border-foreground" : "text-foreground")}>Resume</Link>
          <Link to="/open-source" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/open-source') ? "bg-primary border-foreground" : "text-foreground")}>Open Source</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={cn("block w-full text-left p-3 border-[3px] border-transparent rounded-md hover:border-foreground hover:bg-primary transition-colors", isActive('/contact') ? "bg-primary border-foreground" : "text-foreground")}>Contact</Link>
          <div className="pt-4 border-t-[3px] border-foreground flex flex-col gap-2">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button className="w-full justify-center">Contact Me</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
