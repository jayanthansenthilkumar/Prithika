import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-black bg-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-black text-2xl tracking-wide">
            <span>Prithika</span>
            <span className="text-blue">Kannan</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/prithikakannan" target="_blank" rel="noreferrer" className="p-3 rounded-full border-[3px] border-black hover:bg-yellow brutalist-shadow transition-all bg-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prithikakannan" target="_blank" rel="noreferrer" className="p-3 rounded-full border-[3px] border-black hover:bg-blue hover:text-white brutalist-shadow transition-all bg-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kpprithika75@gmail.com" className="p-3 rounded-full border-[3px] border-black hover:bg-red hover:text-white brutalist-shadow transition-all bg-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold">
          <p>© {new Date().getFullYear()} Prithika Kannan. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="bg-green text-white rounded-full px-4 py-1 border-[3px] border-black brutalist-shadow">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
