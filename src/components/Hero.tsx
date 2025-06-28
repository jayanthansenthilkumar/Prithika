
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            John <span className="text-blue-400">Doe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer passionate about creating 
            exceptional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
              View My Work
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg">
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-300" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
