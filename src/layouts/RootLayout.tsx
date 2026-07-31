import { Outlet } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
// import { AIAssistantWidget } from "@/components/layout/AIAssistantWidget";





export default function RootLayout() {
  return (
    <>
      {/* Global Structural Grid */}
      <div >
        <div >
          <div ></div>
          <div ></div>
          <div ></div>
        </div>
      </div>

      <div >
        <Navbar />
        <main >
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        {/* <AIAssistantWidget /> */}
      </div>
    </>
  );
}
