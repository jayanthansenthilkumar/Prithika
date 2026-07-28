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
    <nav className="fixed top-0 w-full bg-cream z-50 transition-all border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl font-black tracking-wide">
            <div className="w-12 h-12 bg-yellow border-[3px] border-black flex items-center justify-center rounded-full brutalist-shadow">
              <span className="text-black text-xl">P</span>
            </div>
            <span>Prithika</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2 text-sm font-bold transition-all duration-300 border-[3px] rounded-full ${
                  isActive(item.path)
                    ? "bg-white border-black brutalist-shadow -translate-y-1"
                    : "border-transparent hover:border-black hover:brutalist-shadow hover:-translate-y-1 hover:bg-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="ml-4 px-6 py-2 text-sm font-bold bg-blue text-white border-[3px] border-black rounded-full hover:bg-white hover:text-black transition-colors brutalist-shadow"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-[3px] border-black bg-white rounded-full hover:bg-yellow brutalist-shadow transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cream border-t-[3px] border-black pb-4 pt-4 absolute w-full left-0 border-b-[3px]">
            <div className="px-4 space-y-3 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3 text-lg font-bold rounded-full border-[3px] ${
                    isActive(item.path)
                      ? "bg-white border-black brutalist-shadow"
                      : "border-transparent hover:border-black bg-white/50"
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
