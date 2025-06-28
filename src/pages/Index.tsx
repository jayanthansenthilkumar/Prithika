
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
