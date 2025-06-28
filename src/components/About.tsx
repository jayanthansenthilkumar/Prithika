
import { Code, Palette, Zap, Users, Globe, Lightbulb, Award, Coffee } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate developer with expertise in modern web technologies 
            and a keen eye for design. My journey is driven by curiosity, creativity, 
            and the endless pursuit of perfection in every pixel and line of code.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">My Story</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              responsive, user-friendly applications using React, Node.js, and modern design principles.
              My journey began with a simple "Hello World" and has evolved into architecting 
              complex systems that serve millions of users.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user experiences 
              that solve real-world problems. Every project is an opportunity to push boundaries 
              and explore new technologies.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, 
              mentoring junior developers, or exploring the latest in AI and machine learning.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="text-center p-6 gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg h-full">
                  <Code className="mx-auto mb-4 text-blue-400" size={36} />
                  <h4 className="font-semibold text-white mb-2">Development</h4>
                  <p className="text-gray-400 text-sm">Full-stack expertise</p>
                </div>
              </div>
              <div className="text-center p-6 gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg h-full">
                  <Palette className="mx-auto mb-4 text-purple-400" size={36} />
                  <h4 className="font-semibold text-white mb-2">Design</h4>
                  <p className="text-gray-400 text-sm">UI/UX mastery</p>
                </div>
              </div>
              <div className="text-center p-6 gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg h-full">
                  <Zap className="mx-auto mb-4 text-yellow-400" size={36} />
                  <h4 className="font-semibold text-white mb-2">Performance</h4>
                  <p className="text-gray-400 text-sm">Speed optimization</p>
                </div>
              </div>
              <div className="text-center p-6 gradient-border card-hover">
                <div className="bg-gray-800/50 p-6 rounded-lg h-full">
                  <Award className="mx-auto mb-4 text-green-400" size={36} />
                  <h4 className="font-semibold text-white mb-2">Quality</h4>
                  <p className="text-gray-400 text-sm">Best practices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="gradient-border p-8 text-white">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold gradient-text mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-lg">
                    <Globe size={24} className="text-blue-400" />
                    <span>Based in New York, USA</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Award size={24} className="text-purple-400" />
                    <span>Computer Science Graduate</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Code size={24} className="text-pink-400" />
                    <span>5+ Years Experience</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Lightbulb size={24} className="text-yellow-400" />
                    <span>100+ Projects Completed</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Users size={24} className="text-green-400" />
                    <span>50+ Happy Clients</span>
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <Coffee size={24} className="text-orange-400" />
                    <span>Coffee Enthusiast ☕</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-12">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                <Code className="mx-auto mb-6 text-blue-400" size={48} />
                <h4 className="text-xl font-bold text-white mb-4">Clean Code</h4>
                <p className="text-gray-300 leading-relaxed">
                  Writing maintainable, scalable, and well-documented code 
                  that stands the test of time and scales with business needs.
                </p>
              </div>
            </div>
            
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                <Palette className="mx-auto mb-6 text-purple-400" size={48} />
                <h4 className="text-xl font-bold text-white mb-4">User-Centric Design</h4>
                <p className="text-gray-300 leading-relaxed">
                  Prioritizing user experience and accessibility in every 
                  design decision, ensuring inclusive and delightful interactions.
                </p>
              </div>
            </div>
            
            <div className="gradient-border card-hover">
              <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                <Zap className="mx-auto mb-6 text-yellow-400" size={48} />
                <h4 className="text-xl font-bold text-white mb-4">Performance</h4>
                <p className="text-gray-300 leading-relaxed">
                  Optimizing applications for speed, efficiency, and 
                  exceptional performance across all devices and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
