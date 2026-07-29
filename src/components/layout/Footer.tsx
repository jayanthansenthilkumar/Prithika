import { Link } from "react-router-dom";
import { Terminal, Code2, MessageCircle, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <>
      <div
        className="w-full relative overflow-hidden bg-white flex items-center justify-center py-2 md:py-4 select-none border-t border-gray-100"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.05) 0, rgba(0, 0, 0, 0.05) 1px, transparent 1px, transparent 8px)'
        }}
      >
        <div
          className="font-serif italic font-bold text-transparent text-[16vw] sm:text-[14vw] md:text-[12vw] tracking-tighter leading-none whitespace-nowrap"
          style={{ WebkitTextStroke: '2px rgba(0,0,0,0.25)' }}
        >
          Austral AI
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center text-gray-900 mb-4">
                <span className="text-lg font-bold font-serif italic">Austral AI</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs font-mono">
                High-performance infrastructure for the next generation of artificial intelligence.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Code2 className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4 text-sm font-serif">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/platform" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Platform</Link></li>
                <li><Link to="/solutions" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link></li>
                <li><Link to="/developers" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Developers</Link></li>
                <li><Link to="/security" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Security</Link></li>
                <li><Link to="/pricing" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4 text-sm font-serif">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/company" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Our Company</Link></li>
                <li><Link to="/customers" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Customers</Link></li>
                <li><Link to="/research" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Research</Link></li>
                <li><Link to="/careers" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4 text-sm font-serif">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm font-mono text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Austral AI Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              {/* <Terminal className="w-3 h-3" /> */}
              <span>AUSTRAL AI INC.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
