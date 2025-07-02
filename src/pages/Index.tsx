
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Index;
