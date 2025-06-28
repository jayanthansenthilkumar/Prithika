
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import NebulaMouseFollower from "@/components/NebulaMouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NebulaMouseFollower />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Blogs />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Index;
