
import { ArrowDown, Github, Linkedin, Mail, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import MacBookScreen from "./MacBookScreen";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              John <span className="gradient-text">Doe</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl gradient-text font-semibold mb-4">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating exceptional digital experiences that bridge the gap 
                between stunning design and powerful functionality. I transform ideas into 
                reality through clean code and innovative solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                onClick={() => scrollToSection('resume')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play size={18} className="mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-8 py-3 text-base rounded-full transition-all duration-300"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:john.doe@example.com"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Screen Only */}
          <div className="flex justify-center lg:justify-start">
            <MacBookScreen />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
