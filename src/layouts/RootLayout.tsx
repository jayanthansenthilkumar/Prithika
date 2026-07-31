import { Outlet, useLocation } from "react-router-dom";
import "@/styles/globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  // Smooth route transition logic
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300); // match --transition-normal
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="app-main">
        <div 
          className="content-wrapper" 
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity var(--transition-normal), transform var(--transition-normal)'
          }}
        >
          {/* We provide a key to Outlet based on pathname so it fully remounts/rerenders the new page for animations */}
          <Outlet key={displayLocation.pathname} />
        </div>
      </main>
    </div>
  );
}
