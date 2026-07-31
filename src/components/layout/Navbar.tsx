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
      
    >
      <div >
        <div >
          <Link to="/" >
            <span >Prithika Kannan</span>
          </Link>

          <nav >
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/skills" >Skills</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/resume" >Resume</Link>
            <Link to="/open-source" >Open Source</Link>
          </nav>
        </div>
        
        <div >
          <Link to="/contact">
            <Button size="default" >
              Contact Me 
            </Button>
          </Link>
        </div>

        <div >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            
          >
            {mobileMenuOpen ? <X  /> : <Menu  />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div >
          <Link to="/" onClick={() => setMobileMenuOpen(false)} >Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} >About</Link>
          <Link to="/skills" onClick={() => setMobileMenuOpen(false)} >Skills</Link>
          <Link to="/projects" onClick={() => setMobileMenuOpen(false)} >Projects</Link>
          <Link to="/resume" onClick={() => setMobileMenuOpen(false)} >Resume</Link>
          <Link to="/open-source" onClick={() => setMobileMenuOpen(false)} >Open Source</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} >Contact</Link>
          <div >
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} >
              <Button >Contact Me</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
