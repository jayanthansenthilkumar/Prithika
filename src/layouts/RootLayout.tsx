import { Outlet, useLocation } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    const mainEl = document.querySelector('.app-main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans selection:bg-white/20">
      
      {/* Subtle Premium Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="app-main relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 pt-32 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="min-h-[70vh]">
              <Outlet />
            </div>
            
            <footer className="mt-32 pt-8 border-t border-white/10 text-center text-zinc-500 text-sm pb-8">
              <p>© {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
              <p className="mt-2">Designed with precision. Built for scale.</p>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}