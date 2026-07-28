import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white border-b-4 border-black z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter">
            <div className="w-10 h-10 bg-primary border-4 border-black flex items-center justify-center brutalist-shadow">
              <span className="text-white">P</span>
            </div>
            <span>Prithika</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-bold uppercase transition-all duration-300 border-2 ${
                  isActive(item.path)
                    ? "bg-accent border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1"
                    : "border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="ml-4 px-6 py-2 text-sm font-bold uppercase bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-black hover:bg-accent hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t-4 border-black pb-4 pt-4 absolute w-full left-0">
            <div className="px-4 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg font-bold uppercase border-2 ${
                    isActive(item.path)
                      ? "bg-accent border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "border-transparent hover:border-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
