import { Outlet, useLocation } from "react-router-dom";
import "@/styles/globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    const mainEl = document.querySelector('.app-main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="app-container relative">
      <Sidebar />
      <main className="app-main relative z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="content-wrapper min-h-full flex flex-col"
          >
            <div className="flex-1">
              <Outlet />
            </div>
            
            <footer className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center text-[var(--text-tertiary)] text-sm font-sans flex justify-center items-center">
              © {new Date().getFullYear()} Prithika Kannan. All rights reserved.
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
