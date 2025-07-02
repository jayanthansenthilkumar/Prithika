
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
      <div className="max-w-[95vw] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-2 text-center lg:text-left">            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prithika <span className="gradient-text">Kannan</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-lg md:text-xl gradient-text font-semibold mb-4">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating exceptional digital experiences that bridge the gap 
                between stunning design and powerful functionality. I transform ideas into 
                reality through clean code and innovative solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-6">
              <Button 
                onClick={() => scrollToSection('resume')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play size={16} className="mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-6 py-2.5 text-sm rounded-full transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:prithika.kannan@example.com"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Screen Only */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <MacBookScreen />
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors duration-1000 animate-bounce"
          >
            <ArrowDown size={28} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
