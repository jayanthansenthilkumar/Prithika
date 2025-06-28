
import { Github, Linkedin, Mail, Heart, Phone, MapPin, Code, Coffee, Star, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950/90 backdrop-blur-sm text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">John Doe</h3>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Full Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences that make a difference in people's lives.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-blue-400" />
                <span>New York, NY, USA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Coffee size={18} className="text-orange-400" />
                <span>Available for projects</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-3 rounded-full hover:bg-blue-600/20 border border-gray-700 hover:border-blue-400">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-3 rounded-full hover:bg-blue-600/20 border border-gray-700 hover:border-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-3 rounded-full hover:bg-blue-600/20 border border-gray-700 hover:border-blue-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold gradient-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Resume
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold gradient-text mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-green-600 to-teal-600 p-2 rounded-lg">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 border-t border-b border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-gray-400">Client Rating</div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-4 text-lg">
            Made with <Heart size={20} className="text-red-500 animate-pulse" /> by John Doe
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 John Doe. All rights reserved. | Crafted with passion and lots of coffee ☕
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
