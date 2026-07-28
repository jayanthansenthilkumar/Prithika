import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-12 border-b-4 md:border-b-8 border-black pb-4 break-words">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8">
            <div className="bg-white border-4 border-black p-6 sm:p-8 md:p-12 brutalist-shadow">
              <h2 className="text-3xl font-black uppercase mb-6 text-primary">The Origin Story</h2>
              <p className="text-2xl font-bold leading-relaxed mb-6">
                I am a Product-Focused Software Engineer crafting data-driven experiences grounded in proven engineering traditions.
              </p>
              <p className="text-xl font-medium leading-relaxed mb-6">
                Currently pursuing my B.Tech in Information Technology at M. Kumarasamy College of Engineering (2024 - 2028), I have developed a deep passion for building scalable, client-centric applications aligned with AI-driven transformation goals.
              </p>
              
              <h2 className="text-3xl font-black uppercase mt-12 mb-6 text-primary">My Approach</h2>
              <p className="text-xl font-medium leading-relaxed mb-6">
                I blend analytical focus with creative problem-solving. Whether I am architecting a distributed backend system in PHP & SQL to reduce latency, or engineering predictive models for traffic optimization using Python, my goal is always the same: to deliver exceptional performance and a flawless user experience.
              </p>
              <p className="text-xl font-medium leading-relaxed mb-8">
                I thrive in environments where I can leverage my skills in Python, HTML, CSS, JavaScript, and Flask to build robust RESTful APIs and optimize databases for maximum efficiency.
              </p>

              <div className="flex gap-4">
                <Link to="/resume" className="inline-block bg-black text-white font-black uppercase px-8 py-4 border-4 border-black hover:bg-accent hover:text-black transition-colors brutalist-shadow">
                  View Full Resume
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-accent border-4 border-black p-8 brutalist-shadow mb-8">
              <h3 className="text-2xl font-black uppercase mb-4">Fast Facts</h3>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <span className="text-black/60">Location:</span> Madurai, India
                </li>
                <li className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <span className="text-black/60">Education:</span> B.Tech IT
                </li>
                <li className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <span className="text-black/60">Availability:</span> Open to Work
                </li>
                <li className="flex items-center gap-3 border-b-2 border-black pb-2">
                  <span className="text-black/60">Interests:</span> AI, Distributed Systems
                </li>
              </ul>
            </div>

            <div className="bg-primary text-white border-4 border-black p-8 brutalist-shadow">
              <h3 className="text-2xl font-black uppercase mb-4 text-black text-outline">Let's Connect</h3>
              <p className="text-lg font-medium mb-6">
                I am always open to discussing product design work or partnership opportunities.
              </p>
              <Link to="/contact" className="block text-center bg-white text-black font-black uppercase px-6 py-3 border-4 border-black hover:bg-black hover:text-white transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
