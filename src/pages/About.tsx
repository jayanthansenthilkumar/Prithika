
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import { Code, Palette, Zap, Users, Globe, Lightbulb, Award, Coffee, Camera, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate developer dedicated to creating exceptional digital experiences 
              that make a difference in people's lives through innovation and creativity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-8">My Journey</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My journey in web development began over 5 years ago when I discovered 
                the power of code to bring ideas to life. Since then, I've been on a 
                continuous learning path, mastering both frontend and backend technologies,
                always pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I believe in the intersection of functionality and beauty. Every project 
                I work on is an opportunity to create something that not only works 
                flawlessly but also provides an exceptional user experience that users 
                remember and love.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, sharing knowledge through 
                blog posts and community events, or capturing moments through photography.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="gradient-border card-hover">
                  <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                    <Award size={36} className="mx-auto mb-4 text-yellow-400" />
                    <h3 className="font-bold text-white mb-2">100+</h3>
                    <p className="text-gray-400">Projects Completed</p>
                  </div>
                </div>
                <div className="gradient-border card-hover">
                  <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                    <Users size={36} className="mx-auto mb-4 text-green-400" />
                    <h3 className="font-bold text-white mb-2">50+</h3>
                    <p className="text-gray-400">Happy Clients</p>
                  </div>
                </div>
                <div className="gradient-border card-hover">
                  <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                    <Star size={36} className="mx-auto mb-4 text-purple-400" />
                    <h3 className="font-bold text-white mb-2">5+</h3>
                    <p className="text-gray-400">Years Experience</p>
                  </div>
                </div>
                <div className="gradient-border card-hover">
                  <div className="bg-gray-800/50 p-6 rounded-lg text-center">
                    <Heart size={36} className="mx-auto mb-4 text-pink-400" />
                    <h3 className="font-bold text-white mb-2">∞</h3>
                    <p className="text-gray-400">Passion Level</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-8 rounded-lg">
                  {/* Profile Image */}
                  <div className="mb-8 text-center">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full gradient-border p-1">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=faces"
                        alt="John Doe - Full Stack Developer"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center gap-2 mb-6">
                      <Camera size={20} className="text-blue-400" />
                      <span className="text-gray-300">Professional Developer</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold gradient-text mb-6 text-center">What Drives Me</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Lightbulb size={20} className="text-yellow-400" />
                      <span className="text-gray-300">Solving complex problems with elegant solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users size={20} className="text-green-400" />
                      <span className="text-gray-300">Collaborating with diverse teams worldwide</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Globe size={20} className="text-blue-400" />
                      <span className="text-gray-300">Creating applications that impact users globally</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Code size={20} className="text-purple-400" />
                      <span className="text-gray-300">Writing clean, maintainable code</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Coffee size={20} className="text-orange-400" />
                      <span className="text-gray-300">Fueled by coffee and curiosity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-24">
            <h2 className="text-4xl font-bold gradient-text text-center mb-16">Core Values & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                  <Code className="mx-auto mb-6 text-blue-400" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">Clean Code</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Writing maintainable, scalable, and well-documented code 
                    that stands the test of time and follows industry best practices.
                  </p>
                </div>
              </div>
              
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                  <Palette className="mx-auto mb-6 text-purple-400" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">User-Centric Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Prioritizing user experience and accessibility in every 
                    design decision and implementation, creating inclusive experiences.
                  </p>
                </div>
              </div>
              
              <div className="gradient-border card-hover">
                <div className="bg-gray-800/50 p-8 rounded-lg text-center h-full">
                  <Zap className="mx-auto mb-6 text-yellow-400" size={48} />
                  <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Optimizing applications for speed, efficiency, and 
                    exceptional performance across all devices and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gradient-border card-hover">
            <div className="bg-gray-800/50 p-12 rounded-xl text-white text-center">
              <h2 className="text-4xl font-bold gradient-text mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm always excited to take on new challenges and collaborate with 
                passionate individuals and teams. Let's create something amazing together 
                that makes a real impact in the world!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start a Project
                </button>
                <button className="border-2 border-gray-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <GoToTop />
    </div>
  );
};

export default About;
