import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 text-xl font-bold font-mono tracking-tighter">
            <div className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
              <Terminal size={16} className="text-primary" />
            </div>
            <span className="text-white">prithika<span className="text-primary">.dev</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="mailto:kpprithika75@gmail.com" 
              className="ml-4 px-4 py-2 text-sm font-bold bg-white text-black hover:bg-gray-200 rounded-md transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 shadow-2xl pb-4 pt-2">
            <div className="px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="mailto:kpprithika75@gmail.com" 
                className="block px-4 py-3 mt-4 text-sm font-bold bg-white text-black hover:bg-gray-200 rounded-lg transition-colors text-center"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
