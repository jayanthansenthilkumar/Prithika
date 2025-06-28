
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">JD</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            John <span className="text-yellow-300">Doe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating 
            exceptional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold">
              View My Work
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-white" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
