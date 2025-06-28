
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Palette, Zap, Users, Globe, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developer dedicated to creating exceptional digital experiences 
              that make a difference in people's lives.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
              <p className="text-lg text-gray-700 mb-6">
                My journey in web development began over 5 years ago when I discovered 
                the power of code to bring ideas to life. Since then, I've been on a 
                continuous learning path, mastering both frontend and backend technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I believe in the intersection of functionality and beauty. Every project 
                I work on is an opportunity to create something that not only works 
                flawlessly but also provides an exceptional user experience.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                blog posts and community events.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">What Drives Me</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Lightbulb size={20} />
                    <span>Solving complex problems with elegant solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users size={20} />
                    <span>Collaborating with diverse teams</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe size={20} />
                    <span>Creating applications that impact users globally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <Code className="mx-auto mb-6 text-blue-600" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clean Code</h3>
                <p className="text-gray-600">
                  Writing maintainable, scalable, and well-documented code 
                  that stands the test of time.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <Palette className="mx-auto mb-6 text-purple-600" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">User-Centric Design</h3>
                <p className="text-gray-600">
                  Prioritizing user experience and accessibility in every 
                  design decision and implementation.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <Zap className="mx-auto mb-6 text-yellow-600" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance</h3>
                <p className="text-gray-600">
                  Optimizing applications for speed, efficiency, and 
                  exceptional performance across all devices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm always excited to take on new challenges and collaborate with 
              passionate individuals and teams. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start a Project
              </button>
              <button className="border border-gray-400 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
