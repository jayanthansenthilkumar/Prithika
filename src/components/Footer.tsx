
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          <p className="text-gray-400 mb-6">Full Stack Developer & UI/UX Designer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by John Doe
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2023 John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
