
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with expertise in modern web technologies 
            and a keen eye for design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              With over 5 years of experience in web development, I specialize in creating 
              responsive, user-friendly applications using React, Node.js, and modern design principles.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I believe in writing clean, maintainable code and creating intuitive user experiences 
              that solve real-world problems.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-700 rounded-lg">
                <Code className="mx-auto mb-4 text-blue-400" size={32} />
                <h3 className="font-semibold text-white">Development</h3>
              </div>
              <div className="text-center p-6 bg-gray-700 rounded-lg">
                <Palette className="mx-auto mb-4 text-purple-400" size={32} />
                <h3 className="font-semibold text-white">Design</h3>
              </div>
              <div className="text-center p-6 bg-gray-700 rounded-lg">
                <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
                <h3 className="font-semibold text-white">Performance</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li>📍 Based in New York, USA</li>
                <li>🎓 Computer Science Graduate</li>
                <li>💼 5+ Years Experience</li>
                <li>🚀 50+ Projects Completed</li>
                <li>☕ Coffee Enthusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
