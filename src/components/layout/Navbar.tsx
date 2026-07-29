import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
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
          <a href="#" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors shrink-0" onClick={() => scrollToSection('home')}>
            <span className="text-lg font-bold font-serif italic">Prithika Kannan</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[13px] font-mono text-gray-700">
            <button onClick={() => scrollToSection('skills')} className="hover:text-gray-900 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-gray-900 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-gray-900 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-gray-900 transition-colors">Education</button>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:kpprithika75@gmail.com">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md font-mono text-[13px] px-3 h-8 flex items-center gap-2 shadow-sm">
              Contact Me 
            </Button>
          </a>
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
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-600 hover:text-gray-900">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-600 hover:text-gray-900">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-600 hover:text-gray-900">Projects</button>
          <button onClick={() => scrollToSection('education')} className="block w-full text-left text-gray-600 hover:text-gray-900">Education</button>
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
            <a href="mailto:kpprithika75@gmail.com" className="w-full">
              <Button className="w-full justify-center bg-blue-600 rounded-sm text-white">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
