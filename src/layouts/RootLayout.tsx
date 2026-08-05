import { Outlet, useLocation } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    // Window is the scroll container, not mainEl
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="antigravity-ui-theme">
      <div className="relative min-h-screen overflow-hidden font-sans selection:bg-indigo-500/30 dark:selection:bg-white/20">
        
        {/* Subtle Premium Background Glows */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-300/30 dark:bg-indigo-900/10 blur-[160px] opacity-70 transition-colors duration-500" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/30 dark:bg-purple-900/10 blur-[160px] opacity-70 transition-colors duration-500" />
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
            
            <footer className="mt-32 pt-8 border-t border-black/5 dark:border-white/10 text-center text-zinc-500 text-sm pb-8 transition-colors duration-500">
              <p>© {new Date().getFullYear()} Prithika Kannan. All rights reserved.</p>
              <p className="mt-2">Designed with precision. Built for scale.</p>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
    </ThemeProvider>
  );
}