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
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>

            
            <div>
              <Outlet />
            </div>
            
            <footer>
              © {new Date().getFullYear()} Prithika Kannan. All rights reserved.
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>);

}