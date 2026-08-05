import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Open Source", path: "/open-source" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 xl:px-24 flex items-center justify-center",
        isScrolled ? "py-2" : "py-6"
      )}
    >
      <div 
        className={cn(
          "flex items-center justify-between w-full max-w-[1400px] transition-all duration-500",
          isScrolled ? "glass rounded-full px-6 py-3" : "px-0"
        )}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-sm tracking-tighter group-hover:scale-105 transition-transform">
            PK
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight hidden sm:block group-hover:text-zinc-300 transition-colors">
            Prithika Kannan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white",
                isActive(link.path) ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="rounded-full px-6 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl border border-white/10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium p-3 rounded-xl transition-colors",
                  isActive(link.path) ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <Button className="w-full rounded-xl py-6 bg-white text-zinc-950 text-lg">Get in touch</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}