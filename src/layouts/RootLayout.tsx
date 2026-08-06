import { Outlet, useLocation } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import Lenis from "lenis";

import { Preloader } from "@/components/ui/Preloader";
import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout() {
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="antigravity-ui-theme">
      <Helmet>
        <title>Prithika Kannan | Software Engineer & Designer</title>
        <meta name="description" content="Portfolio of Prithika Kannan, Software Engineer specializing in scalable architectures and premium web experiences." />
        <meta property="og:title" content="Prithika Kannan | Software Engineer" />
        <meta property="og:description" content="Portfolio of Prithika Kannan, Software Engineer specializing in scalable architectures and premium web experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prithikakannan.com" />
        <meta property="og:image" content="https://prithikakannan.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Preloader />


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
            
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
    </ThemeProvider>
  );
}