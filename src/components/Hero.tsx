
import { ArrowDown, Github, Linkedin, Mail, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import iOSScreen from "./iOSScreen";

const Hero = () => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto lg:mx-0 mb-6 rounded-full gradient-border p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-5xl font-bold gradient-text">JD</span>
                </div>
              </div>
            </div>
            
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
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Play size={18} className="mr-2" />
                View My Work
              </Button>
              <Button variant="outline" className="border-2 border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-8 py-3 text-base rounded-full transition-all duration-300">
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-blue-600/20">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - iOS Screen */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <iOSScreen />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-300" size={36} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
